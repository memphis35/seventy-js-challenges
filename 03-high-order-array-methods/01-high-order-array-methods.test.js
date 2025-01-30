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

test.each([
    [
        [
            { name: "Banana", price: 5, quantity: 8 },
            { name: "Apple", price: 2, quantity: 15 },
            { name: "Pear", price: 3, quantity: 3 },
        ],
        3,
        81.37,
    ],
    [
        [
            { name: "Broccoli", price: 7, quantity: 19 },
            { name: "Potato", price: 3, quantity: 2 },
            { name: "Avocado", price: 9, quantity: 7 },
        ],
        6,
        214.12,
    ],
])("givenProductsWithDifferentTaxes_whenCalculateTotalSalesWithTax_shouldReturn%d", (products, tax, expected) => {
    // act
    const actual = highOrderArrayMethods.calculateTotalSalesWithTax(products, tax);

    // expected
    expect(actual).toBeCloseTo(expected);
});
