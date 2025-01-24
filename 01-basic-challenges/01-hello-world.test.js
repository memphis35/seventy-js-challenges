const helloWorld = require("./01-hello-world");

test("givenHelloWorldFunction_whenCall_shouldReturnHelloWorld", () => {
  // arrange
  const expected = "Hello, World!";

  // act
  const actual = helloWorld();

  // assert
  expect(actual).toEqual(expected);
});
