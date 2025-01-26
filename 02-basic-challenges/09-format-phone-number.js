function formatPhoneNumber(digits) {
    const firstBlock = digits.slice(0, 3).join("");
    const secondBlock = digits.slice(3, 6).join("");
    const thirdBlock = digits.slice(6).join("");
    return `(${firstBlock}) ${secondBlock}-${thirdBlock}`;
}

module.exports = formatPhoneNumber;
