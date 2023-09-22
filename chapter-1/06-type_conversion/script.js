// string --> number(integer)
let n = '1000'
console.log("n --> ", n, " - type --> ", typeof n);

let n1 = parseInt(n)
console.log("n1 --> ", n1, " - type --> ", typeof n1);

let n2 = Number(n)
console.log("n2 --> ", n2, " - type --> ", typeof n2);

let n3 = +n
console.log("n3 --> ", n3, " - type --> ", typeof n3);

let n4 = parseFloat(n)
console.log("n4 --> ", n4, " - type --> ", typeof n4);

// on converting letters in string, it returns NaN value which type is number
let n5 = 'hello'
console.log("n5 --> ", n5, " - type --> ", typeof n5);

let n6 = parseInt(n5)
console.log("n6 --> ", n6, " - type --> ", typeof n6);



// number ---> string
let s = 123456
console.log("s --> ", s, " - type --> ", typeof s);

let s1 = s.toString()
console.log("s1 --> ", s1, " - type --> ", typeof s1);

let s2 = String(s)
console.log("s2 --> ", s2, " - type --> ", typeof s2);

let s3 = 12.54
console.log("s3 --> ", s3, " - type --> ", typeof s3);

let s4 = String(s3)
console.log("s4 --> ", s4, " - type --> ", typeof s4);



// string --> number(decimal)
let f = "1234.5434"
console.log("f --> ", f, " - type --> ", typeof f);

let f1 = parseFloat(f)
console.log("f1 --> ", f1, " - type --> ", typeof f1);

// if we use parseInt then it will convert only integer part
let f2 = parseInt(f)
console.log("f2 --> ", f2, " - type --> ", typeof f2);



// number --> boolean
let b1 = 1
let b2 = 0
console.log("b1 --> ", b1, " - type --> ", typeof b1);
console.log("b2 --> ",b2," - type --> ",typeof b2);

let b3 = Boolean(b1)
let b4 = Boolean(b2)
console.log("b3 --> ",b3," - type --> ",typeof b3);
console.log("b4 --> ",b4," - type --> ",typeof b4);
