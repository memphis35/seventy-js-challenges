const intersection = require("./02-arrays-intersection");

test("givenArraysWithTwoSharedElements_whenIntersect_shouldReturnTwoElements", () => {
    // act
    const actual = intersection([1, 2, 3], [4, 3, 2, 5]);

    // assert
    expect(actual).toEqual([2, 3])
});

test("givenArraysWithOneSharedElement_whenIntersect_shouldReturnOneElement", () => {
    // act
    const actual = intersection(["fork", "mouse", "knife", "teapot", "cup"], ["cat", "spoon", "dog", "mouse"]);

    // assert
    expect(actual).toEqual(["mouse"]);
});

test("givenEqualArrays_whenIntersect_shouldReturnAllElements", () => {
    // act
    const actual = intersection(["fork", "mouse", "knife", "teapot", "cup"], ["knife", "teapot", "mouse", "cup", "fork"]);

    // assert
    expect(actual).toEqual(["cup", "fork", "knife", "mouse", "teapot"]);
});

test("givenArraysWithoutSharedElements_whenIntersect_shouldReturnEmptyArray", () => {
    // act
    const actual = intersection(["fork", "teapot", "cup"], ["cat", "dog", "mouse"]);

    // assert
    expect(actual).toEqual([]);
});