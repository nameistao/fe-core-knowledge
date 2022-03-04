//in global scope
console.log(this);

function foo() {
  console.log(this);
}

//in object
const obj = {
  key: "val",
  foo,
};
obj.foo();

const func = () => {
  console.log(this);
};
func();
