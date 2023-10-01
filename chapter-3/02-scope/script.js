// global scope

let x1 = 100
console.log("x1 --> ", x1," - outside os the block & function");
{
    console.log("x1 --> ", x1, " - inside os the block");
    
    let x2 = 200
    console.log("x2 --> ", x2, " - inside os the block");
}
// console.log("x2 --> ", x2, " - outside os the block"); // it will give error

// x1 is in global scope, therefore, it can be accessed at anywhere, but, x2 is not global scope, so, it can not be accessed at anywhere
// it will be said that x2 is in block scope


// similarly
function scope(x3 = 300) {
    let x4 = 400
    console.log("x1 --> ",x1," - inside of the function");
    console.log("x3 --> ",x3," - inside os the function");
    console.log("x4 --> ",x4," - inside os the function");
    
}
scope()

console.log("x1 --> ", x1, " - outside of the function");
// both of the following will give error
// console.log("x3 --> ", x3, " - outside os the function");
// console.log("x4 --> ", x4, " - outside os the function");

// it will be said that x3 and x4 are in "function scope"



function add() {
    let x5 = 50
    let x1 = 10// if we do uncomment it then the result will be 60

    console.log("x1+x5 --> ", x1 + x5);
}
add()



// remember, if the variable is declared with "var" then there is no concept of block scope
{
    var y1 = 700
    console.log("y1 --> ",y1," - inside of the block");
}
console.log("y1 --> ", y1, " - outside of the block");
// but
function func() {
    var y2 = 200
    console.log("y2 --> ", y2, " - inside of the function");
}
func()

// it will give error
// console.log("y2 --> ", y2, " - inside of the function");


// the concept of scope works on loops also as well as on functions but var works in loop as it is in any block



// nested scope
// any variable in the parent can be accesssed in child but vice-versa is not true

{
    let n1 = 100
    {
        let n2 = 200
        console.log("n1 --> ",n1," - inside of child block");
    }
    // console.log("n2 --> ",n2," - inside of block"); // it will give error
}