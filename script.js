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