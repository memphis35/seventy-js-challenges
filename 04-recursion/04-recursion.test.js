const recursion = require("./04-recursion");

test.each([
    ["Abrakadabra", "arbadakarbA"],
    ["expelliarmus", "sumraillepxe"],
    ["Lorem ipsum", "muspi meroL"],
])("given_%s_whenReverseString_shouldReturn_%s", (origin, expected) => {
    // act
    const actual = recursion.reverseString(origin);

    // assert
    expect(actual).toBe(expected);
});

test.each([
    [1, 0],
    [2, 1],
    [3, 1],
    [4, 2],
    [6, 5],
    [10, 34],
    [19, 2584],
])("given_%i_whenFibonacciSequence_shouldReturn_%i", (nthElement, expected) => {
    // act
    const actual = recursion.fibonacciSequence(nthElement);

    // assert
    expect(actual).toBe(expected);
});

test("givenNthElementZero_whenFibonacciSequence_shouldThrowError", () => {
    // act
    const execution = () => recursion.fibonacciSequence(0);

    // assert
    expect(execution).toThrowError("Nth element must be more than 0");
});
