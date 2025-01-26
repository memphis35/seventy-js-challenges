function rollDices(times) {
    const rollResults = [];
    for (let i = 0; i < times; i++) {
        const rollResult = {
            firstDice: rollDice(),
            secondDice: rollDice(),
        };
        rollResult.sum = rollResult.firstDice + rollResult.secondDice;
        rollResult.result = checkSum(rollResult.sum);
        rollResults.push(rollResult);
    }
    return rollResults;
}

function rollDice() {
    return Math.ceil(Math.random() * 6);
}

function checkSum(sum) {
    switch (sum) {
        case 7:
        case 11:
            return "win";
        case 2:
        case 3:
        case 12:
            return "lose";
        default:
            return "roll again";
    }
}

module.exports = rollDices;
