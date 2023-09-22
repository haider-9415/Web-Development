const name = 'haider'
const age = 21

// concatination
let x1 = "Hello, my name is " + name + " and i am " + age + " years old"

console.log("x1 --> ", x1);


// template literals
let x2 = ` Hello, my name is ${name} and i am ${age} years old `

console.log("x2 --> ", x2);


let x3 = 'Hello World'

// accessing characters using their index
console.log("x3[0] --> ", x3[0]);
console.log("x3[1] --> ",x3[1]);
console.log("x3[2] --> ",x3[2]);
console.log("x3[3] --> ",x3[3]);
console.log("x3[4] --> ",x3[4]);
console.log("x3[5] --> ",x3[5]);
console.log("x3[6] --> ",x3[6]);
console.log("x3[7] --> ",x3[7]);
console.log("x3[8] --> ",x3[8]);
console.log("x3[9] --> ",x3[9]);
console.log("x3[10] --> ",x3[10]);
// there is also -ve indexing of characters -1(for last character) to -n(for first character)

// properties & methods

// length --> to find no. of characters
console.log("x3.length --> ", x3.length);

// toUpperCase --> to convert into upper case
console.log("x3.toUpperCase() --> ", x3.toUpperCase());

// toLowerCase --> to convert into lower case
console.log("x3.toLowerCase() --> ", x3.toLowerCase());

// charAt --> to find the character at the specified index
console.log("x3.charAt(0) --> ", x3.charAt(0));

console.log("x3.charAt(7) --> ", x3.charAt(7));

// indexOf --> to find the index of the specified character
console.log("x3.indexOf('H') --> ", x3.indexOf('H'));

// if there are more than one same characters then it will return index of the first character of them
console.log("x3.indexOf('o') --> ", x3.indexOf('o'));

// if the character is not in the string then it will return -1 and it is case sensitive
console.log("x3.indexOf('h') --> ", x3.indexOf('h'));


// substring --> to get a part of the string
console.log("x3.substring(0, 6) --> ", x3.substring(0, 6));

console.log("x3.substring(0, 6) --> ", x3.substring(4, 7));
// 6 and 7 will not be included

// slice --> it is like substring but, in this, we can use -ve index of characters
console.log("x3.slice(4, 7) --> ", x3.slice(4, 7));

console.log("x3.slice(-5, -1) --> ", x3.slice(-5, -1));

console.log("x3.slice(-11, -1) --> ", x3.slice(-11, -1));

console.log("x3.slice(-11, ) --> ", x3.slice(-11, 0));


// trim --> to remove white spaces from left and right

let x4 = "             haider   "
console.log("x4 --> ", x4);
console.log("x4.trim() --> ",x4.trim());


// replace --> to replace a part of the stringf from another
console.log("x3.replace('World', 'john') --> ", x3.replace("World", "john"));
// it will not change the real string
console.log("x3 --> ", x3);


// includes --> to find that the given value is in the string or not
console.log('x3.includes("Hello") --> ', x3.includes("Hello"));

// it is case sensitive
console.log('x3.includes("hello") --> ',x3.includes("hello"));

console.log('x3.includes("lo") --> ',x3.includes("lo"));

console.log('x3.includes(" W") --> ',x3.includes(" W"));


// split --> to break down the string it returns the result into array
console.log('x3.split("") --> ', x3.split(''));

console.log('x3.split(" ") --> ', x3.split(' '));

console.log('x3.split("o") --> ', x3.split('o'));

console.log('"1,2,3,4,5,   6,7,8,9".split(",") --> ', "1,2,3,4,5,   6,7,8,9".split(','));




// chalenge
// convert the 'd' in 'developer' into upper case
const mystring = 'developer'

// solution-1
let mynewstring1 = (mystring.charAt(0)).toUpperCase() + mystring.slice(1)
console.log(mystring," --> ",mynewstring1);

// solution-2
let mynewstring2 = `${mystring[0].toUpperCase()}${mystring.substring(1)}`
console.log(mystring," --> ",mynewstring2);
