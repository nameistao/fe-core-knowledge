const user = {
  isUser: true,
};

const admin = {
  isAdmin: true,
};

Object.setPrototypeOf(admin, user);

console.log(admin.isUser);

admin.isUser = false;

console.log(admin.isUser);

const guest = Object.create(user);

console.log(guest.isUser);

const newObj = new Object();
console.log(newObj.toString === Object.prototype.toString);
