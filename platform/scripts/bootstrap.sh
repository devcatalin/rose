#!/usr/bin/env bash
# platform/scripts/bootstrap.sh
# Application bootstrap script - run on VPS after cloud-init completes
# This script clones the repo and starts docker services
set -euo pipefail

echo "==> Starting application bootstrap..."

# Ensure deploy key has correct permissions
if [[ -f /home/deploy/.ssh/id_ed25519 ]]; then
  chmod 600 /home/deploy/.ssh/id_ed25519
  echo "✓ Deploy key permissions set"
fi

# Clone repository if not already present
if [[ ! -d /srv/rose/.git ]]; then
  echo "==> Cloning repository..."
  cd /srv/rose
  git clone git@github.com:devcatalin/rose.git . 2>&1 || {
    echo "❌ Failed to clone repository"
    exit 1
  }
  echo "✓ Repository cloned"
else
  echo "✓ Repository already exists, pulling latest changes..."
  cd /srv/rose
  git pull origin main 2>&1 || {
    echo "⚠️  Failed to pull latest changes, continuing with existing code"
  }
fi

# Ensure symlink exists
if [[ ! -L /srv/platform ]]; then
  ln -sf /srv/rose/platform /srv/platform
  echo "✓ Platform symlink created"
fi

# Start docker services
echo "==> Starting docker services..."
cd /srv/platform
docker compose up -d 2>&1 || {
  echo "❌ Failed to start docker services"
  exit 1
}

echo "✅ Bootstrap complete!"
echo ""
echo "🐳 Docker Services:"
docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'
