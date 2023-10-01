// loop over array

let arr1 = ['book', 'table', 'chair', 'kite']

console.log('elements of arr1:');
for (const i of arr1) {
    console.log(i);
}


let arr2 = [
    { name: 'abcd' },
    { name: 'efjh' },
    { name: 'ijkl' },
    { name: 'mnop' },
]

for (const i of arr2) {
    console.log(i);
}

for (const i of arr2) {
    console.log(i.name);
}



// loop over string
let str1 = 'haider'

console.log('letters of str1: ');
for (const letter of str1) {
    console.log(letter);
}



// loop over map
let map = new Map()

map.set("name", 'haider')
map.set('age', 21)

console.log('map object:  ');
for (const [key,value] of map) {
    console.log(key, value);
}
