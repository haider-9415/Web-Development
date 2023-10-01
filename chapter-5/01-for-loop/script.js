console.log('first loop');
for (let i = 0; i <= 10; i++) {
    console.log('i --> ',i,' - iteration-',i);
}

console.log('second loop');
for (let i = 1; i <= 10; i++) {
    console.log('i --> ',i,' - iteration-',i);
}

console.log('third loop');
for (let i = 7; i <= 10; i++) {
    console.log('i --> ',i,' - iteration-',i - 6);
}

// we can't use const in this, because 'i' is updated after each iteration



// for array
let arr1 = ['a', 'b', 'c', 'd']

for (let i = 0; i < arr1.length; i++) {
    console.log(`arr1[${i}]  --> `,arr1[i]);   
}
