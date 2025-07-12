//

// decimal numbers
console.log(12345);

// binary
console.log(0b00011110001);
console.log(0B111100001);

// octal
console.log(0o12345);
console.log(0O1237);

// hexadecimal
console.log(0X1234abc);
console.log(0x134777F);

// exponentiation
0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1E3    // 1000

// number object

//
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;

// methods
console.log(Number.parseInt(12.34));
console.log(Number.parseInt('12'));
console.log(Number.parseFloat('145.45678'));
// isFinite
// isInteger
// isNan
// isSafeInteger
// toExponential
// toFixed
// toPrecision

// math object
console.log(Math.PI);
console.log(Math.abs(-15.75));

// Big Ints
const b1 = 123n;
console.log(b1);

const b2 = BigInt(-12345);
console.log(b2);


