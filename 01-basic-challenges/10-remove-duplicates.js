function removeDuplicates(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const exists = result.includes(arr[i]);
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};

module.exports = removeDuplicates;