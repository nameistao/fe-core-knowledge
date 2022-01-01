import curry from "./curry.js";

const add = (a, b, c) => {
  return a + b + c;
};

test("test 1", () => {
  expect(curry(add)(1)(2)(3)).toBe(6);
});

test("test 2", () => {
  expect(curry(add)(13)(-13)(400)).toBe(400);
});

test("test 3", () => {
  expect(typeof curry(add)).toBe("function");
});

test("test 4", () => {
  expect(typeof curry(add)(1)(2)).toBe("function");
});
