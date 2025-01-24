const reverseString = require("./07-reverse-string");

test("givenYouShallNotPass_whenReverseString_shouldReturnReversed", () => {
    // act
    const actual = reverseString("You shall not pass!");

    // assert
    expect(actual).toEqual("!ssap ton llahs uoY")
});

test("givenMayTheForceBeWithYou_whenReverseString_shouldReturnReversed", () => {
    // act
    const actual = reverseString("May the Force be with you...");

    // assert
    expect(actual).toEqual("...uoy htiw eb ecroF eht yaM")
});