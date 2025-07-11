// regex and uses

// create a regex
let regex = /hello/;
console.log(regex); // /hello/

// create a regex with flags
regex = /hello/gi;
console.log(regex); // /hello/gi

// create a regex with constructor
regex = new RegExp('hello');
console.log(regex); // /hello/

// create a regex with constructor and flags
regex = new RegExp('hello', 'gi');
console.log(regex); // /hello/gi

// test a string with regex
let str = 'hello world';
console.log(regex.test(str)); // true

// match a string with regex
str = 'hello world';
console.log(str.match(regex)); // [ 'hello' ]

// search a string with regex
str = 'hello world';
console.log(str.search(regex)); // 0