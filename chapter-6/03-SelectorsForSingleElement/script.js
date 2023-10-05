// to get element by its ID
console.log('document.getElementById("app-title") --> ', document.getElementById('app-title'));

// we can get its attributes
console.log('document.getElementById("app-title").id --> ', document.getElementById('app-title').id);

console.log('document.getElementById("app-title").className --> ', document.getElementById('app-title').className);

// or
console.log('document.getElementById("app-title").setAttribute("title, Title1--> ', document.getElementById('app-title').getAttribute("id"));

console.log('document.getElementById("app-title").getAttribute("class") --> ', document.getElementById('app-title').getAttribute("class"));


// to set attribute
document.getElementById('app-title').setAttribute("class", "Title1")

console.log('document.getElementById("app-title").className --> ', document.getElementById('app-title').className);


document.getElementById('app-title').setAttribute("title", "Title2")

console.log('document.getElementById("app-title").title --> ', document.getElementById('app-title').title);


// to get and change the content
let content = document.getElementById('app-title')
console.log('content.textContent --> ', content.textContent);

content.textContent = 'hello word'
console.log('content.textContent --> ', content.textContent);

content.innerText = 'hello word again'
console.log('content.innerText --> ', content.innerText);

content.innerHTML = 'Shopping List'
console.log('content.innerHTML --> ', content.innerHTML);


// we can change style
content.style.color = 'red'
content.style.background = 'aqua'
content.style.padding = '10px'
content.style.borderRadius = '20px'



// another method to select single element

console.log("document.querySelector('h1') --> ",document.querySelector('h1'));

// select by ID 
console.log("document.querySelector('#app-title') --> ",document.querySelector('#app-title'));

// select by class
console.log("document.querySelector('.container') --> ",document.querySelector('.container'));

// to select 2nd list item
console.log("document.querySelector('li:nth-child(2)') --> ",document.querySelector('li:nth-child(2)'));

// to select 3rd list item
console.log("document.querySelector('li:nth-child(3)') --> ", document.querySelector('li:nth-child(3)'));

// to get text of them
console.log("document.querySelector('li:nth-child(2)').innerText)--> ",document.querySelector('li:nth-child(2)').innerText);

console.log("document.querySelector('li:nth-child(3)').innerText)--> ", document.querySelector('li:nth-child(3)').innerText);

// we can change it
let secondLI = document.querySelector('li:nth-child(2)')

secondLI.innerText = 'Apple Juice'

console.log("document.querySelector('li:nth-child(2)').innerText)--> ",document.querySelector('li:nth-child(2)').innerText);

// to change style
secondLI.style.color = 'blue'
secondLI.style.background = 'grey'


// we can this method on other elements
let list = document.querySelector("ul")
console.log('list --> ', list);

let firstLiTag = list.querySelector('li')
console.log(firstLiTag);
firstLiTag.style.color = 'red'

let fourthLiTag = list.querySelector('li:nth-child(4)')
console.log(fourthLiTag);
fourthLiTag.style.color = 'green'
