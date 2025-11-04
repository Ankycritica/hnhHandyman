# 🎯 Bennisson Style - Installation Guide

## This version matches your ACTUAL website style:
- ✅ Clean white background
- ✅ Black hero sections with overlay
- ✅ Numbered circle badges
- ✅ Simple line icons in circles
- ✅ 3-column grid layout
- ✅ Modern minimalist typography
- ✅ Smooth scroll animations

---

## 📥 Installation in Elementor

### Method 1: Full Section (Easiest)

1. **In WordPress**: Go to your page and click **"Edit with Elementor"**
2. **Add HTML Widget**: Search for "HTML" and drag it to your page
3. **Copy & Paste**: Open `bennisson-style.html` and copy EVERYTHING
4. **Paste** into the HTML widget
5. **Update** the page

✅ **Done!**

---

### Method 2: Section Only (Without Hero)

If you only want the white section with the 6 steps:

1. Copy everything INSIDE the `<section class="process-section">` tag
2. Paste into HTML widget
3. Add the `<style>` section to Page Settings → Advanced → Custom CSS

---

## 🎨 Customization

### Add Your Hero Background Image

Find this line in the CSS:
```css
background-image: url('your-watch-image.jpg');
```

Replace with:
```css
background-image: url('https://yoursite.com/wp-content/uploads/your-image.jpg');
```

### Change Circle Border Color

Current: Black borders  
To change, find:
```css
border: 1.5px solid #000000;
```

Replace `#000000` with your color.

### Adjust Spacing

**Between steps (vertical):**
```css
gap: 60px 40px;  /* First number is vertical gap */
```

**Section padding:**
```css
padding: 100px 20px;  /* Increase/decrease as needed */
```

---

## 📱 Responsive Behavior

- **Desktop (1024px+)**: 3 columns
- **Tablet (640px-1024px)**: 2 columns  
- **Mobile (<640px)**: 1 column

Automatically adjusts!

---

## 🎯 Font Matching

The CSS uses system fonts similar to your site:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Space Grotesk'...
```

### To use a specific Google Font:

1. In Elementor: Go to **Site Settings → Typography**
2. Add your font (e.g., "Space Grotesk" or "Inter")
3. Or add this to the `<head>` section:

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600&display=swap" rel="stylesheet">
```

Then update the CSS:
```css
font-family: 'Space Grotesk', sans-serif;
```

---

## 🔢 Number Badges

The numbered circles (1-6) are included. To remove them:

Delete this CSS:
```css
.step-number {
    /* Remove entire block */
}
```

And remove these HTML elements:
```html
<div class="step-number">1</div>
```

---

## 🎨 Color Scheme

Current colors used:
- **Background**: `#ffffff` (white)
- **Text**: `#000000` (black)
- **Secondary text**: `#666666` (gray)
- **Borders**: `#e5e5e5` (light gray)
- **Hero overlay**: `rgba(0, 0, 0, 0.65)` (65% black)

---

## ✨ Animations

**Fade-in on scroll**: Elements appear when you scroll to them

To adjust speed, change:
```css
transition: all 0.6s ease-out;  /* Make faster: 0.3s, slower: 1s */
```

**Staggered effect**: Each step appears slightly after the previous one

To adjust delays:
```css
.step-item:nth-child(1) { transition-delay: 0s; }
.step-item:nth-child(2) { transition-delay: 0.1s; }  /* Change these */
```

---

## 🖼️ Icons

Using Lucide-style line icons (SVG). To change an icon:

1. Go to [Lucide Icons](https://lucide.dev) or [Feather Icons](https://feathericons.com)
2. Find your icon
3. Copy the SVG code
4. Replace the `<svg>` code in the HTML

Example:
```html
<svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
</svg>
```

---

## 💡 Pro Tips

1. **Match your existing typography**: Use the same font weights (300, 400, 600)
2. **Keep spacing consistent**: Use the same padding values as other sections on your site
3. **Test responsiveness**: Check on mobile, tablet, and desktop in Elementor preview
4. **Hover effects**: Cards have subtle lift on hover - adjust in CSS if needed

---

## 🔧 Common Adjustments

### Make icons bigger/smaller:
```css
.step-icon-circle {
    width: 80px;  /* Change this */
    height: 80px;  /* And this */
}

.step-icon-circle svg {
    width: 32px;  /* And this */
    height: 32px;
}
```

### Make text bigger/smaller:
```css
.step-title {
    font-size: 16px;  /* Adjust as needed */
}

.step-description {
    font-size: 13px;  /* Adjust as needed */
}
```

### Change grid columns (make 2 or 4 columns):
```css
.steps-grid {
    grid-template-columns: repeat(4, 1fr);  /* 4 columns instead of 3 */
}
```

---

## 📞 Need Help?

This version uses:
- **Pure HTML/CSS/JavaScript** (no frameworks)
- **Works with any WordPress theme**
- **Fully compatible with Elementor**
- **No external dependencies**

Everything is self-contained in one file! 🚀


