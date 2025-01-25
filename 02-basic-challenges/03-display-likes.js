const zeroLikeTemplate = () => "no one likes this";
const oneLikeTemplate = (n) => `${n} likes this`;
const twoLikesTemplate = (n1, n2) => `${n1} and ${n2} like this`;
const threeLikesTemplate = (n1, n2, n3) => `${n1}, ${n2} and ${n3} like this`;
const moreThanThreeLikesTemplate = (n1, n2, count) => `${n1}, ${n2} and ${count} others like this`;

function displayLikes(names) {
    let result = "";
    switch (names.length) {
        case 0:
            result = zeroLikeTemplate();
            break;
        case 1:
            result = oneLikeTemplate(names[0]);
            break;
        case 2:
            result = twoLikesTemplate(names[0], names[1]);
            break;
        case 3:
            result = threeLikesTemplate(names[0], names[1], names[2]);
            break;
        default:
            result = moreThanThreeLikesTemplate(names[0], names[1], names.length - 2);
            break;
    }
    return result;
}

module.exports = displayLikes;
