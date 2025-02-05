function reverseString(origin) {
    return !origin ? origin : origin.slice(-1) + reverseString(origin.slice(0, -1));
}

module.exports = { reverseString };
