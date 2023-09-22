console.log(Math);

let m

// square root
console.log("Math.sqrt(9) --> ", Math.sqrt(9));
console.log("Math.sqrt(3) --> ",Math.sqrt(3));


// absolute value
console.log("Math.abs(34) --> ",Math.abs(34));
console.log("Math.abs(-34) --> ",Math.abs(-34));
console.log("Math.abs(-34.56) --> ",Math.abs(-34.56));


// to round the value
console.log("Math.round(5.5) --> ",Math.round(5.5));
console.log("Math.round(5.4) --> ",Math.round(5.4));


// to round up 
console.log("Math.ceil(5.5) --> ",Math.ceil(5.5));
console.log("Math.ceil(5.4) --> ", Math.ceil(5.4));


// to round down
console.log("Math.floor(5.5) --> ",Math.floor(5.5));
console.log("Math.floor(5.4) --> ",Math.floor(5.4));


// exponent
console.log("Math.pow(5, 2) --> ",Math.pow(5, 2));
console.log("Math.pow(3, 3) --> ",Math.pow(3, 3));


// to get max. number
console.log("Math.max(5, 2, 34, 0, -7) --> ",Math.max(5, 2, 34, 0, -7));


// to get min. number
console.log("Math.min(5, 2, 34, 0, -7) --> ",Math.min(5, 2, 34, 0, -7));


// to generate random number at every reloading of the page
console.log("Math.random() --> ", Math.random());
// to get between 1 and 10
console.log("Math.random()*10 --> ", Math.random()*10 + 1);
// to get between 1 and 100
console.log("Math.random()*100 --> ", Math.random()*100 + 1);
// to get the integer
console.log("Math.round(Math.random()*10 + 1) --> ", Math.round(Math.random()*10 + 1));
console.log("Math.round(Math.random()*100 + 1) --> ", Math.round(Math.random()*100 + 1));




// x should be a random no. between 1 and 100 and y soul be a random between 1 and 50, apply arithmetic oprations on them
let x = Math.round(Math.random() * 100)
let y = Math.round(Math.random() * 50)

console.log("x --> ",x," - y --> ",y);
console.log("Sum --> ", x + y);
console.log("difference --> ", x - y);
console.log("product --> ", x * y);
console.log("quotient --> ", x / y);
console.log("reminder --> ", x % y);
console.log("power --> ", x ** y);

