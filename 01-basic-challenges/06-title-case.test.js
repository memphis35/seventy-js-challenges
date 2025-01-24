const titleCase = require("./06-title-case");

test("givenIWillKissYouGoodbye_whenTitleCase_shouldReturnTitleCase", () => {
    // act 
    const actual = titleCase("i wilL..kiss you! \r\ngoodbye");

    // assert
    expect(actual).toEqual("I WilL..Kiss You! \r\nGoodbye");
});

test("givenMayTheForceBeWithYou_whenTitleCase_shouldReturnTitleCase", () => {
    // act 
    const actual = titleCase(",,,mAy__the.Force??be#$wITH---you");

    // assert
    expect(actual).toEqual(",,,MAy__The.Force??Be#$WITH---You");
});