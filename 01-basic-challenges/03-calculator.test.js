const calculate = require("./03-calculator");

test("givenTwoPlusThree_whenCalculate_shouldReturnFive", () => {
  // arrange
  const expected = 5;

  // act
  const actual1 = calculate(2, "+", 3);
  const actual2 = calculate(2, "add", 3);

  // assert
  expect(actual1).toBe(expected);
  expect(actual2).toBe(expected);
});

test("givenSevenMinusFive_whenCalculate_shouldReturnTwo", () => {
  // arrange
  const expected = 2;

  // act
  const actual1 = calculate(7, "-", 5);
  const actual2 = calculate(7, "distract", 5);

  // assert
  expect(actual1).toBe(expected);
  expect(actual2).toBe(expected);
});

test("givenFourMultiplyThree_whenCalculate_shouldReturnTwelve", () => {
  // arrange
  const expected = 12;

  // act
  const actual1 = calculate(4, "*", 3);
  const actual2 = calculate(4, "multiply", 3);

  // assert
  expect(actual1).toBe(expected);
  expect(actual2).toBe(expected);
});

test("givenThirtyFiveDivideByFive_whenCalculate_shouldReturnSeven", () => {
  // arrange
  const expected = 7;

  // act
  const actual1 = calculate(35, "/", 5);
  const actual2 = calculate(35, "divide", 5);

  // assert
  expect(actual1).toBe(expected);
  expect(actual2).toBe(expected);
});

test("givenUnrecognizedAction_whenCalculate_shouldRaiseAnException", () => {
  // act
  const actual1 = () => calculate(1, "^", 0);
  const actual2 = () => calculate(1, "power", 0);

  // assert
  expect(actual1).toThrow("Illegal action: ^");
  expect(actual2).toThrow("Illegal action: power");
});
