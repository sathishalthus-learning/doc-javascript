//

// exec
const regex = /hello/;
let str = 'hello world';
console.log(regex.exec(str)); // [ 'hello', index: 0, input: 'hello world', groups: undefined ]
str = 'world hello';
console.log(regex.exec(str)); // null

//test
const regex2 = /hello/;
let str2 = 'hello world';
console.log(regex2.test(str2)); // true
str2 = 'world hello';
console.log(regex2.test(str2)); // false

// match    
const regex3 = /hello/;
let str3 = 'hello world';
console.log(str3.match(regex3)); // [ 'hello', index: 0, input: 'hello world', groups: undefined ]
str3 = 'world hello';
console.log(str3.match(regex3)); // null

// search
const regex4 = /hello/;
let str4 = 'hello world';
console.log(str4.search(regex4)); // 0
str4 = 'world hello';
console.log(str4.search(regex4)); // 6

// replace
const regex5 = /hello/;
let str5 = 'hello world';
console.log(str5.replace(regex5, 'hi')); // hi world
str5 = 'world hello';
console.log(str5.replace(regex5, 'hi')); // world hi

// split
const regex6 = / /;
let str6 = 'hello world';
console.log(str6.split(regex6)); // [ 'hello', 'world' ]
str6 = 'hello world';
console.log(str6.split(regex6, 1)); // [ 'hello' ]
str6 = 'hello world';
console.log(str6.split(regex6, 2)); // [ 'hello', 'world' ]

// replaceall

// matchall


