// break terminates the loop
console.log('break keyword');
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        console.log('breaking...');
        break
    }
    console.log('iteration --> ',i);   
}


// continue skips that iteration
console.log('continue keyword');
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        console.log('skipping...');
        continue
    }
    console.log('iteration --> ',i);   
}
