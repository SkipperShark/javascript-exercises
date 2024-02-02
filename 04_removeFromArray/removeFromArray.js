const removeFromArray = function (array, ...elementsToRemove) {

    return array.filter((element) => {
        if (elementsToRemove.includes(element)) {
            return false;
        }
        return true
    })

    for (let i = 0; i < array.length; i++) {

        let curElement = array[i];

        for (value in elementsToRemove) {

        }

        for (value in elementsToRemove) {
            if (curElement === value) {
                array.splice()
            }
        }
    }


};

// Do not edit below this line
module.exports = removeFromArray;
