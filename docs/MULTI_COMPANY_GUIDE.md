# 🏢 MULTI-COMPANY CERTIFICATE SYSTEM

## Overview

Your certificate system now supports **three different companies**, each with their own:
- ✅ Unique certificate ID prefix
- ✅ Custom branding colors
- ✅ Company-specific organization seal
- ✅ Different company names on certificates

---

## 📋 Supported Companies

### 1. **Training Trains**
- **Certificate Prefix**: `TT-`
- **Example ID**: `TT-1735228800000`
- **Colors**: 
  - Primary: Dark Blue (#003366)
  - Accent: Medium Blue (#0066CC)
  - Seal: Red (#CC0000)
- **Full Name**: Training Trains Pvt. Ltd.
- **Seal Text**: VERIFIED / TRAINING / TRAINS

### 2. **W3 App Developers**
- **Certificate Prefix**: `W3-`
- **Example ID**: `W3-1735228800000`
- **Colors**: 
  - Primary: Green (#008000)
  - Accent: Forest Green (#228B22)
  - Seal: Orange (#FF8C00)
- **Full Name**: W3 App Developers Pvt. Ltd.
- **Seal Text**: VERIFIED / W3 APP / DEVS

### 3. **Domain Hostly**
- **Certificate Prefix**: `DH-`
- **Example ID**: `DH-1735228800000`
- **Colors**: 
  - Primary: Indigo (#4B0082)
  - Accent: Blue Violet (#8A2BE2)
  - Seal: Crimson (#DC143C)
- **Full Name**: Domain Hostly.com Pvt. Ltd.
- **Seal Text**: VERIFIED / DOMAIN / HOSTLY

---

## 🎨 Visual Comparison

### Training Trains Certificate (Blue Theme)
```
┌────────────────────────────────────┐ (Blue border)
│                                    │
│      TRAINING TRAINS               │ (Dark blue text)
│      ──────────────                │
│  CERTIFICATE OF COMPLETION         │ (Red text)
│                                    │
│  Certificate ID: TT-1735228...     │
│                                    │
│      [Student Name]                │ (Dark blue)
│                                    │
│  [VERIFIED]                        │ (Red seal)
│  TRAINING                          │
│   TRAINS                           │
└────────────────────────────────────┘
```

### W3 App Developers Certificate (Green Theme)
```
┌────────────────────────────────────┐ (Green border)
│                                    │
│    W3 APP DEVELOPERS               │ (Green text)
│    ────────────────                │
│  CERTIFICATE OF COMPLETION         │ (Orange text)
│                                    │
│  Certificate ID: W3-1735228...     │
│                                    │
│      [Student Name]                │ (Green)
│                                    │
│  [VERIFIED]                        │ (Orange seal)
│   W3 APP                           │
│    DEVS                            │
└────────────────────────────────────┘
```

### Domain Hostly Certificate (Purple Theme)
```
┌────────────────────────────────────┐ (Violet border)
│                                    │
│      DOMAIN HOSTLY                 │ (Indigo text)
│      ─────────────                 │
│  CERTIFICATE OF COMPLETION         │ (Crimson text)
│                                    │
│  Certificate ID: DH-1735228...     │
│                                    │
│      [Student Name]                │ (Indigo)
│                                    │
│  [VERIFIED]                        │ (Crimson seal)
│   DOMAIN                           │
│   HOSTLY                           │
└────────────────────────────────────┘
```

---

## 🚀 How to Use

### Step 1: Select Company
When generating a certificate, the **first field** is now company selection:

```
┌─────────────────────────────┐
│ Select Company *            │
│ ▼ Training Trains           │  ← Choose here first!
│   W3 App Developers         │
│   Domain Hostly             │
└─────────────────────────────┘
```

### Step 2: Fill Other Fields
After selecting company, fill in:
- Name
- Roll No
- College
- Domain
- Date
- Type (Internship/Inplant)

### Step 3: Generate
Click "Download & Proceed" - the certificate will be created with:
- Company-specific colors
- Company-specific certificate ID prefix
- Company name in header and footer
- Company-branded seal

---

## 📊 Certificate ID Format

| Company | Prefix | Example ID | Timestamp |
|---------|--------|------------|-----------|
| Training Trains | TT | TT-1735228800000 | 1735228800000 |
| W3 App Developers | W3 | W3-1735228800000 | 1735228800000 |
| Domain Hostly | DH | DH-1735228800000 | 1735228800000 |

**Note**: The timestamp part is identical if generated at the same millisecond. Only the prefix changes.

---

## 🔍 Verification

### All Companies Use Same Blockchain
- All three companies' certificates are stored on the **same blockchain contract**
- Certificate ID (with prefix) is used for verification
- Hash verification works identically for all companies

### Verification Process (Unchanged)
1. User enters certificate ID (e.g., `W3-1735228800000`)
2. User uploads PDF
3. System computes hash
4. Compares with blockchain storage
5. Returns ✅ VALID or ❌ INVALID

---

## 🎨 Color Coding System

### Why Different Colors?

Each company gets unique colors to:
1. **Brand Identity**: Recognizable at a glance
2. **Prevent Confusion**: Easy to distinguish company
3. **Professional Look**: Customized for each organization
4. **Anti-Counterfeiting**: Harder to fake with correct colors

### Color RGB Values

**Training Trains:**
```javascript
Primary: [0, 51, 102]    // Dark Blue
Accent: [0, 102, 204]    // Medium Blue
Seal: [204, 0, 0]        // Red
```

**W3 App Developers:**
```javascript
Primary: [0, 128, 0]     // Green
Accent: [34, 139, 34]    // Forest Green
Seal: [255, 140, 0]      // Orange
```

**Domain Hostly:**
```javascript
Primary: [75, 0, 130]    // Indigo
Accent: [138, 43, 226]   // Blue Violet
Seal: [220, 20, 60]      // Crimson
```

---

## 🔧 Technical Implementation

### Company Configuration Object

```javascript
const COMPANIES = {
    trainingtrains: {
        name: "TRAINING TRAINS",
        fullName: "Training Trains Pvt. Ltd.",
        certPrefix: "TT",
        primaryColor: [0, 51, 102],
        accentColor: [0, 102, 204],
        sealColor: [204, 0, 0],
        sealText: ["VERIFIED", "TRAINING", "TRAINS"]
    },
    // ... other companies
};
```

### Dynamic Certificate Generation

```javascript
// Get selected company
const company = COMPANIES[data.company];

// Generate ID with company prefix
const certId = `${company.certPrefix}-${Date.now()}`;

// Apply company colors
doc.setTextColor(...company.primaryColor);
doc.text(company.name, x, y);

// Apply company seal
doc.text(company.sealText[0], x, y);
```

---

## 📝 Files Modified

### 1. `GenerateCert.js`
**Added:**
- Company selection dropdown (first field)
- Validation for company selection
- Company field in data state

### 2. `pdfGenerator.js`
**Added:**
- COMPANIES configuration object
- Dynamic company selection
- Company-specific colors
- Company-specific certificate prefixes
- Company-specific seal text
- Company name in footer

---

## 🧪 Testing All Companies

### Test Checklist

**Training Trains (Blue):**
- [ ] Select "Training Trains"
- [ ] Generate certificate
- [ ] Check ID starts with `TT-`
- [ ] Verify blue colors in PDF
- [ ] Check seal says "TRAINING TRAINS"
- [ ] Verify footer says "Training Trains Pvt. Ltd."

**W3 App Developers (Green):**
- [ ] Select "W3 App Developers"
- [ ] Generate certificate
- [ ] Check ID starts with `W3-`
- [ ] Verify green colors in PDF
- [ ] Check seal says "W3 APP DEVS"
- [ ] Verify footer says "W3 App Developers Pvt. Ltd."

**Domain Hostly (Purple):**
- [ ] Select "Domain Hostly"
- [ ] Generate certificate
- [ ] Check ID starts with `DH-`
- [ ] Verify purple/violet colors in PDF
- [ ] Check seal says "DOMAIN HOSTLY"
- [ ] Verify footer says "Domain Hostly.com Pvt. Ltd."

---

## 🔐 Blockchain Storage

### Same Contract for All Companies

All companies share the **same smart contract**:

```solidity
mapping(string => bytes32) certificates;

// Stores certificates like:
"TT-1735228800000" => 0x5f2a8b3c...
"W3-1735228800000" => 0xa3f2c1b4...
"DH-1735228800000" => 0x9d4e1f6a...
```

### Advantages:
- ✅ Single deployment (lower cost)
- ✅ Unified verification system
- ✅ All certificates equally secure
- ✅ Cross-company transparency

---

## 🎯 Use Cases

### Scenario 1: Training Company with Multiple Brands
```
Your organization runs:
- Training Trains (main brand)
- W3 App Developers (web dev courses)
- Domain Hostly (hosting services)

Each can issue branded certificates while sharing blockchain infrastructure.
```

### Scenario 2: White-Label Service
```
You provide certificate services to:
- Client A (Training Trains branding)
- Client B (W3 App Developers branding)
- Client C (Domain Hostly branding)

Each client gets their own branded certificates.
```

### Scenario 3: Department-Based Certificates
```
Same company, different departments:
- Training Department → Training Trains
- App Development Team → W3 App Developers
- Infrastructure Team → Domain Hostly
```

---

## 🆕 Adding More Companies

Want to add a fourth company? Edit `pdfGenerator.js`:

```javascript
const COMPANIES = {
    // ... existing companies ...
    
    newcompany: {
        name: "YOUR COMPANY NAME",
        fullName: "Your Company Full Name Ltd.",
        certPrefix: "YC",  // 2-3 letters
        primaryColor: [255, 0, 0],    // Red (example)
        accentColor: [255, 100, 100],  // Light red
        sealColor: [0, 0, 255],        // Blue
        sealText: ["VERIFIED", "YOUR", "COMPANY"]
    }
};
```

Then update `GenerateCert.js`:

```javascript
<select onChange={e => handleChange('company', e.target.value)}>
    <option value="">Select Company *</option>
    <option value="trainingtrains">Training Trains</option>
    <option value="w3appdevelopers">W3 App Developers</option>
    <option value="domainhostly">Domain Hostly</option>
    <option value="newcompany">Your Company Name</option>  ← Add here
</select>
```

---

## 📊 Statistics & Analytics

### Track by Company

You can track certificates by prefix:

```javascript
// Count Training Trains certificates
const ttCerts = allCertificates.filter(id => id.startsWith('TT-'));

// Count W3 App Developers certificates
const w3Certs = allCertificates.filter(id => id.startsWith('W3-'));

// Count Domain Hostly certificates
const dhCerts = allCertificates.filter(id => id.startsWith('DH-'));
```

### Blockchain Query

```javascript
// Get all certificates for Training Trains
const trainingTrainsCerts = await contract.getCertificatesByPrefix('TT-');
```

---

## 🎨 Customization Tips

### Change Colors:
Find the company in `pdfGenerator.js` COMPANIES object and modify RGB values.

### Change Company Name:
Update `name` and `fullName` fields.

### Change Certificate Prefix:
Update `certPrefix` (keep it 2-3 characters for readability).

### Change Seal Text:
Modify `sealText` array (3 lines max, keep short).

---

## ✅ Benefits of Multi-Company System

1. **Cost Efficient**: One blockchain contract, multiple brands
2. **Consistent Security**: All companies get same verification level
3. **Easy Management**: Single admin panel for all companies
4. **Brand Flexibility**: Each company maintains unique identity
5. **Scalable**: Easy to add more companies
6. **Professional**: Customized certificates for each organization

---

## 🚀 Quick Start Guide

1. **Open application**: http://localhost:3000
2. **Login**: admin / admin123
3. **Click "Generate Certificate"**
4. **Select company from dropdown** ← NEW STEP!
5. Fill other fields
6. Download certificate
7. Check certificate has correct:
   - Company name in header
   - Company colors
   - Certificate ID prefix (TT/W3/DH)
   - Company seal

---

**🎉 You now have a multi-company certificate system with unique branding for each organization!**
