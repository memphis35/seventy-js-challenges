const gaussSum = (topNumber) => (topNumber / 2) * (topNumber + 1);

function findMissingNumber(sequence) {
    const topElement = sequence.length;
    const sum = gaussSum(topElement);
    const actualSum = sequence.reduce((add, el) => el + add, 0);
    const toReturn = sum - actualSum;
    return toReturn === 0 ? topElement + 1 : toReturn;
}

module.exports = findMissingNumber;
