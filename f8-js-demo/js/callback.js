var languages = ["JavaScript", "Java", "Java", "PHP"];
// Map
console.log("Map");
// Callback
/*
- Hàm
- Được truyền qua đối số
- Được gọi lại bởi hàm nhận đối số
*/
Array.prototype.map2 = function (callback) {
  if (typeof callback === "function") {
    var arrayLength = this.length;
    var newArray = [];
    for (var i = 0; i < arrayLength; i++) {
      var result = callback(this[i], i);
      newArray.push(result);
    }
    return newArray;
  }
};

var languagesMap = languages.map2(function (language, index) {
  return `<h2>${language}</h2>`;
});
console.log(languagesMap.join(""));

// -----------------------------------------
// For each
console.log("For each");
Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};
var languagesForEach = languages.forEach2(function (language, index, array) {
  console.log(language, index, array);
});
// -----------------------------------------
// Filter
console.log("Filter");
Array.prototype.filter2 = function (callback) {
  var output = [];
  for (var index in this) {
    var result = callback(this[index], index, this);
    if (result) {
      output.push(this[index]);
    }
  }
  return output;
};
var languagesFilter = languages.filter2(function (language, index, array) {
  return language.length >= 7;
});
console.log(languagesFilter);
// ---------------------------
// Find
console.log("Find");
Array.prototype.find2 = function (callback) {
  var arrayLength = this.length;
  var output = undefined;
  for (var i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i);
    if (result === true) {
      output = this[i];
      break;
    }
  }
  return output;
};
var languagesFind = languages.find2(function (language, index) {
  return language == "Java";
});
console.log(languagesFind);
// -------------------------------
// Find
Array.prototype.find2 = function (callback) {
  var arrayLength = this.length;
  var output = [];
  for (var i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i);
    result.push(result);
  }
  return output;
};
var languagesFilter = languages.filter(function (language, index) {
  return language == "Java";
});
console.log(languagesFilter);
// -------------------
var courses = [
  {
    id: 1,
    name: "JavaScript",
    isFinish: true,
  },
  {
    id: 2,
    name: "Java",
    isFinish: true,
  },
  {
    id: 3,
    name: "PHP",
    isFinish: true,
  },
  {
    id: 4,
    name: "Ruby",
    isFinish: true,
  },
];
// -------------------
// Some -> Boolean
Array.prototype.some2 = function (callback) {
  if (typeof callback === "function") {
    for (var index in this) {
      if (callback(this[index], index, this) === true) {
        return true;
      }
    }
    return false;
  }
};
console.log(
  courses.some2(function (course, index) {
    return course.isFinish === false;
  })
);
// -----------------------------
// Every -> return boolean
Array.prototype.every2 = function (callback) {
  if (typeof callback == "function") {
    for (var index in this) {
      if (this.hasOwnProperty(index)) {
        if (callback(this[index], index, this) === false) {
          return false;
        }
      }
    }
    return true;
  }
};
console.log(
  courses.every2(function (course, index) {
    return course.isFinish == true;
  })
);
