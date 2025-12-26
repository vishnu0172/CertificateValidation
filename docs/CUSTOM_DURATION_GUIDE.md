# 🎯 CUSTOM DURATION FEATURE

## Overview

The certificate system now includes a **smart duration selector** with:
- ✅ **17+ predefined duration options**
- ✅ **Custom duration input** for any other duration
- ✅ **Auto-focus** on custom field when selected
- ✅ **Organized by category** (Weeks, Months, Days)

---

## 📋 Duration Options

### Weeks-Based
```
├─ 1 Week
├─ 2 Weeks
├─ 3 Weeks
├─ 4 Weeks
├─ 6 Weeks
├─ 8 Weeks
└─ 12 Weeks
```

### Months-Based
```
├─ 1 Month
├─ 2 Months
├─ 3 Months
├─ 4 Months
└─ 6 Months
```

### Days-Based
```
├─ 30 Days
├─ 45 Days
├─ 60 Days
└─ 90 Days
```

### Custom Option
```
└─ Custom Duration → Opens text input
```

---

## 🎨 User Interface Flow

### Step 1: Select Standard Duration
```
Select Duration *
├─ 1 Week
├─ 2 Weeks
├─ 3 Weeks
├─ ...
└─ Custom Duration
```

User selects → Duration auto-filled → Ready to generate!

### Step 2: Select Custom Duration
```
Select Duration *
└─ Custom Duration ← User selects this

↓ Text input appears below ↓

[Enter custom duration (e.g., 5 Months, 10 Weeks)]
                    ↑ Auto-focused cursor here
```

User types custom text → Saved as duration → Ready to generate!

---

## 📊 Common Use Cases

### Use Case 1: Standard Short Internship
```
Duration: 6 Weeks
Selection: From dropdown
Certificate: "...6 Weeks Internship program..."
```

### Use Case 2: Standard Long Program
```
Duration: 3 Months
Selection: From dropdown
Certificate: "...3 Months Inplant Training program..."
```

### Use Case 3: Custom Short Duration
```
Duration: 5 Weeks
Selection: Custom Duration → Type "5 Weeks"
Certificate: "...5 Weeks Internship program..."
```

### Use Case 4: Custom Mixed Format
```
Duration: 2 Months 2 Weeks
Selection: Custom Duration → Type "2 Months 2 Weeks"
Certificate: "...2 Months 2 Weeks Inplant Training program..."
```

### Use Case 5: Custom with Details
```
Duration: 3 Months (Weekends Only)
Selection: Custom Duration → Type "3 Months (Weekends Only)"
Certificate: "...3 Months (Weekends Only) Internship program..."
```

---

## 🔄 How It Works

### Predefined Duration Selected:
```
User selects "3 Months"
    ↓
Duration set to "3 Months"
    ↓
Custom input hidden
    ↓
Ready to generate
```

### Custom Duration Selected:
```
User selects "Custom Duration"
    ↓
Custom input appears
    ↓
User types "5 Months"
    ↓
Duration set to "5 Months"
    ↓
Ready to generate
```

### Switching Between Options:
```
User selects "3 Months"
    ↓
Changes mind → Selects "Custom Duration"
    ↓
Previous value cleared
    ↓
Custom input appears
    ↓
User types new value
```

---

## 📝 Form Field States

### State 1: No Selection
```
Select Duration *
[Dropdown showing options]
Duration value: empty ("")
Custom input: hidden
```

### State 2: Standard Duration
```
Select Duration *
Selected: "3 Months"
Duration value: "3 Months"
Custom input: hidden
```

### State 3: Custom Duration Selected
```
Select Duration *
Selected: "Custom Duration"
Duration value: empty initially
Custom input: visible & focused
```

### State 4: Custom Duration Filled
```
Select Duration *
Selected: "Custom Duration"
Custom input: "5 Months"
Duration value: "5 Months"
```

---

## 🎨 Visual Layout

