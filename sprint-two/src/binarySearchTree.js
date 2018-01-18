var BinarySearchTree = function(input, value) {
  var startIndex = 0;
  var middleIndex = (input.length / 2);
  var endIndex = input.length

  // If Value is greater than the middleIndex, Move to the Right
  if(value > middleIndex){
    startIndex = middleIndex;
  }
  // If the Value is less than the middleIndex, Move to the Left
  else{
    endIndex = middleIndex;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
