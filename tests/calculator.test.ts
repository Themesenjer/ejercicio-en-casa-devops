import test = require("node:test");
import { Calculator } from "../src/calculator";

const calc = new Calculator();

test("should add numbers correctly", () => {
  expect(calc.add(2, 2)).toBe(5);
});