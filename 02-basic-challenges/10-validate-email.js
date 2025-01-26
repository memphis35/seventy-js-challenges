function isValidEmail(email) {
    const isValid = email.match(/^[a-z][a-z0-9._-]+@[a-z]{4,7}\.[a-z]{2,6}$/);
    return isValid !== null;
}

module.exports = isValidEmail;
