let num = 123456


// toString --> to convert into string
let x1 = num.toString()
console.log("type of x1 --> ", typeof x1);

// if you have to ind the length of the number
console.log("x1.length --> ", x1.length);

// toFixed --> to show upto specified decimal numbers and remember it will round the number
let x2 = 1234.56459.toFixed(3)
console.log("x2 --> ", x2, " - type of x2 --> ", typeof x2);

x3 = 1234.56449.toFixed(3)
console.log("x3 --> ", x3, " - type of x3 --> ", typeof x3);


// toPrecision
let x4 = 123.4362.toPrecision(5)
console.log("x4 --> ", x4, " - type of x4 --> ", typeof x4);

let x5 = 123.4342.toPrecision(5)
console.log("x5 --> ", x5, " - type of x5 --> ", typeof x5);


// toLocaleString
let x6 = 5
console.log("x6.toLocaleString('ar-EG') --> ", x6.toLocaleString('ar-EG'));// it will show 5 in the representation of egypt


// largest possible number
let x7 = Number.MAX_VALUE
console.log("x7 --> ", x7);


// lowest possible number
let x8 = Number.MIN_VALUE
console.log("x8 --> ",x8);