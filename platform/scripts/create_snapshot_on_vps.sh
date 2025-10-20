#!/usr/bin/env bash
set -euo pipefail

cd /srv/rose/platform

# Create snapshot using Directus CLI inside container
# Use docker exec instead of docker compose exec to avoid TTY issues
docker exec cms npx directus schema snapshot --yes /tmp/snapshot.yaml

# Copy snapshot from container to host
docker cp cms:/tmp/snapshot.yaml /tmp/snapshot.yaml

# Verify the file exists and show its size
if [[ -f /tmp/snapshot.yaml ]]; then
    ls -lh /tmp/snapshot.yaml
    echo "✅ Snapshot created and copied to VPS host at /tmp/snapshot.yaml"
else
    echo "❌ Failed to copy snapshot from container to host"
    exit 1
fi
