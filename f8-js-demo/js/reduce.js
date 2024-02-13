// Use when: Get 1 value after handle logic in 1 array
var courses = [
  {
    id: 1,
    name: "JS",
    price: 1000,
  },
  {
    id: 2,
    name: "PHP",
    price: 2000,
  },
  {
    id: 3,
    name: "CSS",
    price: 13000,
  },
  {
    id: 4,
    name: "HTML",
    price: 11000,
  },
  {
    id: 5,
    name: "Java",
    price: 10000,
  },
];
// Get total price course in courses array
// accumulator == bien tich tru
var totalPrice = courses.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  orgArray
) {
  return accumulator + currentValue.price;
},
0);
console.log(totalPrice);

// If initial value is null
// In callback, accumulator is array[i], currentValue is array[i+1], currentIndex is i+1
// Array.prototype.reduce2 = function (callback, initialValue) {
//   var accumulator = initialValue;
//   for (index in this) {
//     console.log(this[index]);
//     var total = callback(accumulator, this[index], index);
//     console.log(total);
//     accumulator += total;
//   }
//   return accumulator;
// };
// console.log(
//   courses.reduce2(function (accumulator, course, index) {
//     return accumulator + course.price;
//   }),
//   0
// );

// Flat Depth array
var depthArray = [1, 2, 3, [4, 5], [6], 7, [8, 9]];
var flatArray = depthArray.reduce(function (flat, depthItem) {
  return flat.concat(depthItem);
}, []);
console.log(flatArray);
console.log([1, 2, 3].concat([4, 5]));
