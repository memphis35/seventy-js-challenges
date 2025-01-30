const highOrderArrayMethods = require("./01-high-order-array-methods");

test.each([
    [[4, 1, 3, 2], 20],
    [[6, 4, 7, 5], 52],
    [[7, 3, 5, 1], 0],
    [[8, 0, 1], 64],
    [[0], 0],
])("givenListsOfNumbers%i_whenSumOfEvenSquare_shouldReturn%d", (list, expected) => {
    // act
    const actual = highOrderArrayMethods.sumOfEvenSquares(list);

    // assert
    expect(actual).toEqual(expected);
});
