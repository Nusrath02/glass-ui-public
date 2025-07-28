#!/bin/bash

# Git commands to push Glass UI to GitHub
# Make sure to replace 'yourusername' with your actual GitHub username

echo "🚀 Pushing Glass UI to GitHub..."

# Initialize git repository
cd /Users/tejaskutnikar/Documents/frappe-apps/glass_ui

# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Glass UI - Glassmorphism UI for Frappe

- Complete glassmorphism CSS framework
- JavaScript animations and enhancements  
- Custom dashboard and components
- Light/Dark theme support
- Particle effects and smooth transitions
- GitHub Actions CI/CD workflow
- Comprehensive documentation"

# Add remote origin (replace with your repository URL)
# First create a new repository on GitHub named 'glass_ui'
echo "⚠️  Please create a new repository on GitHub first!"
echo "Repository name: glass_ui"
echo ""
echo "Then run these commands:"
echo "git remote add origin https://github.com/YOUR_USERNAME/glass_ui.git"
echo "git branch -M main"
echo "git push -u origin main"

# Alternative if using SSH:
# git remote add origin git@github.com:YOUR_USERNAME/glass_ui.git