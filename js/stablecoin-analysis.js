// Stablecoin Analysis Charts and Interactive Functionality
// Chart.js configuration for multiple data visualizations

// Chart configuration defaults
const chartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                padding: 20,
                font: {
                    size: 12
                },
                color: '#f5f5f5'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(42, 42, 42, 0.9)',
            titleColor: '#cc785c',
            bodyColor: '#f5f5f5',
            borderColor: '#cc785c',
            borderWidth: 1
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                color: '#f5f5f5'
            },
            grid: {
                color: 'rgba(245, 245, 245, 0.1)'
            }
        },
        x: {
            ticks: {
                color: '#f5f5f5'
            },
            grid: {
                color: 'rgba(245, 245, 245, 0.1)'
            }
        }
    }
};

// Initialize all charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
});

function initializeCharts() {
    // Basket Inflation Chart
    createBasketInflationChart();
    
    // Inflation Hedge Chart
    createInflationHedgeChart();
    
    // Commodity Chart
    createCommodityChart();
    
    // Market Dominance Chart
    createDominanceChart();
    
    // Alternative Framework Chart
    createAlternativeChart();
}

// Weighted Average Inflation of Proposed Currency Basket
function createBasketInflationChart() {
    const ctx = document.getElementById('basketInflationChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['USD (43.38%)', 'EUR (29.31%)', 'CNY (12.28%)', 'JPY (7.59%)', 'GBP (7.44%)'],
            datasets: [{
                label: 'Inflation Contribution (%)',
                data: [2.603, 1.172, 0.246, 0.228, 0.372],
                backgroundColor: [
                    'rgba(229, 62, 62, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(234, 179, 8, 0.7)',
                    'rgba(168, 85, 247, 0.7)',
                    'rgba(59, 130, 246, 0.7)'
                ],
                borderColor: [
                    'rgba(229, 62, 62, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(234, 179, 8, 1)',
                    'rgba(168, 85, 247, 1)',
                    'rgba(59, 130, 246, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Total Weighted Inflation: 4.62% Annual Purchasing Power Loss',
                    color: '#e53e3e',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                ...chartConfig.scales,
                y: {
                    ...chartConfig.scales.y,
                    title: {
                        display: true,
                        text: 'Inflation Contribution (%)',
                        color: '#f5f5f5'
                    }
                }
            }
        }
    });
}

// Asset Performance During Inflation Surprises
function createInflationHedgeChart() {
    const ctx = document.getElementById('inflationHedgeChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Commodities', 'Stocks', 'Bonds', 'Cash', 'Real Estate'],
            datasets: [{
                label: 'Real Return Change per 1% Inflation Surprise (%)',
                data: [7, -3, -4, -1, 2],
                backgroundColor: [
                    'rgba(34, 197, 94, 0.7)',
                    'rgba(229, 62, 62, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(156, 163, 175, 0.7)',
                    'rgba(59, 130, 246, 0.7)'
                ],
                borderColor: [
                    'rgba(34, 197, 94, 1)',
                    'rgba(229, 62, 62, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(156, 163, 175, 1)',
                    'rgba(59, 130, 246, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Goldman Sachs Analysis: 5 Major Inflationary Episodes (50 Years)',
                    color: '#cc785c',
                    font: {
                        size: 14
                    }
                }
            },
            scales: {
                ...chartConfig.scales,
                y: {
                    ...chartConfig.scales.y,
                    title: {
                        display: true,
                        text: 'Real Return Change (%)',
                        color: '#f5f5f5'
                    }
                }
            }
        }
    });
}

