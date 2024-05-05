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
