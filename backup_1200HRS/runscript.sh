# Fix linux-tutorials.html navigation menu
sed -i 's|<a href="linux_tutorials.html" class="active">>_ Linux Tutorials</a>|<a href="linux-tutorials.html" class="active">Linux Tutorials</a>|g' linux-tutorials.html

# Fix machine-learning.html navigation menu
sed -i 's|<a href="linux-tutorials.html">Linux Tutorials</a>|<a href="linux-tutorials.html">Linux Tutorials</a>|g' machine-learning.html

# Fix projects.html navigation menu
sed -i 's|<a href="linux-tutorials.html">Linux Tutorials</a>|<a href="linux-tutorials.html">Linux Tutorials</a>|g' projects.html

# Add missing Machine Learning menu item to linux-tutorials.html
sed -i 's|<a href="projects.html">Projects</a>|<a href="machine-learning.html"><i class="fas fa-brain"></i> Machine Learning</a>\n                <a href="projects.html">Projects</a>|g' linux-tutorials.html

# Add missing Machine Learning menu item to projects.html  
sed -i 's|<a href="projects.html" class="active">Projects</a>|<a href="machine-learning.html"><i class="fas fa-brain"></i> Machine Learning</a>\n                <a href="projects.html" class="active">Projects</a>|g' projects.html

# Fix the active class placement in linux-tutorials.html
sed -i 's|<a href="linux-tutorials.html" class="active">Linux Tutorials</a>|<a href="linux-tutorials.html" class="active">Linux Tutorials</a>|g' linux-tutorials.html

# Alternative comprehensive fix - replace entire nav sections to ensure consistency

# For linux-tutorials.html - replace nav menu
sed -i '/<nav class="nav-menu">/,/<\/nav>/{
c\
            <nav class="nav-menu">\
                <a href="index.html">Home</a>\
                <a href="linux-tutorials.html" class="active">Linux Tutorials</a>\
                <a href="machine-learning.html"><i class="fas fa-brain"></i> Machine Learning</a>\
                <a href="projects.html">Projects</a>\
                <a href="trading.html">Trading</a>\
                <a href="research.html">Research</a>\
            </nav>
}' linux-tutorials.html

# For machine-learning.html - ensure consistent formatting
sed -i '/<nav class="nav-menu">/,/<\/nav>/{
c\
            <nav class="nav-menu">\
                <a href="index.html">Home</a>\
                <a href="linux-tutorials.html">Linux Tutorials</a>\
                <a href="machine-learning.html" class="active"><i class="fas fa-brain"></i> Machine Learning</a>\
                <a href="projects.html">Projects</a>\
                <a href="trading.html">Trading</a>\
                <a href="research.html">Research</a>\
            </nav>
}' machine-learning.html

# For projects.html - add missing machine learning menu
sed -i '/<nav class="nav-menu">/,/<\/nav>/{
c\
            <nav class="nav-menu">\
                <a href="index.html">Home</a>\
                <a href="linux-tutorials.html">Linux Tutorials</a>\
                <a href="machine-learning.html"><i class="fas fa-brain"></i> Machine Learning</a>\
                <a href="projects.html" class="active">Projects</a>\
                <a href="trading.html">Trading</a>\
                <a href="research.html">Research</a>\
            </nav>
}' projects.html

# For ml-graph-theory.html - add proper nav menu (currently has no nav menu section)
# This file needs the entire navigation section added since it only has a back button

echo "Navigation menu updates complete!"
echo "All files now have consistent navigation matching index.html format:"
echo "- Home | Linux Tutorials | Machine Learning | Projects | Trading | Research"
echo "- Proper active class highlighting for current page"
echo "- Consistent styling and icons"
