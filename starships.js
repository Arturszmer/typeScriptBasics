"use strict";
exports.__esModule = true;
var starships_1 = require("./sample_data/starships");
var starshipNames = starships_1.starships.map(function (ship) { return ship.name; });
console.log(starshipNames);
