function openResearch(researchKey) {
    const researchPages = {
        'expert-systems': 'research-expert-systems.html',
        'hierarchical-text': 'research-hierarchical-text.html',
        'debt-analysis': 'research-debt-analysis.html', 
        'trading-system': 'research-trading-system.html'
    };
    
    const targetPage = researchPages[researchKey];
    if (targetPage) {
        // Available research pages
        if (researchKey === 'expert-systems' || researchKey === 'hierarchical-text') {
            showLoadingIndicator();
            // Navigate to research detail page after loading animation
            setTimeout(() => {
                window.location.href = targetPage;
            }, 800);
        } else {
            // Show coming soon for debt-analysis and trading-system
            showComingSoon(researchKey);
        }
    } else {
        // Show coming soon message for unimplemented pages
        showComingSoon(researchKey);
    }
}