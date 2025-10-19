#!/usr/bin/env bash
set -euo pipefail

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}💾 Directus Backup Script${NC}"
echo ""

# Create timestamped backup directory
TIMESTAMP=$(date +%Y-%m-%d_%H-%M-%S)
BACKUP_DIR="/tmp/directus-backup-${TIMESTAMP}"
mkdir -p "$BACKUP_DIR"

echo -e "${YELLOW}📁 Backup directory: $BACKUP_DIR${NC}"
echo ""

# Step 1: PostgreSQL dump
echo -e "${YELLOW}1️⃣  Creating PostgreSQL dump...${NC}"
docker exec cms-database pg_dump -U directus -d directus > "$BACKUP_DIR/database.sql"
DB_SIZE=$(du -h "$BACKUP_DIR/database.sql" | cut -f1)
echo -e "${GREEN}✅ Database dump created: $DB_SIZE${NC}"
echo ""

# Step 2: Backup uploads
echo -e "${YELLOW}2️⃣  Backing up uploads directory...${NC}"
sudo tar -czf "$BACKUP_DIR/uploads.tar.gz" -C /mnt/hub-volume/directus uploads
sudo chown deploy:deploy "$BACKUP_DIR/uploads.tar.gz"
UPLOADS_SIZE=$(du -h "$BACKUP_DIR/uploads.tar.gz" | cut -f1)
echo -e "${GREEN}✅ Uploads backup created: $UPLOADS_SIZE${NC}"
echo ""

# Step 3: Backup extensions
echo -e "${YELLOW}3️⃣  Backing up extensions directory...${NC}"
sudo tar -czf "$BACKUP_DIR/extensions.tar.gz" -C /mnt/hub-volume/directus extensions
sudo chown deploy:deploy "$BACKUP_DIR/extensions.tar.gz"
EXT_SIZE=$(du -h "$BACKUP_DIR/extensions.tar.gz" | cut -f1)
echo -e "${GREEN}✅ Extensions backup created: $EXT_SIZE${NC}"
echo ""

# Step 4: Create metadata
echo -e "${YELLOW}4️⃣  Creating backup metadata...${NC}"

# Get Directus version (suppress update notification)
DIRECTUS_VERSION=$(docker exec cms npx directus --version 2>&1 | grep -E '^[0-9]+\.[0-9]+\.[0-9]+' || echo "11.3.3")

# Get file sizes in bytes
DB_BYTES=$(stat -c%s "$BACKUP_DIR/database.sql")
UPLOADS_BYTES=$(stat -c%s "$BACKUP_DIR/uploads.tar.gz")
EXT_BYTES=$(stat -c%s "$BACKUP_DIR/extensions.tar.gz")

# Create metadata JSON
cat > "$BACKUP_DIR/metadata.json" << EOF
{
  "backup_date": "$TIMESTAMP",
  "directus_version": "$DIRECTUS_VERSION",
  "postgres_version": "13",
  "files": {
    "database": "database.sql",
    "uploads": "uploads.tar.gz",
    "extensions": "extensions.tar.gz"
  },
  "sizes": {
    "database_bytes": $DB_BYTES,
    "database_human": "$DB_SIZE",
    "uploads_bytes": $UPLOADS_BYTES,
    "uploads_human": "$UPLOADS_SIZE",
    "extensions_bytes": $EXT_BYTES,
    "extensions_human": "$EXT_SIZE"
  }
}
EOF

echo -e "${GREEN}✅ Metadata created${NC}"
echo ""

# Step 5: Summary
echo -e "${BLUE}📊 Backup Summary${NC}"
cat "$BACKUP_DIR/metadata.json" | grep -v "^{" | grep -v "^}"
echo ""

TOTAL_SIZE=$(du -sh "$BACKUP_DIR" | cut -f1)
echo -e "${GREEN}✅ Backup complete!${NC}"
echo -e "${BLUE}📁 Location: $BACKUP_DIR${NC}"
echo -e "${BLUE}📦 Total size: $TOTAL_SIZE${NC}"
echo ""

# Return the backup directory path for use by calling scripts
echo "$BACKUP_DIR"
