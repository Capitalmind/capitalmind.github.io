// Expert Systems Interactive Demonstrations
// Advanced interactive demos for expert system queries and rule validation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize page functionality
    initializeExpertSystemsPage();
    
    // Apply syntax highlighting to existing code blocks
    applySyntaxHighlighting();
});

function initializeExpertSystemsPage() {
    console.log('Expert Systems page initialized');
    
    // Add smooth scrolling for TOC links
    initializeSmoothScrolling();
    
    // Initialize interactive demo functionality
    initializeDemoSystem();
    
    // Add hover effects to cards
    addCardHoverEffects();
}

function initializeSmoothScrolling() {
    const tocLinks = document.querySelectorAll('.toc a[href^="#"]');
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function addCardHoverEffects() {
    const useCase = document.querySelectorAll('.use-case');
    const toolCards = document.querySelectorAll('.tool-card');
    
    [...useCase, ...toolCards].forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 25px rgba(204, 120, 92, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
}

// Interactive Demo System
function initializeDemoSystem() {
    // Initialize demo output area
    const demoOutput = document.getElementById('demo-output');
    if (demoOutput) {
        demoOutput.textContent = 'Click a query button above to see the expert system in action...';
    }
}

function runQuery(queryType) {
    const demoOutput = document.getElementById('demo-output');
    if (!demoOutput) return;
    
    // Show loading indicator
    demoOutput.innerHTML = '<span class="loading-indicator"></span>Processing query...';
    
    // Simulate processing time
    setTimeout(() => {
        let result = '';
        
        switch(queryType) {
            case 'gst':
                result = generateSharePurchaseDemo();
                break;
            case 'building':
                result = generatePositionEffectDemo();
                break;
            case 'game':
                result = generateWinConditionDemo();
                break;
            default:
                result = 'Unknown query type.';
        }
        
        demoOutput.innerHTML = result;
        demoOutput.classList.add('fade-in');
    }, 1500);
}

function generateSharePurchaseDemo() {
    return `🔍 EXPERT SYSTEM QUERY EXECUTION
═══════════════════════════════════

Natural Language Input:
"Can Player 1 buy 200 shares of Fairfit Furniture?"

Structured Query:
validate_action(buy_shares, {company: "yellow", quantity: 2})

Ontology Facts:
player_cash: £300, share_price: £120, brokerage: £5, available: 8 certificates

Reasoning Chain:
Step 1: Parse query → Validate share purchase action
Step 2: Load ontology → Fairfit Furniture (yellow) company data
Step 3: Check company active → isActive: true ✓
Step 4: Check availability → 8 available >= 2 requested ✓
Step 5: Calculate cost → (£120 × 2) + £5 = £245 total
Step 6: Check funds → £300 available >= £245 needed ✓
Step 7: All validation rules passed → Transaction approved

Rule Sources:
• Flutter Game Rules 8b-8e
• Company Ontology v1.0

FINAL ANSWER:
YES - Share purchase approved

Confidence: 100% (Deterministic)
Trace ID: ES_${Date.now()}`;
}

function generatePositionEffectDemo() {
    return `🔍 EXPERT SYSTEM QUERY EXECUTION
═══════════════════════════════════

Natural Language Input:
"What happens if I land on position 185?"

Structured Query:
evaluate_special_position(185)

Ontology Facts:
position: 185, effectType: "15% dividend zone", ruleReference: "Rule 11"

Reasoning Chain:
Step 1: Parse query → Check special position effects
Step 2: Load ontology → Position effects mapping
Step 3: Look up position 185 → 15% dividend zone found
Step 4: Get effect type → "dividend_payout" effect triggered
Step 5: Apply rule → £15 dividend + parent peg up 1
Step 6: Reference rule → Rule 11 from game ontology

Rule Sources:
• Flutter Game Rules 11
• Position Effects Ontology

FINAL ANSWER:
£15 dividend per 100 shares + parent peg moves up 1 space

Confidence: 100% (Deterministic)
Trace ID: ES_${Date.now()}`;
}

function generateWinConditionDemo() {
    return `🔍 EXPERT SYSTEM QUERY EXECUTION
═══════════════════════════════════

Natural Language Input:
"Do I win with £350 cash and 3 shares at £100 each?"

Structured Query:
evaluate_win_condition(player_state)

Ontology Facts:
cash: £350, shares: 3×£100, net_worth: £650, win_target: £600

Reasoning Chain:
Step 1: Parse query → Check win condition evaluation
Step 2: Calculate net worth → £350 + (3 × £100) = £650
Step 3: Load win target → defaultWinTarget: £600 from ontology
Step 4: Compare values → £650 >= £600 ✓
Step 5: Apply win rule → Net worth exceeds target
Step 6: Conclusion → Player meets win condition

Rule Sources:
• Flutter Game Rules 14
• Win Condition Ontology

FINAL ANSWER:
YES - You win with net worth £650 > £600

Confidence: 100% (Deterministic)
Trace ID: ES_${Date.now()}`;
}

function clearOutput() {
    const demoOutput = document.getElementById('demo-output');
    if (demoOutput) {
        demoOutput.textContent = 'Click a query button above to see the expert system in action...';
        demoOutput.classList.remove('fade-in');
    }
}

// Enhanced Syntax Highlighting Function
function applySyntaxHighlighting() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        // Get raw text content, not innerHTML to avoid double-processing
        const code = block.textContent || block.innerText;
        const highlightedCode = highlightSyntax(code);
        block.innerHTML = highlightedCode;
        
        // Add copy-to-clipboard functionality
        addCopyButton(block);
    });
}

