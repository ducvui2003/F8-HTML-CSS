var languages = ["JS", "PHP", "Ruby", null, undefined, function () {}];
console.log(languages);
console.log(typeof languages);
console.log(Array.isArray(languages)); //Use to check object
// To string
console.log(languages.toString());
console.log(languages.join(" "));
console.log(languages.pop()); //Return and Delete last index
console.log(languages.push("Java")); //add element at last array and return length of array
console.log(languages.shift()); //Return and Delete first index
console.log(languages.unshift("Go Lang")); //add element at first array and return length of array
languages.splice(1, 2); //Delete 2 element begin at index is 1
languages.splice(1, 0, "Dart"); //Insert element begin at index is 1
languages.splice(1, 1, "Node Js"); //Replace element at index is 1 by Node JS
console.log(languages);
var language2 = ["Dart", "Ruby"];
console.log(language2);
console.log(language2.concat(languages));
console.log(languages.slice(1, 2)); //Cut element from index 1 to index 2

// Empty elements of array?
courses = ["Java", "PHP", "JS"];
courses.length = 10;
console.log(courses);
for (var i in courses) {
  console.log(courses[i]);
}
