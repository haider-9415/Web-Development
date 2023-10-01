// type-1
// declaration using function keyword

function add1() {
    console.log('this is add1()');
}
add1()

// we can call it before decalaration
sub1()

function sub1() {
    console.log('this is sub1()');
}



// type-2
// declaration using function expression

let func1 = function () {
    console.log('this is func1');
}
func1()

// we cannot call it before decalaration
// the following will give error
/*
func1()
let func1 = function () {
    console.log('this is func1');
}
*/



// type-3 --> arrow function
let add2 = (a, b) => {
    return a + b
}
console.log("add2(10,5) --> ",add2(10,5));

// we can use it like that
let add3 = (a, b) => a + b
console.log("add3(10,5) --> ",add3(10,5));

// if there is only one parameter then () is not required
let mult_by_2 = a => a * 2
console.log("mult_by_2(10) --> ",mult_by_2(10));


// returning an object
let obj = () => ({
    name: "haider",
    subject:"Computer Science"
})

console.log("obj() --> ", obj());


