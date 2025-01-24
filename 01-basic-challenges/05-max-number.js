function findMaxNumber(numbers) {
    if (!numbers || numbers.length === 0) {
        throw new Error(`Illegal argument: ${numbers && numbers.toString()}`);
    }
    return numbers.reduce((n1, n2) => Math.max(n1, n2), Number.MIN_SAFE_INTEGER);
};

module.exports = findMaxNumber;