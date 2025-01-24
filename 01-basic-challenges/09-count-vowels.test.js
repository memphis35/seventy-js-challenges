const countVowels = require("./09-count-vowels");

test("givenStringWithFiveVowes_whenCountVowels_shouldReturn5", () => {
    // act
    const actual = countVowels("Amaranthine");

    // assert
    expect(actual).toBe(5);
});

test("givenStringWithTwoVowes_whenCountVowels_shouldReturn2", () => {
    // act
    const actual = countVowels("Vowel");

    // assert
    expect(actual).toBe(2);
});

test("givenPhraseWithNineVowes_whenCountVowels_shouldReturn9", () => {
    // act
    const actual = countVowels("Sit on a Potato Pan, Otis!");

    // assert
    expect(actual).toBe(9);
});

test("givenStringWithoutVowels_whenCountVowels_shouldReturn0", () => {
    // act
    const actual = countVowels("Prdnm snrt!");

    // assert
    expect(actual).toBe(0);
});

test("givenEmptyString_whenCountVowels_shouldReturn0", () => {
    // act
    const actual = countVowels("");

    // assert
    expect(actual).toBe(0);
});