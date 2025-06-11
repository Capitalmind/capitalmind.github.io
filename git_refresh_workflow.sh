#!/bin/bash

# Fresh Commit - All HTML and CSS/JS Files
# Navigate to project directory and commit all changes

cd ~/Desktop/capitalmind.github.io

echo "=== Capitalmind Website - Fresh Commit ==="
echo "Current directory: $(pwd)"
echo ""

# Check git status
echo "1. Checking current status..."
git status
echo ""

# Add all HTML files and CSS/JS directories
echo "2. Staging all HTML and CSS/JS files..."
git add *.html
git add css/
git add js/
git add 404.html
echo ""

# Show what's being committed
echo "3. Files staged for commit:"
git status --short
echo ""

# Commit with comprehensive message
echo "4. Committing changes..."
git commit -m "Major Update: Complete HTML/CSS/JS file organization

✅ Fixed all HTML files with proper external CSS/JS references:
- research.html: Fixed fa-flask icon, fa-x-twitter social link
- projects.html: Fixed header title, navigation text, fa-x-twitter icon
- All pages now use external CSS/JS files (no inline code)

✅ New external CSS files created:
- css/research.css: Complete research page styling
- css/projects.css: Complete projects page styling  
- css/expert-systems.css: Expert systems page styling
- css/ml-graph-theory.css: Machine learning page styling

✅ New external JS files created:
- js/research.js: Research page functionality with modal system
- js/projects.js: Projects page with enhanced animations
- js/expert-systems.js: Expert systems interactive demos
- js/ml-graph-theory.js: ML page interactive visualizations

✅ Consistent design system maintained:
- Dark theme (#262725 background, #cc785c accents)
- Font Awesome 6.0.0 icons (updated fa-x-twitter)
- Responsive mobile-first design
- Professional navigation and layout

✅ Clean separation of concerns:
- HTML: Structure and content only
- CSS: All styling and visual design
- JS: All interactivity and functionality

This update ensures maintainable, scalable codebase with proper
file organization and consistent design patterns across all pages."

echo ""

# Pull any remote changes
echo "5. Pulling remote changes..."
git pull origin master
echo ""

# Push to GitHub Pages
echo "6. Pushing to GitHub Pages..."
git push origin master
echo ""

# Deployment confirmation
echo "=== Deployment Complete! ==="
echo "✅ All HTML files updated and committed"
echo "✅ External CSS/JS files created and organized"
echo "✅ Consistent design system maintained"
echo "✅ Clean code architecture implemented"
echo ""
echo "🌐 Live site: https://capitalmind.github.io"
echo "📱 All pages: research.html, projects.html, linux-tutorials.html"
echo "⏱️  GitHub Pages deployment: 2-3 minutes"
echo ""
echo "🔄 Browser cache: Ctrl+Shift+R for hard refresh"
echo "🧪 Local test: python -m http.server 8000"
echo ""
echo "File structure now clean and maintainable! 🚀"