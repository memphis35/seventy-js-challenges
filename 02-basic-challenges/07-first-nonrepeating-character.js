function firstNonRepeatingCharacter(str) {
    const letterCounts = {};
    [...str].forEach((letter) => {
        letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    });
    return Object.keys(letterCounts).find((letter) => letterCounts[letter] === 1) ?? null;
}

module.exports = firstNonRepeatingCharacter;
