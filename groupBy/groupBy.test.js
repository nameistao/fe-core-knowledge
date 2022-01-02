import { TestWatcher } from "jest";
import groupBy from "./groupBy.js";

test("test 1", () => {
  const arr = [1, 1.5, 1.7, 2, 2.6, 7, 9.5];

  expect(JSON.stringify(groupBy(arr, Math.floor))).toBe(
    JSON.stringify({
      1: [1, 1.5, 1.7],
      2: [2, 2.6],
      7: [7],
      9: [9.5],
    })
  );
});
