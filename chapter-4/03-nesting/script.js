// we can use conitional statement inside of another conditional statement


let x = prompt("Enter +ve integer: ")

if (x <= 10 && x >= 0) {
    if (x%2 == 0) {
        console.log(`${x} is divisible by 2`);
    }
    else {
        console.log(`${x} is not divisible by 2`);
    }
}
else if (x <= 50 && x > 10) {
    if (x%3 == 0) {
        console.log(`${x} is divisible by 3`);
    }
    else if (x % 5 == 0) {
        console.log(`${x} is divisible by 5`);
    }
    else {
        console.log(`${x} is not divisible by 3 and 5`);
    }
}
else {
    console.log();
}
