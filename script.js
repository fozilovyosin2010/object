// let obj = {
//   Firstname: "Yosin",
//   Lastname: "Fozilov",
//   age: 14,
//   isEmployed: false,
// };

//it uses for showing the keys and value wich object has in array format

//Method entries()
// console.log(Object.entries(obj)); //OUTPUT: -->

// [
//   ["Firstname", "Yosin"],
//   ["Lastname", "Fozilov"],
//   ["age", 14],
//   ["isEmployed", false],
// ];

//Method keys()

//it uses for showing the keys wich object has in array format

// console.log(Object.keys(obj)); //OUTPUT: --> [ 'Firstname', 'Lastname', 'age', 'isEmployed' ]

//Method values()

// console.log(Object.values(obj)); //OUTPUT: --> [ 'Yosin', 'Fozilov', 14, false ]

// it uses for showing the values wich object has in array format

//Destructuring method

//DESTRUCTURE VALUE OF OBJECT
// let person1 = {
//   FirstName: "John",
//   LastName: "Doe",
//   age: 30,
//   Job: "Programmer",
// };

// let person2 = {
//   FirstName: "Yosin",
//   LastName: "Fozilov",
//   age: 14,
// };

// let { FirstName, LastName, Job = "Workless", age } = person2;
// console.log(Job);
// console.log(FirstName);
// console.log(LastName);

//function type

// function object(obj1, obj2) {
//   let { FirstName, LastName, Job = "Workless", age } = obj1;
//   return age;
// }
// console.log(
//   object(
//     { FirstName: "John", LastName: "Doe", age: 30, Job: "Programmer" },
//     { FirstName: "Yosin", LastName: "Fozilov", age: 14 }
//   )
// );

// Spread method in object

// function object(obj) {
//   let obj2 = { ...obj };
//   return obj2;
// }
// console.log(object({ name: "Yosin", age: 14, job: "Programmer" }));

//REST METHOD IN OBJECT

// let object = (obj) => {
//   let { name, ...rest } = obj;
//   return rest;
// };
// console.log(object({ name: "Yosin", age: 14, job: "Programmer" }));

//KEYWORD --> this

//VARIABLE VERSION

// let person = {
//   name: "Yosin",
//   age: 14,
//   job: "Programmer",
//   print: function () {
//     return `My name is ${this.name}`;
//   },
// };
// console.log(person.print());

//FUNCTION VERSION

// let object = (person) => {
//   return person.print();
// };
// console.log(
//   object({
//     name: "Ali",
//     age: 14,
//     job: "Programmer",
//     print: function () {
//       return `My name is ${this.name}.I'm ${this.age} years old and I work as a ${this.job}`;
//     },
//   })
// );

//DATA AND TIME

// for ways for making date objects

// 1. new Date()

// let time = new Date();
// console.log(time); //output: 2024-05-06T13:47:51.183Z

//it used for showing a curent time

// 2. new Date(milliseconds)

// let time = new Date(10); //10 is a millisecond
// console.log(time);

//it used for showing a time since january 1, 1970

// 3. new Date(Date string)

// let time = new Date("2024-05-06");
// console.log(time);

// it used for showing a time in a breackets wich is written require standard is ("year-month-day")

//4. new Date(year,month,day,hour,minute,second,millisecond)

// let time = new Date(2024, 5, 6, 11, 57, 10, 5);
// console.log(time); //output: 2024-06-06T06:57:10.005Z

// it used for showing a time in standart of (year, month, day, hour, minute, second,millisecond), empty parts equal to 0
