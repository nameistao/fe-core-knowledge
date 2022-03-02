//creation

const foo = { key: "val", "multi word key": "val" }; //object literal syntax
const bar = new Object(); //object constructor syntax

//accessing keys
const val = foo.key;
const val2 = foo["multi word key"];

//deleting keys
delete foo.key;

//computed properties
const key = "some key";
foo[key] = "some value";

//propety existance
console.log(["some key"] in foo);

//iterate over object
for (const key in foo) {
  console.log(key);
}

//object assign for shallow copy, nested are copied by reference
const dest = {};
const src = { foo: 1, bar: [2] };
Object.assign(dest, src);

//functions in objects can be declared two ways
const obj = {
  func1: function () {
    console.log("func1");
  },
  func2() {
    console.log("func2");
  },
};

//this in methods
//if method is called on object, then this is referring to the object
const user = {
  name: "tao",
  printName() {
    console.log(this.name);
  },
};

//if function is called without object, this refers to the global object eg. window
//if strict mode is on then it's undefined
function func3() {
  console.log(this);
}

//constructor functions and this
function User(name) {
  this.name = name;
}

const user1 = new User("tao");
