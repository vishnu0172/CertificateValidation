# 🗑️ CLEANUP GUIDE

## Unwanted Files Identified

### Files to Delete:

1. **Root directory:**
   - ❌ `package-lock.json` (Empty/unnecessary - only needed in blockchain/ and frontend/)
   - ✅ Keep: All .md documentation files
   - ✅ Keep: deploy-local-network.sh (useful deployment script)

2. **Build artifacts (auto-generated, safe to delete):**
   - ❌ `blockchain/cache/` (Hardhat cache - regenerates on compile)
   - ❌ `blockchain/artifacts/` (Compiled contracts - regenerates on compile)
   - ❌ `blockchain/ganache-db/` (Ganache database - only if you want fresh blockchain)

3. **Dependencies (can be reinstalled):**
   - ⚠️ `blockchain/node_modules/` (Run `npm install` to restore)
   - ⚠️ `frontend/node_modules/` (Run `npm install` to restore)

---

## Safe Cleanup Commands

### Option 1: Delete Empty Root package-lock.json
```bash
cd "/media/vishnu/New Volume/Projects/CertificateValidation"
rm package-lock.json
```

### Option 2: Clean Build Artifacts (Saves Space)
```bash
cd "/media/vishnu/New Volume/Projects/CertificateValidation/blockchain"

# Delete Hardhat cache and artifacts (regenerate with: npx hardhat compile)
rm -rf cache/
rm -rf artifacts/

# Only delete Ganache DB if you want fresh blockchain
# rm -rf ganache-db/
```

### Option 3: Clean Node Modules (Saves Lots of Space)
**WARNING:** You'll need to run `npm install` again in each folder!

```bash
# Delete blockchain node_modules
cd "/media/vishnu/New Volume/Projects/CertificateValidation/blockchain"
rm -rf node_modules/

# Delete frontend node_modules
cd "/media/vishnu/New Volume/Projects/CertificateValidation/frontend"
rm -rf node_modules/

# Restore them later with:
# cd blockchain && npm install
# cd frontend && npm install
```

---

## Automated Cleanup Script

### Create cleanup.sh:
```bash
#!/bin/bash

echo "🗑️ Certificate Validation Project Cleanup"
echo "=========================================="

cd "/media/vishnu/New Volume/Projects/CertificateValidation"

# 1. Delete empty root package-lock.json
if [ -f "package-lock.json" ]; then
    echo "❌ Deleting root package-lock.json..."
    rm package-lock.json
    echo "✅ Deleted"
fi

# 2. Clean blockchain build artifacts
echo ""
echo "🔧 Cleaning blockchain build artifacts..."
cd blockchain
if [ -d "cache" ]; then
    rm -rf cache/
    echo "✅ Deleted cache/"
fi
if [ -d "artifacts" ]; then
    rm -rf artifacts/
    echo "✅ Deleted artifacts/"
fi

# Optional: Clean Ganache database (uncomment to enable)
# if [ -d "ganache-db" ]; then
#     rm -rf ganache-db/
#     echo "✅ Deleted ganache-db/"
# fi

cd ..

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "📊 Disk space saved: ~50-100MB"
echo ""
echo "🔄 To restore build artifacts:"
echo "   cd blockchain && npx hardhat compile"
```

---

## What to Keep

### ✅ Essential Files:
- `README.md` - Main documentation
- `blockchain/contracts/` - Smart contracts (SOURCE CODE)
- `blockchain/scripts/` - Deployment scripts
- `blockchain/package.json` - Dependencies list
- `blockchain/hardhat.config.js` - Hardhat configuration
- `blockchain/ganache-start.js` - Ganache setup
- `frontend/src/` - React source code (SOURCE CODE)
- `frontend/public/` - Public assets
- `frontend/package.json` - Dependencies list
- `.gitignore` - Git exclusions
- `.git/` - Git repository

### ⚠️ Regenerable Files (Safe to delete):
- `blockchain/cache/` - Hardhat cache
- `blockchain/artifacts/` - Compiled contracts
- `blockchain/node_modules/` - Dependencies
- `frontend/node_modules/` - Dependencies

### ❓ Conditional:
- `blockchain/ganache-db/` - Delete if you want fresh blockchain, keep if you want to preserve certificates
- `*.md` documentation files - Keep for reference, or delete if you don't need documentation

---

## Documentation Files (Can be Organized)

You have many documentation files. Here's what each does:

