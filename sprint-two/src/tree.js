// Function: Create New Tree
var Tree = function(value) {
  // var newTree = {};
  // newTree.value = value;
  // newTree.children = [];
  var newTree = {
    value: value,
    children: []
  };

  // Use Underscore Extend to Apply the Methods form the Source Object to Tree Object
  // Underscore: _.extend(object, source object)
  _.extend(newTree, treeMethods);

  return newTree;
};


// Tree Methods
var treeMethods = {};

// Function: Add Child to Tree
treeMethods.addChild = function(value) {
  // Push the value to the children array, but it has to be contained in an object
  // REVISIT: WHY "THIS"
  this.children.push(Tree(value));
};

// Function: Tree Contains Target
treeMethods.contains = function(target) {

  var wasFound = false;

  var searchNodes = function(node){

    // BASE CASE
    if(node.value === target){
      wasFound === true;
    }

    // RECURSIVE CASE
    if(Array.isArray(node.children)){
      // Iterate through the Children array
      for(var i = 0; i < node.children.length; i++){
        // Check if Node Value equals Target
        if(node.children[i].value === target){
          wasFound = true;
        }
        // Check the Node has children array
        if(Array.isArray(node.children[i])){
          searchNodes(node.children[i]);
        }
      }
    }
  }

  // Run the function, starting from the top of the tree
  // REVISIT: WHY "THIS"
  searchNodes(this);
  return wasFound;
};



/*
Complexity: What is the time complexity of the above functions?
O(n) Linear

*/
