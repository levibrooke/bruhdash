var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return _.first(arr);
  },

  // returns the last element of an array
  last: function (arr) {
    return _.last(arr);
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, num) {
    return _.indexOf(arr, num);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, num) {
    return _.lastIndexOf(arr, num);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    return _.initial(arr);
  },

  // returns an array with all falsey values removed
  compact: function(arr) {
    return _.compact(arr);
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    return _.slice(arr, start, end);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    return _.drop(arr, n);
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    return _.dropRight(arr, n);
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    return _.take(arr, n);
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    return _.takeRight(arr, n);
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
    return _.fill(arr, value, start, end);
  },

  // removes all given values from an array
  pull: function(arr, a, b) {
    var remove = _.pull(arr, a, b);
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function(arr, indexes) {
    var pulled = _.pullAt(arr, indexes);
    return arr;
  },

  // creates an array excluding all the specified values
  without: function(arr, exclude) {
    return _.without(arr, exclude);
  },

  // returns an array with specified values excluded
  difference: function(arr, values) {
    return _.difference(arr, values);
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function (arr1, arr2) {
    return _.zip(arr1, arr2);
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr1, arr2) {
    return _.unzip(arr1, arr2);
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, size){
    return _.chunk(arr, size);
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects

  forEach: function(collection) {
    var newCollection = [];
    _.forEach(collection, function(item, index) {
      console.log(item);
      newCollection.push(item);
      return newCollection;
    });
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {

  }
};
