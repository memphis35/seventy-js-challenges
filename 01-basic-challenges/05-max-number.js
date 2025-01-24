function findMaxNumber(numbers) {
    if (!numbers) {
        throw new Error(`Illegal argument: ${numbers}`);
    } else if (numbers.length === 0) {
        throw new Error(`Illegal argument: array is empty`);
    }
    return numbers.reduce((n1, n2) => Math.max(n1, n2), numbers[0]);
};

module.exports = findMaxNumber;