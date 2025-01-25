const evenSum = (topNumber) => Math.floor(topNumber / 2) * (topNumber + 1);
const oddSum = (topNumber) => topNumber * Math.ceil(topNumber / 2);

function findMissingNumber(sequence) {
    const topElement = sequence[sequence.length - 1];
    const isEven = topElement % 2 == 0;
    const sum = isEven ? evenSum(topElement) : oddSum(topElement);
    const actualSum = sequence.reduce((add, el) => el + add, 0);
    const toReturn = sum - actualSum;
    console.log(`Top Element is ${topElement}, sum is ${sum}, actualSum is ${actualSum}, toReturn is ${toReturn}`);
    return toReturn === 0 ? topElement + 1 : toReturn;
}

module.exports = findMissingNumber;
