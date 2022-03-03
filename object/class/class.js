//es6 classes
class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  printName() {
    console.log(this._name);
  }
}

const tao = new User("tao");
tao.name = "new name";
console.log(tao.name);
tao.printName();

//es5 classes
function UserClass(name) {
  this.name = name;
}

UserClass.prototype.printName = function () {
  console.log(this.name);
};

const user = new UserClass("tao");
user.printName();
