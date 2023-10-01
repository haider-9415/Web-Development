let i = 1

while (i <= 5) {
    console.log(`i --> ${i} - iteration ${i}`);

    i++ 
}


// for array
i = 0
let arr1 = ['a','b','c','d']

while (i < arr1.length) {
    console.log(`arr1[${i}] --> ${arr1[i]}`);
    
    i++
}


// table from 1 to 10
i = 1
while (i <= 10) {
    
    console.log(`table of ${i}: `);

    let j = 1
    while (j <= 10) {
        console.log(`${i} x ${j} = ${j * i}`);
        
        j++
    }

    i++
}



console.log('do-while loop: ');

i = 1
do {
    console.log(`i --> ${i} - iteration ${i}`);

    i++
} while (i <= 5);



// difference betwen while & do-whle loops
console.log('differencee between while & do-while: ');

while (false) {
    console.log('this is while loop');
}

do {
    console.log(`this is do-while loop`);
} while (false);




// challenge
// using for loop
for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}

// using while loop

let j = 1

while (j <= 100) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (j % 3 === 0) {
        console.log('Fizz');
    }
    else if (j % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(j);
    }

    j++
}