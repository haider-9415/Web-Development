/*
syntax:

condition ? code-of-if : code-of-else

*/

/*
let age = prompt("Enter your age: ")

// using if-else statement
if (age >= 18) {
    console.log("you can vote  - using if-else");

} else {
    console.log("you cannot vote  - using if-else");
}

// using ternary operator
age >= 18 ? console.log("you can vote  - using ternary opr") : console.log("you cannot vote  - using ternary opr");


// we can assign a variable using it
let canVote = age >= 18 ? "you can vote" : "you cannot vote";

console.log("canVote --> ",canVote);

*/


// for multiple statements

// long version
let auth = prompt("Enter 1 or 0 for 'auth' :  ")
auth = parseInt(auth)
let redirect1

if (auth) {
    alert("Welcome to the dashboard")
    redirect1 = '/dashboard'
} else {
    alert("Access Denied")
    redirect1 = '/login'
}
console.log("redirect1 --> ",redirect1);

// short version
let redirect2 = auth ? (alert("Welcome to the dashboard"), '/dashboard') : (alert("Access Denied"), '/login')

console.log("redirect2 --> ",redirect2);