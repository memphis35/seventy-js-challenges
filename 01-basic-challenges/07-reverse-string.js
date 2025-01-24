function reverseString(str) {
    if (str.length === 1) {
        return str;
    }
    return str[str.length - 1] + reverseString(str.slice(0, -1));
}

// function reverseString(str) {
//      return [...str].reverse().join('');
// }

module.exports = reverseString;