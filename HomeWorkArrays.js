"use strict";
exports.__esModule = true;
exports.getSumWithReduce = exports.getSumOfAllArrayItems = exports.multiplyToEachArrayItem = exports.addToEachArrayItem = exports.filterNumbersBIggerThan = exports.filterNumberLessThan = exports.getArraylength = void 0;
function getArraylength(array) {
    return array.length;
}
exports.getArraylength = getArraylength;
function filterNumberLessThan(array, lessthan) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < lessthan) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
exports.filterNumberLessThan = filterNumberLessThan;
function filterNumbersBIggerThan(array, biggerThan) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > biggerThan) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
exports.filterNumbersBIggerThan = filterNumbersBIggerThan;
function addToEachArrayItem(array, multiply) {
    var newArray = [];
    array.map(function (x) {
        return newArray.push(x + multiply);
    });
    return newArray;
}
exports.addToEachArrayItem = addToEachArrayItem;
function multiplyToEachArrayItem(array, multiply) {
    var newArray = [];
    array.map(function (x) {
        return newArray.push(x * multiply);
    });
    return newArray;
}
exports.multiplyToEachArrayItem = multiplyToEachArrayItem;
function getSumOfAllArrayItems(array) {
    var sum = 0;
    array.map(function (x) {
        return sum += x;
    });
    return sum;
}
exports.getSumOfAllArrayItems = getSumOfAllArrayItems;
function getSumWithReduce(array) {
    return array.reduce(function (a, b) {
        return a + b;
    });
}
exports.getSumWithReduce = getSumWithReduce;
var arrayEg = ['art', 5, 'extra', true];
getArraylength(arrayEg);
console.log(getArraylength(arrayEg));
var arrayEg2 = [1, 2, 3, 4, 5];
console.log(filterNumberLessThan(arrayEg2, 3));
console.log(filterNumbersBIggerThan(arrayEg2, 3));
var addToNumbersInArray = addToEachArrayItem(arrayEg2, 10);
console.log(addToNumbersInArray);
console.log(multiplyToEachArrayItem(addToNumbersInArray, 2));
var sumArray = getSumOfAllArrayItems(arrayEg2);
console.log(sumArray);
var sumArrayByreduce = getSumWithReduce(arrayEg2);
console.log(sumArrayByreduce);
