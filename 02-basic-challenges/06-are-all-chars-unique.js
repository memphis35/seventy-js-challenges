function areAllCharsUnique(str) {
    const uniqueSet = new Set();
    for (let letter in str) {
        if (!uniqueSet.has(letter)) {
            uniqueSet.add(letter);
        } else {
            return false;
        }
    }
    return true;
}

module.exports = areAllCharsUnique;
