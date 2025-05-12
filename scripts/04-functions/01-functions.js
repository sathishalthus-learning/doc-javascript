// functions
// functions hoisted to current scope

// declaration
function functionName(args) {
    return value;
}
// callling function
functionName();    

// example
function square(number) {
    return number * number;
}
console.log(square(5));     // prints 25

// function expression
const square = function (number) {
    return number * number;
};
console.log(square(4)); // prints 16
  
// IIFE
(function () {
    // Do something
  })();
  
  const value = (function () {
    // Do something
    return someValue;
  })();
  