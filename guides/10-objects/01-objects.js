// object
// collection of properties

//create objects
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
// conditionally create an object
let x;
if (cond) {
  x = { greeting: "hi there" };
}
// object inside object
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};

// using constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar = new Car("Eagle", "Talon TSi", 1993);

// object.create
const Animal = {
  type: "Invertebrates", // Default value of properties
  displayType() {
    // Method which will display type of Animal
    console.log(this.type);
  },
};
// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Logs: Invertebrates
// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes

// accessing properties
// .property
// ["property"]         used for property names that are not valid identifiers

//defining methods
const obj = {
  myMethod: function () {
    // code here
  },
};
objectName.methodName(params);

//getters and setters
const myObj = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    },
  };
  
  console.log(myObj.a); // 7
  console.log(myObj.b); // 8, returned from the get b() method
  myObj.c = 50; // Calls the set c(x) method
  console.log(myObj.a); // 25

  
  // comparing objects
  // Two variables, two distinct objects with the same properties
const fruit = { name: "apple" };
const anotherFruit = { name: "apple" };
fruit == anotherFruit; // return false
fruit === anotherFruit; // return false

// Two variables, a single object
const fruit1 = { name: "apple" };
const anotherFruit2 = fruit1; // Assign fruit object reference to anotherFruit

// Here fruit and anotherFruit are pointing to same object
fruit1 == anotherFruit1; // return true
fruit1 === anotherFruit1; // return true

fruit1.name = "grape";
console.log(anotherFruit1); // { name: "grape" }; not { name: "apple" }



