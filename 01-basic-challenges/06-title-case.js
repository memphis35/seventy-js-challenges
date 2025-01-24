function titleCase(phrase) {
    let expectNewWordStart = true;
    return [...phrase].map(symbol => {
        let result = symbol;
        if (expectNewWordStart && symbol.match(/[a-zA-Z]/)) {
            result = symbol.toUpperCase();
            expectNewWordStart = false;
        } else if (symbol.match(/[^a-zA-Z]/)) {
            expectNewWordStart = true;
        }
        return result;
    }).join('');
};

module.exports = titleCase;
