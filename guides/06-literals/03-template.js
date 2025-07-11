// template literals
// use grave accent(backtick)

// multilne
console.log(
  "string text line 1\n\
  string text line 2"
);
// "string text line 1
// string text line 2"

// embedded expressions
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
