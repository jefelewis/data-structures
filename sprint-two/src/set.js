// Set Example:

var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // Fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = {};
};

setPrototype.contains = function(item) {
  // If the Node within the Nodes object is not undefined, return true
  if(this.storage[item] !== undefined){
    return true;
  }
  else{
    return false;
  }
};

setPrototype.remove = function(item) {
  // If the Node within the Nodes object is not undefined, return true
  if(this.storage[item] !== undefined){
    delete this.storage[item];
  }
};

/*
Complexity: What is the time complexity of the above functions?
O(n)

*/
