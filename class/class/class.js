//es6 classes
class User {
  instanceVar = true;
  static staticVar = true;
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
console.log(`static var ${User.staticVar}`);
User.staticVar = "new static var";
console.log(`static var ${User.staticVar}`);
console.log(`instance var ${tao.instanceVar}`);
tao.instanceVar = "new var";
console.log(`instance var ${tao.instanceVar}`);

class Admin extends User {
  #age;
  constructor(name, adminName) {
    super(name);
    this.adminName = adminName;
    this.#age = 23;
  }

  printAge() {
    console.log(this.#age);
  }
}

const admin = new Admin("tao", "admin tao");
admin.printName();
console.log(Object.getPrototypeOf(admin));
admin.printAge();
