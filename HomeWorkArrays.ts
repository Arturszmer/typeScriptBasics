export function getArraylength<T>(array: T[]): number {
    return array.length;
}
export function filterNumberLessThan(array: number[], lessthan: number): number[]{
    const newArray: number[] = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] < lessthan){
            newArray.push(array[i])
        }
    }
    return newArray;
}
export function filterNumbersBIggerThan(array: number[], biggerThan: number): number[]{
    const newArray: number[] = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] > biggerThan){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
export function addToEachArrayItem(array: number[], multiply: number): number[]{
    const newArray: number[] = [];
    array.map(function (x) {
        return newArray.push(x + multiply);
    })
    return newArray;
}
export function multiplyToEachArrayItem(array: number[], multiply: number): number[]{
    const newArray: number[] = [];
    array.map(function (x) {
        return newArray.push(x * multiply);
    })
    return newArray;
}
export function getSumOfAllArrayItems(array: number[]): number{
    let sum = 0;
    array.map(function (x){
        return sum += x;
    })
    return sum;
}
export function getSumWithReduce(array: number[]): number {
    return array.reduce(function (a, b){
        return a + b;
    })
}

const arrayEg = ['art', 5, 'extra', true];

getArraylength(arrayEg);
console.log(getArraylength(arrayEg))

const arrayEg2 = [1, 2, 3, 4, 5];

console.log(filterNumberLessThan(arrayEg2, 3))
console.log(filterNumbersBIggerThan(arrayEg2, 3));

const addToNumbersInArray: number[] = addToEachArrayItem(arrayEg2, 10);
console.log(addToNumbersInArray);
console.log(multiplyToEachArrayItem(addToNumbersInArray, 2));

const sumArray: number = getSumOfAllArrayItems(arrayEg2);
console.log(sumArray);
const sumArrayByreduce: number = getSumWithReduce(arrayEg2);
console.log(sumArrayByreduce);
