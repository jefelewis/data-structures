class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.firstElement = 0;
    this.lastElement = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.lastElement += 1;
    this.storage[this.lastElement] = value;
  }

  // Dequeue: Remove from Front of Queue
  dequeue() {
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
  }
  size() {
    return this.lastElement - this.firstElement;
  }

}
