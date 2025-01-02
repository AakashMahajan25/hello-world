import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function GET() {
  let client;
  
  try {
    // Connect to MongoDB
    client = await MongoClient.connect(uri);
    const db = client.db("camio-ppf");

    // Get counts from all collections
    const stats = {
      inquiries: await db.collection("inquiries").countDocuments(),
      warranties: await db.collection("warranties").countDocuments(),
      contacts: await db.collection("contacts").countDocuments(),
    };

    return NextResponse.json(stats);
    
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch statistics" },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
