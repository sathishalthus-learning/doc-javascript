//

// map object
const sayings = new Map();
sayings.set("dog", "woof");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"
sayings.clear();
sayings.size; // 0

// weak map