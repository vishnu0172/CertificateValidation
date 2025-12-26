#!/bin/bash

# Linux Local Network Deployment Script
# This makes your project accessible to other devices on your network

echo "🐧 Linux Local Network Deployment"
echo "=================================="

# Get your local IP address
LOCAL_IP=$(hostname -I | awk '{print $1}')
echo "📍 Your local IP: $LOCAL_IP"

# Start Ganache blockchain
echo ""
echo "🔗 Starting Ganache blockchain..."
cd blockchain
npm run ganache &
GANACHE_PID=$!
echo "Ganache PID: $GANACHE_PID"

# Wait for Ganache to start
sleep 5

# Deploy smart contract
echo ""
echo "📜 Deploying smart contract..."
npx hardhat run scripts/deploy.js --network ganache

# Start React frontend accessible on network
echo ""
echo "🌐 Starting React frontend on network..."
cd ../frontend

# Set host to 0.0.0.0 to allow network access
export HOST=0.0.0.0
npm start &
FRONTEND_PID=$!

echo ""
echo "✅ DEPLOYMENT COMPLETE!"
echo "======================="
echo ""
echo "🔗 Blockchain: http://$LOCAL_IP:8545"
echo "🌐 Frontend: http://$LOCAL_IP:3000"
echo ""
echo "📱 Access from other devices on your network:"
echo "   Open browser and go to: http://$LOCAL_IP:3000"
echo ""
echo "⏹️  To stop:"
echo "   kill $GANACHE_PID $FRONTEND_PID"
echo ""
echo "💡 Tip: Make sure your firewall allows ports 3000 and 8545"

# Save PIDs to file for easy cleanup
echo "$GANACHE_PID" > /tmp/cert-validation-pids.txt
echo "$FRONTEND_PID" >> /tmp/cert-validation-pids.txt

