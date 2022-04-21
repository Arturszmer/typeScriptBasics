var FibonacciSequence = /** @class */ (function () {
    function FibonacciSequence(indexNumer) {
        this._indexNumber = indexNumer;
    }
    FibonacciSequence.prototype.calculate = function () {
        var result = [0, 1];
        for (var i = 2; i < this._indexNumber; i++) {
            var first = result[i - 1];
            var second = result[i - 2];
            result.push(first + second);
        }
        return result.slice(this._indexNumber - 1);
    };
    return FibonacciSequence;
}());
var showResult = new FibonacciSequence(8);
console.log(showResult.calculate());
