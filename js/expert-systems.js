// Expert Systems Research Page JavaScript - js/expert-systems.js

// Demo queries data
let demoQueries = {
    'gst': {
        'query': 'Can I buy 2 shares of Fairfit Furniture Company?',
        'structured': 'validate_action(buy_shares, {company: "yellow", quantity: 2})',
        'facts': 'player_cash: £300, share_price: £100, brokerage: £5, available: 10 shares',
        'reasoning': [
            'Step 1: Parse query → Validate share purchase action',
            'Step 2: Load ontology → Fairfit Furniture (yellow) company data',
            'Step 3: Check company active → isActive: true ✓',
            'Step 4: Check availability → 10 available >= 2 requested ✓', 
            'Step 5: Calculate cost → (£100 × 2) + £5 = £205 total',
            'Step 6: Check funds → £300 available >= £205 needed ✓',
            'Step 7: All validation rules passed → Transaction approved'
        ],
        'sources': ['Flutter Game Rules 8b-8e', 'Company Ontology v1.0'],
        'answer': 'YES - Share purchase approved'
    },
    'building': {
        'query': 'What happens if I land on position 130?',
        'structured': 'evaluate_special_position(130)',
        'facts': 'position: 130, effectType: "marketNews", ruleReference: "Rule 9"',
        'reasoning': [
            'Step 1: Parse query → Check special position effects',
            'Step 2: Load ontology → Special positions mapping',
            'Step 3: Look up position 130 → marketNewsPosition found',
            'Step 4: Get effect type → "marketNews" effect triggered',
            'Step 5: Apply rule → Draw market card and apply effect',
            'Step 6: Reference rule → Rule 9 from game ontology'
        ],
        'sources': ['Flutter Game Rules 9', 'Position Effects Ontology'],
        'answer': 'Draw a Market News card and apply its effect'
    },
    'game': {
        'query': 'Do I win with £350 cash and 3 shares at £100 each?',
        'structured': 'evaluate_win_condition(player_state)',
        'facts': 'cash: £350, shares: 3×£100, net_worth: £650, win_target: £600',
        'reasoning': [
            'Step 1: Parse query → Check win condition evaluation',
            'Step 2: Calculate net worth → £350 + (3 × £100) = £650',
            'Step 3: Load win target → defaultWinTarget: £600 from ontology',
            'Step 4: Compare values → £650 >= £600 ✓',
            'Step 5: Apply win rule → Net worth exceeds target',
            'Step 6: Conclusion → Player meets win condition'
        ],
        'sources': ['Flutter Game Rules 14', 'Win Condition Ontology'],
        'answer': 'YES - You win with net worth £650 > £600'
    }
};

// Main demo function
function runQuery(queryType) {
    const output = document.getElementById('demo-output');
    const demo = demoQueries[queryType];
    
    output.innerHTML = '<span style="color: #cc785c;">Processing query...</span>';
    
    setTimeout(() => {
        let result = `
<span style="color: #cc785c;">EXPERT SYSTEM QUERY EXECUTION</span>
<span style="color: #87ceeb;">═══════════════════════════════════</span>

<span style="color: #ffa07a;">Natural Language Input:</span>
"${demo.query}"

<span style="color: #ffa07a;">Structured Query:</span>
${demo.structured}

<span style="color: #ffa07a;">Ontology Facts:</span>
${demo.facts}

<span style="color: #ffa07a;">Reasoning Chain:</span>
${demo.reasoning.map(step => `  ${step}`).join('\n')}

<span style="color: #ffa07a;">Rule Sources:</span>
${demo.sources.map(source => `  • ${source}`).join('\n')}

<span style="color: #98d982;">FINAL ANSWER:</span>
<span style="color: #98d982; font-weight: bold;">${demo.answer}</span>

<span style="color: #dda0dd;">Confidence: 100% (Deterministic)</span>
<span style="color: #dda0dd;">Trace ID: ES_${Date.now()}</span>
        `;
        
        output.innerHTML = result;
    }, 1500);
}

// Clear demo output
function clearOutput() {
    document.getElementById('demo-output').innerHTML = 'Click a query button above to see the expert system in action...';
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Expert Systems Research page loaded');
    
    // Add any initialization logic here
    initializePageFeatures();
});

// Initialize page features
function initializePageFeatures() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add copy-to-clipboard functionality for code blocks
    addCodeBlockCopyFeature();
}

// Add copy functionality to code blocks
function addCodeBlockCopyFeature() {
    document.querySelectorAll('.code-block').forEach(codeBlock => {
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.className = 'copy-btn';
        copyButton.style.cssText = `
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: #cc785c;
            color: #f5f5f5;
            border: none;
            padding: 0.5rem;
            border-radius: 3px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        // Make code block container relative
        codeBlock.style.position = 'relative';
        codeBlock.appendChild(copyButton);
        
        // Show/hide copy button on hover
        codeBlock.addEventListener('mouseenter', () => {
            copyButton.style.opacity = '1';
        });
        
        codeBlock.addEventListener('mouseleave', () => {
            copyButton.style.opacity = '0';
        });
        
        // Copy functionality
        copyButton.addEventListener('click', () => {
            const text = codeBlock.textContent;
            navigator.clipboard.writeText(text).then(() => {
                copyButton.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                }, 1000);
            });
        });
    });
}

// Utility function for analytics (placeholder)
function trackPageInteraction(action, details) {
    console.log('Page interaction:', action, details);
    // Could integrate with analytics service here
}