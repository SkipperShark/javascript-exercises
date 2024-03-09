const findTheOldest = function (people) {

    return people.sort((person1, person2) => {
        let [person1Age, person2Age] = [getPersonAge(person1), getPersonAge(person2)];
        if (person1Age < person2Age) return 1
        else if (person1Age > person2Age) return -1
    })[0]
};

function getPersonAge(person) {
    let curYear = (new Date()).getFullYear();
    return !person.yearOfDeath ? (curYear - person.yearOfBirth) : person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
