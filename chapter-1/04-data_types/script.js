// there are two types of data types 1)Primitive    2)Reference


// 1) Primitive data types
// string
let str1 = 'haider'
let str2 = "123456"

console.log("str1 --> ",str1,"  -  type of str1 --> ",typeof str1);
console.log("str2 --> ",str2,"  -  type of str2 --> ",typeof str2);


// number
// string
let num1 = 12344
let num2 = -1235
let num3 = -12.35
let num4 = 432.35

console.log("num1 --> ",num1,"  -  type of num1 --> ",typeof num1);
console.log("num2 --> ",num2,"  -  type of num2 --> ",typeof num2);
console.log("num3 --> ",num3,"  -  type of num3 --> ",typeof num3);
console.log("num4 --> ",num4,"  -  type of num4 --> ",typeof num4);



// boolean
let bool1 = true
let bool2 = false

console.log("bool1 --> ",bool1,"  -  type of bool1 --> ",typeof bool1);
console.log("bool2 --> ",bool2,"  -  type of bool2 --> ",typeof bool2);



// null but its type is object
let n1 = null
console.log("n1 --> ",n1,"  -  type of n1 --> ",typeof n1);



// undefined
let u1 = undefined
let u2

console.log("u1 --> ",u1,"  -  type of u1 --> ",typeof u1);
console.log("u2 --> ",u2,"  -  type of u2 --> ",typeof u2);



// symbol
let sm1 = Symbol("id")
let sm2 = Symbol("$")

console.log("sm1 --> ",sm1,"  -  type of sm1 --> ",typeof sm1);
console.log("sm2 --> ",sm2,"  -  type of sm2 --> ",typeof sm2);



// bigint
let int1 = 11112393954843894928998n
console.log("int1 --> ",int1,"  -  type of int1 --> ",typeof int1);



// 2) reference data types

// array but its type is object
let arr1 = [1, 2, 3, 'haider', 'a', 'v', null, true, undefined]

console.log("arr1 --> ",arr1,"  -  type of arr1 --> ",typeof arr1);


// object
let ob1 = {
    name: 'haider',
    age: 21,
    class: '12th-B',
    'e-mail': 'xyz@example.com' 
}
console.log("ob1 --> ",ob1,"  -  type of ob1 --> ",typeof ob1);



// fubction
function sayHello() {
    return 'Hello'
}
console.log("sayHello --> ",sayHello,"  -  type of sayHello --> ",typeof sayHello);

