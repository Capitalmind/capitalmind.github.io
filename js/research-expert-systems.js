// Expert Systems Interactive Demonstrations - js/research-expert-systems.js
// Advanced interactive demos for expert system queries and rule validation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize page functionality
    initializeExpertSystemsPage();
    
    // Apply syntax highlighting to existing code blocks
    applySyntaxHighlighting();
});

function initializeExpertSystemsPage() {
    console.log('Expert Systems Research page initialized');
    
    // Add smooth scrolling for TOC links
    initializeSmoothScrolling();
    
    // Initialize interactive demo functionality
    initializeDemoSystem();
    
    // Add hover effects to cards
    addCardHoverEffects();
    
    // Add copy functionality to code blocks
    addCodeBlockCopyFeature();
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

// Demo Queries Data
const demoQueries = {
    'gst': {
        'query': 'Can Player 1 buy 200 shares of Fairfit Furniture?',
        'structured': 'validate_action(buy_shares, {company: "fairfitFurniture", quantity: 200})',
        'facts': 'player_cash: £300, share_price: £120, brokerage: £5, available: 8 certificates',
        'reasoning': [
            '🔍 Step 1: Parse query → Validate share purchase action',
            '📋 Step 2: Load ontology → Fairfit Furniture (yellow) company data',
            '✅ Step 3: Check company active → isActive: true ✓',
            '✅ Step 4: Check availability → 8 certificates available, 2 needed ✓', 
            '💰 Step 5: Calculate cost → (£120 × 2) + £5 = £245 total',
            '💳 Step 6: Check funds → £300 available >= £245 needed ✓',
            '🎯 Step 7: All validation rules passed → Transaction approved'
        ],
        'sources': ['Flutter Game Rules 8b-8e', 'Company Ontology fairfitFurniture', 'Trading Phase Validation'],
        'answer': 'YES - Share purchase approved',
        'confidence': '100% (Deterministic)',
        'trace_id': `ES_${Date.now()}`
    },
    'building': {
        'query': 'What happens when Atomic Airways reaches position 185?',
        'structured': 'evaluate_special_position(185, "atomicAirways")',
        'facts': 'position: 185, company: atomicAirways, dividendRange: 180-189',
        'reasoning': [
            '🔍 Step 1: Parse query → Check dividend position effects',
            '📋 Step 2: Load ontology → Dividend rules mapping',
            '🎯 Step 3: Position 185 → 15% dividend zone (180-189)',
            '💰 Step 4: Apply Rule 11 → £15 per 100 shares + parent peg up 1',
            '📈 Step 5: Calculate player impacts → Dividends distributed',
            '🔄 Step 6: Update market state → Parent peg moves up'
        ],
        'sources': ['Flutter Game Rules 11', 'Dividend Rules Ontology', 'Position Effects System'],
        'answer': '£15 dividend per 100 shares + parent peg moves up 1 space',
        'confidence': '100% (Deterministic)',
        'trace_id': `ES_${Date.now()}`
    },
    'game': {
        'query': 'Check if Player 2 has won with £180 cash and shares worth £470',
        'structured': 'evaluate_win_condition(player2_state)',
        'facts': 'cash: £180, share_value: £470, net_worth: £650, win_target: £600',
        'reasoning': [
            '🔍 Step 1: Parse query → Win condition evaluation',
            '💰 Step 2: Calculate net worth → £180 + £470 = £650',
            '📋 Step 3: Load win target → defaultWinTarget: £600 from ontology',
            '✅ Step 4: Compare values → £650 >= £600 ✓',
            '🏆 Step 5: Apply win rule → Net worth exceeds target',
            '🎯 Step 6: Update game state → Player 2 WINNER'
        ],
        'sources': ['Flutter Game Rules 14', 'Win Condition Ontology netWorthWin', 'Game State Manager'],
        'answer': 'YES - Player 2 WINS with net worth £650 > £600 target',
        'confidence': '100% (Deterministic)',
        'trace_id': `ES_${Date.now()}`
    }
};

function runQuery(queryType) {
    const demoOutput = document.getElementById('demo-output');
    if (!demoOutput) return;
    
    // Show loading indicator
    demoOutput.innerHTML = '<span class="loading-indicator"></span><span style="color: #cc785c;">Processing expert system query...</span>';
    
    // Simulate processing time for realistic demo
    setTimeout(() => {
        const demo = demoQueries[queryType];
        if (!demo) {
            demoOutput.textContent = 'Unknown query type.';
            return;
        }
        
        let result = `<strong style="color: #cc785c;">🔍 EXPERT SYSTEM QUERY EXECUTION</strong>
<span style="color: #87ceeb;">═══════════════════════════════════════════════════════</span>

<strong style="color: #ffa07a;">💬 Natural Language Input:</strong>
"${demo.query}"

<strong style="color: #ffa07a;">⚙️ Structured Query:</strong>
${demo.structured}

<strong style="color: #ffa07a;">📊 Ontology Facts:</strong>
${demo.facts}

<strong style="color: #ffa07a;">🧠 Expert System Reasoning Chain:</strong>
${demo.reasoning.map(step => `  ${step}`).join('\n')}

<strong style="color: #ffa07a;">📚 Knowledge Sources:</strong>
${demo.sources.map(source => `  📄 ${source}`).join('\n')}

<strong style="color: #98d982;">🎯 FINAL ANSWER:</strong>
<strong style="color: #98d982;">${demo.answer}</strong>

<strong style="color: #dda0dd;">📋 System Metadata:</strong>
<span style="color: #dda0dd;">• Confidence: ${demo.confidence}</span>
<span style="color: #dda0dd;">• Trace ID: ${demo.trace_id}</span>
<span style="color: #dda0dd;">• Processing: Zero-error rule enforcement</span>
<span style="color: #dda0dd;">• Audit: Complete reasoning chain captured</span>`;
        
        demoOutput.innerHTML = result;
        demoOutput.classList.add('fade-in');
    }, 1800);
}

function clearOutput() {
    const demoOutput = document.getElementById('demo-output');
    if (demoOutput) {
        demoOutput.textContent = 'Click a query button above to see the expert system in action...';
        demoOutput.classList.remove('fade-in');
    }
}

// Ontology Diagram Function
window.openOntologyDiagram = function() {
    // Load local mermaid file and render
    loadOntologyMermaid().then(mermaidContent => {
        createOntologyModal(mermaidContent);
    }).catch(error => {
        console.error('Failed to load ontology diagram:', error);
        showDiagramError();
    });
}

async function loadOntologyMermaid() {
    // Embedded mermaid content to avoid CORS issues when opening file directly
    const mermaidContent = `graph TB
    %% Core Game Classes
    GameState[GameState<br/>📊 Game Instance<br/>2-6 Players]
    Player[Player<br/>👤 Game Participant]
    Company[Company<br/>🏢 Stock Company]
    Broker[Broker<br/>🏦 Share Manager<br/>10 shares/company]
    
    %% Initialization Classes
    GameInitialization[Game Setup<br/>🎯 8-Step Process]
    TurnOrderSystem[Turn Order<br/>🔄 Color Sequence]
    DiceSystem[Dice System<br/>🎲 Number + Color]
    
    %% Game Flow Classes
    TurnPhase[TurnPhase<br/>⏱️ Turn Phases]
    TradingPhase[Trading Phase<br/>💰 Buy/Sell/Hold<br/>Before Dice Only]
    DiceRollingPhase[Dice Rolling<br/>🎲 Number + Color]
    PegMovementPhase[Peg Movement<br/>🔄 Move by Number]
    ActionSequence[Turn Sequence<br/>📋 4-Step Process]
    
    %% Player Management
    PlayerState[Player State<br/>👤 Cash + Shares]
    TradingRules[Trading Rules<br/>📜 When to Buy/Sell]
    
    %% Special Game Elements
    SpecialPosition[SpecialPosition<br/>⭐ Board Positions]
    MarketCard[MarketCard<br/>📋 Event Cards]
    CardEffect[CardEffect<br/>⚡ Card Actions]
    
    %% Game Events
    RoundEndEvent[RoundEndEvent<br/>🏁 Round Complete]
    BonusSharesEvent[BonusSharesEvent<br/>💎 Bonus Shares]
    BankruptcyEvent[BankruptcyEvent<br/>💥 Company Bankrupt]
    
    %% Game Rules
    DividendRule[DividendRule<br/>💵 Dividend Calc]
    WinCondition[WinCondition<br/>🏆 Victory Rules]
    ValidationRule[ValidationRule<br/>✅ State Validation]
    
    %% Game Actions
    GameAction[GameAction<br/>🎯 Player Actions]
    BuySharesAction[BuySharesAction<br/>📈 Purchase Shares]
    SellSharesAction[SellSharesAction<br/>📉 Sell Shares]
    RollDiceAction[RollDiceAction<br/>🎲 Dice Roll]
    
    %% Specific Companies
    FairfitFurniture[Fairfit Furniture<br/>🪑 Yellow Company]
    AtomicAirways[Atomic Airways<br/>✈️ Red Company]
    EasygoingEngineering[Easygoing Engineering<br/>⚙️ Blue Company]
    DiggersDiamond[Diggers Diamond<br/>💎 Green Company]
    BluebottleBrewery[Bluebottle Brewery<br/>🍺 Black Company]
    CaptivatingCosmetics[Captivating Cosmetics<br/>💄 White Company]
    
    %% Special Positions
    SlumpPosition[Slump Position<br/>📉 Fall 6 Spaces]
    MarketNewsPosition[Market News<br/>📰 Draw Card]
    MMarkerPositions[M-Marker Positions<br/>➡️ Go to Market News]
    
    %% Card Effects
    TravelerAdvance[Traveler Advance<br/>⬆️ Move Up]
    TravelerRetreat[Traveler Retreat<br/>⬇️ Move Down]
    ParentMove[Parent Move<br/>🔄 Share Price Change]
    DividendPayout[Dividend Payout<br/>💰 Cash Payment]
    AntiSlumpProtection[Anti-Slump<br/>🛡️ Protection Card]
    
    %% Dividend Rules
    TopBoardDividend[Top Board<br/>20% + 2 Up]
    FifteenPercentDividend[Position 180-189<br/>15% + 1 Up]
    TenPercentDividend[Position 170-179<br/>10% + 1 Up]
    FivePercentDividend[Position 160-169<br/>5% + 1 Up]
    
    %% Win Conditions
    NetWorthWin[Net Worth Win<br/>💰 £600+ Total]
    SurvivalWin[Survival Win<br/>🏃 Last Company]
    
    %% Relationships
    GameState -->|hasPlayers| PlayerState
    GameState -->|hasCompanies| Company
    GameState -->|hasBroker| Broker
    GameState -.->|currentPhase| TurnPhase
    GameState -->|initializesWith| GameInitialization
    GameState -->|usesTurnOrder| TurnOrderSystem
    GameState -->|usesDice| DiceSystem
    
    PlayerState -->|ownsShares| Company
    PlayerState -->|followsRules| TradingRules
    Broker -->|managesShares| Company
    
    GameInitialization -->|establishes| TurnOrderSystem
    GameInitialization -->|distributes| PlayerState
    GameInitialization -->|issues| Broker
    
    TurnPhase -->|subClassOf| TradingPhase
    TurnPhase -->|subClassOf| DiceRollingPhase
    TurnPhase -->|subClassOf| PegMovementPhase
    TurnPhase -->|follows| ActionSequence
    
    TradingPhase -->|governedBy| TradingRules
    DiceRollingPhase -->|uses| DiceSystem
    
    Company -->|instance| FairfitFurniture
    Company -->|instance| AtomicAirways
    Company -->|instance| EasygoingEngineering
    Company -->|instance| DiggersDiamond
    Company -->|instance| BluebottleBrewery
    Company -->|instance| CaptivatingCosmetics
    
    SpecialPosition -->|instance| SlumpPosition
    SpecialPosition -->|instance| MarketNewsPosition
    SpecialPosition -->|instance| MMarkerPositions
    
    CardEffect -->|instance| TravelerAdvance
    CardEffect -->|instance| TravelerRetreat
    CardEffect -->|instance| ParentMove
    CardEffect -->|instance| DividendPayout
    CardEffect -->|instance| AntiSlumpProtection
    
    MarketCard -->|hasEffect| CardEffect
    
    DividendRule -->|instance| TopBoardDividend
    DividendRule -->|instance| FifteenPercentDividend
    DividendRule -->|instance| TenPercentDividend
    DividendRule -->|instance| FivePercentDividend
    
    WinCondition -->|instance| NetWorthWin
    WinCondition -->|instance| SurvivalWin
    
    GameAction -->|subClassOf| BuySharesAction
    GameAction -->|subClassOf| SellSharesAction
    GameAction -->|subClassOf| RollDiceAction
    
    %% Game Flow
    GameInitialization -.->|leads to| TradingPhase
    TradingPhase -.->|nextPhase| DiceRollingPhase
    DiceRollingPhase -.->|nextPhase| PegMovementPhase
    PegMovementPhase -.->|checkPosition| SpecialPosition
    SpecialPosition -.->|mayTrigger| RoundEndEvent
    RoundEndEvent -.->|mayTrigger| BonusSharesEvent
    RoundEndEvent -.->|mayTrigger| BankruptcyEvent
    RoundEndEvent -.->|checkCondition| WinCondition
    
    %% Setup Flow
    GameInitialization -.->|step1| TurnOrderSystem
    GameInitialization -.->|step2| PlayerState  
    GameInitialization -.->|step3| Broker
    
    %% Special Triggers
    SlumpPosition -.->|canPrevent| AntiSlumpProtection
    MarketNewsPosition -.->|drawCard| MarketCard
    
    %% Turn Order Flow
    TurnOrderSystem -.->|determines| PlayerState
    ActionSequence -.->|governs| TradingPhase
    
    %% Validation Flow
    GameState -.->|validates| ValidationRule
    GameAction -.->|validates| ValidationRule
    
    %% Color Coding
    classDef gameCore fill:#e1f5fe,stroke:#01579b,stroke-width:3px
    classDef initialization fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px
    classDef turnFlow fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    classDef companies fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    classDef special fill:#fff3e0,stroke:#e65100,stroke-width:2px
    classDef events fill:#ffebee,stroke:#c62828,stroke-width:2px
    classDef rules fill:#f1f8e9,stroke:#33691e,stroke-width:2px
    classDef actions fill:#fce4ec,stroke:#880e4f,stroke-width:2px
    classDef playerMgmt fill:#f9fbe7,stroke:#827717,stroke-width:2px
    
    class GameState,Company,Broker gameCore
    class GameInitialization,TurnOrderSystem,DiceSystem initialization
    class TurnPhase,TradingPhase,DiceRollingPhase,PegMovementPhase,ActionSequence turnFlow
    class FairfitFurniture,AtomicAirways,EasygoingEngineering,DiggersDiamond,BluebottleBrewery,CaptivatingCosmetics companies
    class SpecialPosition,SlumpPosition,MarketNewsPosition,MMarkerPositions,MarketCard,CardEffect special
    class RoundEndEvent,BonusSharesEvent,BankruptcyEvent events
    class DividendRule,WinCondition,ValidationRule,TopBoardDividend,FifteenPercentDividend,TenPercentDividend,FivePercentDividend,NetWorthWin,SurvivalWin rules
    class GameAction,BuySharesAction,SellSharesAction,RollDiceAction,TravelerAdvance,TravelerRetreat,ParentMove,DividendPayout,AntiSlumpProtection actions
    class Player,PlayerState,TradingRules playerMgmt`;
    
    return Promise.resolve(mermaidContent);
}

function createOntologyModal(mermaidContent) {
    // Create modal for mermaid diagram
    const modal = document.createElement('div');
    modal.className = 'ontology-modal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeOntologyModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-sitemap"></i> Flutter Game Ontology - Complete Visual Map</h3>
                <button class="modal-close" onclick="closeOntologyModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="mermaid-container">
                    <div id="mermaid-diagram" class="mermaid">
                        ${mermaidContent}
                    </div>
                </div>
                <div class="diagram-details">
                    <h4><i class="fas fa-info-circle"></i> Ontology Overview</h4>
                    <ul>
                        <li><strong>60+ Entities:</strong> Complete game representation</li>
                        <li><strong>8 Entity Categories:</strong> Core, Initialization, Turn Flow, Companies, Special, Events, Rules, Actions</li>
                        <li><strong>Color Coded:</strong> Each category has distinct visual styling</li>
                        <li><strong>Full Relationships:</strong> All connections between entities mapped</li>
                        <li><strong>Rule Enforcement:</strong> Every game rule encoded as formal logic</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    // Add comprehensive modal styles with mermaid support
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .ontology-modal {
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
        }
        
        .modal-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 10000;
        }
        
        .modal-content {
            background: #262725;
            border-radius: 15px;
            max-width: 95vw;
            max-height: 95vh;
            width: 1200px;
            border: 1px solid #3a3a3a;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            position: relative;
            z-index: 10001;
            overflow: hidden;
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
            padding: 0;
            max-height: 80vh;
            overflow-y: auto;
        }
        
        .mermaid-container {
            background: #f5f5f5;
            border-radius: 8px;
            margin: 1rem;
            padding: 1rem;
            min-height: 600px;
            overflow: auto;
        }
        
        #mermaid-diagram {
            width: 100%;
            min-height: 500px;
        }
        
        .diagram-details {
            padding: 1.5rem;
            background: #1a1a1a;
            margin: 1rem;
            border-radius: 8px;
            border-left: 4px solid #cc785c;
        }
        
        .diagram-details h4 {
            color: #cc785c;
            margin-bottom: 1rem;
        }
        
        .diagram-details ul {
            margin: 0;
            padding-left: 1.5rem;
        }
        
        .diagram-details li {
            margin: 0.5rem 0;
            color: #f5f5f5;
        }
        
        .diagram-loading {
            text-align: center;
            padding: 2rem;
            color: #cc785c;
        }
        
        .diagram-error {
            text-align: center;
            padding: 2rem;
            color: #ff6b6b;
            background: #2a1a1a;
            border-radius: 8px;
            margin: 1rem;
        }
    `;
    
    document.head.appendChild(modalStyles);
    document.body.appendChild(modal);
    
    // Load Mermaid library if not already loaded
    if (!window.mermaid) {
        loadMermaidLibrary().then(() => {
            renderMermaidDiagram();
            showModal();
        });
    } else {
        renderMermaidDiagram();
        showModal();
    }
    
    function renderMermaidDiagram() {
        // Initialize mermaid with custom config
        window.mermaid.initialize({
            startOnLoad: false,
            theme: 'base',
            themeVariables: {
                primaryColor: '#cc785c',
                primaryTextColor: '#262725',
                primaryBorderColor: '#b8704a',
                lineColor: '#3a3a3a',
                secondaryColor: '#f5f5f5',
                tertiaryColor: '#e8d5c4'
            }
        });
        
        // Render the diagram
        window.mermaid.render('ontology-svg', mermaidContent).then(result => {
            document.getElementById('mermaid-diagram').innerHTML = result.svg;
        }).catch(error => {
            console.error('Mermaid rendering error:', error);
            showDiagramError();
        });
    }
    
    function showModal() {
        // Fade in
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

function loadMermaidLibrary() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10.6.1/dist/mermaid.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function showDiagramError() {
    const modal = document.querySelector('.ontology-modal');
    if (modal) {
        const mermaidContainer = modal.querySelector('.mermaid-container');
        mermaidContainer.innerHTML = `
            <div class="diagram-error">
                <h4><i class="fas fa-exclamation-triangle"></i> Diagram Loading Error</h4>
                <p>Unable to load the ontology diagram. Please ensure the <code>game-ontology.mermaid</code> file is available in the root directory.</p>
                <p>The diagram shows the complete Flutter Stock Exchange game ontology with 60+ interconnected entities representing every aspect of the game system.</p>
            </div>
        `;
    }
    
    // Close on escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeOntologyModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

window.closeOntologyModal = function() {

    const modal = document.querySelector('.ontology-modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Add copy functionality to code blocks
function addCodeBlockCopyFeature() {
    document.querySelectorAll('.code-block').forEach(codeBlock => {
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.className = 'copy-btn';
        
        // Make code block container relative
        codeBlock.style.position = 'relative';
        codeBlock.appendChild(copyButton);
        
        // Copy functionality
        copyButton.addEventListener('click', () => {
            const text = codeBlock.textContent;
            navigator.clipboard.writeText(text).then(() => {
                copyButton.innerHTML = '<i class="fas fa-check"></i>';
                copyButton.style.background = '#4ecdc4';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                    copyButton.style.background = '#cc785c';
                }, 1500);
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
                }, 1500);
            });
        });
    });
}

// Enhanced Syntax Highlighting Function
function applySyntaxHighlighting() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        // Skip if already processed
        if (block.classList.contains('highlighted')) return;
        
        // Get the text content to avoid HTML conflicts
        const code = block.textContent || block.innerText;
        const highlightedCode = highlightSyntax(code);
        block.innerHTML = highlightedCode;
        block.classList.add('highlighted');
    });
}

function highlightSyntax(code) {
    // Simple and robust syntax highlighting for JSON-LD code
    let highlighted = code;
    
    // 1. Comments (# lines) - must be first 
    highlighted = highlighted.replace(
        /(#.*)/g, 
        '<span class="comment">$1</span>'
    );
    
    // 2. Strings in double quotes
    highlighted = highlighted.replace(
        /("(?:[^"\\]|\\.)*")/g,
        '<span class="string">$1</span>'
    );
    
    // 3. Numbers 
    highlighted = highlighted.replace(
        /\b(\d+(?:\.\d+)?)\b/g,
        '<span class="number">$1</span>'
    );
    
    // 4. Boolean and null values
    highlighted = highlighted.replace(
        /\b(true|false|null)\b/g,
        '<span class="keyword">$1</span>'
    );
    
    return highlighted;
}

// Track user interactions for analytics
function trackPageInteraction(action, details) {
    console.log('Expert Systems interaction:', action, details);
    
    // Could integrate with analytics service
    if (typeof gtag !== 'undefined') {
        gtag('event', 'expert_systems_interaction', {
            'action': action,
            'details': details,
            'page': 'expert-systems-research'
        });
    }
}

// Track demo usage
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') && e.target.onclick) {
        const buttonText = e.target.textContent.trim();
        trackPageInteraction('demo_query', buttonText);
    }
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Expert Systems Research page fully loaded');
    trackPageInteraction('page_loaded', 'expert-systems-research');
});
