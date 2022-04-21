"use strict";
exports.__esModule = true;
var people_1 = require("./sample_data/people");
var starships_1 = require("./sample_data/starships");
var StarWarsData = /** @class */ (function () {
    function StarWarsData(people, starships) {
    }
    return StarWarsData;
}());
var starWarsData = new StarWarsData(people_1.people, starships_1.starships);
console.log('starWarsData', starWarsData);
