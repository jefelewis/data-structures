// Hash Table Example:

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  // Retrieve Bucket
  var bucket = this._storage.get(index);

  // If the Bucket doesn't exist, create the Bucket
  if(bucket === undefined){
    bucket = [];
    bucket = this._storage.set(index, bucket);
  }

  // Find if the Key exists
  // Found Variable
  var wasFound = false;

  // Iterate through the Bucket
  for(var i = 0; i < bucket.length; i++){
    var tuple = bucket[i];
    // Does Key exist in Tuple
    if(tuple[0] === key){
      // Update the Value to the Key
      tuple[1] = value;
      wasFound = true;
      break;
    }
  }

  // If Key doesn't exist
  if(!wasFound){
    // Insert a new Tuple
    bucket.push([key, value]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // Retrieve Bucket
  var bucket = this._storage.get(index);

  // If the Bucket doesn't exist, create the Bucket
  if(!bucket){
    bucket = [];
    bucket = this._storage.set(index, bucket);
  }

  // Found Variable
  var wasFound = false;

  // Iterate through the Bucket
  for(var i = 0; i < bucket.length; i++){
    var tuple = bucket[i];
    // Does Key exist in Tuple
    if(tuple[0] === key){
      // Update the Value to the Key
      tuple[1] = value;
      wasFound = true;
      break;
    }
  }





};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

};



/*
Complexity: What is the time complexity of the above functions?
O(1) Constant Time

*/
