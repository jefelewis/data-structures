// Stack: Last In First Out

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values (Storage is the Stack)
  var storage = {};
  // Last Element
  var last = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // Adds 1 to the Stack
    last += 1;
    storage[last] = value;
  };

  someInstance.pop = function() {
    // Check to see if the stack is not empty
    if(last > 0){
      // Assign the last element to the temp variable
      var temp = storage[last];
      // Remove the last element from the stack
      delete storage[last];
      last -= 1;
      // Return the last element that was assigned to the temp varaible
      return temp;
    }
  };

  someInstance.size = function() {
    return last;
  };

  return someInstance;
};
