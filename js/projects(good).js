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
                <a href="research-expert-systems.html" class="project-link">
                    <i class="fas fa-file-pdf"></i> Research
                </a>
            `
        },
        'voice-chatbot': {
            title: 'Voice Chatbot with Auto-Routing',
            content: `
                <span class="status-badge status-active">Active Development</span>
                
                <p>This project is focused on developing a domain-specific, voice-enabled mental health chatbot that combines intelligent conversational design with therapy-specific routing. Designed to support individuals experiencing stress, depression, or emotional crises, the system blends empathetic front-end personas with evidence-based therapeutic frameworks like CBT, DBT, and ACT. Its core innovation lies in adaptive routing—matching users to the most relevant support or module based on mood, language patterns, and inferred needs.</p>

                <h4>🎯 Project Goals</h4>
                <ul>
                    <li><strong>Mental Health Support</strong> – Provide non-judgmental, 24/7 emotional support through guided conversation</li>
                    <li><strong>Therapy-Aware Routing</strong> – Automatically identify and apply appropriate counselling methods (CBT, DBT, ACT, MI, etc.) based on conversation analysis</li>
                    <li><strong>Voice Interface</strong> – Enable seamless, spoken interaction to improve accessibility and comfort for users in distress</li>
                    <li><strong>Privacy-First</strong> – Uphold strict data protection principles, ensuring confidentiality and ethical data handling</li>
                </ul>

                <h4>🔧 Technical Architecture</h4>
                <div class="tech-stack">
                    <span class="tech-tag">Voice Recognition</span>
                    <span class="tech-tag">Natural Language Processing</span>
                    <span class="tech-tag">Therapy-Specific Routing</span>
                    <span class="tech-tag">Persona Modeling</span>
                    <span class="tech-tag">Sentiment & Risk Detection</span>
                    <span class="tech-tag">Privacy Engineering</span>
                </div>

                <h4>🧠 Intelligence Features</h4>
                <ul>
                    <li><strong>Sentiment & Emotion Analysis</strong> – Detect emotional state using tone, word choice, and conversational cues</li>
                    <li><strong>Crisis Escalation</strong> – Immediately flag or redirect conversations that contain high-risk language (e.g. suicidality, harm)</li>
                    <li><strong>Contextual Memory</strong> – Maintain session continuity to support ongoing care or mood tracking</li>
                    <li><strong>Therapeutic Flashcards</strong> – Deploy structured mental health techniques (e.g., CBT ABCDE, DBT DEARMAN, ACT RAIN) through micro-interventions</li>
                    <li><strong>Persona Selection Engine</strong> – Match user temperament to an empathetic chatbot style (e.g. Coach, Companion, Explorer, Sage)</li>
                </ul>

                <h4>🎯 Use Cases</h4>
                <ul>
                    <li>Initial mental health screening and conversational triage</li>
                    <li>Guided support during depressive or anxious episodes</li>
                    <li>Integration into broader therapeutic systems (e.g., prep for live sessions, journaling follow-ups)</li>
                    <li>Delivery of psychoeducation, coping techniques, and emotional literacy resources</li>
                </ul>

                <p>This project aims to redefine digital mental health interaction—offering structured, safe, and emotionally intelligent support that guides users toward healing, resilience, and when needed, professional care.</p>

                <a href="#" class="project-link">
                    <i class="fas fa-info-circle"></i> Documentation
                </a>

            `
        },
        'txtai-training': {
            title: 'Semantic Search & Embedding Framework Evaluation',
            content: `
                <span class="status-badge status-active">Active Development</span>
                
                <p>Comprehensive evaluation and testing of semantic search and embedding frameworks for domain-specific applications, with txtai as the primary candidate among multiple contenders for production deployment.</p>

                <h4>🎯 Evaluation Objectives</h4>
                <ul>
                    <li><strong>Framework Assessment</strong> - Test multiple semantic search solutions for domain-specific needs</li>
                    <li><strong>Performance Benchmarking</strong> - Compare speed, accuracy, and scalability across platforms</li>
                    <li><strong>Integration Analysis</strong> - Evaluate ease of deployment and maintenance requirements</li>
                    <li><strong>Cost-Benefit Analysis</strong> - Balance managed services vs. self-hosted solutions</li>
                </ul>

                <h4>🔧 Frameworks Under Evaluation</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
                    <div style="background: #2a2a2a; padding: 1rem; border-radius: 8px;">
                        <h5 style="color: #cc785c; margin-bottom: 0.5rem;">Primary Candidate</h5>
                        <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                            <li><strong>txtai</strong> - All-in-one framework with RAG, workflows, and agents</li>
                        </ul>
                    </div>
                    <div style="background: #2a2a2a; padding: 1rem; border-radius: 8px;">
                        <h5 style="color: #cc785c; margin-bottom: 0.5rem;">Alternative Contenders</h5>
                        <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                            <li><strong>Chroma</strong> - Simple, developer-friendly</li>
                            <li><strong>Weaviate</strong> - Knowledge graphs + GraphQL</li>
                            <li><strong>Qdrant</strong> - High-performance Rust-based</li>
                            <li><strong>Pinecone</strong> - Fully managed service</li>
                            <li><strong>FAISS</strong> - Facebook's similarity search</li>
                        </ul>
                    </div>
                </div>

                <h4>🔧 Technical Implementation</h4>
                <div class="tech-stack">
                    <span class="tech-tag">txtai</span>
                    <span class="tech-tag">Vector Embeddings</span>
                    <span class="tech-tag">Semantic Search</span>
                    <span class="tech-tag">RAG Systems</span>
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">Performance Testing</span>
                </div>

                <h4>📊 txtai Features Being Tested</h4>
                <ul>
                    <li><strong>Embeddings Database</strong> - Union of vector indexes, graph networks, and relational databases</li>
                    <li><strong>LLM Orchestration</strong> - Support for Hugging Face, llama.cpp, OpenAI, Claude via LiteLLM</li>
                    <li><strong>Workflows & Pipelines</strong> - Semantic workflows connecting multiple language models</li>
                    <li><strong>Autonomous Agents</strong> - Built on smolagents framework for complex problem solving</li>
                    <li><strong>RAG Capabilities</strong> - Retrieval augmented generation with source citations</li>
                </ul>

                <h4>⚖️ Evaluation Criteria</h4>
                <ul>
                    <li><strong>Performance</strong> - Query latency, indexing speed, memory usage</li>
                    <li><strong>Scalability</strong> - Handling millions of vectors and concurrent queries</li>
                    <li><strong>Feature Completeness</strong> - Built-in workflows, agent support, metadata filtering</li>
                    <li><strong>Deployment Options</strong> - Self-hosted vs. managed service flexibility</li>
                    <li><strong>Integration Ecosystem</strong> - LangChain, LlamaIndex, and framework compatibility</li>
                </ul>

                <h4>🎯 Testing Applications</h4>
                <ul>
                    <li>Legal document analysis and case law research</li>
                    <li>Medical diagnosis support and clinical decision making</li>
                    <li>Financial regulation compliance and risk assessment</li>
                    <li>Technical documentation and knowledge base systems</li>
                    <li>Multi-source content synthesis and research automation</li>
                </ul>

                <h4>📈 Current Status</h4>
                <p>txtai is leading the evaluation due to its comprehensive all-in-one approach, combining embeddings, pipelines, workflows, and agents in a single framework. Unlike specialized vector databases that require additional tooling, txtai provides RAG capabilities, LLM orchestration, and autonomous agents out of the box.</p>
                
                <p>Testing focuses on production-ready deployment scenarios with emphasis on maintenance overhead, feature completeness, and total cost of ownership compared to piecing together multiple specialized tools.</p>

                <a href="#" class="project-link">
                    <i class="fas fa-chart-bar"></i> Performance Benchmarks
                </a>
                <a href="#" class="project-link">
                    <i class="fas fa-code"></i> Implementation Examples
                </a>
            `
        },
        'knowledge-synthesis': {
            title: 'Multi-Source Knowledge Synthesis Platform',
            content: `
                <span class="status-badge status-active">Active Development</span>
                
                <p>Systematized content analysis processing YouTube transcripts, community feeds, and technical articles to generate structured knowledge databases, social media summaries, and research data for AI/Robotics and Economic studies.</p>

                <h4>🎯 Platform Overview</h4>
                <ul>
                    <li><strong>Multi-Source Ingestion</strong> - YouTube transcripts, technical communities, engineering blogs</li>
                    <li><strong>Intelligent Processing</strong> - Content parsing, tagging, and hierarchical data organization</li>
                    <li><strong>Structured Outputs</strong> - JSON5 knowledge databases, social media content, research datasets</li>
                    <li><strong>Domain Focus</strong> - AI/Robotics and War/Economics analysis with specialized feeds</li>
                </ul>

                <h4>📥 Input Sources</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
                    <div style="background: #2a2a2a; padding: 1rem; border-radius: 8px;">
                        <h5 style="color: #cc785c; margin-bottom: 0.5rem;">AI & Robotics Focus</h5>
                        <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                            <li>Lobste.rs (Strong)</li>
                            <li>Reddit Communities (Very Strong)</li>
                            <li>Robohub (Very Strong)</li>
                            <li>Engineering Blogs (Strong)</li>
                            <li>Techmeme (Strong)</li>
                        </ul>
                    </div>
                    <div style="background: #2a2a2a; padding: 1rem; border-radius: 8px;">
                        <h5 style="color: #cc785c; margin-bottom: 0.5rem;">War & Economics Focus</h5>
                        <ul style="font-size: 0.9rem; margin: 0; padding-left: 1rem;">
                            <li>Reddit Subreddits (Very Strong)</li>
                            <li>Lemmy Communities (Moderate)</li>
                            <li>Slashdot (Moderate)</li>
                            <li>Specialized Forums</li>
                            <li>Economic Analysis Sites</li>
                        </ul>
                    </div>
                </div>

                <h4>🔧 Technical Pipeline</h4>
                <div class="tech-stack">
                    <span class="tech-tag">Content Parsing</span>
                    <span class="tech-tag">Knowledge Synthesis</span>
                    <span class="tech-tag">JSON5 Database</span>
                    <span class="tech-tag">Social Media API</span>
                    <span class="tech-tag">Multi-Platform</span>
                    <span class="tech-tag">Research Analytics</span>
                </div>

                <h4>📊 Processing Capabilities</h4>
                <ul>
                    <li><strong>YouTube Processing</strong> - Transcript extraction via Whisper/AssemblyAI, content categorization</li>
                    <li><strong>Community Monitoring</strong> - Automated feeds from technical communities and forums</li>
                    <li><strong>Content Tagging</strong> - AI-driven categorization by domain (AI/Robotics vs War/Economics)</li>
                    <li><strong>Hierarchical Organization</strong> - Structured data logging with topic relationships</li>
                    <li><strong>Knowledge Synthesis</strong> - Cross-source correlation and insight generation</li>
                </ul>

                <h4>📤 Output Channels</h4>
                <ul>
                    <li><strong>Social Media Distribution</strong> - X.com, Bluesky, Reddit automated posting</li>
                    <li><strong>Content Publishing</strong> - Medium articles, website integration</li>
                    <li><strong>Research Database</strong> - Comprehensive JSON5 knowledge base</li>
                    <li><strong>White Paper Data</strong> - Structured datasets for academic research</li>
                    <li><strong>Summary Generation</strong> - Daily/weekly synthesis reports</li>
                </ul>

                <h4>🎯 Use Cases</h4>
                <ul>
                    <li>Real-time monitoring of AI/Robotics developments across multiple sources</li>
                    <li>Economic and geopolitical trend analysis with automated content aggregation</li>
                    <li>Social media content generation with domain-specific expertise</li>
                    <li>Research paper preparation with comprehensive source material</li>
                    <li>Knowledge graph construction for cross-domain insights</li>
                </ul>

                <p>This platform transforms disparate technical communities and content sources into a unified knowledge synthesis system, enabling both immediate social media engagement and long-term research applications across AI/Robotics and Economic domains.</p>

                <a href="#" class="project-link">
                    <i class="fas fa-database"></i> Knowledge Database Examples
                </a>
                <a href="#" class="project-link">
                    <i class="fas fa-share-alt"></i> Social Media Integration
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
            <li><strong>Data Analysis & Knowledge Synthesis</strong> - Multi-source content analysis, systematized processing of technical communities, social media distribution, and research database generation</li>
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
