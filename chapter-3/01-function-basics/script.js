// we don't to pass parameters
function sayHello() {
    console.log('using sayHello():','Hello');
}
sayHello()

// we can pass parameters
function add(num1, num2) {
    console.log(`using add(): ${num1} + ${num2} = `,num1+num2);
}
add(12, 3)


// we can pass same parameters in different functions
function sub(num1, num2) {
    return num1-num2
}
sub(12, 3)// return keyword does not print the result it only returns 
let x1 = sub(12, 3)
console.log("using sub(): x1 = ", x1);
// or
console.log("sub(10,5) --> ", sub(10, 5));



// default parameter
function registerUser1(user) {
    return user + " is registered "
}
console.log("registerUser1() --> ", registerUser1());// it will set 'undefined' as the parameter'
// but, we can set it that will act as bydefault
function registerUser2(user = 'bot') {
    return user + " is registered "
}
console.log("registerUser2() --> ", registerUser2())


// rest parameter
// on using this we can pass multiple parameters and they are stored in an array
function restPara(...elem) {
    return elem
}
console.log("restPara(1,2,3,4,'a','b',true) --> ", restPara(1, 2, 3, 4, 'a', 'b', true));


//  objects as parameter
function logininfo(user) {
    return `the user ${user.name} with the id of ${user.id} is logged in`
}
let ob1 = {
    id: 1,
    name:'haider'
}
console.log(logininfo(ob1));
// or
let x2 = logininfo({ id: 2, name: 'abcd' })
console.log("x2 --> ", x2);


// array as parameter
function arr_para1(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)

    return arr[randomIndex]
}
let x3 = arr_para1([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log("x3 --> ", x3);// it will give a new element at every reloading that is not greater that length of the array
// or we can use spread operator
function arr_para2(...arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)

    return arr[randomIndex]
}
let x4 = arr_para2(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log("x4 --> ", x4);


