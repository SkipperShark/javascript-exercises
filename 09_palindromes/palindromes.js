const palindromes = function (input) {

    let string = input.replaceAll(" ", "").replaceAll(",", "").replaceAll(".", "").replaceAll("!", "");
    string = string.toLowerCase();
    console.log({ string });

    let lastIndex = string.length - 1;

    for (let i = 0; i < string.length; i++) {
        let curChar = string[i];
        let comparedChar = string[lastIndex - i];
        console.log({ i, curChar, comparedChar });
        if (curChar != comparedChar) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