### Core Documentation:
1. ✅ **README.md** - Main project documentation
2. ✅ **DEPLOYMENT.md** - Production deployment guide

### Feature Documentation:
3. **DIGITAL_SIGNATURE_INFO.md** - Digital signature technical details
4. **QUICK_START_DIGITAL_SIGNATURE.md** - Digital signature quick guide
5. **DURATION_FEATURE.md** - Duration field technical details
6. **QUICK_DURATION.md** - Duration quick guide
7. **CUSTOM_DURATION_GUIDE.md** - Custom duration dropdown guide
8. **QUICK_CUSTOM_DURATION.md** - Custom duration quick reference
9. **MULTI_COMPANY_GUIDE.md** - Multi-company technical guide
10. **MULTI_COMPANY_COMPLETE.md** - Multi-company summary
11. **QUICK_MULTI_COMPANY.md** - Multi-company quick reference
12. **COMPANY_COMPARISON.md** - Company branding comparison
13. **CERTIFICATE_DESIGN.md** - Certificate visual design specs

### Recommendation:
Create a `docs/` folder and organize them:

```bash
mkdir docs
mv DIGITAL_SIGNATURE_INFO.md docs/
mv QUICK_START_DIGITAL_SIGNATURE.md docs/
mv DURATION_FEATURE.md docs/
mv QUICK_DURATION.md docs/
mv CUSTOM_DURATION_GUIDE.md docs/
mv QUICK_CUSTOM_DURATION.md docs/
mv MULTI_COMPANY_GUIDE.md docs/
mv MULTI_COMPANY_COMPLETE.md docs/
mv QUICK_MULTI_COMPANY.md docs/
mv COMPANY_COMPARISON.md docs/
mv CERTIFICATE_DESIGN.md docs/
mv DEPLOYMENT.md docs/

# Keep README.md in root
```

---

## Quick Cleanup Now

### Minimal Cleanup (Just the unnecessary file):
```bash
cd "/media/vishnu/New Volume/Projects/CertificateValidation"
rm package-lock.json
echo "✅ Deleted empty root package-lock.json"
```

### Moderate Cleanup (Build artifacts + empty file):
```bash
cd "/media/vishnu/New Volume/Projects/CertificateValidation"
rm package-lock.json
cd blockchain
rm -rf cache/ artifacts/
cd ..
echo "✅ Cleaned up unnecessary files"
echo "💾 Saved ~50MB"
```

---

## After Cleanup - Verify Project Still Works

```bash
# 1. Compile contracts (regenerates artifacts/)
cd blockchain
npx hardhat compile

# 2. If you deleted node_modules, reinstall:
# npm install

# 3. Test deployment
npx hardhat run scripts/deploy.js --network ganache

# 4. Test frontend
cd ../frontend
# If you deleted node_modules, reinstall:
# npm install
npm start
```

---

## File Size Reference

Typical sizes:
- `node_modules/`: 200-500MB (each folder)
- `artifacts/`: 10-30MB
- `cache/`: 5-10MB
- `ganache-db/`: Grows with usage (10MB+)
- Documentation `.md` files: 5-10KB each

---

## Recommended Action

**Do this now:**
```bash
cd "/media/vishnu/New Volume/Projects/CertificateValidation"

# Delete the empty root package-lock.json
rm package-lock.json

# Organize documentation
mkdir -p docs
mv CERTIFICATE_DESIGN.md docs/
mv COMPANY_COMPARISON.md docs/
mv CUSTOM_DURATION_GUIDE.md docs/
mv DEPLOYMENT.md docs/
mv DIGITAL_SIGNATURE_INFO.md docs/
mv DURATION_FEATURE.md docs/
mv MULTI_COMPANY_COMPLETE.md docs/
mv MULTI_COMPANY_GUIDE.md docs/
mv QUICK_CUSTOM_DURATION.md docs/
mv QUICK_DURATION.md docs/
mv QUICK_MULTI_COMPANY.md docs/
mv QUICK_START_DIGITAL_SIGNATURE.md docs/

echo "✅ Cleanup complete!"
```

**Result:**
- Cleaner root directory
- Organized documentation in `docs/` folder
- Removed unnecessary empty file
- Project still fully functional

---

## .gitignore Already Handles

Your `.gitignore` should already exclude:
- `node_modules/`
- `cache/`
- `artifacts/`
- `.env`

So these won't be committed to Git anyway!

---

**🎯 Recommendation: Run the minimal cleanup now to remove the empty package-lock.json and organize docs into a folder.**
