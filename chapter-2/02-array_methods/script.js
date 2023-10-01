let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
console.log("arr1 --> ", arr1);


// to add the element in the ending of the array
let x7 = arr1.push(100)
console.log("arr1 --> ", arr1);
// it returns the no. of elements
console.log("x7 --> ",x7);

// to remove the last element of the array
x1 = arr1.pop() // it returns that element
console.log("x1 -->",x1);
console.log("arr1 --> ", arr1);

// x2 = arr1.pop()
// console.log("x2 -->",x2);
// console.log("arr1 --> ", arr1);


// to add element at the starting 
arr1.unshift(1)
console.log("arr1 --> ", arr1);


// to remove from the starting
x3 = arr1.shift()// it returns that element
console.log("x3 --> ",x3);
console.log("arr1 --> ", arr1);


// to reverse the array
// arr1.reverse()
// console.log("arr1 --> ", arr1);


// to check that an element x is in the array or not
console.log("arr1.includes(10) --> ", arr1.includes(10));

console.log("arr1.includes(1000) --> ", arr1.includes(1000));


// to find the index of an element
console.log("arr1.indexOf(50) --> ", arr1.indexOf(50));
// if thee element does not exist then it returns -1
console.log("arr1.indexOf(1000) --> ", arr1.indexOf(1000));


// to get the specified part of the array
console.log("arr1.slice(1,4) --> ", arr1.slice(1, 4));
console.log("arr1.slice(4) --> ", arr1.slice(4));
// it does not change the array
console.log("arr1 --> ",arr1);


// // we can use splice(), but it manipulates the array and it is different a little bit
// console.log("arr1.splice(1, 4) --> ", arr1.splice(1, 4));
// console.log("arr1 --> ",arr1);

// // we can use it to remove elements
// console.log("arr1.splice(4,1) --> ", arr1.splice(4,1));
// console.log("arr1 --> ",arr1);
// // splice() returns that removed element in the form of array


// we can use multiple methods togather

let x4 = arr1.splice(1, 4).reverse()
console.log("x4 --> ", x4);

let x5 = arr1.splice(1,4).reverse().toString()
console.log("x5 --> ", x5);

let x6 = arr1.splice(1,4).reverse().toString().charAt(0)
console.log("x6 --> ", x6);
