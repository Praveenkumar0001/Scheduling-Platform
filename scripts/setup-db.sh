#!/bin/bash

echo "Setting up Cal Clone database..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "Error: .env.local file not found!"
    echo "Please copy .env.example to .env.local and configure your database URL"
    exit 1
fi

# Load environment variables
export $(cat .env.local | xargs)

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "Error: DATABASE_URL not set in .env.local"
    exit 1
fi

echo "Pushing database schema..."
npx prisma db push

if [ $? -eq 0 ]; then
    echo "✓ Database schema pushed successfully"
    
    echo "Seeding database..."
    npm run db:seed
    
    if [ $? -eq 0 ]; then
        echo "✓ Database seeded successfully"
        echo ""
        echo "Setup complete! You can now run 'npm run dev' to start the development server"
    else
        echo "✗ Error seeding database"
        exit 1
    fi
else
    echo "✗ Error pushing database schema"
    exit 1
fi
