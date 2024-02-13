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
var newArray = courses.map(function (course, index, orgArray) {
  return {
    id: course.id,
    name: `Khoa hoc ${course.name}`,
    price: course.price,
  };
});
console.log(newArray);
// Use to render HTML
