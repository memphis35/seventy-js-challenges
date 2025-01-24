const findMaxNumber = require("./05-max-number");

test("givenArrayOfThreeTwoFive_whenFindMaxNumber_shouldReturnFive", () => {
    // act
    const actual = findMaxNumber([3, 2, 5]);

    // assert
    expect(actual).toEqual(5);
});

test("givenArrayOfTenFiftyTwelve_whenFindMaxNumber_shouldReturnFifty", () => {
    // act
    const actual = findMaxNumber([10, 50, 12]);

    // assert
    expect(actual).toEqual(50);
});

test("givenEmptyArray_whenFindMaxNumber_shouldRaiseAnException", () => {
    // act
    const actual = () => findMaxNumber([]);

    // assert
    expect(actual).toThrow("Illegal argument: array is empty");
});

test("givenNullArray_whenFindMaxNumber_shouldRaiseAnException", () => {
    // act
    const actual = () => findMaxNumber(null);

    // assert
    expect(actual).toThrow("Illegal argument: null");
});