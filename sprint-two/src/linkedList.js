// Linked List Function (Contains the Node objects)
var LinkedList = function() {
  var list = {
    head: null,
    tail: null,
    total: 0
  };


  list.addToTail = function(value) {
    // Check if Linked List has no nodes (Node becomes Head and Tail)
    if(list.head === null){
      // Assign value to the Head
      list.head = Node(value);
      // Assign Head to the Tail (We CANNOT assign list.tail to Node(value) because it creates TWO objects. They are the same output, but DIFFERENT objects)
      list.tail = list.head;
      // Add 1 to the total count
      list.total += 1;
    }

    // If the Linked List has node
    else if(list.head !== null){
      // Assign Node to the Next (This needs to come before assigning it it the Tail)
      list.tail.next = Node(value);
      // Assign Node to the Tail
      list.tail = list.tail.next;
      // Add 1 to the total
      list.total += 1;
    }
  };

  list.removeHead = function() {
    // // Check if Linked List has no nodes
    // if(list.head === null){
    //   // Return an empty object Node?
    //   return {};
    // }
    // Check if the Linked List has nodes
    if(list.head !== null){
      // Assign Head to value (Why Do I need value?)
      var deletedHead = list.head.value;
      // Assign the Element before the Head as the New Head (The previous head is overwritten)
      list.head = list.head.next
      // Remove the Head
      return deletedHead;
    }
  };

  list.contains = function(target) {

  };

  return list;
};

// Node Function
var Node = function(value) {
  var node = {
    value: value,
    next: null
  };

  return node;
};

/*
Complexity: What is the time complexity of the above functions?

O(n) Linear

*/
