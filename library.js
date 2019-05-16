let easyHA =(function () {

    let switchKeysAndValues = function(object) {
        let keys = Object.keys(object);
        let values = Object.values(object);
        let newObject = {};
        for (let i = 0; i < keys.length; i++) {
            newObject[values[i]] = keys[i];
        }
        return (newObject);
    };

    let createObjectFromTwoArrays = function(array1, array2) {
        let newObject = {};
        for (let i = 0; i < array1.length && i < array2.length; i++) {
            newObject[array1[i]] = array2[i];
        }
        return (newObject);
    };

    let nonrepeatedArray = function(array) {
        let object = {};
        for (let i = 0; i < array.length; i++) {
            let str = array[i];
            object[str] = true;
        }
        let newArray = Object.keys(object);
        return newArray;
    };
    return {
        switchKeysAndValues: switchKeysAndValues,
        createObjectFromTwoArrays: createObjectFromTwoArrays,
        nonrepeatedArray: nonrepeatedArray
    }
}());
