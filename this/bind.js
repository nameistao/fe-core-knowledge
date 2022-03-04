function foo() {
  console.log(this);
}

const obj = {
  key: "val",
};

const newFoo = foo.bind(obj);
newFoo();
