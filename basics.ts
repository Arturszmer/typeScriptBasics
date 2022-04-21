console.log('Hello');

// NIE KOMPILUJE SIĘ - TS OKREŚLA TYP ZMIENNEJ
// let myNumber = 5;
// myNumber = 'xxx';

//constiable delaration

// let myNumber = 6;
let myNumber = 6;
let myString = 'My String';
let myBool = true;
let myNull = null;
let myArray = [];
let myObject = {};

//Interfaces

let myObject2 = {
    myPropA: 'A',
    myPropB: 'B'
};

console.log(myObject2);

interface Properties {
    myPropA: String,
    myPropB: String,
    myPropC: number,
    myPropD?: Boolean //znak zapytania daje nam możliwość nie implementowania zmiennej
}
let myObject3: Properties = {
    myPropA: 'A',
    myPropB: 'B',
    myPropC: 7
}
console.log(myObject3)
// ANY Type

let imNotSureWhatIAm: any = 'im a String'
imNotSureWhatIAm = 7;

// Typed Arrays

let myTypedArray: String[];
myTypedArray = ['a', 'b'];
myTypedArray.push('c');
console.log(myTypedArray);

let imStringOrNumber: string | number;
imStringOrNumber = 'Im String';
imStringOrNumber = 8;
// imStringOrNumber = true; - to nie zadziała

//ENUM number

enum Direction {
    Up = 0,
    Down= 1,
    Left= 2,
    Right = 3,
}
const goUp = Direction.Up;
console.log(goUp);

enum Colors {
    black = '#001219',
    pink = '#f1c0e8'
}
const color2 = Colors.pink;
console.log(color2)

function iDoNothins(): void {

}
function iReturnString(): String{
    return 'Im a String';
}

function iReturnMyInput(input): boolean{
    return input;
}

iReturnMyInput(false);

function myInputParams(a: string, b: number, c: boolean, d: number = 9)
    : [string, number, boolean, number]{
    return [a, b, c, d];
}

console.log(myInputParams('Hi', 8, true))
console.log(myInputParams('Hi', 8, true, 7))

function myInputParams2(a: string, b?: number)
    : [string, number]{
    return [a, b];
}
function myIObject(object: Properties): Properties {
    return object;
}
myIObject({myPropA: 'A', myPropB: 'B', myPropC: 15})