function addCopyButton(codeBlock) {
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    copyButton.className = 'copy-btn';
    
    // Make code block container relative
    codeBlock.style.position = 'relative';
    codeBlock.appendChild(copyButton);
    
    // Copy functionality
    copyButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const text = codeBlock.textContent || codeBlock.innerText;
        navigator.clipboard.writeText(text).then(() => {
            copyButton.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                copyButton.innerHTML = '<i class="fas fa-copy"></i>';
            }, 1000);
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            copyButton.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                copyButton.innerHTML = '<i class="fas fa-copy"></i>';
            }, 1000);
        });
    });
}

function highlightSyntax(code) {
    // Enhanced syntax highlighting with more comprehensive patterns
    let highlighted = code;
    
    // Preserve HTML entities first
    highlighted = highlighted.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    
    // Comments (# comments and // comments)
    highlighted = highlighted.replace(
        /(#[^\n]*|\/\/[^\n]*)/g, 
        '<span class="comment">$1</span>'
    );
    
    // Multi-line strings and docstrings
    highlighted = highlighted.replace(
        /("""[\s\S]*?""")/g,
        '<span class="string">$1</span>'
    );
    
    // Keywords
    const keywords = [
        'class', 'def', 'if', 'else', 'elif', 'for', 'while', 'import', 'from', 'as',
        'return', 'try', 'except', 'finally', 'with', 'lambda', 'yield', 'global',
        'nonlocal', 'assert', 'break', 'continue', 'pass', 'in', 'is', 'not', 'and', 'or'
    ];
    
    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b(${keyword})\\b(?!['"\\w])`, 'g');
        highlighted = highlighted.replace(regex, '<span class="keyword">$1</span>');
    });
    
    // Booleans and None
    highlighted = highlighted.replace(
        /\b(True|False|None|true|false|null)\b/g, 
        '<span class="keyword">$1</span>'
    );
    
    // Strings (single and double quotes) - improved pattern
    highlighted = highlighted.replace(
        /(["'])(?:(?=(\\?))\2.)*?\1/g,
        '<span class="string">$1</span>'
    );
    
    // Numbers (integers and floats)
    highlighted = highlighted.replace(
        /\b(\d+\.?\d*)\b/g,
        '<span class="number">$1</span>'
    );
    
    // Function definitions and calls
    highlighted = highlighted.replace(
        /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g,
        '<span class="function">$1</span>'
    );
    
    // Class names (capitalized words)
    highlighted = highlighted.replace(
        /\b([A-Z][a-zA-Z0-9_]*)\b/g,
        '<span class="class-name">$1</span>'
    );
    
    // Variables (self, cls, common patterns)
    highlighted = highlighted.replace(
        /\b(self|cls)\b/g,
        '<span class="variable">$1</span>'
    );
    
    // JSON/Object keys
    highlighted = highlighted.replace(
        /"(@?\w+)"(?=\s*:)/g,
        '<span class="string">"<span class="variable">$1</span>"</span>'
    );
    
    return highlighted;
}

// Initialize syntax highlighting on page load
document.addEventListener('DOMContentLoaded', applySyntaxHighlighting);