```
┌─────────────────────────────────────────┐
│  Select Duration *                      │
│  ▼ 1 Week                               │
│    2 Weeks                              │
│    3 Weeks                              │
│    4 Weeks                              │
│    6 Weeks                              │
│    8 Weeks                              │
│    12 Weeks                             │
│    1 Month                              │
│    2 Months                             │
│    3 Months  ← User selects             │
│    4 Months                             │
│    6 Months                             │
│    30 Days                              │
│    45 Days                              │
│    60 Days                              │
│    90 Days                              │
│    Custom Duration                      │
└─────────────────────────────────────────┘

OR (if Custom selected)

┌─────────────────────────────────────────┐
│  Select Duration *                      │
│  ▼ Custom Duration ← Selected           │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Enter custom duration...               │
│  5 Months ← User typing                 │
└─────────────────────────────────────────┘
```

---

## ✅ Validation

### Required Field:
- Duration must be selected or entered
- Cannot be empty string

### Error Messages:
```
If not selected:
"Please fill all fields including company, training type, and duration"
```

### Custom Field:
```
If "Custom Duration" selected but input empty:
Error on generate attempt
```

---

## 🎯 Duration Categories Explained

### Why Weeks? (1-12 Weeks)
- **Best for**: Short-term programs
- **Examples**: 
  - Summer internships
  - Crash courses
  - Weekend programs

### Why Months? (1-6 Months)
- **Best for**: Medium to long-term programs
- **Examples**:
  - Semester internships
  - Professional training
  - Industrial training

### Why Days? (30-90 Days)
- **Best for**: Fixed-day programs
- **Examples**:
  - Government-mandated training
  - Specific certification programs
  - Trial periods

### Why Custom?
- **Best for**: Non-standard durations
- **Examples**:
  - "5 Months"
  - "10 Weeks"
  - "2 Months 2 Weeks"
  - "75 Days"
  - "3 Months (Part-time)"

---

## 📊 Statistics of Common Durations

| Duration | Use Case | Frequency |
|----------|----------|-----------|
| 6 Weeks | Short internship | Very Common |
| 3 Months | Standard internship | Most Common |
| 6 Months | Long-term training | Common |
| 45 Days | Mid-length program | Moderate |
| 2 Months | Quarter program | Moderate |
| Custom | Unique programs | Varies |

---

## 💡 Custom Duration Examples

### Valid Custom Inputs:
```
✅ "5 Months"
✅ "10 Weeks"
✅ "75 Days"
✅ "2.5 Months"
✅ "8-10 Weeks"
✅ "3 Months (Weekends)"
✅ "90 Days (Online)"
✅ "1 Year"
✅ "6 Months Part-time"
✅ "Summer 2025"
```

### Creative Formats:
```
✅ "3 Months Intensive"
✅ "6 Weeks Fast-track"
✅ "90 Days Boot Camp"
✅ "2 Months + 2 Weeks Extension"
✅ "Q1 2025"
```

**Note:** Any text works - system displays exactly what you enter!

---

## 🔧 Technical Implementation

### State Management:
```javascript
const [showCustomDuration, setShowCustomDuration] = useState(false);

// When dropdown changes:
handleDurationChange = (e) => {
    if (value === 'custom') {
        setShowCustomDuration(true);
        clear duration value;
    } else {
        setShowCustomDuration(false);
        set duration to selected value;
    }
}
```

### Conditional Rendering:
```javascript
{showCustomDuration && (
    <input 
        placeholder="Enter custom duration..." 
        onChange={e => handleChange('duration', e.target.value)}
        autoFocus  // Cursor automatically in field
    />
)}
```

---

## 🎨 Certificate Display Examples

### Standard Duration:
```
Duration: 3 Months
Certificate shows:
- Badge: [ Internship ]
- Details: Duration: 3 Months
- Text: "...3 Months Internship program..."
```

### Custom Duration:
```
Duration: 5 Months (Part-time)
Certificate shows:
- Badge: [ Inplant Training ]
- Details: Duration: 5 Months (Part-time)
- Text: "...5 Months (Part-time) Inplant Training program..."
```

---

## 🧪 Testing Guide

