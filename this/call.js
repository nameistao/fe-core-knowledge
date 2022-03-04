function foo(a, b) {
  console.log(this);
  console.log(a + b);
}

const obj = {
  key: "val",
};

foo.call(obj, 1, 2);
