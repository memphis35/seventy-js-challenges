const isValidEmail = require("./10-validate-email");

test.each(["zafod.beeblebrocks4@gmail.es", "zaf0d_beeblebrocks@hotmail.com", "zafod9-beeblebrocks@yandex.online"])(
    "givenEmail[%s]_whenValidateEmail_shouldReturnTrue",
    (validEmail) => {
        // act
        const actual = isValidEmail(validEmail);

        // assert
        expect(actual).toBeTruthy();
    }
);

test.each(["zafod.beeblebrocks4gmail.es", "zaf0d_beeblebrocks@hotmailcom", "zafod!-beeblebrocks@yandex.online"])(
    "givenInvalidEmail[%s]_whenValidateEmail_shouldReturnTrue",
    (invalidEmail) => {
        // act
        const actual = isValidEmail(invalidEmail);

        // assert
        expect(actual).toBeFalsy();
    }
);
