;(function(global) {
  var jackal = {};

  // Polyfill for Array.isArray
  if (!Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }

  // Takes an array and formats it so that the largest integers
  // are in the middle and the smallest integers are towards the
  // beginning and ends of the array.
  jackal.createBellCurve = function(arr) {
    if (Array.isArray(arr)) {
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

  // Randomizes array. Not perfect, but any better
  // would drastically increase the time complexity.
  jackal.randomize = function(arr) {
    if (Array.isArray(arr)) {
      var currentIndex = arr.length;
      var temporaryValue, randomIndex;

      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
      }

      return arr;
    } else {
      throw 'Cannot randomize ' + typeof arr;
    }
  };

  global.jackal = global._J = jackal;
}(window));
