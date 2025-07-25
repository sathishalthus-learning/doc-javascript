// iterators

// for..in
// iterate over properties
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);       // "0" "1" "2" "foo"
}

// for..of
// array, map, set, args
for (const i of arr) {
    console.log(i);         // Logs: 3 5 7
  }

  const obj = { foo: 1, bar: 2 };

  for (const [key, val] of Object.entries(obj)) {
    console.log(key, val);
  }
  // "foo" 1
  // "bar" 2
  