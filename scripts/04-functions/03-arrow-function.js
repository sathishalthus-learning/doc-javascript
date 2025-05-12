// arrow function

//
function Person() {
    this.age = 0;
  
    setInterval(() => {
      this.age++; // `this` properly refers to the person object
    }, 1000);
  }
  const p = new Person();
  

// shorter function
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});
console.log(a2); // [8, 6, 7, 9]
const a3 = a.map((s) => s.length);
console.log(a3); // [8, 6, 7, 9]
