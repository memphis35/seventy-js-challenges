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
])("givenProducts%s_withTax%d_whenCalculateTotalSalesWithTax_shouldReturn%f", (products, tax, expected) => {
    // act
    const actual = highOrderArrayMethods.calculateTotalSalesWithTax(products, tax);

    // expected
    expect(actual).toBeCloseTo(expected);
});

test.each([
    ["def abc bcd cde", "def"],
    ["banana apple orange", "orange"],
    ["clock picture photograph", "photograph"],
    ["rock paper scissors", "scissors"],
])("givenListOf%o_whenHighestScoringWord_shouldReturn_%s", (words, expected) => {
    // act
    const actual = highOrderArrayMethods.highestScoringWord(words);

    // assert
    expect(actual).toEqual(expected);
});

test.each([
    ["silent", "listen", true],
    ["apple", "orange", false],
    ["cantina", "atincan", true],
])("givenWords_%s_And_%s_whenValidAnagrams_shouldReturn_%s", (firstWord, secondWord, expected) => {
    // act
    const actual = highOrderArrayMethods.validAnagrams(firstWord, secondWord);

    // assert
    expect(actual).toEqual(expected);
});

test.each([
    ["no pain no gain", "#NoPainNoGain"],
    ["", false],
    [
        "It is a very very very very very very very very very very very very very very very very very very very very very very very very very very very  very very very very very very very very long phrase",
        false,
    ],
    ["Let us get the party started", "#LetUsGetThePartyStarted"],
])("givenPhrase_%s_whenGenerateHashTag_shoudReturn_%s", (phrase, expected) => {
    // act
    const actual = highOrderArrayMethods.generateHashCode(phrase);

    // assert
    expect(actual).toEqual(expected);
});

test.each([
    ["1.2.3.4", true],
    ["1.2.3", false],
    ["0.0.0.0", true],
    ["255.255.255.255", true],
    ["0.1.256.2", false],
    ["1.2.b.4", false],
])("givenIpAddress_%s_whenisValidIpAddress_shouldReturn_%s", (ipAddress, expected) => {
    // act
    const actual = highOrderArrayMethods.isValidIPv4(ipAddress);

    // assert
    expect(actual).toEqual(expected);
});

test("givenCars_whenAnalyseCarMileage_shouldReturnResult", () => {
    // arrange
    const cars = [
        { make: "Toyota", model: "Camry", year: 2020, mileage: 30800 },
        { make: "Honda", model: "Civic", year: 2019, mileage: 32000 },
        { make: "Chevrolet", model: "Corvette", year: 2021, mileage: 17500 },
        { make: "Audi", model: "TT", year: 2020, mileage: 13000 },
        { make: "Tesla", model: "Model 3", year: 2018, mileage: 50000 },
    ];

    const expected = {
        average: 28660,
        highest: { make: "Tesla", model: "Model 3", year: 2018, mileage: 50000 },
        lowest: { make: "Audi", model: "TT", year: 2020, mileage: 13000 },
        total: 143300,
    };

    // act
    const actual = highOrderArrayMethods.analyzeCarMileage(cars);

    // assert
    expect(actual).toEqual(expected);
});

test.each([
    ["p@ssWord!", "Password contains the next prohibited symbols: @!"],
    ["pAssw0r", "Password length is less than 8"],
])("givenWrongPassword_whenValidatePassword_shouldThrowError", (password, expected) => {
    // act
    const execution = () => highOrderArrayMethods.validatePassword(password);

    // assert
    expect(execution).toThrowError(expected);
});

test.each([
    ["password", false],
    ["pAssword", false],
    ["pAssw0rd", true],
])("givenPassword_%s_whenValidatePassword_shouldReturn_%s", (password, expected) => {
    // act
    const execution = highOrderArrayMethods.validatePassword(password);

    // assert
    expect(execution).toEqual(expected);
});

test.each([
    [["A", "G", "B", "D", "F", "E"], "C"],
    [["z", "w", "v", "x", "u"], "y"],
    [["F", "H", "G", "J", "I"], "K"],
])("given_%s_whenFindMissingLetter_shouldReturn_%s", (letters, expected) => {
    // act
    const actual = highOrderArrayMethods.findMissingLetter(letters);

    //assert
    expect(actual).toEqual(expected);
});
