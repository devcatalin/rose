#!/usr/bin/env bash
set -euo pipefail

cd /srv/rose/platform

# Create snapshot using Directus CLI inside container
# Note: npx hangs, so we use the full path to the directus binary
docker exec cms /directus/node_modules/.pnpm/directus@file+directus_@types+node@22.7.5_@unhead+vue@1.11.7_vue@3.5.11_typescript@5.6.3___en_7yxuai5eyfy23v4jgtcvua3y4i/node_modules/directus/node_modules/.bin/directus schema snapshot --yes /tmp/snapshot.yaml

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
