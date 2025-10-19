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
LOCAL_BACKUP_DIR="$HOME/Downloads/directus-backups"

echo -e "${BLUE}📥 Directus Backup Downloader${NC}"
echo ""

# Check if SSH key exists
if [[ ! -f "$SSH_KEY" ]]; then
    echo -e "${RED}❌ SSH key not found: $SSH_KEY${NC}"
    exit 1
fi

# Check if backup directory is provided
if [[ $# -eq 0 ]]; then
    # List available backups on VPS
    echo -e "${YELLOW}📋 Available backups on VPS:${NC}"
    echo ""
    ssh -i "$SSH_KEY" "$VPS_USER@$VPS_HOST" "ls -lth /tmp/directus-backup-* 2>/dev/null | grep '^d' || echo 'No backups found'"
    echo ""
    echo -e "${YELLOW}Usage:${NC}"
    echo "  $0 <backup-directory-name>"
    echo ""
    echo -e "${YELLOW}Example:${NC}"
    echo "  $0 directus-backup-2025-10-19_13-50-41"
    echo ""
    echo -e "${YELLOW}Or create a new backup and download:${NC}"
    echo "  $0 --new"
    exit 0
fi

# Handle --new flag to create and download
if [[ "$1" == "--new" ]]; then
    echo -e "${YELLOW}1️⃣  Creating new backup on VPS...${NC}"
    
    # Run backup script from the repo on VPS
    BACKUP_DIR=$(ssh -i "$SSH_KEY" "$VPS_USER@$VPS_HOST" "cd /srv/rose/platform/scripts && chmod +x backup_cms.sh && ./backup_cms.sh" | tail -1)
    
    if [[ -z "$BACKUP_DIR" ]]; then
        echo -e "${RED}❌ Failed to create backup${NC}"
        exit 1
    fi
    
    BACKUP_NAME=$(basename "$BACKUP_DIR")
    echo ""
else
    BACKUP_NAME="$1"
    BACKUP_DIR="/tmp/$BACKUP_NAME"
fi

# Verify backup exists on VPS
echo -e "${YELLOW}2️⃣  Verifying backup exists on VPS...${NC}"
if ! ssh -i "$SSH_KEY" "$VPS_USER@$VPS_HOST" "test -d $BACKUP_DIR"; then
    echo -e "${RED}❌ Backup not found: $BACKUP_DIR${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Backup found: $BACKUP_DIR${NC}"
echo ""

# Create local backup directory
mkdir -p "$LOCAL_BACKUP_DIR"

# Download backup
echo -e "${YELLOW}3️⃣  Downloading backup to local machine...${NC}"
echo -e "${BLUE}   Source: $VPS_USER@$VPS_HOST:$BACKUP_DIR${NC}"
echo -e "${BLUE}   Destination: $LOCAL_BACKUP_DIR/$BACKUP_NAME${NC}"
echo ""

scp -i "$SSH_KEY" -r "$VPS_USER@$VPS_HOST:$BACKUP_DIR" "$LOCAL_BACKUP_DIR/"

if [[ $? -ne 0 ]]; then
    echo -e "${RED}❌ Failed to download backup${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Backup downloaded successfully!${NC}"
echo ""

# Show backup details
echo -e "${BLUE}📊 Backup Details:${NC}"
if [[ -f "$LOCAL_BACKUP_DIR/$BACKUP_NAME/metadata.json" ]]; then
    cat "$LOCAL_BACKUP_DIR/$BACKUP_NAME/metadata.json"
else
    ls -lah "$LOCAL_BACKUP_DIR/$BACKUP_NAME/"
fi

echo ""
TOTAL_SIZE=$(du -sh "$LOCAL_BACKUP_DIR/$BACKUP_NAME" | cut -f1)
echo -e "${BLUE}📁 Local path: $LOCAL_BACKUP_DIR/$BACKUP_NAME${NC}"
echo -e "${BLUE}📦 Total size: $TOTAL_SIZE${NC}"
echo ""
echo -e "${YELLOW}💡 Tip: Keep this backup safe! You can restore it using restore_cms.sh${NC}"
