/*
    1.Primitive data type
    - Number
    - String 
    - Boolean
    - Undefined
    - Null
    - Symbol
    2. Complex data type 
    - Function
    - Object
*/
// Number
var a = 1;
var b = 1.6;
// String
var fullName = "Le Anh 'Duc";
console.log(fullName);
// Boolean
isSuccess = true;
//Undefined
var age;
console.log(typeof age);
// Null
var isNUll = null;
console.log(null);
console.log(typeof isNUll);
// Symbol
var id = Symbol("id"); //Unique
var id2 = Symbol("id"); //Unique
console.log(id);
console.log(id == id2);
// Function
var myFunction = function () {
  alert("Hello");
};
// myFunction();
// Object
var myObject = {
  name: "Duc",
  age: "20",
  address: "Binh Duong",
  myFunction: function () {},
};
console.log("myObject: ", myObject);
var myArray = ["js", "php", "Ruby"];
console.log(myArray);
