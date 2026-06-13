#!/usr/bin/env node
const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const ROOT_DIR = path.resolve(__dirname, "..");

// Load .env
const envPath = path.join(ROOT_DIR, ".env");
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, "utf8")
    .split("\n")
    .forEach((line) => {
      const [k, ...v] = line.split("=");
      if (k && v.length) process.env[k.trim()] = v.join("=").trim();
    });
}

const CONN = process.argv[2] || process.env.MONGODB_URI;
const DB_NAME = process.argv[3] || process.env.MONGODB_DB;

if (!CONN) {
  console.error("Error: No connection string. Pass as arg or set MONGODB_URI in .env");
  process.exit(1);
}

async function backup() {
  const client = new MongoClient(CONN);
  await client.connect();

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const backupDir = path.join(ROOT_DIR, "backups");
  fs.mkdirSync(backupDir, { recursive: true });

  const outFile = path.join(backupDir, `db_${timestamp}.json.gz`);
  const gzip = zlib.createGzip();
  const outStream = fs.createWriteStream(outFile);
  gzip.pipe(outStream);

  const dbNames = DB_NAME
    ? [DB_NAME]
    : (await client.db().admin().listDatabases()).databases
        .map((d) => d.name)
        .filter((n) => !["admin", "local", "config"].includes(n));

  const dump = {};

  for (const dbName of dbNames) {
    console.log(`  Dumping database: ${dbName}`);
    const db = client.db(dbName);
    const collections = await db.listCollections().toArray();
    dump[dbName] = {};

    for (const { name } of collections) {
      const docs = await db.collection(name).find({}).toArray();
      dump[dbName][name] = docs;
      console.log(`    ${name}: ${docs.length} docs`);
    }
  }

  await new Promise((resolve, reject) => {
    gzip.write(JSON.stringify(dump, null, 2));
    gzip.end();
    outStream.on("finish", resolve);
    outStream.on("error", reject);
  });

  await client.close();
  console.log(`\nDone: ${outFile}`);
}

backup().catch((err) => {
  console.error("Backup failed:", err.message);
  process.exit(1);
});
