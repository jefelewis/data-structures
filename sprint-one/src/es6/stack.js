class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {
    this.lastElement = 0;
    this.storage = {};
  }

  push(value) {
    // Adds 1 to the Stack
    this.lastElement += 1;
    this.storage[this.lastElement] = value;
  }

  pop() {
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
  }

  size() {
    return this.lastElement;
  }

}
