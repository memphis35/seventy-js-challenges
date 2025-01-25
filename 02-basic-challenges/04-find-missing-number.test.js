const findMissingNumber = require("./04-find-missing-number");

test("givenFromZeroToSevenExceptFive_whenFindMissingNumber_shouldReturnFive", () => {
    // act
    const actual = findMissingNumber([0, 1, 2, 3, 4, 6, 7]);

    // assert
    expect(actual).toBe(5);
});

test("givenFromZeroToElevenExceptEight_whenFindMissingNumber_shouldReturnEight", () => {
    // act
    const actual = findMissingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11]);

    // assert
    expect(actual).toBe(8);
});

test("givenFromZeroToTenExceptThree_whenFindMissingNumber_shouldReturnThree", () => {
    // act
    const actual = findMissingNumber([0, 1, 2, 4, 5, 6, 7, 8, 9, 10]);

    // assert
    expect(actual).toBe(3);
});

test("givenFromZeroToTwelveExceptSix_whenFindMissingNumber_shouldReturnSix", () => {
    // act
    const actual = findMissingNumber([0, 1, 2, 3, 4, 5, 7, 8, 9, 10]);

    // assert
    expect(actual).toBe(6);
});

test("givenFromZeroToTwelveExceptTwelve_whenFindMissingNumber_shouldReturnTwelve", () => {
    // act
    const actual = findMissingNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    // assert
    expect(actual).toBe(12);
});
