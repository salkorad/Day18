// Only change code below this line
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
function* insideGenerator1() {
    let x=1;
    while (x <=5) {
        yield x++;
    }

}
function* insideGenerator2() {
    let x=10;
    while (x <=15) {
        yield x++;
    }

}
function* insideGenerator3() {
    let x=6;
    while (x <=9) {
        yield x++;
    }

}
// Only change code above this line
var fifteenArray = [];
var iterator = myGenerator();
fifteenArray = [...myGenerator()].join("#,");
console.log(fifteenArray);
module.exports = { fifteenArray, myGenerator };
