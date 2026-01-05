# 🚀 How to Run the Project

## ✅ Setup Complete!
All files have been pulled from GitHub and dependencies are installed.

---

## 🎯 Quick Start (Easiest Way)

### Run this ONE command:

```bash
cd "/media/vishnu/New Volume/Projects/CertificateValidation"
./run-project.sh
```

This will:
1. ✅ Start Ganache blockchain
2. ✅ Compile contracts
3. ✅ Deploy contract
4. ✅ Start frontend at http://localhost:3000

**To stop:** Press `Ctrl+C`

---

## 📋 Manual Method (Step by Step)

If you prefer to run each step manually:

### Terminal 1 - Blockchain

```bash
cd "/media/vishnu/New Volume/Projects/CertificateValidation/blockchain"
npm run ganache
```

Keep this running! ⚠️

### Terminal 2 - Deploy & Frontend

```bash
# Compile & Deploy
cd "/media/vishnu/New Volume/Projects/CertificateValidation/blockchain"
npm run compile
npm run deploy:ganache

# Start Frontend
cd ../frontend
npm start
```

Browser opens at **http://localhost:3000** 🎉

---

## 🧪 Test the App

1. **Generate Certificate**
   - Click "Generate Certificate"
   - Fill in student details
   - Choose company, training type, duration
   - Click "Generate Certificate"
   - PDF downloads automatically!

2. **Verify Certificate**
   - Click "Verify Certificate"
   - Enter certificate ID (e.g., TT-0001)
   - See blockchain verification!

---

## 📊 Project Structure

```
CertificateValidation/
├── blockchain/           # Smart contracts & Hardhat
│   ├── contracts/       # Solidity contracts
│   ├── scripts/         # Deployment scripts
│   └── ganache-db/      # Persistent blockchain data
│
├── frontend/            # React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── utils/       # PDF generator
│   │   └── config/      # Contract ABI, networks
│   └── .env            # Configuration
│
└── docs/                # All documentation
```

---

## 🔧 Available Commands

### Blockchain Commands
```bash
cd blockchain

npm run ganache          # Start blockchain
npm run compile          # Compile contracts
npm run deploy:ganache   # Deploy to Ganache
npm run deploy:mumbai    # Deploy to testnet
npm run deploy:polygon   # Deploy to mainnet
```

### Frontend Commands
```bash
cd frontend

npm start                # Start dev server
npm run build           # Build for production
```

---

## 📝 Contract Address

Your deployed contract: `0x5FbDB2315678afecb367f032d93F642f64180aa3`

This is configured in `frontend/.env`

---

## 🎊 You're Ready!

Everything is set up and ready to run!

**Quick start:**
```bash
./run-project.sh
```

Happy coding! 🚀✨
