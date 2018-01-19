var BinarySearchTree = function(input, value) {
  var startIndex = 0;
  var middleIndex = Math.floor(input.length/2);
  var endIndex = input.length;

  while(value !== middleIndex){
    // If Value is greater than the middleIndex, Move to the Right
    if(value > middleIndex){
      startIndex = middleIndex;
    }
    // If the Value is less than the middleIndex, Move to the Left
    else if(value < middleIndex){
      endIndex = middleIndex;
    }
    // If the Value equals the middleIndexIndex, return the value
    else{
      return BinarySearchTree();
    }
  }

};

// console.log(BinarySearchTree([1,2,3,4,5,6,7,8,9,10], 7));

/*
Complexity: What is the time complexity of the above functions?


*/
