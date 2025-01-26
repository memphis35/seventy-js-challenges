const areAllCharsUnique = require("./06-are-all-chars-unique");

test("givenStringWithAllUniqueCharacters_whenAreAllCharsUnique_shouldReturnTrue", () => {
    // act
    const actual = areAllCharsUnique("Dermatoglyphics");

    // assert
    expect(actual).toBeTruthy();
});

test("givenStringWithoutAllUniqueCharacters_whenAreAllCharsUnique_shouldReturnFalse", () => {
    // act
    const actual = areAllCharsUnique("Unique");

    // assert
    expect(actual).toBeTruthy();
});
