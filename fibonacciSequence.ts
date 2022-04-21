class FibonacciSequence {
    public _indexNumber;

    constructor(indexNumer: number) {
        this._indexNumber = indexNumer;
    }
    calculate () {
        const result = [0, 1];

        for (let i = 2; i < this._indexNumber; i++){
            const first = result[i - 1];
            const second = result[i - 2];
            result.push(first + second)
        }
        return result.slice(this._indexNumber - 1);
    }
}
const showResult = new FibonacciSequence(8);
console.log(showResult.calculate());