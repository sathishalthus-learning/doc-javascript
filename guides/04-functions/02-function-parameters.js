// function parameters

// default parameters
// when value not provided it defaults to undefined.
function multiply(a, b = 1) {
    return a * b;
  }
console.log(multiply(5)); // 5
  
// rest parameters
function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
  }
const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
  