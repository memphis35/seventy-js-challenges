function isPalindrome(str) {
    const lowered = str.toLowerCase().replaceAll(/\W/g, '');
    const indexes = [0, lowered.length - 1];
    while (indexes[0] < indexes[1]) {
        if (lowered[indexes[0]] !== lowered[indexes[1]]) {
            return false;
        } else {
            indexes[0] += 1;
            indexes[1] -= 1;
        }
    }
    return true;
};

module.exports = isPalindrome;