const repeatString = function (stringToRepeat, numTimes) {
    if (numTimes < 0) {
        return "ERROR";
    }
    let returnString = "";
    for (let i = 0; i < numTimes; i++) {
        returnString += stringToRepeat
    }
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
