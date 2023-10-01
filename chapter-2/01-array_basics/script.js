// array literal
let arr1 = [12, 234, 43.34, 'haider', true, undefined]
console.log("arr1 --> ", arr1);
console.log("type of arr1 --> ",typeof arr1);


// aray constructor
let fruits = new Array("apple", "grape", 'orange', 'banana')
console.log("fruits --> ", fruits);
console.log("type of fruits --> ",typeof fruits);


// we can access the elements of the array using their indices
console.log("fruits[0] --> ", fruits[0]);
console.log("arr1[5] --> ", arr1[5]);
console.log("`my favorite fruit is ${fruits[1]}` --> ", `my favorite fruit is ${fruits[1]}`);


// to get the total no. of elements of the array
console.log("fruits.length --> ", fruits.length);
console.log("arr1.length --> ", arr1.length);
// we can make the array of thee foxed length
// arr1.length = 4
// console.log("arr1 --> ",arr1);


// we can change the elements using their indices
arr1[2] = 'abcd'
console.log("arr1 --> ", arr1);


// to add an elemet in the array
fruits[fruits.length] = 'blueberry'
console.log("fruits --> ", fruits);
// it is because the indexing starts from 0