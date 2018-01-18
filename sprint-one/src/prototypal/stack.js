var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create object using Prototypal Inheritance
  var obj = Object.create(stackMethods);
  obj.lastElement = 0;
  obj.storage = {};

  // Return output object
  return obj;

};

var stackMethods = {
  push: function(value) {
    // Adds 1 to the Stack
    this.lastElement += 1;
    this.storage[this.lastElement] = value;

  },
  pop: function() {
    // Check to see if the stack is not empty
    if(this.lastElement > 0){
      // Assign the lastElement element to the temp variable
      var temp = this.storage[this.lastElement];
      // Remove the lastElement element from the stack
      delete this.storage[this.lastElement];
      this.lastElement -= 1;
      // Return the lastElement element that was assigned to the temp varaible
      return temp;
    }
  },
  size: function() {
    return this.lastElement;
  }

};
