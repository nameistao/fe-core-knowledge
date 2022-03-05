const parent = {
  key: "val",
};

//create child with parent as prototype
const child = Object.create(parent);
console.log(Object.getPrototypeOf(child));

//set parent as prototype
const child2 = {};
Object.setPrototypeOf(child2, parent);
console.log(Object.getPrototypeOf(child2));

//set parent as prototype using assign
const child3 = Object.assign(Object.create(parent), {
  childKey: "childVal",
});
console.log(Object.getPrototypeOf(child3));
console.log(child3);
