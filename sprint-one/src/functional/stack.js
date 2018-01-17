// Stack: Last In First Out

var Stack = function() {
  
  var someInstance = {};

  // Use an object with numeric keys to store values (Storage is the Stack)
  var storage = {};

  var lastElement = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // Adds 1 to the Stack
    lastElement += 1;
    storage[lastElement] = value;
  };

  someInstance.pop = function() {
    // Check to see if the stack is not empty
    if(lastElement > 0){
      // Assign the lastElement element to the temp variable
      var temp = storage[lastElement];
      // Remove the lastElement element from the stack
      delete storage[lastElement];
      lastElement -= 1;
      // Return the lastElement element that was assigned to the temp varaible
      return temp;
    }
  };

  someInstance.size = function() {
    return lastElement;
  };

  return someInstance;
};
