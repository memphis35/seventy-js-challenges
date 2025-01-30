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

function validAnagrams(firstWord, secondWord) {
    // const firstOrdered = [...firstWord].sort().join("");
    // const secondOrdered = [...secondWord].sort().join("");
    // return firstOrdered === secondOrdered;
    const [firstMap, secondMap] = [{}, {}];
    [...firstWord].forEach((letter) => (firstMap[letter] = (firstMap[letter] || 0) + 1));
    [...secondWord].forEach((letter) => (secondMap[letter] = (secondMap[letter] || 0) + 1));
    return Object.keys(firstMap).every((letter) => firstMap[letter] === secondMap[letter]);
}

module.exports = { sumOfEvenSquares, calculateTotalSalesWithTax, highestScoringWord, validAnagrams };
