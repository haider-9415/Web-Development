/*
syntax:

if (conition){
    code
}
else if (condition){
    code
}
else{
    code
}

we can write multiple else_if statements

*/

let age = prompt("Enter your age: ")

if (age <= 18) {
    console.log('you are a kid');
}
else if (age > 18 && age <= 60) {
    console.log('you are a man');
}
else {
    console.log('you are an oldman');
}


