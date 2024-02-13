var number = 123;
// Nan => a invalid number
console.log(typeof number);
var numberNaN = 123 / "ABC";
console.log(numberNaN);
console.log(typeof numberNaN);
console.log(numberNaN === NaN);
console.log(isNaN(numberNaN)); //=> Check NaN
console.log(number.toString());
var PI = 3.14;
console.log(PI.toFixed(1)); //round number
