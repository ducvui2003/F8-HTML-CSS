/*
    1. Tạo string 
    2. Một số case dùng backslash(\)
    3. Xem độ dài
    4. Chú ý độ dài khi code
    5. Template string ES6
*/
// var fullName = "Anh Duc";
// console.log(fullName);
// console.log(typeof fullName);

// console.log(fullName.length);
// console.log(`my name is ${fullName} `);
/*
    Làm việc với string
    1. Length
    2. Find index
    3. Cut string
    4. Replace string
    5. Convert to upper case
    6. Convert to lower case
    7. Trim
    8. Split
    9. Get a character by index
*/
var myString = "Toi ten la Le Anh Duc";
// 1. Length
console.log(myString.length);
//  2. Find index
console.log(myString.indexOf("ten"));
console.log(myString.indexOf("a", 5));
// 3. Cut string
console.log(myString.slice(0, 3));
// 4. Replace string
console.log(myString.replace("Toi ten la", "My name is"));
// 5. Convert to upper case
console.log(myString.toUpperCase());
// 6. Convert to lower case
console.log(myString.toLowerCase());
// 7. Trim
console.log(myString.trim());
// 8. Split
var languages = "JavaScript, PHP, RUBY";
console.log(languages.split(", ")); //=> Array
// 9. Get a character by index
const myString2 = "Anh Duc";
console.log(myString2.charAt(4));
console.log(myString2[4]);