// Commodity Sector Inflation Hedging Effectiveness
function createCommodityChart() {
    const ctx = document.getElementById('commodityChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Inflation Correlation', 'Statistical Significance', 'Volatility Resistance', 'Liquidity', 'Market Access'],
            datasets: [
                {
                    label: 'Industrial Metals',
                    data: [85, 90, 70, 80, 85],
                    borderColor: 'rgba(34, 197, 94, 1)',
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                    pointBackgroundColor: 'rgba(34, 197, 94, 1)'
                },
                {
                    label: 'Energy',
                    data: [72, 85, 60, 75, 80],
                    borderColor: 'rgba(245, 158, 11, 1)',
                    backgroundColor: 'rgba(245, 158, 11, 0.2)',
                    pointBackgroundColor: 'rgba(245, 158, 11, 1)'
                },
                {
                    label: 'Agriculture',
                    data: [68, 70, 55, 70, 75],
                    borderColor: 'rgba(139, 69, 19, 1)',
                    backgroundColor: 'rgba(139, 69, 19, 0.2)',
                    pointBackgroundColor: 'rgba(139, 69, 19, 1)'
                },
                {
                    label: 'Precious Metals',
                    data: [45, 60, 80, 90, 95],
                    borderColor: 'rgba(255, 215, 0, 1)',
                    backgroundColor: 'rgba(255, 215, 0, 0.2)',
                    pointBackgroundColor: 'rgba(255, 215, 0, 1)'
                }
            ]
        },
        options: {
            ...chartConfig,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#f5f5f5',
                        stepSize: 20
                    },
                    grid: {
                        color: 'rgba(245, 245, 245, 0.1)'
                    },
                    angleLines: {
                        color: 'rgba(245, 245, 245, 0.1)'
                    },
                    pointLabels: {
                        color: '#f5f5f5'
                    }
                }
            }
        }
    });
}

// Stablecoin Market Share Evolution
function createDominanceChart() {
    const ctx = document.getElementById('dominanceChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [
                {
                    label: 'USDT Market Share (%)',
                    data: [75, 68, 58, 65, 62, 60],
                    borderColor: 'rgba(34, 197, 94, 1)',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'USDC Market Share (%)',
                    data: [18, 25, 30, 28, 28, 28],
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Terra UST Market Share (%)',
                    data: [0, 2, 8, 0, 0, 0],
                    borderColor: 'rgba(229, 62, 62, 1)',
                    backgroundColor: 'rgba(229, 62, 62, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Others Market Share (%)',
                    data: [7, 5, 4, 7, 10, 12],
                    borderColor: 'rgba(156, 163, 175, 1)',
                    backgroundColor: 'rgba(156, 163, 175, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: 'Market Cap: $254B | Annual Volume: $32T',
                    color: '#cc785c',
                    font: {
                        size: 14
                    }
                }
            },
            scales: {
                ...chartConfig.scales,
                y: {
                    ...chartConfig.scales.y,
                    title: {
                        display: true,
                        text: 'Market Share (%)',
                        color: '#f5f5f5'
                    },
                    max: 80
                }
            }
        }
    });
}

// Proposed Commodity-Heavy Allocation
function createAlternativeChart() {
    const ctx = document.getElementById('alternativeChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Industrial Metals (25%)',
                'Energy Complex (20%)',
                'Precious Metals (15%)',
                'Agriculture (10%)',
                'Fiat Currencies (20%)',
                'Real Estate/REITs (10%)'
            ],
            datasets: [{
                data: [25, 20, 15, 10, 20, 10],
                backgroundColor: [
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(255, 215, 0, 0.8)',
                    'rgba(139, 69, 19, 0.8)',
                    'rgba(156, 163, 175, 0.8)',
                    'rgba(59, 130, 246, 0.8)'
                ],
                borderColor: [
                    'rgba(34, 197, 94, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(255, 215, 0, 1)',
                    'rgba(139, 69, 19, 1)',
                    'rgba(156, 163, 175, 1)',
                    'rgba(59, 130, 246, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: '70% Commodities vs 20% Multi-Currency Basket',
                    color: '#cc785c',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        }
    });
}

// Smooth scroll for table of contents links
document.addEventListener('DOMContentLoaded', function() {
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
});

// Add progress indicator for reading
function createReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #cc785c, #e69775);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize reading progress
document.addEventListener('DOMContentLoaded', createReadingProgress);

// Highlight current section in table of contents
function highlightCurrentSection() {
    const sections = document.querySelectorAll('.section[id]');
    const tocLinks = document.querySelectorAll('.toc a[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize section highlighting
document.addEventListener('DOMContentLoaded', highlightCurrentSection);

// Add CSS for active TOC links
const style = document.createElement('style');
style.textContent = `
    .toc a.active {
        color: #cc785c !important;
        font-weight: bold;
        padding-left: 10px;
        border-left: 3px solid #cc785c;
    }
`;
document.head.appendChild(style); 