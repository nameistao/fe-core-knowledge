import curry from "./curry.js";

test("test 1", () => {
  const add = (a, b, c) => {
    return a + b + c;
  };

  expect(curry(add)(1)(2)(3)).toBe(6);
});
