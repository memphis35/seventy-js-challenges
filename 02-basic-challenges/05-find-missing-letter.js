function findMissingLetter(letters) {
    sortedCodes = letters.sort().map((letter) => letter.codePointAt(0));
    for (let i = 0; i < sortedCodes.length - 1; i++) {
        if (sortedCodes[i + 1] - sortedCodes[i] > 1) {
            return String.fromCodePoint(sortedCodes[i] + 1);
        }
    }
    return letters.length > 0 ? String.fromCodePoint(sortedCodes[sortedCodes.length - 1] + 1) : "";
}

module.exports = findMissingLetter;
