/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum1 = numbers.reduce((previous_num, current_num) => previous_num + current_num)

console.log("sum1 --> ", sum1);

// we can set initial value
let sum2 = numbers.reduce((previous_num, current_num) => previous_num + current_num, 10)

console.log("sum2 --> ", sum2);
*/

/*
let cart = [
    { id: 1, name: 'product-1', price: 150 },
    { id: 2, name: 'product-2', price: 120 },
    { id: 3, name: 'product-3', price: 135 },
    { id: 4, name: 'product-4', price: 90 },
]
// get the total price

let total1 = cart.reduce(function (acc, product) {
    return acc+product.price
}, 0)
console.log("total1 --> ", total1);

let total2 = cart.reduce((acc, cur) => acc + cur.price, 0)
console.log("total2 --> ", total2);
*/