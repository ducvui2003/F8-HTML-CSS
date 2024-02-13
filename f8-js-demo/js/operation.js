/*
    1. Toán tử số học - Arithmetic
    2. Toán tử gán - Assignment
    3. Toán tử so sánh - Comparison
    4. Toán tử logic - Logical 
*/
/* 1. Toán tử số học 
    ** => Lũy thừa
    Prefix and Postfix
*/
var a = 6;
console.log(a);
a++;
console.log(a);
var number = 6;
var output = number++ + --number;
console.log(number);
console.log(output);
/*
    2. Toán tử gán
*/
var b = 3;
b += 3;
console.log(b);
/*
    Toán tử chuỗi (String)
*/
var firstName = "LE ANH";
var lastName = "DUC";
console.log(firstName + " " + lastName);
/*
    3. Toán tử so sánh
*/
/*
    Các giá trị khi convert sang boolean => false
    0
    false
    '' - ""
    undefined
    NaN
    null
    => Các giá trị khác giá trị trên khi convert sang boolean đều là true
*/
/* === and !==
    ===: so sánh giá trị và data type 
    ==: so sánh giá trị
*/
var c = 1;
var d = "1";
console.log(c === d);
// if (firstName) {
//   console.log("True");
// } else {
//   console.log("False");
// }
/*
    4.  Toán tử logical
*/
var result = "A" && "B" && "C";
var result2 = "A" && NaN && "C";
console.log(result);
console.log(result2);
