# PRODUCTION DEPLOYMENT GUIDE

## Prerequisites
1. GitHub account (free)
2. Vercel account (free) - https://vercel.com
3. Alchemy account (free) - https://www.alchemy.com
4. MetaMask wallet with Mumbai testnet funds

---

## PART 1: GET FREE TESTNET FUNDS

### Step 1: Install MetaMask
- Go to https://metamask.io
- Install browser extension
- Create new wallet (SAVE YOUR SEED PHRASE!)

### Step 2: Add Polygon Mumbai Network
- Open MetaMask
- Click network dropdown → "Add Network"
- Use these details:
  - Network Name: Polygon Mumbai
  - RPC URL: https://rpc-mumbai.maticvigil.com
  - Chain ID: 80001
  - Currency Symbol: MATIC
  - Block Explorer: https://mumbai.polygonscan.com

### Step 3: Get Free Test MATIC
- Go to https://faucet.polygon.technology/
- Select "Mumbai"
- Paste your MetaMask address
- Submit (you'll get 0.5 MATIC)

---

## PART 2: DEPLOY SMART CONTRACT

### Step 1: Get Alchemy API Key
```bash
# 1. Sign up at https://www.alchemy.com
# 2. Create new app:
#    - Chain: Polygon
#    - Network: Mumbai
# 3. Copy API key
```

### Step 2: Configure Environment
```bash
cd blockchain

# Create .env file
nano .env

# Add these lines (replace with your values):
PRIVATE_KEY=your_metamask_private_key
ALCHEMY_API_KEY=your_alchemy_api_key
```

**To get your MetaMask private key:**
- Open MetaMask
- Click three dots → Account Details
- Export Private Key
- ⚠️ NEVER share this or commit to Git!

### Step 3: Install Dependencies
```bash
npm install dotenv
```

### Step 4: Deploy Contract
```bash
npx hardhat run scripts/deploy.js --network polygonMumbai

# Output will show:
# Certificate contract deployed to: 0xABCD1234...
# 👆 COPY THIS ADDRESS!
```

### Step 5: Verify Contract (Optional but Recommended)
```bash
# Get Polygonscan API key from https://polygonscan.com/apis
npx hardhat verify --network polygonMumbai YOUR_CONTRACT_ADDRESS

# Now anyone can view your contract code on Polygonscan!
```

---

## PART 3: CONFIGURE FRONTEND

### Step 1: Update Network Config
```bash
cd ../frontend/src/config
nano networks.js

# Update polygonMumbai.contractAddress with your deployed address
```

### Step 2: Update Components to Use Config
This step requires modifying StoreCert.js and VerifyCert.js to use
the network config instead of hardcoded values.

### Step 3: Create Production Environment
```bash
cd ..
nano .env.production

# Add:
REACT_APP_NETWORK=polygonMumbai
```

---

## PART 4: DEPLOY TO VERCEL

### Step 1: Push to GitHub
```bash
cd /path/to/CertificateValidation
git add .
git commit -m "Configure for production deployment"
git push origin main
```

### Step 2: Deploy Frontend
```bash
# Install Vercel CLI
npm install -g vercel

cd frontend

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# ✓ Set project name
# ✓ Link to GitHub repo (optional)
# ✓ Framework preset: Create React App
# ✓ Build command: npm run build
# ✓ Output directory: build

# Set environment variable:
vercel env add REACT_APP_NETWORK
# Enter value: polygonMumbai
# Select environment: Production
```

### Step 3: Access Your Live Site
```
🎉 Your site is live at: https://your-project.vercel.app

Share this URL with anyone to use your certificate system!
```

---

## PART 5: TESTING PRODUCTION DEPLOYMENT

### Test Checklist:
- [ ] Can access website from different devices
- [ ] Login works with admin/admin123
- [ ] Can generate and download certificate
- [ ] Can store certificate (MetaMask popup appears)
- [ ] Transaction confirmed on Mumbai Polygonscan
- [ ] Can verify certificate with correct PDF
- [ ] Verification fails with modified PDF

### View Transactions:
https://mumbai.polygonscan.com/address/YOUR_CONTRACT_ADDRESS

---

## PART 6: GOING TO MAINNET (REAL MONEY)

⚠️ Only do this when you're ready for production!

### Step 1: Get Real MATIC
- Buy MATIC on exchange (Coinbase, Binance, etc.)
- Send to your MetaMask wallet
- ~$1-2 MATIC is enough for many certificates

### Step 2: Deploy to Polygon Mainnet
```bash
cd blockchain
npx hardhat run scripts/deploy.js --network polygon

# COPY NEW CONTRACT ADDRESS!
```

### Step 3: Update Frontend Config
```bash
cd ../frontend/src/config
nano networks.js

# Update polygon.contractAddress
```

### Step 4: Deploy Frontend with Mainnet Config
```bash
cd ..
nano .env.production

# Change to:
REACT_APP_NETWORK=polygon

# Redeploy
vercel --prod
```

---

## COST ESTIMATES

### Polygon Mumbai (Testnet)
- Contract Deployment: FREE
- Store Certificate: FREE
- Verify Certificate: FREE
- ✅ Perfect for testing and demos

### Polygon Mainnet (Production)
- Contract Deployment: ~$0.05
- Store Certificate: ~$0.01 per certificate
- Verify Certificate: FREE (read-only)
- ✅ Very affordable for real use

### Ethereum Mainnet
- Contract Deployment: $50-500
- Store Certificate: $5-50 per certificate
- ❌ Too expensive for most use cases

---

## MONITORING & MAINTENANCE

### Check Contract Activity:
https://mumbai.polygonscan.com/address/YOUR_ADDRESS

### View Stored Certificates:
Click "Read Contract" tab on Polygonscan

### Update Contract:
You CANNOT update deployed contracts!
To make changes:
1. Deploy new contract
2. Update frontend with new address
3. Old certificates stay on old contract

---

## SECURITY CHECKLIST

- [ ] .env files added to .gitignore
- [ ] Never committed private keys
- [ ] Changed default admin password in Login.js
- [ ] Using environment variables for sensitive data
- [ ] Tested on testnet before mainnet
- [ ] Contract verified on Polygonscan

---

## TROUBLESHOOTING

**Problem:** Transaction fails with "insufficient funds"
**Solution:** Get more test MATIC from faucet

**Problem:** "Network mismatch" error
**Solution:** Switch MetaMask to Polygon Mumbai network

**Problem:** Vercel build fails
**Solution:** Check that all dependencies are in package.json

**Problem:** Contract address not updating
**Solution:** Clear browser cache or hard refresh (Ctrl+Shift+R)

---

## NEXT STEPS

✅ Deploy to Mumbai testnet
✅ Share demo link with friends
✅ Collect feedback
✅ Deploy to mainnet when ready
✅ Add custom domain on Vercel (optional)

