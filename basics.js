console.log('Hello');
// NIE KOMPILUJE SIĘ - TS OKREŚLA TYP ZMIENNEJ
// let myNumber = 5;
// myNumber = 'xxx';
//Variable delaration
// let myNumber = 6;
var myNumber = 6;
var myString = 'My String';
var myBool = true;
var myNull = null;
var myArray = [];
var myObject = {};
//Interfaces
var myObject2 = {
    myPropA: 'A',
    myPropB: 'B'
};
console.log(myObject2);
var myObject3 = {
    myPropA: 'A',
    myPropB: 'B',
    myPropC: 7
};
console.log(myObject3);
// ANY Type
var imNotSureWhatIAm = 'im a String';
imNotSureWhatIAm = 7;
// Typed Arrays
var myTypedArray;
myTypedArray = ['a', 'b'];
myTypedArray.push('c');
console.log(myTypedArray);
var imStringOrNumber;
imStringOrNumber = 'Im String';
imStringOrNumber = 8;
// imStringOrNumber = true; - to nie zadziała
//ENUM number
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var goUp = Direction.Up;
console.log(goUp);
var Colors;
(function (Colors) {
    Colors["black"] = "#001219";
    Colors["pink"] = "#f1c0e8";
})(Colors || (Colors = {}));
var color2 = Colors.pink;
console.log(color2);
function iDoNothins() {
}
function iReturnString() {
    return 'Im a String';
}
function iReturnMyInput(input) {
    return input;
}
iReturnMyInput(false);
function myInputParams(a, b, c, d) {
    if (d === void 0) { d = 9; }
    return [a, b, c, d];
}
console.log(myInputParams('Hi', 8, true));
console.log(myInputParams('Hi', 8, true, 7));
