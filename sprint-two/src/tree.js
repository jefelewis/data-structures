var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  // Use Underscore Extend to Apply the Methods form the Source Object to Tree Object
  // Underscore: _.extend(object, source object)
  _.extend(newTree, treeMethods);

  return newTree;
};


// Tree Methods
var treeMethods = {};

// Function: Add Child to Tree
treeMethods.addChild = function(value) {
  newTree.children.push(value);
};

// Function: Tree Contains Target
treeMethods.contains = function(target) {
  //
  // var wasFound = false;
  //
  // var searchTree = function(node){
  //
  //   // BASE CASE
  //   if(newTree.value === target){
  //     wasFound === true;
  //   }
  //
  //   // RECURSIVE CASE
  //   if(Array.isArray(newTree)){
  //     for(var i = 0; i < children.length; i++){
  //       if(children[i] === target){
  //         wasFound === true;
  //       }
  //       else{
  //         searchTree()
  //       }
  //     }
  //   }
  // }
  //
  // // Call function
  // contains(newTree);
  // // Return Found boolean
  // return wasFound;
};



/*
Complexity: What is the time complexity of the above functions?

*/
