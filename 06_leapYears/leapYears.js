const leapYears = function (year) {

    yearDivisibleBy4 = year % 4 === 0;
    yearDivisibleBy100 = year % 100 === 0;
    yearDivisibleBy400 = year % 400 === 0;

    if (yearDivisibleBy4) {
        if (yearDivisibleBy100 && yearDivisibleBy400) {
            return true;
        }
        else if (yearDivisibleBy100 && !yearDivisibleBy400) {
            return false;
        }
        return true;
    }

    return false;
    // input is a year
    // years divisible by 400 are leap years
    // years divisibly by 100 are not lear years
    // years divisible by 4 are leap years
};

// Do not edit below this line
module.exports = leapYears;
