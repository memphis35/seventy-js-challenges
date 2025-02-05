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
