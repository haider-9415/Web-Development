// to make an array the element of another array is called nesting of arrays

let fruits = ['apple', 'grape', 'orange']
let berries = ['strawberry', 'blueberry', 'resberry']

console.log("fruits --> ", fruits);
console.log("barries --> ", berries);

fruits.push(berries)
console.log("fruits --> ", fruits);


// we can access its elements
console.log("fruits[3] --> ", fruits[3]);

console.log("fruits[3][0] --> ", fruits[3][0]);
console.log("fruits[3][1] --> ", fruits[3][1]);
console.log("fruits[3][2] --> ", fruits[3][2]);


// similarly
let allFruits = [fruits, berries]
console.log("allFruits --> ", allFruits);

console.log("allFruits[0] --> ", allFruits[0]);
console.log("allFruits[0][0] --> ", allFruits[0][0]);
console.log("allFruits[0][1] --> ", allFruits[0][1]);
console.log("allFruits[0][2] --> ", allFruits[0][2]);
console.log("allFruits[0][3] --> ", allFruits[0][3]);
console.log("allFruits[0][3][0] --> ", allFruits[0][3][0]);
console.log("allFruits[0][3][1] --> ", allFruits[0][3][1]);
console.log("allFruits[0][3][2] --> ", allFruits[0][3][2]);
console.log("allFruits[1][0] --> ", allFruits[1][0]);
console.log("allFruits[1][1] --> ", allFruits[1][1]);
console.log("allFruits[1][2] --> ", allFruits[1][2]);


// we can also create a nested array using this method
let a1 = [1, 2, 3, [4, 5, 6], 7, [8, 9], 0]
console.log("a1 --> ", a1);

// to make a nested as a simple array, we use flat(), but the nested array is not affected
let a2 = a1.flat()
console.log("a2 --> ", a2);



// concatinating

// to move the elements of an array into another array
// but the actual array is not effected
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 0]
let x1 = arr1.concat(arr2)

console.log("x1 --> ",x1);
console.log("arr1 --> ",arr1);



// spread operator --> '...'
// it is used to concat the arrays
let arr3 = [...fruits, berries, arr1,...arr2]
let arr4 = [...fruits, ...berries, ...arr1, ...arr2]

console.log("arr3 --> ",arr3);
console.log("arr4 --> ",arr4);// in this,array "berries" is also appeared because it is an element of the array "fruits"



// static methods

// to check a variable is an array or not
console.log("Array.isArray(fruits) --> ", Array.isArray(fruits));

let x2 = 123456
console.log("Array.isArray(fruits) --> ",Array.isArray(x2));


// to make array from string
console.log("Array.from('1234567') --> ",Array.from('1234567'));


// we can create an array with passing the variable
let a = 123
let b = 'abcd'
let c = false
let arr5 = Array.of(a, b, c)
let arr6 = Array.of(b, a, c)
console.log("arr5 --> ", arr5);
console.log("arr6 --> ",arr6);




// challenge-1
//use methods to update array [1,2,3,4,5] to the array [6,5,4,3,2,1,0]
const array1 = [1, 2, 3, 4, 5]
array1.push(6)
array1.unshift(0)
array1.reverse()
console.log(array1);
/* or we can use 
   array1.push(6).unshift(0).reverse() */ 


// chalenge-2
// combine array2 and array3 such that element '5' appears only one time
const array2 = [1, 2, 3, 4, 5]
const array3 = [5,6,7,8,9,10]

// method-1
let result1 = array2.slice(0, 4).concat(array3)
console.log("result1 --> ",result1);

// method-2
let result2 = array2.concat(array3)
result2 = [...new Set(result2)]
console.log("result2 --> ", result2);
// Set() is used to remove all duplicate values, but it is using with ...new as you can see

// method-3
let result3 = [...array2, ...array3]
result3.splice(4, 1)
console.log("result3 --> ", result3);
