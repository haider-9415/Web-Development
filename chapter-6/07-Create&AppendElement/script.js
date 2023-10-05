// we can create HTML tags with thier attributes

let div = document.createElement('div')
console.log(div);

// to add class name
div.className = 'container'
console.log(div);

// to add ID
div.id = 'id-1'
console.log(div);

// we can setAttribute()
div.setAttribute('title', 'created-DIV')
console.log(div);
/*
div.setAttribute('id', 'id-2')
console.log(div);
*/


// to enter text
/*
div.innerText = 'this is created from JS'
console.log(div);
*/


// to append is the best way to enter text
let text = document.createTextNode('this is from JS')

div.appendChild(text)

console.log('div --> ', div);

// similarly
document.querySelector('ul').appendChild(div)

// document.querySelector('li').appendChild(div)