// get the child elements
let parent1 = document.querySelector('.parent')
console.log('parent --> ',parent1);


// gethtmel collection of its child elements
let children1 = parent1.children
console.log('children1 --> ', children1);


// html collection is iterable
console.log('children1[0] --> ', children1[0]);
console.log('children1[1] --> ', children1[1]);
console.log('children1[2] --> ', children1[2]);
console.log('children1[3] --> ', children1[3]);

// and we can use
console.log('children1[0].innerText --> ', children1[0].innerText);

console.log('children1[0].className --> ', children1[0].className);

console.log('children1[0].nodeName --> ', children1[0].nodeName);


/*
// we can change them 
children1[0].innerText = 'children-1'
children1[0].className = 'children'

console.log('children1[0].innerText --> ', children1[0].innerText);
console.log('children1[0].className --> ', children1[0].className);

// we cannnot change node name
children1[0].nodeName = 'li'
console.log('children1[0].nodeName --> ', children1[0].nodeName);
*/


/*
// we can apply style
children1[0].style.color = 'red'
children1[0].style.margin = '10px'
*/


/*
// to access first element of the parent
let firstChild = parent1.firstElementChild
console.log('firstChild --> ', firstChild);

// and
firstChild.style.color = 'red'
firstChild.innerText = 'first-child'


// to access last element of the parent
let lastChild = parent1.lastElementChild
console.log('lastChild --> ', lastChild);

// and
lastChild.style.color = 'blue'
lastChild.innerText = 'last-child'
*/


// get parent element from child
let parentFromChild = document.querySelector('.child')

let parentEle = parentFromChild.parentElement

console.log('parentEle --> ', parentEle);

// we can set CSS
parentEle.style.border = '2px dotted black'
parentEle.style.padding = '5px'
parentEle.style.margin = '10px'


// to get sibling elements
let siblingTwo = document.querySelector('.child:nth-child(2)')
console.log('siblingTwo -->', siblingTwo);

siblingTwo.style.border = '2px solid blue'
siblingTwo.style.padding = '5px'

// to get its next sibling, i.e., 'child-3'
let siblingNext = siblingTwo.nextElementSibling
console.log('siblingNext --> ', siblingNext);

siblingNext.style.border = '2px solid red'
siblingNext.style.padding = '5px'

// to get its previous sibling, i.e., 'child-1'
let siblingpre = siblingTwo.previousElementSibling
console.log('siblingpre --> ', siblingpre);

siblingpre.style.border = '2px solid green'
siblingpre.style.padding = '5px'

