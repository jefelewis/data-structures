// Queue: Last In First Out

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Object with properties, so THIS can be called when using the stack methods
  var obj = {
    firstElement: 0,
    lastElement: 0,
    storage: {}
  };

  // _.Extend gives an object with all the properties (queueMethods) of the passed in
  // Extend(obj, methods to call onto the object)
  _.extend(obj, queueMethods);

  // Return output Object with queueMethods that were just applied with _.extend
  return obj;

};

// Stack Methods that can be called globally?
var queueMethods = {
  enqueue: function(value) {
    this.lastElement += 1;
    this.storage[this.lastElement] = value;
  },
  // Dequeue: Remove from Front of Queue
  dequeue: function() {
    // Check to see if the queue is not empty
    if(this.lastElement - this.firstElement > 0){
      // Reduce the firstElement count by 1
      this.firstElement += 1;
      // Assign the firstElement element to the temp variable
      var temp = this.storage[this.firstElement];
      // Delete the firstElement element
      delete this.storage[this.firstElement]
      // Return the temp value, which was assigned as the firstElement value
      return temp;
    }
  },
  size: function() {
    return this.lastElement - this.firstElement;
  }
};
