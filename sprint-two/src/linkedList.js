var LinkedList = function() {
  var list = {};
  list.head = 0;
  list.tail = 0;

  list.addToTail = function(value) {
    // Assign value to the Node using the Node function
    list.tail = Node(value);
  };

  list.removeHead = function() {
    // Check to see if the Linked List is empty
    if(list.head !== 0){
      var temp = list.head;
      delete list.head;
      return temp;
    }
  };

  list.contains = function(target) {
    for(var i = 0; i < list.length; i++){
      if(list[i] === target){
        return true;
      }
      else{
        return false;
      }
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
