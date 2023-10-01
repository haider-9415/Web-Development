// loop over object

let colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'green',
    color4: 'yellow',
    color5: 'orange'
}

console.log('keys of colorObj');
for (const k in colorObj) {
    console.log(k);
}

console.log('with values');
for (const k in colorObj) {
    console.log(k, colorObj[k]);
}



// loop over array
let colorArr = ['red', 'blue', 'green', 'yellow', 'green']

console.log('index:');
for (const index in colorArr) {
    console.log(index);
}

console.log('elements:');
for (const index in colorArr) {
    console.log(colorArr[index]);
}