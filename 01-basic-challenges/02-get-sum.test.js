const getSum = require("./02-get-sum");

test("given2and3_whenGetSum_shouldReturn5", () => {
  // arrange
  const expected = 5;

  // act
  const actual = getSum(2, 3);

  // assert
  expect(actual).toBe(expected);
});

test("given7and4_whenGetSum_shouldReturn11", () => {
  // arrange
  const expected = 11;

  // act
  const actual = getSum(7, 4);

  // assert
  expect(actual).toBe(expected);
});

test("given3andMinus4_whenGetSum_shouldReturnMinus1", () => {
  // arrange
  const expected = -1;

  // act
  const actual = getSum(-4, 3);

  // assert
  expect(actual).toBe(expected);
});
