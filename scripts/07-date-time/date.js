// 
// js dont have date data type

// date object
// const dateObjectName = new Date([parameters]);

// current date
const today = new Date();
console.log(today);

// specific date
const aDate = new Date('2021-01-01');
console.log(aDate);
const aDate2 = new Date(2001,11,15);
console.log(aDate2);

// specific date and time
const aDateTime = new Date('2021-01-01T12:00:00');
console.log(aDateTime);
const aDateTime2 = new Date(2001,11,15,12,0,0);
console.log(aDateTime2);

// date methods
// get methods
console.log(today.getFullYear()); // since 1900
console.log(today.getMonth());  // 0-11
console.log(today.getDate());      // 1-31
console.log(today.getDay());        // 0-6
console.log(today.getHours());  // 0-23
console.log(today.getMinutes());    // 0-59
console.log(today.getSeconds());    // 0-59
console.log(today.getMilliseconds());   // 0-999
console.log(today.getTime());   // milliseconds since 1970-01-01

// set methods
today.setFullYear(2022);    // 2022-01-01
today.setMonth(11);         // 2022-12-01
today.setDate(25);          // 2022-12-25
today.setHours(12);         // 2022-12-25T12:00:00
today.setMinutes(30);       // 2022-12-25T12:30:00
today.setSeconds(45);       // 2022-12-25T12:30:45
today.setMilliseconds(500); // 2022-12-25T12:30:45.500
console.log(today);         

