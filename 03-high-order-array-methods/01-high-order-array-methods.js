function sumOfEvenSquares(numbers) {
    return numbers
        .filter((n) => n % 2 === 0)
        .map((n) => n ** 2)
        .reduce((acc, n) => acc + n, 0);
}

function calculateTotalSalesWithTax(products, tax) {
    const total = products.map((product) => product.price * product.quantity).reduce((acc, price) => acc + price, 0);
    return total * (1 + tax / 100);
}

function highestScoringWord(words) {
    return words.split(" ").reduce(
        (maxScoreWord, word) => {
            const wordScore = getWordScore(word);
            console.log(word, wordScore, maxScoreWord);
            return wordScore > maxScoreWord.score ? { word, score: wordScore } : maxScoreWord;
        },
        { word: "", score: 0 }
    ).word;
}

function getWordScore(word) {
    const alphabet = "abcdefghigklmnopqrstuvwxyz";
    return [...word].map((letter) => alphabet.indexOf(letter)).reduce((acc, score) => acc + score, 0);
}

module.exports = { sumOfEvenSquares, calculateTotalSalesWithTax, highestScoringWord };
