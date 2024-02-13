/*
for 
for in:loop each key of obj;
for of: loop each value of obj;
while 
*/
// for (var i = 1; i < 1000; i++) {
//   console.log(i + 1);
// }
var myInfo = {
  name: "Le Anh Duc",
  age: 20,
  address: "Binh Duong",
};
// ----------------------------------------------
// For in
console.log("For in");
for (var key in myInfo) {
  console.log(myInfo[key]);
}
var languages = ["JS", "Ruby", "PHP"];
for (var key in languages) {
  // key = index of array
  console.log(languages[key]);
}
// Get char of String
var myString = "Javascript";
for (var key in myString) {
  console.log(myString[key]);
}
// ----------------------------------------------
// For of
console.log("For of");
for (var value of languages) {
  // value = element of array
  console.log(value);
}
// Use for of get value from obj
for (var value of Object.values(myInfo)) {
  console.log(value);
}
// ----------------------------------------------
// While
console.log("While");
var i = 0;
while (i <= 50) {
  console.log(i);
  i++;
}
// ----------------------------------------------
// Do while
console.log("Do while");
var j = 0;
do {
  j++;
  console.log(j);
} while (j < 10);
// ----------------------------------------------
// Break and Continue
console.log("Break");
for (var i = 0; i < 10; i++) {
  if (i >= 5) {
    break;
  }
  console.log(i);
}
console.log("Continue");
for (var i = 0; i < 10; i++) {
  if (i % 2 != 0) {
    continue;
  }
  console.log(i);
}
// Array 2 D
var myArray = [[1, 2], [(3, 4)], [(5, 6)]];
for (var i = 0; i < myArray; i++) {
  for (var j = 0; j < myArray[i]; j++) {
    console.log(myArray[i][j]);
  }
}
// Method related Arrays
var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 250,
  },
  {
    id: 2,
    name: "PHP",
    coin: 0,
  },
  {
    id: 3,
    name: "Java",
    coin: 500,
  },
  {
    id: 4,
    name: "Python",
    coin: 250,
  },
  {
    id: 5,
    name: "C#",
    coin: 0,
  },
  {
    id: 6,
    name: "C#",
    coin: 200,
  },
];
console.log("For each");
courses.forEach(function (course, index) {
  console.log(index, course);
});
console.log("Every");
//Output is boolean
//If 1 statement is true, it will check next element.
//If 1 statement is false, it will return false
var isFree = courses.every(function (course, index) {
  return course.coin === 0;
});
console.log(isFree);
console.log("Some");
//Output is boolean
//If 1 statement is true, it will return true
//If 1 statement is false, it will check next element.
isFree = courses.some(function (course, index) {
  return course.coin === 0;
});
console.log(isFree);
console.log("Find");
//Return first element archive condition
var courseJava = courses.find(function (course, index) {
  return course.name === "Java";
});
console.log(courseJava);
console.log("Find");
//Return all element archive condition
courseC = courses.filter(function (course, index) {
  return course.name === "C#";
});
console.log(courseC);
