const findMissingLetter = require("./05-find-missing-letter");

test("givenUppercaseFromAToGExceptC_whenFindMissingLetter_shouldReturnC", () => {
    // act
    const actual = findMissingLetter(["A", "G", "B", "D", "F", "E"]);

    //assert
    expect(actual).toEqual("C");
});

test("givenLowercaseFromUToZExceptY_whenFindMissingLetter_shouldReturnY", () => {
    // act
    const actual = findMissingLetter(["z", "w", "v", "x", "u"]);

    //assert
    expect(actual).toEqual("y");
});

test("givenUpperCaseFromFToKExceptK_whenFindMissingLetter_shouldReturnK", () => {
    // act
    const actual = findMissingLetter(["F", "H", "G", "J", "I"]);

    //assert
    expect(actual).toEqual("K");
});

test("givenEmptyList_whenFindMissingLetter_shouldReturn0", () => {
    // act
    const actual = findMissingLetter([]);

    //assert
    expect(actual).toEqual("");
});
