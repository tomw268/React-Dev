// UNDERSTANDING LET AND CONST

//let // can be changed but not need to be
//const // use for things that will never change like DOB

// let myName = 'Tom';
// console.log(myName);
// // logs Tom

// myName = 'Manu';
// console.log(myName);
// // logs manu

// UNDERSTANDING ARROW FUNCTIONS

// const myName = (name) =>{
//     console.log(name)
// }

// myName('tom')// logs out tom

// EXPORTS AND IMPORTS MODULES
// const person = {
//     name:'Tom'
// }
// export default person
// import person from ./person.js

// UNDERSTANING CLASSES
// creating a class
// class Person {
//   name = 'Tom'; // Property
//   call = () => {}; //Method
// }

// // using a class
// const myPerson = new Person();
// myPerson.call();
// console.log(myPerson.name);

// // inheritance aka protptpe
// class Person extends Master

// inheriting
// class Human {
//   constructor() {
//     this.gender = 'male';
//   }
//   printGender() {
//     console.log(this.gender);
//   }
// }

// class Person extends Human {
//   // need to use super when extending another class to another
//   //creating a new class
//   constructor() {
//     super();
//     this.name = 'Tom';
//   }
//   printMyName() {
//     console.log(this.name);
//   }
// }
// const person = new Person();
// person.printMyName();
// person.printGender();

// CLASS, PROPERTIES AND METHODS
// classes do not need this.
// methods are arrow functions
// class Human {
//   gender = 'male';

//   printGender = () => {
//     console.log(this.gender);
//   }
// }

// class Person extends Human {
//   // need to use super when extending another class to another
//   //creating a new class
// name = 'Tom';

//   printMyName = () => {
//     console.log(this.name);
//   }
// }
// const person = new Person();
// person.printMyName();
// person.printGender();

// THE SPREAD AND REST OPERATOR
// Spread Used to split up array elements OR object properties
//const newArray = [...oldArray,1,2]
//const newObject = {...oldObject, newProp:5}

//Rest used to merge a list of function arguments into an array
// function sortArgs{..args}{return args.sort()}

// DESTRUCTURING

// REFRENCE AND PRIM TIMES REFRESHER

// REFESH ARRAY FUNCTIONS
