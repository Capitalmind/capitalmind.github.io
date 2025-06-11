#!/bin/bash

# Script to fix the broken code block formatting in ml-graph-theory.html
# Run this from your website project directory

set -e  # Exit on any error

FILE="ml-graph-theory.html"
BACKUP_FILE="ml-graph-theory.html.backup"

# Check if file exists
if [ ! -f "$FILE" ]; then
    echo "Error: $FILE not found in current directory"
    echo "Please run this script from your website project directory"
    exit 1
fi

# Create backup
echo "Creating backup: $BACKUP_FILE"
cp "$FILE" "$BACKUP_FILE"

# Create the fixed code block content
cat > /tmp/fixed_code_block.html << 'EOF'
            <div class="code-block"># <span class="comment">Every AI system is built on graph theory principles</span>

<span class="keyword">class</span> <span class="class-name">NeuralNetworkGraph</span>:
    <span class="string">"""Neural network implemented as computational graph"""</span>
    
    <span class="keyword">def</span> <span class="function">__init__</span>(<span class="variable">self</span>):
        <span class="variable">self</span>.<span class="variable">nodes</span> = {}           # <span class="comment">node_id -> computation function</span>
        <span class="variable">self</span>.<span class="variable">edges</span> = {}           # <span class="comment">(from, to) -> weight</span>
        <span class="variable">self</span>.<span class="variable">topology_order</span> = []  # <span class="comment">For forward/backward passes</span>
    
    <span class="keyword">def</span> <span class="function">add_layer</span>(<span class="variable">self</span>, <span class="variable">layer_id</span>, <span class="variable">size</span>, <span class="variable">activation</span>=<span class="string">'relu'</span>):
        # <span class="comment">Add neurons as graph nodes</span>
        <span class="keyword">for</span> <span class="variable">i</span> <span class="keyword">in</span> <span class="function">range</span>(<span class="variable">size</span>):
            <span class="variable">node_id</span> = <span class="string">f"{layer_id}_{i}"</span>
            <span class="variable">self</span>.<span class="variable">nodes</span>[<span class="variable">node_id</span>] = {
                <span class="string">'type'</span>: <span class="string">'neuron'</span>,
                <span class="string">'activation'</span>: <span class="variable">activation</span>,
                <span class="string">'value'</span>: <span class="number">0.0</span>,
                <span class="string">'gradient'</span>: <span class="number">0.0</span>
            }
    
    <span class="keyword">def</span> <span class="function">connect_layers</span>(<span class="variable">self</span>, <span class="variable">from_layer</span>, <span class="variable">to_layer</span>):
        # <span class="comment">Create edges between all neurons in adjacent layers</span>
        <span class="variable">from_nodes</span> = [<span class="variable">n</span> <span class="keyword">for</span> <span class="variable">n</span> <span class="keyword">in</span> <span class="variable">self</span>.<span class="variable">nodes</span> <span class="keyword">if</span> <span class="variable">n</span>.<span class="function">startswith</span>(<span class="variable">from_layer</span>)]
        <span class="variable">to_nodes</span> = [<span class="variable">n</span> <span class="keyword">for</span> <span class="variable">n</span> <span class="keyword">in</span> <span class="variable">self</span>.<span class="variable">nodes</span> <span class="keyword">if</span> <span class="variable">n</span>.<span class="function">startswith</span>(<span class="variable">to_layer</span>)]
        
        <span class="keyword">for</span> <span class="variable">from_node</span> <span class="keyword">in</span> <span class="variable">from_nodes</span>:
            <span class="keyword">for</span> <span class="variable">to_node</span> <span class="keyword">in</span> <span class="variable">to_nodes</span>:
                # <span class="comment">Initialize weight randomly</span>
                <span class="variable">self</span>.<span class="variable">edges</span>[(<span class="variable">from_node</span>, <span class="variable">to_node</span>)] = <span class="variable">np</span>.<span class="variable">random</span>.<span class="function">randn</span>() * <span class="number">0.1</span>
    
    <span class="keyword">def</span> <span class="function">forward_pass</span>(<span class="variable">self</span>, <span class="variable">inputs</span>):
        # <span class="comment">Traverse graph in topological order</span>
        <span class="keyword">for</span> <span class="variable">node_id</span> <span class="keyword">in</span> <span class="variable">self</span>.<span class="variable">topology_order</span>:
            <span class="keyword">if</span> <span class="variable">node_id</span>.<span class="function">startswith</span>(<span class="string">'input'</span>):
                <span class="variable">self</span>.<span class="variable">nodes</span>[<span class="variable">node_id</span>][<span class="string">'value'</span>] = <span class="variable">inputs</span>[<span class="variable">node_id</span>]
            <span class="keyword">else</span>:
                # <span class="comment">Compute weighted sum of inputs</span>
                <span class="variable">weighted_sum</span> = <span class="number">0</span>
                <span class="keyword">for</span> (<span class="variable">from_node</span>, <span class="variable">to_node</span>), <span class="variable">weight</span> <span class="keyword">in</span> <span class="variable">self</span>.<span class="variable">edges</span>.<span class="function">items</span>():
                    <span class="keyword">if</span> <span class="variable">to_node</span> == <span class="variable">node_id</span>:
                        <span class="variable">weighted_sum</span> += <span class="variable">self</span>.<span class="variable">nodes</span>[<span class="variable">from_node</span>][<span class="string">'value'</span>] * <span class="variable">weight</span>
                
                # <span class="comment">Apply activation function</span>
                <span class="variable">self</span>.<span class="variable">nodes</span>[<span class="variable">node_id</span>][<span class="string">'value'</span>] = <span class="variable">self</span>.<span class="function">activate</span>(
                    <span class="variable">weighted_sum</span>, 
                    <span class="variable">self</span>.<span class="variable">nodes</span>[<span class="variable">node_id</span>][<span class="string">'activation'</span>]
                )
    
    <span class="keyword">def</span> <span class="function">backward_pass</span>(<span class="variable">self</span>, <span class="variable">target</span>):
        # <span class="comment">Traverse graph in reverse topological order</span>
        <span class="keyword">for</span> <span class="variable">node_id</span> <span class="keyword">in</span> <span class="function">reversed</span>(<span class="variable">self</span>.<span class="variable">topology_order</span>):
            <span class="keyword">if</span> <span class="variable">node_id</span>.<span class="function">startswith</span>(<span class="string">'output'</span>):
                # <span class="comment">Compute output layer gradients</span>
                <span class="variable">predicted</span> = <span class="variable">self</span>.<span class="variable">nodes</span>[<span class="variable">node_id</span>][<span class="string">'value'</span>]
                <span class="variable">self</span>.<span class="variable">nodes</span>[<span class="variable">node_id</span>][<span class="string">'gradient'</span>] = <span class="number">2</span> * (<span class="variable">predicted</span> - <span class="variable">target</span>)
            <span class="keyword">else</span>:
                # <span class="comment">Backpropagate gradients</span>
                <span class="variable">gradient</span> = <span class="number">0</span>
                <span class="keyword">for</span> (<span class="variable">from_node</span>, <span class="variable">to_node</span>), <span class="variable">weight</span> <span class="keyword">in</span> <span class="variable">self</span>.<span class="variable">edges</span>.<span class="function">items</span>():
                    <span class="keyword">if</span> <span class="variable">from_node</span> == <span class="variable">node_id</span>:
                        <span class="variable">gradient</span> += <span class="variable">weight</span> * <span class="variable">self</span>.<span class="variable">nodes</span>[<span class="variable">to_node</span>][<span class="string">'gradient'</span>]
                
                <span class="variable">self</span>.<span class="variable">nodes</span>[<span class="variable">node_id</span>][<span class="string">'gradient'</span>] = <span class="variable">gradient</span></div>
