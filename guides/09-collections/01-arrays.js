// arrays

// creating
const arr1 = new Array(element0, element1, elementN);
const arr2 = Array(element0, element1, elementN);
const arr3 = [element0, element1, elementN];

// empty arrays
const arr6 = new Array(arrayLength);
const arr4 = Array(arrayLength);
const arr5 = [];

// referring array elements
const arr = ["one", "two", "three"];
arr[2]; // three
arr["length"]; // 3
arr[3.4] = "Oranges";
console.log(arr.length); // 3
console.log(Object.hasOwn(arr, 3.4)); // true

// populating arrays
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";

// iterating arrays
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// foreach
colors.forEach((color) => console.log(color));

// for...of
for (const color of colors) {
  console.log(color);
}
