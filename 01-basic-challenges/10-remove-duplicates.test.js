const removeDuplicates = require("./10-remove-duplicates");

test("givenArrayWithThreeIntegerDuplicates_whenRemoveDuplicates_shouldReturnResult", () => {
    // act
    const actual = removeDuplicates([1, 2, 3, 1, 2, 3]);
    
    // assert
    expect(actual).toEqual([1, 2, 3]);
});

test("givenArrayWithTwoStringDuplicates_whenRemoveDuplicates_shouldReturnResult", () => {
    // act
    const actual = removeDuplicates(["banana", "apple", "banana", "orange", "apple"]);
    
    // assert
    expect(actual).toEqual(["banana", "apple", "orange"]);
});

test("givenArrayWithoutDuplicates_whenRemoveDuplicates_shouldReturnResult", () => {
    // act
    const actual = removeDuplicates([true, false]);
    
    // assert
    expect(actual).toEqual([true, false]);
});

test("givenEmptyArray_whenRemoveDuplicates_shouldReturnEmpty", () => {
    // act
    const actual = removeDuplicates([]);
    
    // assert
    expect(actual).toEqual([]);
});