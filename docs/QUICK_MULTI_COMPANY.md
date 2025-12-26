# 🚀 QUICK REFERENCE: MULTI-COMPANY CERTIFICATES

## What Changed?

✅ Added company selection dropdown  
✅ Three companies with unique branding  
✅ Company-specific certificate ID prefixes  
✅ Different color schemes per company  

---

## Certificate ID Prefixes

| Company | Prefix | Example |
|---------|--------|---------|
| **Training Trains** | TT- | TT-1735228800000 |
| **W3 App Developers** | W3- | W3-1735228800000 |
| **Domain Hostly** | DH- | DH-1735228800000 |

---

## Color Schemes

### Training Trains (Blue)
- Border: Blue
- Header: Dark Blue
- Title: Red
- Seal: Red

### W3 App Developers (Green)
- Border: Green
- Header: Green
- Title: Orange
- Seal: Orange

### Domain Hostly (Purple)
- Border: Violet
- Header: Indigo
- Title: Crimson
- Seal: Crimson

---

## How to Generate Certificate

1. **Login** → admin/admin123
2. **Generate Certificate** button
3. **Select Company** ⚠️ REQUIRED (new dropdown)
4. Fill Name, Roll, College, Domain, Date, Type
5. **Download & Proceed**
6. Check PDF for:
   - ✅ Correct company name
   - ✅ Correct color scheme
   - ✅ Correct certificate ID prefix
   - ✅ Correct company seal

---

## Test Each Company

```bash
Test 1: Training Trains
├─ Select: Training Trains
├─ Generate
├─ Check: TT-xxx.pdf
├─ Colors: Blue theme
└─ Seal: "TRAINING TRAINS"

Test 2: W3 App Developers  
├─ Select: W3 App Developers
├─ Generate
├─ Check: W3-xxx.pdf
├─ Colors: Green theme
└─ Seal: "W3 APP DEVS"

Test 3: Domain Hostly
├─ Select: Domain Hostly
├─ Generate  
├─ Check: DH-xxx.pdf
├─ Colors: Purple theme
└─ Seal: "DOMAIN HOSTLY"
```

---

## Files Modified

1. **`GenerateCert.js`**
   - Added company dropdown
   - Required company selection
   - Updated validation

2. **`pdfGenerator.js`**
   - Added COMPANIES config object
   - Dynamic company selection
   - Company-specific colors/prefix/seal

---

## Verification (Unchanged)

All companies use **same blockchain contract**:
- Enter cert ID (with prefix)
- Upload PDF
- System verifies hash
- Works for all companies!

---

## Common Issues

**Q: Certificate shows wrong company name**  
A: Make sure you selected company BEFORE generating

**Q: All certificates have TT- prefix**  
A: Select company from dropdown (first field)

**Q: Colors don't match**  
A: Hard refresh browser (Ctrl+Shift+R)

**Q: Verification fails**  
A: Cert ID must match exactly (including prefix)

---

## Next Steps

✅ Test all three companies  
✅ Generate sample certificates  
✅ Verify blockchain storage  
✅ Add more companies (optional)  

---

## Full Documentation

See `MULTI_COMPANY_GUIDE.md` for:
- Detailed color specifications
- Adding new companies
- Advanced customization
- Technical implementation details

---

**Ready to use! Generate certificates for all three companies! 🎊**
