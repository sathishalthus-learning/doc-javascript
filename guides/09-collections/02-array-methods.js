//

const colors = ["red", "green", "blue"];
// methods
// push
colors.push("purple");
console.log(colors); // ["red", "green", "blue", "purple"]
// pop
colors.pop();
console.log(colors); // ["red", "green", "blue"]
// shift
colors.shift();
console.log(colors); // ["green", "blue"]
// unshift
colors.unshift("red");
console.log(colors); // ["red", "green", "blue"]
// splice
colors.splice(1, 1, "yellow");
console.log(colors); // ["red", "yellow", "blue"]
// slice
const subColors = colors.slice(1, 2);
console.log(subColors); // ["yellow"]
// concat
const moreColors = ["purple", "orange"];
const allColors = colors.concat(moreColors);
console.log(allColors); // ["red", "yellow", "blue", "purple", "orange"]
// join
const colorsString = colors.join(", ");
console.log(colorsString); // "red, yellow, blue"
// indexOf
console.log(colors.indexOf("yellow")); // 1

// lastIndexOf
colors.push("yellow");
console.log(colors.lastIndexOf("yellow")); // 3
// includes
console.log(colors.includes("yellow")); // true
// every
const isYellow = (color) => color === "yellow";
console.log(colors.every(isYellow)); // false
// some
const hasYellow = (color) => color === "yellow";
console.log(colors.some(hasYellow)); // true
// filter
const yellowColors = colors.filter(isYellow);
console.log(yellowColors); // ["yellow", "yellow"]
// map
const upperColors = colors.map((color) => color.toUpperCase());
console.log(upperColors); // ["RED", "YELLOW", "BLUE", "YELLOW"]
// reduce
const sum = colors.reduce((acc, color) => acc + color, "");
console.log(sum); // "redyellowblueyellow"
// reduceRight
const sumRight = colors.reduceRight((acc, color) => acc + color, "");
console.log(sumRight); // "yellowblueyellowred"
// find
const foundColor = colors.find(isYellow);
console.log(foundColor); // "yellow"
// findIndex
const foundIndex = colors.findIndex(isYellow);
console.log(foundIndex); // 1
// fill
colors.fill("black");
console.log(colors); // ["black", "black", "black", "black"]
// reverse
colors.reverse();
console.log(colors); // ["black", "black", "black", "black"]
// sort
colors.sort();
console.log(colors); // ["black", "black", "black", "black"]
// sort with compare function
colors.sort((a, b) => a.localeCompare(b));
console.log(colors); // ["black", "black", "black", "black"]
// copyWithin
colors.copyWithin(1, 0, 2);
console.log(colors); // ["black", "black", "black", "black"]
//flat
const nestedColors = ["red", ["green", "blue"]];
const flatColors = nestedColors.flat();
console.log(flatColors); // ["red", "green", "blue"]
// flatMap
const flatMappedColors = nestedColors.flatMap((color) => color);
console.log(flatMappedColors); // ["red", "green", "blue"]
