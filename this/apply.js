function foo(a, b) {
  console.log(this);
  console.log(a + b);
}

const obj = {
  key: "val",
};

foo.apply(obj, [1, 2]);
