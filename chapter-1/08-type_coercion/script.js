// in this, we will see that conversions which JS implicitly do

let x1 = 5 + '5'
console.log("x1 --> ", x1, " - type --> ", typeof x1);

let x2 = 5 + Number('5')
console.log("x2 --> ", x2, " - type --> ", typeof x2);

let x3 = 5 * '5'
console.log("x3 --> ", x3, " - type --> ", typeof x3);

let x4 = 5 + null
console.log("x4 --> ", x4, " - type --> ", typeof x4);

console.log("Numbeer(null) --> ", Number(null));

console.log("Numbeer(true) --> ", Number(true));

console.log("Numbeer(false) --> ", Number(false));

let x5 = 99 + true
console.log("x5 --> ", x5, " - type --> ", typeof x5);

let x6 = 99 + false
console.log("x6 --> ", x6, " - type --> ", typeof x6);

let x7 = 5 + undefined
console.log("x7 --> ", x7, " - type --> ", typeof x7);