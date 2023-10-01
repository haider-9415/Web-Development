/* in this, the given value is compared to the value of each case and we have to place break statement in each case
because if one case is matched than after that codes of each case is executed */

// without place break statement
/*
switch ('orange') {
    case 'grape':
        console.log('this is grape');
    case 'orange':
        console.log('this is orange');
    case 'apple':
        console.log('this is apple');
    case 'banana':
        console.log('this is banana');
}
*/


// with break statement
/*
switch ('orange') {
    case 'grape':
        console.log('this is grape')
        break
    case 'orange':
        console.log('this is orange')
        break
    case 'apple':
        console.log('this is apple')
        break
    case 'banana':
        console.log('this is banana')
        break
}
*/


// with default keyword
/*
switch ('orange') {
    case 'grape':
        console.log('this is grape')
        break
    case 'apple':
        console.log('this is apple')
        break
    case 'banana':
        console.log('this is banana')
        break
    default:
        console.log('there is no orange');
}
*/


/*
let h = prompt("Enter the hour (in 24 formate): ")

switch (true) {
    case h < 12:
        console.log('Good Morning');
        break;
    case h < 18:
        console.log('Good Afternoon');
        break;
    default:
        console.log('Good Night');
        break;
}
*/



// challenge-calculator

function calculator(num1, num2, opr) {
    
    switch (opr) {
        case '+':
            // console.log(`${num1} + ${num2} = `,num1+num2);
            return `${num1} + ${num2} = `,num1+num2
            break;
        case '-':
            // console.log(`${num1} - ${num2} = `,num1-num2);
            return `${num1} - ${num2} = `,num1-num2
            break;
        case '*':
            // console.log(`${num1} * ${num2} = `,num1*num2);
            return `${num1} * ${num2} = `,num1*num2
            break;
        case '/':
            // console.log(`${num1} / ${num2} = `,num1/num2);
            return `${num1} / ${num2} = `,num1/num2
            break;
        default:
            // console.error('invalid operator');
            return 'invalid operator'
            break;
    }
}

console.log("calculator(10,5,'+') --> ",calculator(10,5,'+'));
console.log("calculator(10,5,'-') --> ",calculator(10,5,'-'));
console.log("calculator(10,5,'*') --> ",calculator(10,5,'*'));
console.log("calculator(10,5,'/') --> ",calculator(10,5,'/'));
console.log("calculator(10,5,'&') --> ",calculator(10,5,'&'));