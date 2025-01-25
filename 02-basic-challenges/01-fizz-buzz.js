function fizzBuzzArray(elements) {
    return [...Array(elements).keys()]
    .map(el => el + 1)
    .map(el => {
        let concat = "";
        if (el % 3 == 0) {
            concat += "Fizz";
        } 
        if (el % 5 == 0) {
            concat += "Buzz";
        }
        return concat ? concat : el;
    });
};

module.exports = fizzBuzzArray;