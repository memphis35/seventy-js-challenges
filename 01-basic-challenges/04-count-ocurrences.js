function countOcurrences(word, character) {
    if (word == null) {
        throw new Error("Word must be present");
    } else if (character == null) {
        throw new Error("Character must be present");
    } else if (word == "" || character == "") {
        return 0;
    } else {
        const [lowerCasedWord, lowerCasedChar] = [word.toLowerCase(), character.toLowerCase()];
        return [...lowerCasedWord].filter((letter) => letter == lowerCasedChar).length;
    }
}

module.exports = countOcurrences;

console.log(countOcurrences("VivaLaVida", "a"));
