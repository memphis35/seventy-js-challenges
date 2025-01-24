const isPalindrome = require("./08-palindrome");

test("givenEvenPalindrome_whenIsPalindrome_shouldReturnTrue", () => {
    // act
    const actual = isPalindrome("Antonnotna");

    // assert
    expect(actual).toBeTruthy();
});

test("givenOddPalindrome_whenIsPalindrome_shouldReturnTrue", () => {
    // act
    const actual = isPalindrome("AntonEnotna");

    // assert
    expect(actual).toBeTruthy();
});


test("givenNotPalindrome_whenIsPalindrome_shouldReturnFalse", () => {
    // act
    const actual = isPalindrome("NotAPalindrome");

    // assert
    expect(actual).toBeFalsy();
});

test("givenEmptyString_whenIsPalindrome_shouldReturnTrue", () => {
    // act
    const actual = isPalindrome("");

    // assert
    expect(actual).toBeTruthy();
});