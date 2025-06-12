// Research Page JavaScript - js/research.js
// Master file for both research.html and research-expert-systems.html

document.addEventListener('DOMContentLoaded', function() {
    // Initialize research page functionality
    initializeResearchPage();
});

function initializeResearchPage() {
    // Add hover effects to research cards
    addCardHoverEffects();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Add click tracking for analytics
    initializeAnalytics();
}

function openResearch(researchKey) {
    const researchPages = {
        'expert-systems': 'research-expert-systems.html',
        'stablecoin-analysis': 'stablecoin-analysis.html',
        'hierarchical-text': 'research-hierarchical-text.html',
        'debt-analysis': 'research-debt-analysis.html', 
        'trading-system': 'research-trading-system.html'
    };
    
    const targetPage = researchPages[researchKey];
    if (targetPage) {
        // Available research pages
        if (researchKey === 'expert-systems' || researchKey === 'hierarchical-text' || researchKey === 'stablecoin-analysis') {
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

function showLoadingIndicator() {
    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <p>Loading research details...</p>
        </div>
    `;
    
    // Add loading styles
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(38, 39, 37, 0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const loadingContent = loadingOverlay.querySelector('.loading-content');
    loadingContent.style.cssText = `
        text-align: center;
        color: #cc785c;
    `;
    
    // Add spinner styles
    const style = document.createElement('style');
    style.textContent = `
        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #3a3a3a;
            border-top: 3px solid #cc785c;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem auto;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(loadingOverlay);
    
    // Fade in
    setTimeout(() => {
        loadingOverlay.style.opacity = '1';
    }, 10);
}

function showComingSoon(researchKey) {
    const researchTitles = {
        'expert-systems': 'Expert Systems Research',
        'debt-analysis': 'Global Debt Analysis',
        'trading-system': 'Black Box Trading System'
    };
    
    const title = researchTitles[researchKey] || 'Research Study';
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'coming-soon-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-flask"></i> ${title}</h3>
                <button class="modal-close" onclick="closeModal(this)">&times;</button>
            </div>
            <div class="modal-body">
                <p>Detailed research documentation is being prepared for this study.</p>
                <p>The complete analysis includes:</p>
                <ul>
                    <li>Comprehensive methodology and data sources</li>
                    <li>Interactive visualizations and code examples</li>
                    <li>Current findings and preliminary results</li>
                    <li>Practical applications and implications</li>
                </ul>
                <p style="margin-top: 1rem;">
                    <strong>Check back soon</strong> for the full research documentation, 
                    or contact me directly to discuss preliminary findings.
                </p>
            </div>
            <div class="modal-footer">
                <button class="btn primary" onclick="closeModal(this)">Got it</button>
                <a href="mailto:tech@skynode.one" class="btn secondary">Contact about Research</a>
            </div>
        </div>
        <div class="modal-backdrop" onclick="closeModal(this)"></div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // Add comprehensive modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .modal-content {
            background: #262725;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            border: 1px solid #3a3a3a;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            position: relative;
            z-index: 10001;
        }
        
        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid #3a3a3a;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h3 {
            color: #cc785c;
            margin: 0;
            font-size: 1.3rem;
        }
        
        .modal-close {
            background: none;
            border: none;
            color: #f5f5f5;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .modal-close:hover {
            background: #cc785c;
            color: #f5f5f5;
        }
        
        .modal-body {
            padding: 1.5rem;
            color: #f5f5f5;
            line-height: 1.6;
        }
        
        .modal-body ul {
            margin: 1rem 0;
            padding-left: 1.5rem;
        }
        
        .modal-body li {
            margin: 0.5rem 0;
        }
        
        .modal-footer {
            padding: 1rem 1.5rem;
            border-top: 1px solid #3a3a3a;
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
        }
        
        .modal-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 10000;
        }
        
        .btn {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }
        
        .btn.primary {
            background: #cc785c;
            color: #f5f5f5;
        }
        
        .btn.primary:hover {
            background: #b8704a;
        }
        
        .btn.secondary {
            background: transparent;
            border: 1px solid #cc785c;
            color: #cc785c;
        }
        
        .btn.secondary:hover {
            background: #cc785c;
            color: #f5f5f5;
        }
    `;
    
    document.head.appendChild(modalStyles);
    document.body.appendChild(modal);
    
    // Fade in
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Close on escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal(modal);
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

function closeModal(element) {
    const modal = element.closest('.coming-soon-modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

function addCardHoverEffects() {
    const researchCards = document.querySelectorAll('.research-card');
    
    researchCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add subtle animation to icon
            const icon = this.querySelector('.research-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
            
            // Highlight tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-2px)';
                    tag.style.boxShadow = '0 4px 8px rgba(204, 120, 92, 0.3)';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset icon
            const icon = this.querySelector('.research-icon i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
            
            // Reset tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.transform = 'translateY(0)';
                tag.style.boxShadow = 'none';
            });
        });
    });
}

function initializeScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe research cards
    document.querySelectorAll('.research-card').forEach(card => {
        observer.observe(card);
    });
    
    // Add animation styles
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .research-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .research-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .research-card:nth-child(2) {
            transition-delay: 0.1s;
        }
        
        .research-card:nth-child(3) {
            transition-delay: 0.2s;
        }
    `;
    
    document.head.appendChild(animationStyles);
}

function initializeAnalytics() {
    // Track research card clicks
    document.querySelectorAll('.research-card').forEach(card => {
        card.addEventListener('click', function() {
            const researchTitle = this.querySelector('.research-title').textContent;
            
            // Log interaction (could be sent to analytics service)
            console.log(`Research clicked: ${researchTitle}`);
            
            // Optional: Send to analytics service
            // sendAnalyticsEvent('research_click', { research_title: researchTitle });
        });
    });
}

// Utility function for future analytics integration
function sendAnalyticsEvent(eventName, properties) {
    // Placeholder for analytics integration
    // Could integrate with Google Analytics, Mixpanel, etc.
    console.log('Analytics event:', eventName, properties);
}
