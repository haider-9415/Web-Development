// console.log(window);// in this object, you can see the object 'object'

// or
// console.log(document);
// console.dir(window.document);

// body is an attribute of document object, tou can see
// console.log('document.body --> ',document.body);


// innerHTML is the attribute of body which shows the inside of the body tag
// console.log('document.body.innerHTML --> ', document.body.innerHTML);


// to access the links
// it stores them in object
console.log('document.links --> ', document.links);
console.log('document.links[0] --> ',document.links[0]);
console.log('document.links[0] --> ',document.links[1]);


// we can change all content of the web page from here
// document.body.innerHTML = '<h3>this is from script.js</h3>'

// methods

// to write in the page
// document.write('hello from JS')

// to get the element by its ID
// let byID = document.getElementById('main')
// we have the access, using byID

// it will function on all elements which are in the element of this ID
// byID.innerHTML = '<h4>this is also from JS</h4>'

// to access a perticular element in the element of this ID
// if thee are multiple elements of same kind then it selects the first one
document.querySelector('#main h3').innerText = 'hello, this is from JS in h3'



