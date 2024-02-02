const reverseString = function (stringToReverse) {
    return stringToReverse.split("").reverse().join("");

    let reversedString = "";
    let stringToReverseLastIndex = stringToReverse.length - 1;

    for (let i = stringToReverseLastIndex; i >= 0; i--) {
        reversedString += stringToReverse[i];
    }

    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
