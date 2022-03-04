const obj = {
  _name: "tao",
  get name() {
    return this._name;
  },
  set name(name) {
    this._name = name;
  },
};

console.log(obj.name);
obj.name = "new name";
console.log(obj.name);
