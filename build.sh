#!/bin/bash
set -e

echo "Node.js version:"; node -v
echo "npm version:"; npm -v

echo "Installing dependencies..."
npm install

# Ensure Chromium is available for the prerender step (puppeteer downloads
# its own Chrome into ~/.cache/puppeteer via postinstall, but we run this
# explicitly in case postinstall scripts are disabled on the host).
echo "Ensuring Chromium for prerender..."
npx puppeteer browsers install chrome || echo "Chromium install skipped/failed; prerender may be reduced."

if ! command -v vite &> /dev/null; then
    echo "Vite not found, installing it globally..."
    npm install -g vite
fi

echo "Building the project..."
npx vite build

echo "Build completed successfully! The output is in the 'dist' directory."
