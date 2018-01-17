// Queue: Last In First Out

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values (Storage is the Queue)
  var storage = {};
  // First Element
  var first = 0;
  // Last Element
  var last = 0;

  // Implement the methods below
  // Enqueue: Add to Back of Queue
  someInstance.enqueue = function(value) {
    first += 1;
    storage[last] = value;
  };

  // Dequeue: Remove from Front of Queue
  someInstance.dequeue = function() {
    // Check to see if the queue is not empty
    if(first > 0){
      // Assign the first element to the temp variable
      var temp = storage[first];
      // Delete the first element
      delete storage[first]
      // Reduce the first count by 1
      first -= 1;
      // Return the temp value, which was assigned as the first value
      return temp;
    }
  };

  someInstance.size = function() {
    return first;
  };

  return someInstance;
};
