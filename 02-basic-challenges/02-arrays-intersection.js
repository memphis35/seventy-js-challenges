function intersection(arr1, arr2) {
    const iterated = arr1.length > arr2.length ? arr1 : arr2;
    const checked = arr1.length > arr2.length ? arr2 : arr1;
    return iterated.filter(el => checked.includes(el)).sort();
};

module.exports = intersection;