### Test 1: Standard Week Duration
```
1. Select "6 Weeks"
2. Verify custom input not shown
3. Generate certificate
4. Check: "...6 Weeks Internship program..."
```

### Test 2: Standard Month Duration
```
1. Select "3 Months"
2. Verify custom input not shown
3. Generate certificate
4. Check: "...3 Months Inplant Training program..."
```

### Test 3: Standard Day Duration
```
1. Select "45 Days"
2. Verify custom input not shown
3. Generate certificate
4. Check: "...45 Days Internship program..."
```

### Test 4: Custom Duration
```
1. Select "Custom Duration"
2. Verify custom input appears
3. Type "5 Months"
4. Generate certificate
5. Check: "...5 Months Internship program..."
```

### Test 5: Switch from Standard to Custom
```
1. Select "3 Months"
2. Change to "Custom Duration"
3. Verify previous value cleared
4. Type "10 Weeks"
5. Generate certificate
6. Check: "...10 Weeks Internship program..."
```

### Test 6: Validation
```
1. Select "Custom Duration"
2. Leave input empty
3. Try to generate
4. Should show error
```

---

## 🎯 Advantages

### For Admins:
1. **Quick Selection**: Pick from common durations fast
2. **Flexibility**: Custom option for unique cases
3. **Organized**: Grouped by weeks/months/days
4. **No Typing Errors**: Standard options prevent typos

### For Users/Recipients:
1. **Consistent Format**: Standard durations look professional
2. **Clear Duration**: Easily readable on certificate
3. **Detailed Info**: Custom allows additional context

---

## 📋 Complete Duration List

```
Dropdown Options (in order):
────────────────────────────
Select Duration *           (Placeholder)
────────────────────────────
1 Week
2 Weeks
3 Weeks
4 Weeks
6 Weeks
8 Weeks
12 Weeks
────────────────────────────
1 Month
2 Months
3 Months
4 Months
6 Months
────────────────────────────
30 Days
45 Days
60 Days
90 Days
────────────────────────────
Custom Duration             (Opens text input)
────────────────────────────
```

**Total**: 17 predefined options + Custom

---

## 🚀 Quick Start

1. **Open**: http://localhost:3000
2. **Login**: admin/admin123
3. **Generate Certificate**
4. **Try standard duration**:
   - Select company
   - Fill fields
   - Select "3 Months" from duration dropdown
   - Generate
5. **Try custom duration**:
   - Select "Custom Duration"
   - Type "5 Months"
   - Generate

---

## 🔄 Switching Durations

### Scenario 1: Change Standard to Another Standard
```
Selected: "3 Months"
↓
Change to: "6 Weeks"
↓
Result: Duration = "6 Weeks"
Custom input: Stays hidden
```

### Scenario 2: Change Standard to Custom
```
Selected: "3 Months"
↓
Change to: "Custom Duration"
↓
Result: Duration cleared
Custom input: Appears and focused
User types: "5 Months"
```

### Scenario 3: Change Custom to Standard
```
Selected: "Custom Duration"
Input: "10 Weeks"
↓
Change to: "3 Months"
↓
Result: Duration = "3 Months"
Custom input: Hidden
```

---

## 💡 Pro Tips

### Tip 1: Common Durations First
Most programs are 3-6 months, so these appear near top!

### Tip 2: Use Custom for Special Cases
- Programs with specific requirements
- Part-time schedules
- Online/offline mix

### Tip 3: Be Specific in Custom
- "3 Months (Weekends)" better than "3 Months"
- "90 Days Online" better than "90 Days"

### Tip 4: Consistency
Use same format for similar programs:
- All internships: "X Months"
- All workshops: "X Weeks"

---

## ✅ Feature Summary

**Before:**
- Free text input only
- Risk of typos
- No guidance

**After:**
- 17+ standard options
- Custom for flexibility
- Auto-focus on custom
- Organized categories
- Professional & user-friendly

---

**🎉 Duration selection is now smart, flexible, and user-friendly! 🎯**

**Test it at: http://localhost:3000**
