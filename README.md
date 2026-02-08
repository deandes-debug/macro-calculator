# MacroFitCalc - Complete Website

A professional, revenue-ready macro calculator website with landing page, calculator, about page, and blog structure.

## 🚀 Features

- **Landing Page** - Hero section, features, testimonials, email capture
- **Macro Calculator** - Full-featured calculator with meal examples
- **About Page** - Build trust with methodology and mission
- **Blog Structure** - SEO-ready blog for content marketing
- **Mobile Responsive** - Works perfectly on all devices
- **Monetization Ready** - Email capture, affiliate zones, ad placements

## 📁 File Structure

```
macrofitcalc-site/
├── index.html          # Landing page
├── calculator.html     # Macro calculator
├── about.html          # About/methodology page
├── blog.html           # Blog landing page
└── README.md           # This file
```

## 🌐 Deploying to GitHub Pages

### Step 1: Upload to GitHub

1. Go to your GitHub repo: `https://github.com/deandes-debug/macro-calculator`
2. Delete the old `macrofit-calculator.html` file
3. Upload all files from this folder to the root of your repo
4. Make sure `index.html` is in the root (not in a subfolder)

### Step 2: Enable GitHub Pages

1. Go to Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main** → **/ (root)** → Save
4. Wait 5-10 minutes for deployment

### Step 3: Connect Your Custom Domain (macrofitcalc.com)

**In GitHub:**
1. Settings → Pages → Custom domain
2. Enter: `macrofitcalc.com`
3. Click Save
4. Check "Enforce HTTPS" (after DNS propagates)

**In Squarespace Domain Settings:**
1. Go to your Squarespace account
2. Navigate to: Domains → macrofitcalc.com → DNS Settings
3. Add these DNS records:

**A Records (add all 4):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: deandes-debug.github.io
```

4. Save all records
5. Wait 24-48 hours for DNS propagation (usually faster, 1-4 hours)

### Step 4: Verify It's Working

After DNS propagates:
1. Visit `http://macrofitcalc.com` - should show your landing page
2. Visit `http://www.macrofitcalc.com` - should redirect to non-www
3. Visit `https://macrofitcalc.com` - should work with HTTPS

## 💰 Monetization Strategy

### 1. Email List Building
- Email capture form on homepage
- Newsletter signup on blog
- Use ConvertKit, Mailchimp, or Beehiiv
- Send weekly nutrition tips + affiliate recommendations

### 2. Affiliate Marketing
**Recommended Programs:**
- **MyProtein** - 10-15% commission on supplements
- **Transparent Labs** - High commission, quality products
- **Renaissance Periodization** - RP Diet App (30% commission)
- **Amazon Associates** - Kitchen scales, meal prep containers
- **Cronometer/MyFitnessPal Premium** - Tracking app affiliates

**Where to Place Affiliate Links:**
- Blog posts (contextual)
- "Recommended Tools" section on calculator results
- Email newsletter
- Footer "Resources" section

### 3. Display Ads
- Google AdSense (easiest to start)
- Mediavine/AdThrive (after 50k monthly sessions)
- Place ads in sidebar and between blog posts

### 4. Digital Products (Future)
- Meal prep e-books
- Macro tracking templates
- Custom meal plans
- 1-on-1 coaching

### 5. Sponsored Content
Once you have traffic:
- Sponsored blog posts
- Brand partnerships
- Product reviews

## 📈 Traffic & SEO Tips

### Content Strategy
1. **Target Long-Tail Keywords:**
   - "macro calculator for weight loss"
   - "how to calculate macros for muscle gain"
   - "high protein meal prep ideas"

2. **Create Useful Blog Content:**
   - How-to guides
   - Recipes with macros
   - Beginner tutorials
   - Comparison posts

3. **Build Backlinks:**
   - Guest post on fitness blogs
   - Share on Reddit (r/fitness, r/loseit)
   - Create share-worthy infographics

### Technical SEO
- Add Google Analytics
- Submit sitemap to Google Search Console
- Optimize meta descriptions
- Add alt text to images
- Improve page speed

## 🔧 Customization

### Adding Blog Posts
1. Create new HTML file (e.g., `blog-post-title.html`)
2. Use this template structure:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Post Title - MacroFitCalc</title>
  <!-- Copy header/nav from blog.html -->
</head>
<body>
  <!-- Your post content -->
</body>
</html>
```

### Updating Email Forms
Replace `action="#"` with your email service webhook:
- Mailchimp
- ConvertKit
- Beehiiv
- Or use a form service like Formspree

### Adding Google Analytics
Add this before `</head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🎨 Branding

Current Design:
- **Primary Color:** #FF6B35 (Orange)
- **Accent:** #FFD23F (Yellow)
- **Fonts:** Bebas Neue (headers), Inter (body)

To customize:
1. Open any HTML file
2. Find the `:root` CSS variables
3. Change color values
4. Save and re-upload

## 📱 Mobile Optimization

All pages are fully responsive. Test on:
- Chrome DevTools (F12 → Toggle device toolbar)
- Your actual phone
- Responsinator.com

## ⚡ Performance

Current setup is fast and lightweight:
- No heavy frameworks
- Minimal external dependencies
- CSS animations only
- Optimized fonts

## 🔒 Privacy & Legal

**You Need:**
1. Privacy Policy page
2. Terms of Service page
3. Cookie notice (for ads/analytics)
4. Affiliate disclosure

Use free generators:
- TermsFeed.com
- GetTerms.io

## 📊 Next Steps

1. **Week 1:** Deploy site, set up domain, add Google Analytics
2. **Week 2:** Set up email marketing, create 5 blog posts
3. **Week 3:** Join affiliate programs, add affiliate links
4. **Week 4:** Submit to Google Search Console, start SEO
5. **Month 2+:** Create content, build backlinks, grow traffic

## 🆘 Troubleshooting

**Site not showing after 24 hours:**
- Check DNS records in Squarespace
- Verify GitHub Pages is enabled
- Try clearing browser cache

**Calculator not working:**
- Check browser console for errors (F12)
- Ensure JavaScript isn't blocked
- Test on different browsers

**Domain not connecting:**
- DNS changes take 24-48 hours
- Use DNS checker: whatsmydns.net
- Verify CNAME points to deandes-debug.github.io

## 📞 Support

Need help? Check:
- GitHub Pages docs: docs.github.com/pages
- Squarespace DNS help: support.squarespace.com
- Web development: MDN Web Docs

---

**Built with ❤️ for MacroFitCalc**
Ready to help people hit their fitness goals!
