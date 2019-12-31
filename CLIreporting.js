
var fileName = './time.json';
var file = require(fileName);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(file.time.reduce(reducer) + " Milli");
console.log(file.time.reduce(reducer) / 60000 + " Minutes");
console.log((file.time.reduce(reducer) / 60000)/60 + " Hours");