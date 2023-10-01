// spread method
let ob1 = { a: 1, b: 2, c: 3, d: 4 } 
let ob2 = { e: 5, f: 6, g: 7, h: 8 } 

let x1 = { ob1, ob2 }
console.log("x1 --> ", x1);

let x2 = { ...ob1, ...ob2 }
console.log("x2 --> ", x2);

// we can use also --> Object.assign()
// in this, all key value pairs of the objects are stored in first object, in this case, key value pairs of ob2 will be stored in ob1
/*
let x3 = Object.assign(ob1, ob2)
console.log("x3 --> ", x3);
console.log("ob1 --> ", ob1);
console.log("ob2 --> ", ob2);
*/

// we can use {} so that there is no change in ob1
let x3 = Object.assign({},ob1, ob2)
console.log("x3 --> ", x3);
console.log("ob1 --> ", ob1);
console.log("ob2 --> ", ob2);


// array of objects
let todo = [
    {id:1,task:'buy milk'},
    {id:2,task:'pickup kids from school'},
    {id:3,task:'take out trash'}
]
console.log("todo[0] --> ", todo[0]);
console.log("todo[1] --> ",todo[1]);
console.log("todo[2] --> ",todo[2]);
console.log("todo[0].task --> ",todo[0].task);
console.log("todo[1].id --> ",todo[1].id);
console.log("todo[2].task --> ",todo[2].task);



// Object.keys() --> to make all keys the elements of an array
let x4 = Object.keys(ob1)
console.log("x4 --> ", x4);

// to find the no. of pairs in an aobject, we can use it 
console.log("ob1.length --> ", ob1.length);

console.log("Object.keys(ob1).length --> ",Object.keys(ob1).length);


// Object.values() --> to make all values the elements of an array
let x5 = Object.values(ob1)
console.log("x5 --> ", x5);


// Object.entries() --> to make each key value pair as an array that is element of another array
let x6 = Object.entries(ob2)
console.log("x6 --> ", x6);


// .hasOwnProperty() --> to know a key is in the object or not
console.log("ob1.hasOwnProperty('a') --> ", ob1.hasOwnProperty('a'));
console.log("ob1.hasOwnProperty('g') --> ", ob1.hasOwnProperty('g'));

