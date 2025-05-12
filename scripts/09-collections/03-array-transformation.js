// array tranformations

//grouping


//sparse arrays
const a = Array(5); // [ <5 empty items> ]
const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 empty items> ]
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]

// multidimensional arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[0][0]); // 1






