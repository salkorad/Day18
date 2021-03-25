function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* arguments;
}
const iterator = myGenerator(6, 7, 8);
var generatorArray = [];
for (let value of iterator) {
    generatorArray.push(value);
    
}

console.log(generatorArray);
module.exports = {generatorArray, myGenerator};