EOF

# Find the broken code block and replace it
echo "Fixing broken code block formatting..."

# Use Python to do the replacement since it handles multiline patterns better
python3 << 'PYTHON_SCRIPT'
import re

# Read the file
with open('ml-graph-theory.html', 'r') as f:
    content = f.read()

# Read the fixed code block
with open('/tmp/fixed_code_block.html', 'r') as f:
    fixed_block = f.read()

# Pattern to match the broken code block (looking for the specific broken section)
pattern = r'<div class="code-block"># Every AI system is built on graph theory principles.*?</div>'

# Replace with fixed version
content = re.sub(pattern, fixed_block, content, flags=re.DOTALL)

# Write back to file
with open('ml-graph-theory.html', 'w') as f:
    f.write(content)

print("Code block formatting fixed successfully!")
PYTHON_SCRIPT

# Clean up temp file
rm /tmp/fixed_code_block.html

echo ""
echo "✅ Update completed successfully!"
echo "📄 Original file backed up as: $BACKUP_FILE"
echo "🔧 Fixed syntax highlighting in ml-graph-theory.html"
echo ""
echo "Next steps:"
echo "1. Review the changes: diff $BACKUP_FILE $FILE"
echo "2. Test the page in your browser"
echo "3. If satisfied, commit changes:"
echo "   git add $FILE"
echo "   git commit -m 'Fix: Restore syntax highlighting in Neural Network code block'"
echo "   git push origin master"
echo ""
echo "If anything went wrong, restore from backup:"
echo "   mv $BACKUP_FILE $FILE"
