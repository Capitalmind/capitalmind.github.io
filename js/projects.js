// Projects Page JavaScript - js/projects.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize projects page functionality
    initializeProjectsPage();
});

function initializeProjectsPage() {
    // Add hover effects to project bubbles
    addProjectHoverEffects();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Add click tracking for analytics
    initializeAnalytics();
    
    // Initialize default welcome content
    initializeWelcomeContent();
}

function showProject(projectKey) {
    const projects = {
        'flutter': {
            title: 'Flutter Stock Exchange Game - AI/ML Simulation Platform',
            content: `
                <span class="status-badge status-complete">Complete</span>
                <span class="status-badge status-research">Research Platform</span>
                
                <p>A sophisticated digital recreation of the 1966 "Flutter - Stock Exchange Game" transformed into a comprehensive AI/ML training platform for financial decision-making algorithms.</p>

                <h4>🎯 Project Overview</h4>
                <p>This project faithfully recreates the classic 1966 J.W. Spear & Sons board game while serving as a controlled environment for training and testing AI agents in financial decision-making, risk assessment, and strategic trading scenarios.</p>

                <h4>🤖 AI Personality System</h4>
                <p>Features 10 distinct AI personalities modeling different investment strategies:</p>
                <ul>
                    <li><strong>Conservative Investor</strong> - Long-term stability, very low risk (30%)</li>
                    <li><strong>Day Trader</strong> - Frequent small profits, high risk (80%)</li>
                    <li><strong>Aggressive Speculator</strong> - High-risk momentum, very high risk (90%)</li>
                    <li><strong>Contrarian Investor</strong> - Counter-trend trading, medium risk (70%)</li>
                    <li><strong>Value Hunter</strong> - Deep value investing, low risk (40%)</li>
                    <li><strong>Growth Chaser</strong> - Momentum following, high risk (85%)</li>
                </ul>

                <h4>📊 Machine Learning Applications</h4>
                <ul>
                    <li><strong>Reinforcement Learning</strong> - Train agents using Q-learning or policy gradients</li>
                    <li><strong>Neural Networks</strong> - Deep learning for pattern recognition in market states</li>
                    <li><strong>Genetic Algorithms</strong> - Evolve optimal trading strategies</li>
                    <li><strong>Multi-Agent Learning</strong> - Study emergent behaviors in competitive environments</li>
                </ul>

                <h4>🔧 Technical Implementation</h4>
                <div class="tech-stack">
                    <span class="tech-tag">HTML5</span>
                    <span class="tech-tag">JavaScript ES6+</span>
                    <span class="tech-tag">CSS3 Grid</span>
                    <span class="tech-tag">Machine Learning</span>
                    <span class="tech-tag">Game Theory</span>
                    <span class="tech-tag">Financial Modeling</span>
                </div>

                <h4>📈 Research Applications</h4>
                <ul>
                    <li><strong>Behavioral Finance</strong> - Study risk profiles under identical market conditions</li>
                    <li><strong>Algorithm Development</strong> - Benchmark new trading algorithms</li>
                    <li><strong>Educational Simulation</strong> - Demonstrate financial concepts safely</li>
                </ul>

                <h4>🎮 Game Features</h4>
                <ul>
                    <li>✅ Authentic 1966 rules with complete implementation</li>
                    <li>✅ 32-row board layout matching original design</li>
                    <li>✅ Rule 11 compliance for dividend processing</li>
                    <li>✅ Market News system with 24-card deck</li>
                    <li>✅ Real-time visualization and comprehensive logging</li>
                </ul>

                <p>This simulation platform serves as a bridge between theoretical finance and practical algorithm development, providing reproducible experiments with measurable outcomes grounded in established game theory.</p>

                <a href="https://github.com/Capitalmind/flutter-simulation" class="project-link" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i> View Source Code
                </a>
                <a href="#" class="project-link">
                    <i class="fas fa-play"></i> Live Demo
                </a>
                <a href="#" class="project-link">
                    <i class="fas fa-file-pdf"></i> Research Paper
                </a>
            `
        },
        'voice-chatbot': {
            title: 'Voice Chatbot with Auto-Routing',
            content: `
                <span class="status-badge status-active">Active Development</span>
                
                <p>Developing an intelligent voice chatbot with automatic routing capabilities specifically designed for counseling and psychiatry expertise, focusing on mental health applications.</p>

                <h4>🎯 Project Goals</h4>
                <ul>
                    <li><strong>Mental Health Support</strong> - Provide accessible mental health guidance</li>
                    <li><strong>Expert Routing</strong> - Intelligently route conversations to appropriate specialists</li>
                    <li><strong>Voice Interface</strong> - Natural speech interaction for better accessibility</li>
                    <li><strong>Privacy-First</strong> - Secure, confidential conversation handling</li>
                </ul>

                <h4>🔧 Technical Architecture</h4>
                <div class="tech-stack">
                    <span class="tech-tag">Voice Recognition</span>
                    <span class="tech-tag">Natural Language Processing</span>
                    <span class="tech-tag">Auto-Routing</span>
                    <span class="tech-tag">Mental Health AI</span>
                    <span class="tech-tag">Privacy Engineering</span>
                </div>

                <h4>🧠 Intelligence Features</h4>
                <ul>
                    <li><strong>Sentiment Analysis</strong> - Real-time emotional state assessment</li>
                    <li><strong>Crisis Detection</strong> - Automatic escalation for urgent situations</li>
                    <li><strong>Contextual Memory</strong> - Maintain conversation context across sessions</li>
                    <li><strong>Specialist Matching</strong> - Route to counselors, psychiatrists, or crisis intervention</li>
                </ul>

                <h4>🎯 Use Cases</h4>
                <ul>
                    <li>Initial mental health screening and triage</li>
                    <li>24/7 crisis intervention and support</li>
                    <li>Therapy session preparation and follow-up</li>
                    <li>Mental health education and resource provision</li>
                </ul>

                <p>This project addresses the critical need for accessible mental health support by combining advanced AI with human expertise through intelligent routing systems.</p>

                <a href="#" class="project-link">
                    <i class="fas fa-info-circle"></i> Documentation
                </a>
            `
        },
        'txtai-training': {
            title: 'Domain-Specific Training with txtai',
            content: `
                <span class="status-badge status-active">Active Development</span>
                
                <p>Advanced domain-specific data training using structured rule embeddings with txtai for enhanced AI model performance in specialized knowledge domains.</p>

                <h4>🎯 Project Objectives</h4>
                <ul>
                    <li><strong>Domain Expertise</strong> - Train models on specialized knowledge areas</li>
                    <li><strong>Rule-Based Embeddings</strong> - Structured approach to knowledge representation</li>
                    <li><strong>Performance Enhancement</strong> - Improve accuracy for domain-specific queries</li>
                    <li><strong>Scalable Architecture</strong> - Framework for multiple domain applications</li>
                </ul>

                <h4>🔧 Technical Implementation</h4>
                <div class="tech-stack">
                    <span class="tech-tag">txtai</span>
                    <span class="tech-tag">Vector Embeddings</span>
                    <span class="tech-tag">Domain Training</span>
                    <span class="tech-tag">Knowledge Graphs</span>
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">Machine Learning</span>
                </div>

                <h4>📊 Training Methodology</h4>
                <ul>
                    <li><strong>Structured Rules</strong> - Define domain-specific rules and relationships</li>
                    <li><strong>Embedding Generation</strong> - Create high-quality vector representations</li>
                    <li><strong>Similarity Matching</strong> - Advanced similarity algorithms for retrieval</li>
                    <li><strong>Continuous Learning</strong> - Iterative improvement with new domain data</li>
                </ul>

                <h4>🎯 Applications</h4>
                <ul>
                    <li>Legal document analysis and case law research</li>
                    <li>Medical diagnosis support and clinical decision making</li>
                    <li>Financial regulation compliance and risk assessment</li>
                    <li>Technical documentation and knowledge base systems</li>
                </ul>

                <p>This project demonstrates how modern embedding techniques can be enhanced with domain-specific rules to create more accurate and reliable AI systems for specialized applications.</p>

                <a href="#" class="project-link">
                    <i class="fas fa-code"></i> View Implementation
                </a>
            `
        },
        'youtube-synthesis': {
            title: 'YouTube Knowledge Synthesis',
            content: `
                <span class="status-badge status-active">Active Development</span>
                
                <p>Parse YouTube video transcripts to create consolidated knowledge synthesis JSON for information extraction and analysis across large video collections.</p>

                <h4>🎯 Project Overview</h4>
                <ul>
                    <li><strong>Transcript Processing</strong> - Automated extraction and parsing of YouTube transcripts</li>
                    <li><strong>Knowledge Extraction</strong> - Identify key concepts, topics, and insights</li>
                    <li><strong>JSON Synthesis</strong> - Structured data output for analysis and integration</li>
                    <li><strong>Scalable Processing</strong> - Handle large collections of educational content</li>
                </ul>

                <h4>🔧 Technical Pipeline</h4>
                <div class="tech-stack">
                    <span class="tech-tag">YouTube API</span>
                    <span class="tech-tag">Transcript Analysis</span>
                    <span class="tech-tag">Natural Language Processing</span>
                    <span class="tech-tag">Knowledge Graphs</span>
                    <span class="tech-tag">JSON Processing</span>
                    <span class="tech-tag">Data Mining</span>
                </div>

                <h4>📊 Processing Features</h4>
                <ul>
                    <li><strong>Topic Extraction</strong> - Identify main themes and subjects</li>
                    <li><strong>Concept Mapping</strong> - Create relationships between ideas</li>
                    <li><strong>Sentiment Analysis</strong> - Assess tone and perspective</li>
                    <li><strong>Entity Recognition</strong> - Extract people, places, organizations</li>
                    <li><strong>Time-based Indexing</strong> - Link concepts to specific video timestamps</li>
                </ul>

                <h4>🎯 Use Cases</h4>
                <ul>
                    <li>Educational content curation and recommendation</li>
                    <li>Research synthesis across multiple video sources</li>
                    <li>Podcast and lecture analysis for academic purposes</li>
                    <li>Content creator analytics and audience insights</li>
                </ul>

                <p>This system transforms hours of video content into structured, searchable knowledge bases that can be integrated into research workflows and educational platforms.</p>

                <a href="#" class="project-link">
                    <i class="fas fa-database"></i> Data Examples
                </a>
            `
        },
        'traffic-optimization': {
            title: 'Traffic Flow Optimization',
            content: `
                <span class="status-badge status-active">Active Development</span>
                
                <p>Developing traffic flow optimization algorithms using a game engine to simulate and improve real-world traffic patterns through advanced modeling and analysis.</p>

                <h4>🎯 Project Goals</h4>
                <ul>
                    <li><strong>Flow Optimization</strong> - Reduce congestion and improve throughput</li>
                    <li><strong>Real-time Simulation</strong> - Test scenarios in realistic environments</li>
                    <li><strong>Algorithm Development</strong> - Create adaptive traffic management systems</li>
                    <li><strong>Data-Driven Insights</strong> - Evidence-based traffic engineering solutions</li>
                </ul>

                <h4>🔧 Technical Architecture</h4>
                <div class="tech-stack">
                    <span class="tech-tag">Game Engine</span>
                    <span class="tech-tag">Physics Simulation</span>
                    <span class="tech-tag">Optimization Algorithms</span>
                    <span class="tech-tag">Traffic Modeling</span>
                    <span class="tech-tag">Data Visualization</span>
                    <span class="tech-tag">Machine Learning</span>
                </div>

                <h4>🚗 Simulation Features</h4>
                <ul>
                    <li><strong>Vehicle Behavior</strong> - Realistic acceleration, braking, and lane changing</li>
                    <li><strong>Signal Optimization</strong> - Adaptive traffic light timing algorithms</li>
                    <li><strong>Route Planning</strong> - Dynamic routing based on current conditions</li>
                    <li><strong>Incident Modeling</strong> - Simulate accidents, construction, weather effects</li>
                    <li><strong>Multi-modal Transport</strong> - Cars, trucks, buses, pedestrians, cyclists</li>
                </ul>

                <h4>📊 Analysis Capabilities</h4>
                <ul>
                    <li>Queue length and wait time analysis</li>
                    <li>Fuel consumption and emissions modeling</li>
                    <li>Intersection capacity optimization</li>
                    <li>Network-wide flow coordination</li>
                </ul>

                <p>This project combines game engine technology with traffic engineering principles to create a powerful platform for testing and optimizing urban transportation systems.</p>

                <a href="#" class="project-link">
                    <i class="fas fa-play"></i> Simulation Demo
                </a>
            `
        },
        'debt-analysis': {
            title: 'Global Debt Reset Analysis',
            content: `
                <span class="status-badge status-research">Research</span>
                
                <p>Comprehensive economic study analyzing global debt patterns and reset scenarios using data-driven approaches and advanced financial modeling techniques.</p>

                <h4>🎯 Research Objectives</h4>
                <ul>
                    <li><strong>Debt Pattern Analysis</strong> - Identify trends in global sovereign debt</li>
                    <li><strong>Reset Scenario Modeling</strong> - Explore potential debt restructuring outcomes</li>
                    <li><strong>Economic Impact Assessment</strong> - Quantify effects on global markets</li>
                    <li><strong>Policy Recommendations</strong> - Data-driven insights for economic policy</li>
                </ul>

                <h4>🔧 Research Methodology</h4>
                <div class="tech-stack">
                    <span class="tech-tag">Economic Analysis</span>
                    <span class="tech-tag">Financial Modeling</span>
                    <span class="tech-tag">Data Research</span>
                    <span class="tech-tag">Statistical Analysis</span>
                    <span class="tech-tag">Global Markets</span>
                    <span class="tech-tag">Macroeconomics</span>
                </div>

                <h4>📊 Analysis Framework</h4>
                <ul>
                    <li><strong>Historical Analysis</strong> - Study past debt crises and resolutions</li>
                    <li><strong>Current Assessment</strong> - Evaluate present global debt sustainability</li>
                    <li><strong>Scenario Modeling</strong> - Multiple potential reset pathways</li>
                    <li><strong>Impact Simulation</strong> - Economic consequences across sectors</li>
                    <li><strong>Risk Assessment</strong> - Probability analysis of various outcomes</li>
                </ul>

                <h4>🌍 Global Scope</h4>
                <ul>
                    <li>Sovereign debt analysis across major economies</li>
                    <li>Corporate debt sustainability assessment</li>
                    <li>Currency implications and exchange rate effects</li>
                    <li>Geopolitical considerations and trade impacts</li>
                </ul>

                <p>This research provides critical insights into one of the most pressing economic challenges of our time, offering evidence-based analysis for understanding potential global debt restructuring scenarios.</p>

                <a href="#" class="project-link">
                    <i class="fas fa-chart-bar"></i> Research Findings
                </a>
            `
        },
        'arbitrage-system': {
            title: 'Multi-Exchange Arbitrage System',
            content: `
                <span class="status-badge status-active">Active Development</span>
                
                <p>Sophisticated black box arbitrage analysis system operating across 12 exchanges, analyzing two different markets for profitable trading opportunities in real-time.</p>

                <h4>🎯 System Overview</h4>
                <ul>
                    <li><strong>12-Exchange Coverage</strong> - Comprehensive market monitoring</li>
                    <li><strong>Dual Market Analysis</strong> - Two distinct trading environments</li>
                    <li><strong>Real-time Processing</strong> - Low-latency opportunity detection</li>
                    <li><strong>Automated Execution</strong> - Rapid trade placement and management</li>
                </ul>

                <h4>🔧 Technical Architecture</h4>
                <div class="tech-stack">
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">Trading APIs</span>
                    <span class="tech-tag">Real-time Data</span>
                    <span class="tech-tag">Algorithm Design</span>
                    <span class="tech-tag">Risk Management</span>
                    <span class="tech-tag">Database Systems</span>
                </div>

                <h4>📊 Analysis Capabilities</h4>
                <ul>
                    <li><strong>Price Discrepancy Detection</strong> - Identify profitable spreads across exchanges</li>
                    <li><strong>Volume Analysis</strong> - Assess market depth and liquidity</li>
                    <li><strong>Latency Optimization</strong> - Minimize execution delays</li>
                    <li><strong>Risk Assessment</strong> - Real-time risk monitoring and position sizing</li>
                    <li><strong>Performance Tracking</strong> - Comprehensive trade analysis and reporting</li>
                </ul>

                <h4>⚡ Key Features</h4>
                <ul>
                    <li>Millisecond-level opportunity detection</li>
                    <li>Automatic position sizing based on available liquidity</li>
                    <li>Multi-currency support with FX risk management</li>
                    <li>Advanced order routing and execution strategies</li>
                </ul>

                <p>This system represents cutting-edge financial technology, combining advanced algorithms with real-time data processing to identify and execute profitable arbitrage opportunities across multiple trading venues.</p>

                <a href="#" class="project-link">
                    <i class="fas fa-chart-line"></i> Performance Metrics
                </a>
            `
        },
        'gpthistory-fork': {
            title: 'GPTHistory Fork - OpenAI v1+ Compatibility',
            content: `
                <span class="status-badge status-complete">Complete</span>
                
                <p>Community contribution fixing GPTHistory compatibility with OpenAI API v1+ versions, ensuring continued functionality for chat history management tools.</p>

                <h4>🎯 Project Purpose</h4>
                <ul>
                    <li><strong>API Compatibility</strong> - Update for OpenAI API v1+ changes</li>
                    <li><strong>Community Support</strong> - Maintain popular open-source tool</li>
                    <li><strong>Bug Fixes</strong> - Resolve breaking changes and deprecations</li>
                    <li><strong>Documentation</strong> - Updated usage examples and installation</li>
                </ul>

                <h4>🔧 Technical Changes</h4>
                <div class="tech-stack">
                    <span class="tech-tag">OpenAI API</span>
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">API Integration</span>
                    <span class="tech-tag">Bug Fixes</span>
                    <span class="tech-tag">Open Source</span>
                </div>

                <h4>🛠️ Fixes Implemented</h4>
                <ul>
                    <li><strong>API Endpoint Updates</strong> - Migrate to v1+ endpoint structure</li>
                    <li><strong>Authentication Changes</strong> - Update API key handling methods</li>
                    <li><strong>Response Parsing</strong> - Fix JSON response format changes</li>
                    <li><strong>Error Handling</strong> - Improve error messages and debugging</li>
                    <li><strong>Dependencies</strong> - Update required package versions</li>
                </ul>

                <h4>📚 Documentation Updates</h4>
                <ul>
                    <li>Installation instructions for new dependencies</li>
                    <li>Configuration examples for v1+ API keys</li>
                    <li>Troubleshooting guide for common issues</li>
                    <li>Migration notes from legacy versions</li>
                </ul>

                <p>This contribution demonstrates commitment to open-source community support and technical expertise in API integration and software maintenance.</p>

                <a href="https://github.com/Capitalmind/GPTHistory" class="project-link" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i> View Fork
                </a>
            `
        },
        'linux-automation': {
            title: 'Linux System Automation Tools',
            content: `
                <span class="status-badge status-active">Ongoing</span>
                
                <p>Collection of powerful automation tools and utilities developed over 30+ years of Linux system administration, focusing on practical solutions for real-world problems.</p>

                <h4>🎯 Tool Categories</h4>
                <ul>
                    <li><strong>System Monitoring</strong> - Performance tracking and alerting</li>
                    <li><strong>Backup Automation</strong> - Intelligent backup and sync solutions</li>
                    <li><strong>Network Utilities</strong> - Advanced networking and security tools</li>
                    <li><strong>Process Management</strong> - Service monitoring and automatic recovery</li>
                </ul>

                <h4>🔧 Technical Stack</h4>
                <div class="tech-stack">
                    <span class="tech-tag">Bash Scripting</span>
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">System Administration</span>
                    <span class="tech-tag">DevOps</span>
                    <span class="tech-tag">Automation</span>
                    <span class="tech-tag">Linux</span>
                </div>

                <h4>🛠️ Featured Tools</h4>
                <ul>
                    <li><strong>Smart Backup System</strong> - Incremental backups with deduplication</li>
                    <li><strong>Service Watchdog</strong> - Automatic service recovery and alerting</li>
                    <li><strong>Log Analyzer</strong> - Real-time log parsing and anomaly detection</li>
                    <li><strong>Security Scanner</strong> - Automated security auditing and reporting</li>
                    <li><strong>Performance Monitor</strong> - System resource tracking and optimization</li>
                </ul>

                <h4>📊 Use Cases</h4>
                <ul>
                    <li>Data center operations and maintenance</li>
                    <li>Cloud infrastructure management</li>
                    <li>Development environment automation</li>
                    <li>Security compliance and auditing</li>
                </ul>

                <p>These tools represent decades of practical Linux experience, built to solve real problems encountered in production environments. Each tool emphasizes reliability, efficiency, and maintainability.</p>

                <a href="https://github.com/Capitalmind/linux-tools" class="project-link" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i> Tool Collection
                </a>
            `
        },
        'fintech-research': {
            title: 'Financial Technology Research',
            content: `
                <span class="status-badge status-research">Research</span>
                
                <p>Comprehensive research into emerging financial technologies, market analysis methodologies, and quantitative trading strategies with practical applications.</p>

                <h4>🎯 Research Areas</h4>
                <ul>
                    <li><strong>Algorithmic Trading</strong> - Advanced strategy development and backtesting</li>
                    <li><strong>Risk Management</strong> - Quantitative risk assessment methodologies</li>
                    <li><strong>Market Microstructure</strong> - Order flow analysis and market dynamics</li>
                    <li><strong>Alternative Data</strong> - Non-traditional data sources for alpha generation</li>
                </ul>

                <h4>🔧 Research Tools</h4>
                <div class="tech-stack">
                    <span class="tech-tag">Quantitative Analysis</span>
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">Financial Modeling</span>
                    <span class="tech-tag">Statistics</span>
                    <span class="tech-tag">Machine Learning</span>
                    <span class="tech-tag">Market Data</span>
                </div>

                <h4>📊 Research Methods</h4>
                <ul>
                    <li><strong>Statistical Analysis</strong> - Advanced statistical modeling and hypothesis testing</li>
                    <li><strong>Backtesting Frameworks</strong> - Robust historical strategy validation</li>
                    <li><strong>Risk Modeling</strong> - VaR, CVaR, and stress testing methodologies</li>
                    <li><strong>Performance Attribution</strong> - Factor-based return analysis</li>
                    <li><strong>Regime Detection</strong> - Market state identification algorithms</li>
                </ul>

                <h4>🎯 Practical Applications</h4>
                <ul>
                    <li>Portfolio optimization and asset allocation strategies</li>
                    <li>High-frequency trading algorithm development</li>
                    <li>Credit risk assessment and modeling</li>
                    <li>Cryptocurrency market analysis and trading</li>
                </ul>

                <p>This research combines academic rigor with practical trading experience to develop actionable insights for financial markets and investment strategies.</p>

                <a href="#" class="project-link">
                    <i class="fas fa-file-alt"></i> Research Papers
                </a>
            `
        }
    };

    const project = projects[projectKey];
    if (project) {
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-content').innerHTML = project.content;
        
        // Scroll to display area
        document.getElementById('project-display').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function addProjectHoverEffects() {
    const projectBubbles = document.querySelectorAll('.project-bubble');
    
    projectBubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', function() {
            // Add subtle animation to icon
            const icon = this.querySelector('.icon i');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        bubble.addEventListener('mouseleave', function() {
            // Reset icon
            const icon = this.querySelector('.icon i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
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
    
    // Observe project bubbles
    document.querySelectorAll('.project-bubble').forEach(bubble => {
        observer.observe(bubble);
    });
    
    // Add animation styles
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .project-bubble {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .project-bubble.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .project-bubble:nth-child(odd) {
            transition-delay: 0.1s;
        }
        
        .project-bubble:nth-child(even) {
            transition-delay: 0.2s;
        }
    `;
    
    document.head.appendChild(animationStyles);
}

function initializeAnalytics() {
    // Track project bubble clicks
    document.querySelectorAll('.project-bubble').forEach(bubble => {
        bubble.addEventListener('click', function() {
            const projectTitle = this.querySelector('h3').textContent;
            
            // Log interaction (could be sent to analytics service)
            console.log(`Project clicked: ${projectTitle}`);
            
            // Optional: Send to analytics service
            // sendAnalyticsEvent('project_click', { project_title: projectTitle });
        });
    });
}

function initializeWelcomeContent() {
    // Set default welcome content if no project is selected
    const welcomeContent = `
        <p>Select any project below to explore detailed technical information, implementation details, and research applications. These projects represent years of hands-on development in AI, financial systems, and automation.</p>
        
        <h4>Project Categories</h4>
        <ul>
            <li><strong>AI & Machine Learning</strong> - Voice assistants, domain-tuned models, and systems for structured knowledge extraction</li>
            <li><strong>Financial Technology</strong> - Trading strategies, arbitrage tooling, and economic modeling frameworks</li>
            <li><strong>Simulation & Gaming</strong> - Interactive learning tools, decision-making models, and scenario testing environments</li>
            <li><strong>Data Analysis</strong> - Workflow tools for structured transcript parsing, signal detection, and dataset-driven exploration</li>
            <li><strong>System Automation</strong> - Lightweight DevOps utilities, scripted infrastructure, and task orchestration pipelines</li>
        </ul>

        <p>Each project includes documentation and source code focused on transparency, maintainability, and practical application.</p>
    `;
    
    // Only set if content area is empty or has default content
    const contentArea = document.getElementById('project-content');
    if (!contentArea.innerHTML.trim() || contentArea.innerHTML.includes('Select any project below')) {
        contentArea.innerHTML = welcomeContent;
    }
}

// Utility function for future analytics integration
function sendAnalyticsEvent(eventName, properties) {
    // Placeholder for analytics integration
    // Could integrate with Google Analytics, Mixpanel, etc.
    console.log('Analytics event:', eventName, properties);
}