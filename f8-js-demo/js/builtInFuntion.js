/*
    1. alert => show pop-up notification
    2. Console => show in console in dev tool
    3. Confirm => verify
    4. Prompt => enter a value to next
    5. Set timeout => (function, time) => Function will execute after time
    6. Set interval => (function, time) => Function will execute after time infinite
*/
// console.log("Hello");
// console.log(123);
// var fullName = "Le Anh Duc";
// console.log(fullName);
// confirm("Verify not under 18 years old");
// prompt("Verify not under 18 years old");
// setTimeout(function () {
//   alert("Notification");
// }, 5000);
setInterval(function () {
  console.log("Interval");
}, 2000);
