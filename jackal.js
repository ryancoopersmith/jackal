;(function(global) {
  var jackal = {};

  // Takes an array and formats it so that the largest integers
  // are in the middle and the smallest integers are towards the
  // beginning and ends of the array.
  jackal.createBellCurve = function(arr) {
    if (arr[0]) {
      var bellCurve = [];
      var length = arr.length;

      for (var i = 1; i < length + 1; i++) {
        var max = Math.max(...arr); // spread operator treats [1,2,3] as 1,2,3
        if (i % 2 === 0) {
          bellCurve.push(max);
        } else {
          bellCurve.unshift(max);
        }

        var index = arr.indexOf(max);
        arr.splice(index, 1);
      }

      return bellCurve;
    } else {
      throw 'Cannot create bell curve for ' + typeof arr;
    }
  };

  jackal.randomize = function(arr) {
    
  }

  global.jackal = global.J = jackal;
}(window));
