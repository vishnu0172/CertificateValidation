# Certificate Validation System with Persistent Blockchain Storage

## 🎯 Overview
A blockchain-based certificate validation system with **persistent storage** using Ganache.

## 🚀 Quick Start

### 1. Start Ganache Blockchain (with persistence)
```bash
cd blockchain
npm run ganache
```

This will:
- Start Ganache on `http://127.0.0.1:8545`
- Create a persistent database in `blockchain/ganache-db/`
- **Save all transactions and contract data to disk**
- Restore data automatically on next start

### 2. Deploy Smart Contract (First Time Only)
```bash
cd blockchain
npx hardhat run scripts/deploy.js --network localhost
```

**Note:** Contract address: `0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512`

### 3. Start Frontend
```bash
cd frontend
npm start
```

Access at: **http://localhost:3000**

## 🔐 Login Credentials
- Username: `admin`
- Password: `admin123`

## 💾 Persistent Storage

### How It Works:
- All blockchain data is saved to `blockchain/ganache-db/`
- When you stop and restart Ganache, all your data is preserved:
  - ✅ Stored certificates
  - ✅ Transaction history
  - ✅ Contract state
  - ✅ Account balances

### Database Location:
```
blockchain/ganache-db/
```

### To Reset Blockchain (Start Fresh):
```bash
rm -rf blockchain/ganache-db
```

## 📝 Features

### 1. Generate Certificate
- Fill student details
- Download PDF with unique ID (format: `TT-timestamp`)
- Certificates saved to `~/Downloads/`

### 2. Store on Blockchain
- Upload certificate PDF
- Hash is calculated and stored on blockchain
- **No MetaMask needed** - direct blockchain connection

### 3. Verify Certificate
- Enter Certificate ID
- View stored hash on blockchain
- Upload PDF to verify authenticity

## 🔧 Technical Details

### Blockchain Configuration:
- **Network:** Ganache (local)
- **RPC URL:** http://127.0.0.1:8545
- **Chain ID:** 1337
- **Contract:** 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

### Test Account:
- **Address:** 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
- **Balance:** 10000 ETH
- **Private Key:** (embedded in code for local testing)

## 📚 Useful Commands

### Blockchain:
```bash
npm run ganache           # Start Ganache with persistence
npm run compile           # Compile contracts
npm run deploy:ganache    # Deploy to Ganache
```

### Frontend:
```bash
npm start                 # Start development server
npm run build             # Build for production
```

## ⚠️ Important Notes

1. **Ganache must be running** before deploying or using the frontend
2. **Contract deployment** only needed ONCE per blockchain instance
3. **Data persists** across Ganache restarts
4. **Certificate PDFs** are saved locally, not on blockchain (only hash is stored)

## 🎊 Success!
Your Certificate Validation System now has **permanent blockchain storage**!

All certificates you store will remain even after restarting the system. 🚀
