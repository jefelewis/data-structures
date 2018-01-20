// Set Example:

var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // Fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.item = item;
};

setPrototype.contains = function(item) {

};

setPrototype.remove = function(item) {

};

/*
Complexity: What is the time complexity of the above functions?
O(n)

*/
