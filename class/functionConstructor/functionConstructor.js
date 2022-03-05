const User = {
  user: "user",
};

function Guest(name) {
  this.name = name;
}

function Admin(name) {
  this.name = name;
}

Guest.prototype = User;
Admin.prototype = User;

const guest = new Guest("guest");
const guest2 = new Guest("guest2");
const admin = new Admin("admin");

console.log(Object.getPrototypeOf(guest) === Object.getPrototypeOf(guest2));
console.log(Object.getPrototypeOf(guest) === Object.getPrototypeOf(admin));

Object.getPrototypeOf(guest).user = "newUser";
console.log(admin.user);
