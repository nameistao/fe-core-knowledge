import clone from "./clone.js";

const obj = {
  one: {
    two: "two",
    three: {
      four: "four",
    },
  },
};

test("test 1", () => {
  expect(clone(obj) === obj).toBe(false);
});

test("test 2", () => {
  expect(clone(obj).one.three.four).toBe("four");
});
