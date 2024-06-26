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

//DATA METHODS

//METHOD now()

// function show(time) {
//   return time;
// }
// console.log(show(Date.now())); //output: 1715230079748

// or

// let time = Date.now();
// console.log(time);

//it used for showing milliseconds since January 1st, 1970

//METHOD getFullYear()

// let time = new Date();
// let year = time.getFullYear();
// console.log(year); //output:2024

//it returns full year of the date 4 digits

//METHOD getMonth()

//this will show the month as a number

// let time = new Date();
// let month = time.getMonth();
// console.log(month); //output:4

//this will show the month as a string

// let d = new Date();
// let month = [
//   "january",
//   "february",
//   "march",
//   "april",
//   "may",
//   "june",
//   "july",
//   "august",
//   "september",
//   "october",
//   "november",
//   "december",
// ];
// let find = d.getMonth();
// console.log(month[find]);

//getMonth() returns the month (0 to 11) of the date January = 0 ...

//METHOD getDate()

// let d = new Date(); //2024-05-09T05:14:28.763Z
// let day = d.getDate();
// console.log(d); //output: 9

//it return the day of the date (1 to 31)

// METHOD getHours()

// let t = new Date();
// let hour = t.getHours();
// console.log(hour);

//it ruturns the hour from(0 till 23) of the date

// IF YOU WANNA ADD AN ELEMENT TO THE OBJECT

// FUNCTION VERSION

// function addName(obj, name) {
//   obj[name] = 12;
//   return obj;
// }
// console.log(addName({}, "yosin"));

// VARIABLE VERSION

// let obj = {};
// let word = "name";
// obj[word] = "yosin";
// console.log(obj);

//METHOD getDay()

//as a number

// let time = new Date();
// let dayOfWeek = time.getDay();
// console.log(dayOfWeek);

//as a string

// let tm = new Date();
// let weeks = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];
// let day = tm.getDay() - 1;

// console.log(weeks[day]);

// it used for showing the day of the week (1, 7)

//METHOD getMinutes()

// let time = new Date();
// let minute = time.getMinutes();
// console.log(minute);

//it used for showing the minute of the hour (0, 59)

//METHOD setDate()

//without adding a new variable for (.setDate())

// let time = new Date(); //2024-05-11T11:19:59.238Z
// time.setDate(12);
// console.log(time); //2024-05-12T11:20:39.866Z

//with adding a new variable for (.setDate())

// let time = new Date(); //2024-05-11T11:19:59.238Z
// let day = time.setDate(12); // it will show in miliseconds since 1970, January 1st
// console.log(day); //1715512970918

// it used to set the day of the month variable parameters are the same

//METHOD setMonth()

// let time = new Date(); //2024-05-11T11:26:47.073Z
// time.setMonth(0); //2024-01-11T11:26:47.073Z
// console.log(time);

// it used to set the month of the year variable parameters are the same

//METHOD setFullYear()

// let time = new Date(); //2024-05-11T16:07:48.736Z
// time.setFullYear(2022); //2022-05-11T16:07:48.736Z
// console.log(time);

// let time = new Date();
// time.setFullYear(time.getFullYear(), time.getMonth() - 2, time.getDate() + 2);
// console.log(time.toString());

//it used to set the full year, month and day variable parameters are the same
