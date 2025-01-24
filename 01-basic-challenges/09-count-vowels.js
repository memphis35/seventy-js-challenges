function countVowels(str) {
    return [...str.toLowerCase()].filter(letter => isVowel(letter)).length;
};

function isVowel(letter) {
    return letter.match(/(a|e|i|o|u|y)/);
}

module.exports = countVowels;