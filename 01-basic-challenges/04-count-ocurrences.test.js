const countOcurrences = require("./04-count-ocurrences");

test("givenPrincessAndS_wheCountOcurrences_shouldReturn2", () => {
    // act
    const actual = countOcurrences("Princess", "s");

    // assert
    expect(actual).toEqual(2);
});

test("givenRecurringAndR_wheCountOcurrences_shouldReturn3", () => {
    // act
    const actual = countOcurrences("Recurring", "R");

    // assert
    expect(actual).toEqual(3);
});

test("givenTratatatataAndT_wheCountOcurrences_shouldReturn5", () => {
    // act
    const actual = countOcurrences("Tratatatata", "T");

    // assert
    expect(actual).toEqual(5);
});

test("givenColorAndW_wheCountOcurrences_shouldReturn0", () => {
    // act
    const actual = countOcurrences("Color", "W");

    // assert
    expect(actual).toEqual(0);
});

test("givenNullWord_wheCountOcurrences_shouldRaiseAnException", () => {
    // act
    const nullWordExecution = () => countOcurrences(null, "W");

    // assert
    expect(nullWordExecution).toThrow("Word must be present");
});

test("givenNullCharacter_wheCountOcurrences_shouldRaiseAnException", () => {
    // act
    const nullCharacterExecution = () => countOcurrences("Fortune", null);

    // assert
    expect(nullCharacterExecution).toThrow("Character must be present");
});

test("givenEmptyWord_wheCountOcurrences_shouldReturn0", () => {
    // act
    const actual = countOcurrences("", "G");

    // assert
    expect(actual).toEqual(0);
});

test("givenEmptyWord_wheCountOcurrences_shouldReturn0", () => {
    // act
    const actual = countOcurrences("", "G");

    // assert
    expect(actual).toEqual(0);
});

test("givenEmptyWord_wheCountOcurrences_shouldReturn0", () => {
    // act
    const actual = countOcurrences("Fortune", "");

    // assert
    expect(actual).toEqual(0);
});
