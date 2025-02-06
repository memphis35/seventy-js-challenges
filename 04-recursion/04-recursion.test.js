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

test.each([
    [1, 1],
    [2, 2],
    [3, 6],
    [4, 24],
    [5, 120],
])("givenNumber_%i_whenFactorial_shouldReturn_%i", (number, expected) => {
    // act
    const actual = recursion.factorial(number);

    // assert
    expect(actual).toBe(expected);
});

test.each([
    [2, 2, 4],
    [3, 3, 27],
    [4, 4, 256],
    [192, 0, 1],
    [42, 1, 42],
    [15386, 3, 3642312332456],
])("givenNumber_%i_withExp_%i_whenPower_shouldReturn_%i", (base, exponent, expected) => {
    // act
    const actual = recursion.power(base, exponent);

    // assert
    expect(actual).toBe(expected);
});

test.each([
    [[2, 1, 4], 7],
    [[4, 7, 5, 2], 18],
    [[17, 54, 21], 92],
])("givenNumbers_%s_whenPower_shouldReturn_%i", (numbers, expected) => {
    // act
    const actual = recursion.sumOfNumbers(numbers);

    // assert
    expect(actual).toBe(expected);
});

test.each([
    [1, 5, [1, 2, 3, 4, 5]],
    [2, 4, [2, 3, 4]],
    [7, 7, [7]],
    [99, 105, [99, 100, 101, 102, 103, 104, 105]],
])("givenFrom%iTo%i_whenNumberRange_shouldReturn_%s", (start, end, expected) => {
    // act
    const actual = recursion.numberRange(start, end);

    // assert
    expect(actual).toEqual(expected);
});

test("givenArrayOfArrays_whenFlattenArray_shouldReturnFlattenArray", () => {
    // arrange
    const arr = [
        [3, 1, 2],
        [
            ["Apple", "Banana"],
            ["Cherry", "Raspberry"],
        ],
        [true, false, [false]],
        [{ name: "John Doe", age: 19 }],
    ];
    const expected = [
        3,
        1,
        2,
        "Apple",
        "Banana",
        "Cherry",
        "Raspberry",
        true,
        false,
        false,
        { name: "John Doe", age: 19 },
    ];

    // act
    const actual = recursion.flattenArrays(arr);

    // assert
    expect(actual).toEqual(expected);
});

test("givenWord_%s_whenPermutate_shouldReturnPermutations", () => {
    // arrange
    const expected = ["abc", "acb", "bac", "bca", "cab", "cba"];

    // act
    const actual = recursion.permutations("abc");

    // assert
    expect(actual).toEqual(expected);
});

test("givenAbc_%s_whenPermutate_shouldReturnPermutations", () => {
    // arrange
    const expected = ["abc", "acb", "bac", "bca", "cab", "cba"];

    // act
    const actual = recursion.permutations("abc");

    // assert
    expect(actual).toEqual(expected);
});

test("givenWord_%s_whenPermutate_shouldReturnPermutations", () => {
    // arrange
    const expected = [
        "word",
        "wodr",
        "wrod",
        "wrdo",
        "wdor",
        "wdro",
        "owrd",
        "owdr",
        "orwd",
        "ordw",
        "odwr",
        "odrw",
        "rwod",
        "rwdo",
        "rowd",
        "rodw",
        "rdwo",
        "rdow",
        "dwor",
        "dwro",
        "dowr",
        "dorw",
        "drwo",
        "drow",
    ];

    // act
    const actual = recursion.permutations("word");

    // assert
    expect(actual).toEqual(expected);
});
