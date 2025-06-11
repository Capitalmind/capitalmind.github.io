#!/bin/bash

# Git Refresh and Update Script for Capitalmind Website
# Author: Capitalmind
# Purpose: Comprehensive check and update workflow for GitHub Pages deployment

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}===${NC} $1 ${BLUE}===${NC}"
}

print_success() {
    echo -e "${GREEN}✅${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠️${NC} $1"
}

print_error() {
    echo -e "${RED}❌${NC} $1"
}

# Check if we're in the right directory
check_directory() {
    print_status "Checking Directory"
    
    if [[ ! -d ".git" ]]; then
        print_error "Not in a git repository! Please run from ~/Desktop/capitalmind.github.io"
        exit 1
    fi
    
    if [[ ! -f "index.html" ]]; then
        print_error "index.html not found! Please run from the website root directory"
        exit 1
    fi
    
    print_success "In correct directory: $(pwd)"
    echo ""
}

# Verify file structure
verify_structure() {
    print_status "Verifying File Structure"
    
    # Check required directories
    for dir in "css" "js" "assets"; do
        if [[ -d "$dir" ]]; then
            print_success "$dir/ directory exists"
        else
            print_warning "$dir/ directory missing"
        fi
    done
    
    # Check main HTML files
    required_files=("index.html" "linux-tutorials.html" "research.html" "projects.html" "machine-learning.html")
    for file in "${required_files[@]}"; do
        if [[ -f "$file" ]]; then
            print_success "$file exists"
        else
            print_error "$file missing!"
        fi
    done
    
    # Check CSS/JS files
    if [[ -f "css/research.css" ]]; then
        print_success "css/research.css exists"
    else
        print_error "css/research.css missing!"
    fi
    
    if [[ -f "js/research.js" ]]; then
        print_success "js/research.js exists"
    else
        print_error "js/research.js missing!"
    fi
    
    echo ""
}

# Content validation
validate_content() {
    print_status "Validating Content"
    
    # Check research.html for external CSS/JS references
    if grep -q "css/research.css" research.html; then
        print_success "research.html links to external CSS"
    else
        print_error "research.html missing external CSS link!"
    fi
    
    if grep -q "js/research.js" research.html; then
        print_success "research.html links to external JS"
    else
        print_error "research.html missing external JS link!"
    fi
    
    # Check for fa-flask icon in research.html
    if grep -q "fa-flask" research.html; then
        print_success "fa-flask icon found in research.html"
    else
        print_warning "fa-flask icon not found - checking for other icons"
        grep -n "fas fa-" research.html | head -3
    fi
    
    # Check for fa-x-twitter icon
    if grep -q "fa-x-twitter" research.html; then
        print_success "fa-x-twitter icon found"
    else
        print_warning "fa-x-twitter icon not found - checking social links"
        grep -n "fab fa-" research.html
    fi
    
    # Check CSS file for research-specific styles
    if [[ -f "css/research.css" ]] && grep -q "\.research-icon" css/research.css; then
        print_success "research.css contains .research-icon styles"
    else
        print_warning "research.css missing .research-icon styles"
    fi
    
    echo ""
}

# Git status check
check_git_status() {
    print_status "Git Status Check"
    
    # Check for uncommitted changes
    if [[ -n $(git status --porcelain) ]]; then
        print_warning "Uncommitted changes found:"
        git status --short
        echo ""
        read -p "Continue with commit? (y/N): " -n 1 -r
        echo ""
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_error "Aborted by user"
            exit 1
        fi
    else
        print_success "Working directory clean"
    fi
    
    # Check current branch
    current_branch=$(git branch --show-current)
    if [[ "$current_branch" == "master" ]] || [[ "$current_branch" == "main" ]]; then
        print_success "On deployment branch: $current_branch"
    else
        print_warning "On branch: $current_branch (expected master/main)"
    fi
    
    echo ""
}

