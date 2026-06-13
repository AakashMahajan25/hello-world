#!/usr/bin/env bash
set -euo pipefail

# MongoDB backup script using mongodump
# Usage: ./scripts/backup-db.sh [CONNECTION_STRING] [DB_NAME]
# Defaults to MONGODB_URI and MONGODB_DB from .env if not provided

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
ENV_FILE="$ROOT_DIR/.env"

# Load .env if present
if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi

CONN_STRING="${1:-${MONGODB_URI:-}}"
DB_NAME="${2:-${MONGODB_DB:-}}"

if [[ -z "$CONN_STRING" ]]; then
  echo "Error: No connection string. Pass as arg or set MONGODB_URI in .env" >&2
  exit 1
fi

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="$ROOT_DIR/backups/db_${TIMESTAMP}"
mkdir -p "$BACKUP_DIR"

echo "Backing up${DB_NAME:+ database '$DB_NAME'} → $BACKUP_DIR"

if [[ -n "$DB_NAME" ]]; then
  mongodump --uri="$CONN_STRING" --db="$DB_NAME" --out="$BACKUP_DIR" --gzip
else
  mongodump --uri="$CONN_STRING" --out="$BACKUP_DIR" --gzip
fi

ARCHIVE="$ROOT_DIR/backups/db_${TIMESTAMP}.tar.gz"
tar -czf "$ARCHIVE" -C "$ROOT_DIR/backups" "db_${TIMESTAMP}"
rm -rf "$BACKUP_DIR"

echo "Done: $ARCHIVE"
