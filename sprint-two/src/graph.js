// Graph Example: Social Network Friends List: Some friends are friends with
// each other and other friends are friends with people you are not friends with

// Nodes/Vertices: Data within the graph
// Edges: The connections between the Nodes/Vertices

// Instantiate a new graph
var Graph = function() {
    this.nodes = {};
    this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // If the Node within the Nodes object is not undefined, return true
  if(this.nodes[node] !== undefined){
    return true;
  }
  else{
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // If the Node within the Nodes object is not undefined, delete Node
  if(this.nodes[node] !== undefined){
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected. Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  // Search through Nodes to see if the fromNode has the toNode AND the toNode has the fromNode
  if(this.nodes[fromNode][toNode] && this.nodes[toNode][fromNode]){
    return true;
  }
  else{
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  // Assign the toNode to the fromNode
  this.nodes[fromNode][toNode] = true;
  // Assign the fromNode to the toNode
  this.nodes[toNode][fromNode] = true;

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  // Delete the toNode from the fromNode
  delete this.nodes[fromNode][toNode];
  // Delete the fromNode from the toNode
  delete this.nodes[toNode][fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  // For each key, run the call back function on the Nodes?
  for(var key in this.nodes){
    this[cb(key)] = {};
  }
};

/*
Complexity: What is the time complexity of the above functions?
O(1) Constant

*/
