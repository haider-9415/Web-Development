// the following will give error, because both are attached with same HTML file and the variable declared by using let can not be declared again
/*
let user = "haider"
console.log("user: ", user, " - in script1");
*/

// the solution of this problem is IIFE

/*
(function () {
    let user = "haider"
    console.log("user: ", user, " - in script1 using IIFE");

    let say = () => console.log('Hello!');

    say()
})()
*/
    
// say() // it will give error, because the function cannot called outside of that block

    
// to pass the parameters, we use second ()
/*
(function (name) {
console.log('hello ' + name);
})('haider')
*/






// challenge-1
// convert Fahrenheit into Celsius

let getCelsius = F => (F - 32) * 5 / 9
console.log(`The temperature is ${getCelsius(50)}\xB0C`);



// chalenge-2
// find the min. and ,ax. value in an array
function minMax(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    // to return the result as an object
    return {
        min,
        max
    }
}

let arr1 = [12, 9843, 23032, 293, -393, -329, 22, -129, 32893, -93202]
console.log("minMax(arr1) --> ", minMax(arr1));



// challenge-3
// create an IIFE that takes length and width od a rectangle and outputs area to the consol as soon as the page loads

// we will use arrow function
((length, width) => {
    let area = length * width
    
    console.log(`The area of rectangle with length ${length} & width ${width} = ${area}`);
})(10, 20)

