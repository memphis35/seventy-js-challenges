const rollDices = require("./08-dice-game");
const mockedRandom = jest.spyOn(global.Math, "random");

test("givenOneLoseRollWithSumEqualsTwo_whenRollDices_shouldReturnOneLoseResult", () => {
    // arrange
    mockedRandom.mockReturnValueOnce(0.1).mockReturnValueOnce(0.1);
    const expected = [{ firstDice: 1, secondDice: 1, sum: 2, result: "lose" }];

    // act
    const actual = rollDices(1);

    // assert
    expect(actual).toEqual(expected);
});

test("givenOneLoseRollWithSumEqualsThree_whenRollDices_shouldReturnOneLoseResult", () => {
    // arrange
    mockedRandom.mockReturnValueOnce(0.1).mockReturnValueOnce(0.2);
    const expected = [{ firstDice: 1, secondDice: 2, sum: 3, result: "lose" }];

    // act
    const actual = rollDices(1);

    // assert
    expect(actual).toEqual(expected);
});

test("givenOneLostRollWithSumEqualsTwelve_whenRollDices_shouldReturnOneLoseResult", () => {
    // arrange
    mockedRandom.mockReturnValueOnce(0.9).mockReturnValueOnce(0.9);
    const expected = [{ firstDice: 6, secondDice: 6, sum: 12, result: "lose" }];

    // act
    const actual = rollDices(1);

    // assert
    expect(actual).toEqual(expected);
});

test("givenOneWinRollWithSumEqualsSeven_whenRollDices_shouldReturnOneWinResult", () => {
    // arrange
    mockedRandom.mockReturnValueOnce(0.5).mockReturnValueOnce(0.6);
    const expected = [{ firstDice: 3, secondDice: 4, sum: 7, result: "win" }];

    // act
    const actual = rollDices(1);

    // assert
    expect(actual).toEqual(expected);
});

test("givenOneRepeatRollWithSumEqualsSeven_whenRollDices_shouldReturnOneRepeatResult", () => {
    // arrange
    mockedRandom.mockReturnValueOnce(0.3).mockReturnValueOnce(0.5);
    const expected = [{ firstDice: 2, secondDice: 3, sum: 5, result: "roll again" }];

    // act
    const actual = rollDices(1);

    // assert
    expect(actual).toEqual(expected);
});

test("givenOneWinRollWithSumEqualsEleven_whenRollDices_shouldReturnOneWinResult", () => {
    // arrange
    mockedRandom.mockReturnValueOnce(0.8).mockReturnValueOnce(0.9);
    const expected = [{ firstDice: 5, secondDice: 6, sum: 11, result: "win" }];

    // act
    const actual = rollDices(1);

    // assert
    expect(actual).toEqual(expected);
});

test("givenThreeRolls_whenRollDices_shouldReturnThreeRollResults", () => {
    // act
    const actual = rollDices(3);

    // assert
    expect(actual.length).toBe(3);
});
