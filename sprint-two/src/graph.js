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
  // If the Node within the Nodes object is not undefined, return true
  if(this.storage[node] !== undefined){
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // for(var key in this){
  //   this[cb(key)] = {};
  // }
};

/*
Complexity: What is the time complexity of the above functions?


*/
