;(function(global) {
  var jackal = {};

  // Polyfill for Array.isArray()
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

  jackal.stdDeviation = function(arr) {
    if (Array.isArray(arr)) {
      var sum = arr.reduce(function(a, b) {
        return a + b;
      }, 0);
      var mean = sum / arr.length;
      var squaredPrices = [];
      arr.forEach((ele) => {
        squaredPrices.push(Math.pow((ele - mean), 2));
      });
      var squaredSum = squaredPrices.reduce(function(a, b) {
        return a + b;
      }, 0);
      var squaredMean = squaredSum / squaredPrices.length;
      var stdDeviation = Math.sqrt(squaredMean);
      return stdDeviation;
    } else {
      throw 'Cannot calculate standard deviation for ' + typeof arr;
    }
  };

  jackal.multipleSum = function(max, mult1, mult2) {
    if (typeof max === 'number' && typeof mult1 === 'number' && typeof mult2 === 'number') {
      var sum = 0;
      for (var i = 1; i < max; i++) {
        if (i % mult1 === 0 && i >= mult1 || i % mult2 === 0 && i >= mult2) {
          sum += i;
        }
      }
      return sum;
    } else {
      throw 'One or more arguments is not a number';
    }
  };

  jackal.evenFibonacci = function(max) {
    var fibbs = [1, 2]
    for (var i = 0; i < fibbs.length; i++) {
      var num = fibbs[i] + fibbs[i + 1];
      if (num <= max) {
        fibbs.push(num);
      }
    }
    var sum = fibbs.reduce(function(acc, val) {
      return val % 2 === 0 ? acc + val : acc;
    }, 0);
    return sum;
  };

  // Quadratic sieve
  jackal.primeFactor = function(num) {
    var largest = 0;
    for (var i = 1; i < num; i++) {
      var factor = num % i;
      if (factor * i === num) {
        largest = i;
      }
    }
    return largest;
  };

  jackal.factorialDigitSum = function(num) {
    var factorial = 1;
    for (var i = num; i > 0; i--) {
      factorial *= num;
    }
    factorial = toFixed(factorial) + '';
    var chars = factorial.split('');
    var sum = 0;
    for (var i = 0; i < chars.length; i++) {
      sum += parseInt(chars[i]);
    }
    return sum;
  };

  global.jackal = global._J = jackal;
}(window));
