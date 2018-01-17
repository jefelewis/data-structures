// Queue: Last In First Out

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values (Storage is the Queue)
  var storage = {};

  var firstElement = 0;
  var lastElement = 0;

  // Implement the methods below
  // Enqueue: Add to Back of Queue
  someInstance.enqueue = function(value) {
    firstElement += 1;
    storage[lastElement] = value;
  };

  // Dequeue: Remove from Front of Queue
  someInstance.dequeue = function() {
    // Check to see if the queue is not empty
    if(firstElement > 0){
      // Assign the firstElement element to the temp variable
      var temp = storage[firstElement];
      // Delete the firstElement element
      delete storage[firstElement]
      // Reduce the firstElement count by 1
      firstElement -= 1;
      // Return the temp value, which was assigned as the firstElement value
      return temp;
    }
  };

  someInstance.size = function() {
    return firstElement;
  };

  return someInstance;
};
