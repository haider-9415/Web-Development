/*
syntax:

if (condition){
    code
}
else{
    code
}

if conditio is true then the code inside of if-statement will be execute
otherwise the code inside of else statement will be execute
*/

if (true) {
    console.log('this is if statement one');
}

if (false) {
    console.log('this is if statement two');
}

let x = 10
let y = 20

if (x < y) {
    console.log(`${x} is less than ${y} from if-statement`);
}
else {
    console.log(`${x} is greater than ${y}`);
}

if (x > y) {
    console.log(`${x} is greater than ${y}`);
}
else {
    console.log(`${x} is less than ${y} - from else statement`);
}


// shortform
if (true) console.log('this is short form'), console.log('this is short form');
else console.log('this is short form');


