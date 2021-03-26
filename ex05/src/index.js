// Only change code below this line
let shoppingList = new Map();
shoppingList.set("Banana", 3);
shoppingList.set("Pineapple", 5);
shoppingList.set("Pear", 2);
shoppingList.set("Carrot", 10);
shoppingList.set("Apple", 1.5);

var arrKey = [];
var arrValues = [];

for (let key of shoppingList.keys()) {
    arrKey.push(key);
}
for (let col of arrKey.entries()) {
    console.log(`groceries: ${col[1]}`);
} 

for (let val of shoppingList.values()) {
    arrValues.push(val);
}
for (let col of arrValues.entries()) {
    console.log(`amount: ${col[1]}`);
} 
for (let value of shoppingList) console.log(value);
// Only change code above this line
module.exports = { shoppingList, arrKey, arrValues };
