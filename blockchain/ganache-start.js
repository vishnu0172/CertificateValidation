const ganache = require("ganache");
const fs = require("fs");
const path = require("path");

// Database path for persistent storage
const dbPath = path.join(__dirname, "ganache-db");

// Ensure database directory exists
if (!fs.existsSync(dbPath)) {
  fs.mkdirSync(dbPath, { recursive: true });
  console.log(`Created database directory: ${dbPath}`);
}

const options = {
  database: {
    dbPath: dbPath
  },
  wallet: {
    totalAccounts: 10,
    defaultBalance: 10000,
    // Use deterministic mnemonic for same accounts every time
    mnemonic: "test test test test test test test test test test test junk"
  },
  chain: {
    chainId: 1337,
    networkId: 1337
  },
  logging: {
    verbose: true
  },
  miner: {
    blockGasLimit: 30000000
  }
};

const server = ganache.server(options);
const PORT = 8545;

server.listen(PORT, async (err) => {
  if (err) {
    console.error("Error starting Ganache:", err);
    process.exit(1);
  }

  console.log("\n🚀 Ganache blockchain server started with PERSISTENT STORAGE!\n");
  console.log(`📍 Server URL: http://127.0.0.1:${PORT}`);
  console.log(`💾 Database Path: ${dbPath}`);
  console.log(`⛓️  Chain ID: 1337`);
  console.log(`\n📝 Available Accounts:\n`);

  const provider = server.provider;
  const accounts = await provider.request({
    method: "eth_accounts",
    params: []
  });

  for (let i = 0; i < accounts.length; i++) {
    const balance = await provider.request({
      method: "eth_getBalance",
      params: [accounts[i], "latest"]
    });
    const balanceInEth = parseInt(balance, 16) / 1e18;
    console.log(`Account #${i}: ${accounts[i]} (${balanceInEth} ETH)`);
  }

  console.log("\n🔑 Private Keys:");
  console.log("(Derived from mnemonic - same every time)");
  console.log("\n⚠️  Press Ctrl+C to stop the server");
  console.log("💡 Data will be persisted and restored on next start!\n");
});

// Handle shutdown gracefully
process.on("SIGINT", () => {
  console.log("\n\n🛑 Shutting down Ganache server...");
  console.log("💾 All data has been saved to disk");
  server.close(() => {
    console.log("✅ Server closed successfully");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  server.close(() => process.exit(0));
});
