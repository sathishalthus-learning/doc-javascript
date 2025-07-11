//

// set
const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}
// 1
// "some text"

// coverting set to array
const myArr = Array.from(mySet);
console.log(myArr);
[...myArr];

myset2
