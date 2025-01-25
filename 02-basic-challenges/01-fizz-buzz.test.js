const fizzBuzzArray = require("./01-fizz-buzz");

test("givenFiveElements_whenFizzBuzzArray_shouldReturnExpected", () => {
    // act
    const actual = fizzBuzzArray(5);

    // assert
    expect(actual).toEqual([1, 2, "Fizz", 4, "Buzz"]);
});

test("givenFifteenElements_whenFizzBuzzArray_shouldReturnExpected", () => {
    // act
    const actual = fizzBuzzArray(15);

    // assert
    expect(actual).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
});

test("givenZeroElements_whenFizzBuzzArray_shouldReturnExpected", () => {
    // act
    const actual = fizzBuzzArray(0);

    // assert
    expect(actual).toEqual([]);
});