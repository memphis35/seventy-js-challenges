function reverseString(origin) {
    return !origin ? origin : origin.slice(-1) + reverseString(origin.slice(0, -1));
}

function fibonacciSequence(nthElement) {
    switch (nthElement) {
        case 0:
            throw new Error("Nth element must be more than 0");
        case 1:
            return 0;
        case 2:
        case 3:
            return 1;
        default:
            return fibonacciSequence(nthElement - 1) + fibonacciSequence(nthElement - 2);
    }
}

function factorial(num) {
    return !num ? 1 : num * factorial(num - 1);
}

function power(base, exp) {
    return !exp ? 1 : base * power(base, exp - 1);
}

function sumOfNumbers(numbers) {
    console.log(numbers.slice(0, -1));
    return !numbers.length ? 0 : numbers[0] + sumOfNumbers(numbers.slice(1));
}

// one line solution, requires a lot of memory
// function numberRange(start, end) {
//     return start === end ? [end] : [...numberRange(start, end - 1), end];
// }

function numberRange(start, end) {
    if (start === end) {
        return [end];
    }
    const result = numberRange(start, end - 1);
    result.push(end);
    return result;
}

console.log(numberRange(1, 5));

module.exports = { reverseString, fibonacciSequence, factorial, power, sumOfNumbers, numberRange };
