#!/bin/bash

# Install dependencies for frontend and backend
echo "Installing dependencies for frontend and backend..."

# Install concurrently if not already installed
echo "Installing concurrently..."
npm install concurrently

# Install dependencies for frontend
cd country-data-frontend || exit
npm install
cd ..

# Install dependencies for backend
cd country-data-backend || exit
npm install
cd ..

# Run both frontend and backend concurrently
echo "Starting both frontend and backend..."

# Run the frontend (Next.js) and backend (Express) concurrently
npx concurrently "npm run build --prefix country-data-frontend && npm start --prefix country-data-frontend" "npm run dev --prefix country-data-backend"
