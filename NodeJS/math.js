const add = require("./components/add");
const { multiply, desctiption } = require("./components/multiply");
console.log(desctiption);

const addValue = add(2, 4, 10);
console.log(addValue);

const multiplyValue = multiply(1, 5, 5, 4);
console.log(multiplyValue);
