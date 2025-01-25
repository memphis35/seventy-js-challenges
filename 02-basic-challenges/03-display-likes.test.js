const displayLikes = require("./03-display-likes");

test("givenEmptyList_whenDisplayLikes_shouldReturnNoOneLikes", () => {
    // act
    const actual = displayLikes([]);

    // assert
    expect(actual).toEqual("no one likes this");
});

test("givenOneLike_whenDisplayLikes_shouldReturnOneLikes", () => {
    // act
    const actual = displayLikes(["Cassandra"]);

    // assert
    expect(actual).toEqual("Cassandra likes this");
});

test("givenTwoLikes_whenDisplayLikes_shouldReturnTwoLikes", () => {
    // act
    const actual = displayLikes(["Norman", "Cassandra"]);

    // assert
    expect(actual).toEqual("Norman and Cassandra like this");
});

test("givenThreeLikes_whenDisplayLikes_shouldReturnThreeLikes", () => {
    // act
    const actual = displayLikes(["Benjamin", "Norman", "Cassandra"]);

    // assert
    expect(actual).toEqual("Benjamin, Norman and Cassandra like this");
});

test("givenFiveLikes_whenDisplayLikes_shouldReturnFiveLikes", () => {
    // act
    const actual = displayLikes(["Morgan", "Beth", "Benjamin", "Norman", "Cassandra"]);

    // assert
    expect(actual).toEqual("Morgan, Beth and 3 others like this");
});
