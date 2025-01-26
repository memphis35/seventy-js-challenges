const firstNonRepeatingCharacter = require("./07-first-nonrepeating-character");

test("givenStringSixNonRepatingChars_whenFirstNonRepeatingCharacter_shouldReturnFirst", () => {
    // act
    const actual = firstNonRepeatingCharacter("unique value");

    // assert
    expect(actual).toBe("n");
});

test("givenStringFiveNonRepatingChars_whenFirstNonRepeatingCharacter_shouldReturnFirst", () => {
    // act
    const actual = firstNonRepeatingCharacter("first");

    // assert
    expect(actual).toBe("f");
});

test("givenStringTwoNonRepatingChars_whenFirstNonRepeatingCharacter_shouldReturnFirst", () => {
    // act
    const actual = firstNonRepeatingCharacter("appeal");

    // assert
    expect(actual).toBe("e");
});

test("givenStringOneNonRepatingChar_whenFirstNonRepeatingCharacter_shouldReturnFirst", () => {
    // act
    const actual = firstNonRepeatingCharacter("first drift dirts");

    // assert
    expect(actual).toBeNull();
});
