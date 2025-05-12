// literals

// array literals
const array1 = [1,2,3,4];
const coffees = ["French Roast", "Colombian", "Kona"];
const fish = ["Lion", , "Angel", ,];   // last comma ignored // 3

// boolean literals
const yes=true;
const no = false;

// number literals
// integer
// 0, 117, 123456789123456789n             (decimal, base 10)
// 015, 0001, 0o777777777777n              (octal, base 8)
// 0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
// 0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
// float
// [digits].[digits][(E|e)[(+|-)]digits]

// object literals
// zero or more pair of property name
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

// regex literals
const re = /ab+c/;
const reg = new RegExp("/ab+c/");

// string literals
const foo = 'foo';
const bar = "bar";
const numb = '1234';
const sentence = "Joyo's cat";

// template literals
const temp = `Hello ${foo}, how are you ${bar}?`

// tagged lieteral

