// it will give all of the webpage
console.log('document.all --> ', document.all);
// this is a list, so we can use index
console.log('document.all[0] --> ', document.all[0]);
console.log('document.all[4] --> ', document.all[4]);
console.log('document.all[20] --> ', document.all[20]);

// we can get length
console.log('document.all.length --> ', document.all.length);


// to get html page
console.log('document.documentElement --> ', document.documentElement);

// to get just head or body  
console.log('document.head --> ', document.head);

console.log('document.body --> ', document.body);


// to get elements of head or body
// it stores them in the object starting with key '0'
console.log('document.head.children --> ', document.head.children);

console.log('document.body.children --> ', document.body.children);


// to get doctype
console.log('document.doctype --> ', document.doctype);


// to get domain
console.log('document.domain --> ', document.domain);

// to get URL of the domain
console.log('document.URL --> ', document.URL);


// to get characterset
console.log('document.characterSet --> ', document.characterSet);


// for content type
console.log('document.contentType --> ', document.contentType);


// to get forms
console.log('document.forms --> ', document.forms);
// it staores in the object starting with '0' key
console.log('document.forms[0] --> ', document.forms[0]);

// to get ID of this tag
console.log('document.forms[0].id --> ', document.forms[0].id);

// to get action of this tag
console.log('document.forms[0].action --> ', document.forms[0].action);

// we can change the ID
document.forms[0].id = 'new=ID'
console.log('document.forms[0].id --> ', document.forms[0].id);


// to get links
console.log('document.links --> ', document.links);
console.log('document.links[0] --> ',document.links[0]);
console.log('document.links[1] --> ', document.links[1]);

// to get thei href
console.log('document.links[0].href --> ', document.links[0].href);
console.log('document.links[2].href --> ',document.links[2].href);

// to set an ID
document.links[0].id = 'google-link'
console.log('document.links[0].id --> ',document.links[0].id);

// we can change href
document.links[2].href = 'https://whatsaap.com'
console.log('document.links[2].href --> ',document.links[2].href);

// to set and get the class name
document.links[2].className = 'link-2-class'

console.log('document.links[2].className --> ',document.links[2].className);


// for image tag
console.log('document.images --> ', document.images);
// it stores them in the object, so we can use index
console.log('document.images[0] --> ', document.images[0]);

// we can use its src property
console.log('document.images[0].src --> ', document.images[0].src);


// to apply an array operation on it. first you have to convert it into array

// document.forms.forEach(form => {
//     console.log(form);
// }); // it will give error

let arr = Array.from(document.forms)
arr.forEach(form => console.log(form))

 