# Stage and commit changes
commit_changes() {
    print_status "Staging and Committing Changes"
    
    # Add all changes
    git add .
    print_success "Staged all changes"
    
    # Show what's being committed
    echo "Files to be committed:"
    git status --short
    echo ""
    
    # Commit with descriptive message
    commit_message="Fix: Update research.html icons and external CSS/JS references

- Fixed Black Box Trading System Analysis icon (fa-flask)
- Updated X.com social link icon (fa-x-twitter) 
- Ensured clean separation of HTML/CSS/JS files
- Research page now uses external css/research.css and js/research.js
- Comprehensive file structure validation

Generated by: automated update script $(date)"

    if git commit -m "$commit_message"; then
        print_success "Changes committed successfully"
    else
        print_warning "No changes to commit (already up to date)"
    fi
    
    echo ""
}

# Deploy to GitHub Pages
deploy_changes() {
    print_status "Deploying to GitHub Pages"
    
    # Pull any remote changes first
    echo "Checking for remote updates..."
    if git pull origin master; then
        print_success "Successfully pulled remote changes"
    else
        print_warning "Pull completed (may have been up to date)"
    fi
    
    # Push to GitHub Pages
    echo "Pushing to GitHub Pages..."
    if git push origin master; then
        print_success "Successfully pushed to GitHub Pages"
    else
        print_error "Failed to push to GitHub Pages"
        exit 1
    fi
    
    echo ""
}

# Final verification and instructions
final_verification() {
    print_status "Deployment Complete"
    
    print_success "✅ Files committed and pushed to GitHub"
    print_success "⏳ GitHub Pages deployment (2-3 minutes)"
    print_success "🌐 Live site will update automatically"
    echo ""
    
    echo -e "${BLUE}Live URLs:${NC}"
    echo "🔗 Main site: https://capitalmind.github.io"
    echo "🔗 Research page: https://capitalmind.github.io/research.html"
    echo "🔗 Linux tutorials: https://capitalmind.github.io/linux-tutorials.html"
    echo ""
    
    echo -e "${YELLOW}Browser Cache Clearing Instructions:${NC}"
    echo "If icons still not showing, clear browser cache:"
    echo "- Chrome/Edge: Ctrl+Shift+R (hard refresh)"
    echo "- Firefox: Ctrl+F5"
    echo "- Safari: Cmd+Option+R"
    echo "- Or open DevTools > Network tab > 'Disable cache'"
    echo ""
    
    echo -e "${BLUE}Local Testing:${NC}"
    echo "Test locally with: python -m http.server 8000"
    echo "Then visit: http://localhost:8000"
    echo ""
    
    echo -e "${GREEN}Deployment successful! 🚀${NC}"
}

# Error handling
handle_error() {
    print_error "Script failed at step: $1"
    echo "Please check the error messages above and resolve any issues."
    exit 1
}

# Main execution
main() {
    echo -e "${GREEN}"
    echo "██████╗  ██████╗ ██████╗ ██╗  ██╗██╗   ██╗"
    echo "██╔══██╗██╔═══██╗██╔══██╗██║ ██╔╝╚██╗ ██╔╝"
    echo "██║  ██║██║   ██║██████╔╝█████╔╝  ╚████╔╝ "
    echo "██║  ██║██║   ██║██╔═══╝ ██╔═██╗   ╚██╔╝  "
    echo "██████╔╝╚██████╔╝██║     ██║  ██╗   ██║   "
    echo "╚═════╝  ╚═════╝ ╚═╝     ╚═╝  ╚═╝   ╚═╝   "
    echo -e "${NC}"
    echo -e "${BLUE}Capitalmind Website Deployment Script${NC}"
    echo -e "${BLUE}=====================================${NC}"
    echo ""
    
    check_directory || handle_error "Directory Check"
    verify_structure || handle_error "Structure Verification"
    validate_content || handle_error "Content Validation"
    check_git_status || handle_error "Git Status Check"
    commit_changes || handle_error "Commit Changes"
    deploy_changes || handle_error "Deploy Changes"
    final_verification
}

# Run the main function
main "$@"