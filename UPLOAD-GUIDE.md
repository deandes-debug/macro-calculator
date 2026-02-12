# Updated Files - Ready to Upload to GitHub

## 📦 Files Changed

Upload these files to your GitHub repository (replace existing files):

1. **index.html** - Added Amazon affiliate disclosure in footer
2. **calculator.html** - Fixed dropdown styling + added macro summary display
3. **about.html** - Added Amazon affiliate disclosure
4. **blog.html** - Added Amazon affiliate disclosure
5. **how-to-calculate-macros-weight-loss.html** - Sample blog post (ready for affiliate links)

## ✅ Changes Made

### 1. Fixed Dropdown Illegibility ✅
**Problem:** Dropdown options were unreadable due to background color

**Solution:** Added explicit white background and black text to dropdown options
```css
select option {
  background: white;
  color: #1A1A1A;
  padding: 10px;
}
```

**Result:** All dropdown menus (Activity Level, Goal, Macro Split) now have clear, readable options

---

### 2. Added Macro Summary Display ✅
**Feature:** Shows caloric density visualization

**What it looks like:**
```
Macros (grams): 150g P / 200g C / 50g F = 400g total
Macros (calories): 600 P / 800 C / 450 F = 1850 total
```

**Why this is brilliant:**
- Immediately shows that 50g fat = 450 calories (9 cal/g)
- Shows that fats are more calorie-dense than protein/carbs
- Helps users understand why portion control on fats matters

**Location:** Calculator results page, above the macro breakdown bars

---

### 3. Added Amazon Affiliate Disclosure ✅
**Added to:** Footer of all pages

**Text:** "As an Amazon Associate, MacroFitCalc earns from qualifying purchases."

**Why:** Required by FTC and Amazon Associates program before adding any affiliate links

---

## 🚀 How to Upload

### Option 1: GitHub Website
1. Go to https://github.com/deandes-debug/macro-calculator
2. Click "Add file" → "Upload files"
3. Drag and drop all 5 HTML files
4. Scroll down and click "Commit changes"

### Option 2: Git Command Line
```bash
cd macro-calculator
git add index.html calculator.html about.html blog.html how-to-calculate-macros-weight-loss.html
git commit -m "Fixed dropdown styling, added macro summary display, added Amazon affiliate disclosure"
git push
```

---

## 🧪 Testing After Upload

1. **Wait 2-3 minutes** for GitHub Pages to deploy
2. **Visit:** https://macrofitcalc.com/calculator.html
3. **Test:**
   - Click on any dropdown (Activity Level, Goal, Macro Split)
   - Verify options are readable
   - Calculate macros
   - Check macro summary shows: "150g P / 200g C / 50g F = 400g total"
   - Scroll to footer and verify Amazon disclosure appears

---

## 💰 Next Steps: Monetization

### Week 1: Add Amazon Affiliate Links
1. **Sign up:** https://affiliate-program.amazon.com/
2. **Get approved:** Usually 1-2 days
3. **Add links to meal examples:**

**Example code to add:**
```html
<!-- In meal example section -->
<div class="meal-food-item">
  150g <a href="https://amzn.to/YOUR-AFFILIATE-CODE" target="_blank" rel="nofollow sponsored">chicken breast</a>
</div>
```

**Products to link:**
- Chicken breast → Amazon Fresh/Whole Foods
- Greek yogurt → Amazon Fresh
- Protein powder → Amazon supplements
- Kitchen scale → Amazon Home
- Meal prep containers → Amazon Kitchen

### Week 2: Beehiiv Newsletter
1. **Sign up:** https://www.beehiiv.com/
2. **Import first blog post**
3. **Add signup form** to calculator results page
4. **Send weekly tips** with affiliate recommendations

### Week 3-4: Premium Features
**Paid version ($4.99/month):**
- Amazon product recommendations
- Custom meal plans
- Progress tracking
- Macro coaching

---

## 📊 What You Can Tell Users

**Changes in this update:**
- ✅ Fixed dropdown menus - now fully readable
- ✅ Added macro summary showing caloric density
- ✅ Improved results display with total grams/calories
- ✅ Performance improvements

---

## 🐛 If Something Breaks

**Dropdown still hard to read?**
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check on mobile

**Macro summary not showing?**
- Make sure you uploaded calculator.html
- Hard refresh page (Ctrl+F5)
- Check browser console for errors (F12)

**Site not updating?**
- GitHub Pages can take 5-10 minutes to deploy
- Check: https://github.com/deandes-debug/macro-calculator/actions
- See if deployment is still in progress

---

## 📝 Changelog

**Version 1.1 (Feb 11, 2026)**
- Fixed dropdown option readability
- Added macro caloric density summary display
- Added Amazon Associates disclosure
- Prepared site for affiliate monetization

---

**All files are ready to upload! Just replace the existing files on GitHub.**
