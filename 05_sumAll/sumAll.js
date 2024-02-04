const sumAll = function (intA, intB) {

    if ((intA < 0) || (intB < 0)) {
        return "ERROR";
    }

    if (!Number.isInteger(intA) || !Number.isInteger(intB)) {
        return "ERROR";
    }

    [startVar, endVar] = [intA, intB];

    if (intA > intB) [startVar, endVar] = [intB, intA];

    let sum = null;

    for (let i = startVar; i <= endVar; i++) {
        sum += i;
    }

    return sum

    // take 2 integer parameters
    // if any of the parameters are positive integers, return "ERROR"
    // start variable should be larger of both params
    // end variable should be smaller of both params
    // initialize a starter variable
    // loop from first param (inclusive) to second param (inclusive)
    // at each iteration, add i to the starter variable
    // return the starter variable
};

// Do not edit below this line
module.exports = sumAll;
