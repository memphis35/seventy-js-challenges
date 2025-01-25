function intersection(arr1, arr2) {
    const iterated = arr1.length > arr2.length ? arr1 : arr2;
    const checked = arr1.length > arr2.length ? arr2 : arr1;
    return iterated.filter(el => checked.includes(el)).sort();
};

function intersection2(arr1, arr2) {
    const unique = new Set(arr1);
    const result = [];
    for (let el in arr2) {
        if (unique.has(el)) {
            result.push(el);
        }
    }
    return result.sort();
};

module.exports = intersection;