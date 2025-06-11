// Graph Theory Interactive Visualizations
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

// Dijkstra's Algorithm Animation Functions
function resetDijkstra() {
    const nodes = ['s', 'a', 'b', 'c', 'd', 'e', 'f', 't'];
    nodes.forEach(node => {
        const nodeElement = document.getElementById(`d-node-${node}`);
        if (nodeElement) {
            nodeElement.classList.remove('visited-node', 'current-node');
        }
        
        const distElement = document.getElementById(`dist-${node}`);
        if (distElement) {
            if (node === 's') {
                distElement.textContent = '0';
            } else {
                distElement.textContent = '∞';
            }
        }
    });
    
    // Reset edge highlighting
    for (let i = 1; i <= 11; i++) {
        const edge = document.getElementById(`d-edge-${i}`);
        if (edge) edge.classList.remove('path-highlight');
    }
    
    document.getElementById('current-node').textContent = 'S (Start)';
    document.getElementById('priority-queue').textContent = '[(0, S)]';
    document.getElementById('shortest-path').textContent = 'Not found yet';
    document.getElementById('total-distance').textContent = '-';
}

async function runDijkstra() {
    resetDijkstra();
    
    document.getElementById('dijkstra-btn').disabled = true;
    
    const steps = [
        {node: 's', dist: 0, visited: true, queue: '[(0, S)]'},
        {node: 'b', dist: 2, update: true, queue: '[(2, B), (4, A)]'},
        {node: 'b', dist: 2, visited: true, queue: '[(4, A)]'},
        {node: 'd', dist: 3, update: true, queue: '[(4, A), (3, D)]'},
        {node: 'd', dist: 3, visited: true, queue: '[(4, A)]'},
        {node: 'a', dist: 4, visited: true, queue: '[]'},
        {node: 'c', dist: 7, update: true, queue: '[(7, C)]'},
        {node: 'e', dist: 6, update: true, queue: '[(6, E), (7, C)]'},
        {node: 'e', dist: 6, visited: true, queue: '[(7, C)]'},
        {node: 't', dist: 8, update: true, queue: '[(7, C), (8, T)]'},
        {node: 't', dist: 8, visited: true, final: true}
    ];
    
    for (const step of steps) {
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        if (step.update) {
            const distElement = document.getElementById(`dist-${step.node}`);
            if (distElement) {
                distElement.textContent = step.dist;
            }
        }
        
        if (step.visited) {
            const nodeElement = document.getElementById(`d-node-${step.node}`);
            if (nodeElement) {
                nodeElement.classList.add('visited-node');
            }
        }
        
        document.getElementById('current-node').textContent = step.node.toUpperCase();
        if (step.queue) {
            document.getElementById('priority-queue').textContent = step.queue;
        }
        
        if (step.final) {
            // Highlight shortest path: S → B → D → E → T
            const pathEdges = ['d-edge-sb', 'd-edge-bd', 'd-edge-de', 'd-edge-et'];
            pathEdges.forEach(edgeId => {
                const edge = document.getElementById(edgeId);
                if (edge) edge.classList.add('path-highlight');
            });
            
            document.getElementById('shortest-path').textContent = 'S → B → D → E → T';
            document.getElementById('total-distance').textContent = '8';
        }
    }
    
    document.getElementById('dijkstra-btn').disabled = false;
}

// Initialize page with default visualization
function initializePage() {
    // Set up default graph type
    showUndirected();
    
    // Set up any other default states
    console.log('Graph Theory page initialized');
}

// Run initialization when page loads
document.addEventListener('DOMContentLoaded', initializePage);