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

function generateHashCode(phrase) {
    const words = phrase.split(" ");
    const length = words.map((word) => word.length).reduce((acc, length) => acc + length, 0);
    if (length === 0 || length > 140) {
        return false;
    } else {
        return "#" + words.map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase()).join("");
    }
}

function isValidIPv4(ipAddress) {
    const octets = ipAddress.split(".");
    return (
        octets.length == 4 &&
        ipAddress
            .split(".")
            .map((number) => Number.parseInt(number))
            .every((number) => Number.isInteger(number) && number >= 0 && number <= 255)
    );
}

function analyzeCarMileage(cars) {
    const accumulator = { total: 0, highest: cars[0], lowest: cars[0] };
    const result = cars.reduce((acc, car) => {
        const temp = { ...acc };
        temp.total += car.mileage;
        temp.highest = car.mileage > acc.highest.mileage ? car : acc.highest;
        temp.lowest = car.mileage < acc.highest.mileage ? car : acc.lowest;
        return temp;
    }, accumulator);
    result["average"] = result.total / cars.length;
    return result;
}

function validatePassword(password) {
    if (password.length < 8) {
        throw new Error(`Password length is less than 8`);
    }
    const containsOnlyPermittedSymbols = password.match(/^[\w]+$/);
    if (!containsOnlyPermittedSymbols) {
        const prohibitedSymbols = [...password].filter((letter) => letter.match(/[^\w]/)).join("");
        throw new Error(`Password contains the next prohibited symbols: ${prohibitedSymbols}`);
    }
    const passwordArr = [...password];
    const hasLowerCase = passwordArr.some((letter) => letter === letter.toLowerCase());
    const hasUpperCase = passwordArr.some((letter) => letter === letter.toUpperCase());
    const hasDigit = passwordArr.some((letter) => Number.isInteger(Number.parseInt(letter)));
    return hasLowerCase && hasUpperCase && hasDigit;
}

function findMissingLetter(letters) {
    const sortedLetters = letters.sort();
    let tempLetter = sortedLetters[0].codePointAt(0);
    const code = sortedLetters
        .map((letter) => letter.codePointAt(0))
        .find((currentLetter) => {
            if (currentLetter - tempLetter == 2) {
                return true;
            }
            tempLetter = currentLetter;
            return false;
        });
    return String.fromCharCode(code - 1 || tempLetter + 1);
}

module.exports = {
    sumOfEvenSquares,
    calculateTotalSalesWithTax,
    highestScoringWord,
    validAnagrams,
    generateHashCode,
    isValidIPv4,
    analyzeCarMileage,
    validatePassword,
    findMissingLetter,
};
