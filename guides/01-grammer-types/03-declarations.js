// declaration, variables, scope
console.clear()
console.log("------------------------------------")
console.log("declarations")
console.log("------------------------------------")

// 1.
// var
var var1;                       // changeable
console.log(var1);              // if not initialized, prints undefined
var1 ="hello";
console.log(var1);
var var1 = 36;                  // allows redeclaration (overrides previous value)
console.log(var1);

// let
let var2;                       // changeable
console.log(var2);              // if not initialized, prints undefined
var2 = 7;
console.log(var2);



const var3 = "321"      // unchangeable
console.log(var3);
// var3 = 123;                 // error, redeclaration or assignment is not allowed          
// const const1;             // always needs to be initializedror
// const1 = "anything";        // error    

// 2.
// letters, digits _, $


// 3.
// global > module > function > block

// variable hoisting
// var declared variables hoisted
// declaration only hoiseted, not initialization

// global variable
// this


// strict mode
// "use strict"; // top of the file
// "use strict"; // top of the function
// "use strict"; // top of the block
// "use strict"; // top of the module

console.log("=====================================")