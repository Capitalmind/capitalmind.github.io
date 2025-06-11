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
    return `<strong>🔍 EXPERT SYSTEM QUERY: Share Purchase Validation</strong>

<strong>User Query:</strong> "Can Player 1 buy 200 shares of Fairfit Furniture?"

<strong>System Processing:</strong>
┌─ Loading game ontology...
├─ Parsing player state: Player 1
├─ Target company: Fairfit Furniture (ID: fairfitFurniture)
└─ Requested quantity: 200 shares

<strong>🔍 Rule Chain Validation:</strong>

<strong>Rule 1: Company Active Status</strong>
✓ Query ontology: fairfitFurniture.isActive = true
✓ PASSED: Company is active for trading

<strong>Rule 2: Certificate Availability</strong>
✓ Query broker: availableCertificates = 8 certificates
✓ Requested: 2 certificates (200 shares ÷ 100 per certificate)
✓ PASSED: Sufficient shares available

<strong>Rule 3: Player Cash Validation</strong>
✓ Share price: £120 (current parentPosition)
✓ Brokerage fee: £5 (from game ontology)
✓ Total cost: (£120 × 2) + £5 = £245
✓ Player cash: £300
✓ PASSED: Player has sufficient funds

<strong>🎯 FINAL DECISION:</strong>
✅ <strong>PURCHASE APPROVED</strong>

<strong>Reasoning Chain:</strong>
1. Company validation: ACTIVE ✓
2. Inventory check: AVAILABLE ✓  
3. Financial validation: SUFFICIENT ✓
4. Rule compliance: COMPLETE ✓

<strong>Transaction Details:</strong>
• Cost: £245 (£240 shares + £5 brokerage)
• Player cash after: £55
• New shareholding: 200 shares Fairfit Furniture

<em>All validations passed with 100% certainty.
Zero-error rule enforcement complete.</em>`;
}

function generatePositionEffectDemo() {
    return `<strong>🔍 EXPERT SYSTEM QUERY: Dividend Position Analysis</strong>

<strong>User Query:</strong> "What happens when Atomic Airways reaches position 185?"

<strong>System Processing:</strong>
┌─ Loading game rules ontology...
├─ Target company: Atomic Airways
├─ Target position: 185
└─ Analyzing Rule 11 (Dividend Payouts)

<strong>🔍 Position Classification:</strong>

<strong>Rule 11 Analysis:</strong>
Position 185 falls within range: 180-189 (15% dividend zone)

<strong>Ontology Lookup - Dividend Rules:</strong>
┌─ Position: 185
├─ Range: 15% position (180-189)
├─ Dividend per 100 shares: £15
└─ Parent peg movement: Up 1 space

<strong>🎯 SYSTEM RESPONSE:</strong>

<strong>Immediate Effects:</strong>
✓ Dividend Payment: £15 per 100 shares owned
✓ Parent Peg: Moves UP 1 space (current price increases)
✓ Market Impact: Company value rises

<strong>Player Impact Calculation:</strong>
• Players with 100 shares: +£15 dividend
• Players with 200 shares: +£30 dividend
• Players with 300 shares: +£45 dividend

<strong>Market Dynamics:</strong>
• Share price increases by 1 position
• Enhanced company attractiveness
• Positive momentum indicator

<strong>📋 Rule Reference:</strong>
Rule 11: "15% position (180-189) → £15 dividend + parent peg up 1"

<em>Deterministic rule application complete.
All effects calculated with 100% accuracy.</em>`;
}

function generateWinConditionDemo() {
    return `<strong>🔍 EXPERT SYSTEM QUERY: Win Condition Validation</strong>

<strong>User Query:</strong> "Check if Player 2 has won the game"

<strong>System Processing:</strong>
┌─ Loading player state: Player 2
├─ Calculating total portfolio value
├─ Checking win conditions from ontology
└─ Applying Rule 1 (Victory Conditions)

<strong>🔍 Portfolio Analysis:</strong>

<strong>Current Holdings:</strong>
• Cash: £180
• Fairfit Furniture: 200 shares @ £130 = £260
• Atomic Airways: 100 shares @ £140 = £140
• Bluebottle Brewery: 100 shares @ £110 = £110

<strong>Total Value Calculation:</strong>
Cash:     £180
Shares:   £510 (£260 + £140 + £110)
TOTAL:    £690

<strong>🎯 WIN CONDITION CHECK:</strong>

<strong>Ontology Rule:</strong> defaultWinTarget = £600

<strong>Validation:</strong>
✓ Player total: £690
✓ Win threshold: £600
✓ Difference: +£90 (exceeds requirement)

<strong>🏆 FINAL RESULT:</strong>
✅ <strong>VICTORY ACHIEVED!</strong>

<strong>Win Details:</strong>
• Required: £600 total value
• Achieved: £690 total value  
• Margin: £90 over target
• Portfolio composition: 26% cash, 74% shares

<strong>Game State Update:</strong>
• Player 2: WINNER
• Game status: COMPLETE
• Victory type: Standard win condition

<em>Deterministic win validation complete.
Player 2 has officially won the game.</em>`;
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
        z-index: 10;
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
        '<span class="boolean">$1</span>'
    );
    
    // Strings (single and double quotes) - improved pattern
    highlighted = highlighted.replace(
        /(["'])(?:(?=(\\?))\2.)*?\1/g,
        '<span class="string">function highlightSyntax(code) {
    // Enhanced syntax highlighting with more comprehensive patterns
    let highlighted = code;
    
    // Comments (# comments)
    highlighted = highlighted.replace(
        /(#[^\n]*)/g, 
        '<span class="comment">$1</span>'
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
        /\b(True|False|None)\b/g, 
        '<span class="boolean">$1</span>'
    );
    
    // Strings (single and double quotes)
    highlighted = highlighted.replace(
        /(['"])((?:\\.|(?!\1)[^\\])*?)\1/g,
        '<span class="string">$1$2$1</span>'
    );
    
    // Numbers
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
    
    // Variables (self, common patterns)
    highlighted = highlighted.replace(
        /\b(self|cls)\b/g,
        '<span class="variable">$1</span>'
    );
    
    // Built-in functions
    const builtins = [
        'print', 'len', 'range', 'enumerate', 'zip', 'map', 'filter', 'sorted',
        'list', 'dict', 'set', 'tuple', 'str', 'int', 'float', 'bool'
    ];
    
    builtins.forEach(builtin => {
        const regex = new RegExp(`\\b(${builtin})\\b(?=\\()`, 'g');
        highlighted = highlighted.replace(regex, '<span class="builtin">$1</span>');
    });
    
    // Operators
    highlighted = highlighted.replace(
        /(\+|\-|\*|\/|%|==|!=|<=|>=|<|>|=)/g,
        '<span class="operator">$1</span>'
    );
    
    return highlighted;
}</span>'
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
    
    // Built-in functions
    const builtins = [
        'print', 'len', 'range', 'enumerate', 'zip', 'map', 'filter', 'sorted',
        'list', 'dict', 'set', 'tuple', 'str', 'int', 'float', 'bool', 'append'
    ];
    
    builtins.forEach(builtin => {
        const regex = new RegExp(`\\b(${builtin})\\b(?=\\()`, 'g');
        highlighted = highlighted.replace(regex, '<span class="builtin">$1</span>');
    });
    
    // Operators - more comprehensive
    highlighted = highlighted.replace(
        /(\+|\-|\*|\/|%|==|!=|<=|>=|<|>|=(?!=)|&&|\|\||!)/g,
        '<span class="operator">$1</span>'
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