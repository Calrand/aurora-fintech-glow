
#!/bin/bash

# Exit on error
set -e

# Print Node.js version for debugging
echo "Node.js version:"
node -v

# Print npm version for debugging
echo "npm version:"
npm -v

# Install dependencies
echo "Installing dependencies..."
npm install

# Explicitly install vite globally if it's not found
if ! command -v vite &> /dev/null
then
    echo "Vite not found, installing it globally..."
    npm install -g vite
fi

# Build the project using npx to ensure path resolution
echo "Building the project..."
npx vite build

echo "Build completed successfully! The output is in the 'dist' directory."
