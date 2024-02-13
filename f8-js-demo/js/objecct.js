var phone = "phone";
var myInfo = {
  name: "Le Anh Duc",
  age: 18,
  address: "Binh Duong",
  [phone]: "098877222",
  getName: function () {
    return this.name;
  },
};
console.log(myInfo);
myInfo.email = "ducvui2003@gmail.com"; //myInfo['email'] = "ducvui2003@gmail.com";
console.log(myInfo);
// Get value
console.log(myInfo.name);
console.log(myInfo.phone); // phone not exist, it will return undefined
var myKey = "address";
console.log(myInfo[myKey]);
// Delete key value
delete myInfo.phone;
console.log(myInfo.getName());
// Object constructor
function User(firstName, lasName, avatar) {
  this.firstName = firstName;
  this.lasName = lasName;
  this.avatar = avatar;
}
var author = new User("Le", "Duc", "Avatar");
console.log(author);
// Obj Prototype => Add property or method outside Obj constructor
User.prototype.phone = "0987777888";
console.log(author.phone);
