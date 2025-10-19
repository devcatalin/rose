#!/usr/bin/env bash
set -euo pipefail

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
VPS_HOST="49.12.112.245"
VPS_USER="deploy"
SSH_KEY="$HOME/.ssh/deploy_vps_key"
SNAPSHOT_FILE="platform/directus-snapshot.yaml"
TEMP_SNAPSHOT="/tmp/directus-snapshot-$(date +%s).yaml"

echo -e "${BLUE}📸 Directus Snapshot Updater${NC}"
echo ""

# Check if SSH key exists
if [[ ! -f "$SSH_KEY" ]]; then
    echo -e "${RED}❌ SSH key not found: $SSH_KEY${NC}"
    exit 1
fi

# Step 1: Create snapshot on VPS
echo -e "${YELLOW}1️⃣  Creating snapshot on VPS...${NC}"
ssh -i "$SSH_KEY" "$VPS_USER@$VPS_HOST" << 'ENDSSH'
    set -e
    cd /srv/rose/platform
    
    # Create snapshot using Directus CLI inside container
    docker compose exec -T cms npx directus schema snapshot --yes /tmp/snapshot.yaml
    
    # Copy snapshot from container to host
    docker cp cms:/tmp/snapshot.yaml /tmp/snapshot.yaml
    
    echo "✅ Snapshot created and copied to VPS host at /tmp/snapshot.yaml"
ENDSSH

if [[ $? -ne 0 ]]; then
    echo -e "${RED}❌ Failed to create snapshot on VPS${NC}"
    exit 1
fi

# Step 2: Download snapshot from VPS
echo -e "${YELLOW}2️⃣  Downloading snapshot from VPS...${NC}"
scp -i "$SSH_KEY" "$VPS_USER@$VPS_HOST:/tmp/snapshot.yaml" "$TEMP_SNAPSHOT"

if [[ $? -ne 0 ]]; then
    echo -e "${RED}❌ Failed to download snapshot${NC}"
    exit 1
fi

# Step 3: Show diff (if existing snapshot exists)
if [[ -f "$SNAPSHOT_FILE" ]]; then
    echo -e "${YELLOW}3️⃣  Showing changes...${NC}"
    echo ""
    if diff -u "$SNAPSHOT_FILE" "$TEMP_SNAPSHOT" || true; then
        echo -e "${GREEN}No changes detected${NC}"
    fi
    echo ""
fi

# Step 4: Replace local snapshot
echo -e "${YELLOW}4️⃣  Updating local snapshot file...${NC}"
cp "$TEMP_SNAPSHOT" "$SNAPSHOT_FILE"

# Step 5: Cleanup
echo -e "${YELLOW}5️⃣  Cleaning up...${NC}"
rm "$TEMP_SNAPSHOT"
ssh -i "$SSH_KEY" "$VPS_USER@$VPS_HOST" "rm /tmp/snapshot.yaml"

echo ""
echo -e "${GREEN}✅ Snapshot updated successfully!${NC}"
echo -e "${BLUE}📄 File: $SNAPSHOT_FILE${NC}"
echo ""
echo -e "${YELLOW}💡 Next steps:${NC}"
echo "   1. Review changes: git diff $SNAPSHOT_FILE"
echo "   2. Commit changes: git add $SNAPSHOT_FILE && git commit -m 'Update Directus snapshot'"
echo "   3. Push to deploy: git push origin main"
