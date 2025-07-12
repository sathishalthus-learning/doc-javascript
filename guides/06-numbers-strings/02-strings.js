// strings

// literals
const string1 = 'foo';
console.log(string1);

const string2 = "bar";
console.log(string2);

const string3 = "\xA9" // "©" hexadecimal escape sequence
console.log(string3);

const string4 = "\u00A9"; // "©" unicode escape sequence
console.log(string4);

// string object
const string5 = new String("hello javascript");
console.log(string5);

// can call methods diectly on the string object
const string6 = "hello".toUpperCase();
console.log(string6);

