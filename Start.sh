#!/bin/bash
echo "Installing concurrently..."
npm install concurrently

echo "Installing dependencies for frontend and backend..."

cd country-data-frontend || exit
npm install
cd ..

cd country-data-backend || exit
npm install
cd ..

echo "Starting both frontend and backend..."

# Run the frontend and backend concurrently
npx concurrently "npm run build --prefix country-data-frontend && npm start --prefix country-data-frontend" "npm run dev --prefix country-data-backend"
