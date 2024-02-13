function showDialog(message) {
  alert(message);
}
// showDialog("Hello World!");
function writeLog() {
  for (var param of arguments) {
    console.log(param);
  }
}
writeLog(1, 2, 3, 4);
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4));

console.log(plus(2, 1)); // If no return, method will return undefined
// Function inner function
function showMessage() {
  function showMessage2() {
    console.log("Message");
  }
  showMessage2();
}
showMessage();
// Declaration function (hosting)
function plus(a, b) {
  return a * b;
}
// Expression function
var showName = function () {
  console.log("Le Anh Duc");
};
console.log(showName);
