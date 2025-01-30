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

module.exports = { sumOfEvenSquares, calculateTotalSalesWithTax };
