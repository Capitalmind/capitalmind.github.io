// Graph Theory Interactive Visualizations - js/ml-graph-theory.js
// Interactive demonstrations for graph algorithms and visualizations

let stepMode = false;
let currentAlgorithm = null;
let algorithmState = null;

// Graph Types Visualization Functions
function showUndirected() {
    document.getElementById('undirected-graph').style.display = 'block';
    document.getElementById('directed-graph').style.display = 'none';
    document.getElementById('graph-explanation').innerHTML = 
        '<strong>Undirected Graph:</strong> Edges have no direction. Represents symmetric relationships like friendship networks or physical connections.';
}

function showDirected() {
    document.getElementById('undirected-graph').style.display = 'none';
    document.getElementById('directed-graph').style.display = 'block';
    document.getElementById('graph-explanation').innerHTML = 
        '<strong>Directed Graph:</strong> Edges have direction, representing asymmetric relationships like web links, neural connections, or dependencies.';
}

function showWeighted() {
    document.getElementById('graph-explanation').innerHTML = 
        '<strong>Weighted Graph:</strong> Edges have associated weights representing costs, distances, similarities, or connection strengths. Essential for optimization and pathfinding.';
}

function showComplete() {
    document.getElementById('graph-explanation').innerHTML = 
        '<strong>Complete Graph:</strong> Every vertex is connected to every other vertex. Useful for analyzing worst-case scenarios and maximum connectivity.';
}

// Traversal Animation Functions
function resetTraversal() {
    for (let i = 1; i <= 10; i++) {
        const node = document.getElementById(`node-${i}`);
        if (node) {
            node.classList.remove('visited-node', 'current-node');
        }
    }
    
    document.getElementById('current-algorithm').textContent = 'Choose an algorithm above';
    document.getElementById('visit-order').textContent = '-';
    document.getElementById('data-structure').textContent = '-';
    document.getElementById('current-step').textContent = 'Ready to start';
    
    currentAlgorithm = null;
    algorithmState = null;
}

async function animateBFS() {
    resetTraversal();
    currentAlgorithm = 'BFS';
    
    document.getElementById('current-algorithm').textContent = 'Breadth-First Search';
    document.getElementById('data-structure').textContent = 'Queue (FIFO)';
    
    const bfsOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let visitOrder = [];
    
    document.getElementById('bfs-btn').disabled = true;
    document.getElementById('dfs-btn').disabled = true;
    
    for (let i = 0; i < bfsOrder.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const nodeId = `node-${bfsOrder[i]}`;
        const node = document.getElementById(nodeId);
        if (node) {
            node.classList.add('visited-node');
            visitOrder.push(bfsOrder[i]);
            
            document.getElementById('visit-order').textContent = visitOrder.join(' → ');
            document.getElementById('current-step').textContent = `Visiting node ${bfsOrder[i]} (level-by-level exploration)`;
        }
    }
    
    document.getElementById('current-step').textContent = 'BFS completed - shortest paths found!';
    document.getElementById('bfs-btn').disabled = false;
    document.getElementById('dfs-btn').disabled = false;
}

async function animateDFS() {
    resetTraversal();
    currentAlgorithm = 'DFS';
    
    document.getElementById('current-algorithm').textContent = 'Depth-First Search';
    document.getElementById('data-structure').textContent = 'Stack (LIFO)';
    
    const dfsOrder = [1, 2, 4, 8, 9, 5, 10, 3, 6, 7];
    let visitOrder = [];
    
    document.getElementById('bfs-btn').disabled = true;
    document.getElementById('dfs-btn').disabled = true;
    
    for (let i = 0; i < dfsOrder.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const nodeId = `node-${dfsOrder[i]}`;
        const node = document.getElementById(nodeId);
        if (node) {
            node.classList.add('visited-node');
            visitOrder.push(dfsOrder[i]);
            
            document.getElementById('visit-order').textContent = visitOrder.join(' → ');
            document.getElementById('current-step').textContent = `Visiting node ${dfsOrder[i]} (depth-first exploration)`;
        }
    }
    
    document.getElementById('current-step').textContent = 'DFS completed - full exploration done!';
    document.getElementById('bfs-btn').disabled = false;
    document.getElementById('dfs-btn').disabled = false;
}

// Initialize with undirected graph and set up page functionality
function initializeGraphTheoryPage() {
    showUndirected();
    
    // Add smooth scrolling for TOC links
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
    
    console.log('Graph Theory page initialized');
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeGraphTheoryPage);