const formatPhoneNumber = require("./09-format-phone-number");

test("givenNineNumbers_whenFormatPhoneNumber_shouldReturnFormatted", () => {
    // act
    const actual = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

    // assert
    expect(actual).toEqual("(123) 456-7890");
});
