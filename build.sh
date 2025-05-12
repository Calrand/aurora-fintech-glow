
#!/bin/bash

# Exit on error
set -e

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npx vite build

echo "Build completed successfully! The output is in the 'dist' directory."
