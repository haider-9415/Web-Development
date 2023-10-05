// method-1 - querySelectorall()

// using tag name
let listItems1 = document.querySelectorAll('li')
console.log('listItems1 --> ', listItems1);
// it is iterable
console.log('listItems1[0] --> ', listItems1[0]);
console.log('listItems1[1] --> ', listItems1[1]);
console.log('listItems1[3] --> ', listItems1[3]);


// using class
let listItems2 = document.querySelectorAll('.li-class')
console.log('listItems2 --> ', listItems2);
console.log('listItems2[0] --> ', listItems2[0]);
console.log('listItems2[1] --> ', listItems2[1]);
console.log('listItems2[3] --> ', listItems2[3]);


// using id
let listItems3 = document.querySelectorAll('#li-id')
console.log('listItems3 --> ', listItems3);
console.log('listItems3[0] --> ', listItems3[0]);
console.log('listItems3[1] --> ', listItems3[1]);
console.log('listItems3[3] --> ', listItems3[3]);

// then we will see their content
console.log('listItems3[0] --> ', listItems3[0].innerText);
console.log('listItems3[1] --> ', listItems3[1].innerText);
console.log('listItems3[2] --> ', listItems3[2].innerText);
console.log('listItems3[3] --> ', listItems3[3].innerText);


// and we cam chnage them, their css content as well as their html content

// we hve to iterate to apply same changes on every tag
// listItems1.style.color = 'red' // it will give error

/*
// therefore 
listItems1.forEach(item => {
    item.style.color = 'red'
    item.style.padding = '5px'
    item.style.margin = '10px'
})

// to apply changes only on one tag
listItems1[1].style.color = 'blue'
*/

/*
// we can use if-else and loops etc.
listItems1.forEach((item, index) => {

    if (index === 2) {
        item.innerText = 'Bourbon'
    }
    if (index === 0) {
        item.remove()
    }
    if (index === 3) {
        item.innerHTML = `Cold Drink
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>`
    }
})
*/

listItems1.forEach((item,index) => {
    console.log(index, ' - ',item.innerText);
})

// method-2 - getElementByClassName()

let listItems4 = document.getElementsByClassName('li-class')
console.log('listItems4 --> ', listItems4);

// we can access indevidual items
console.log('listItems4[1] --> ', listItems4[1]);
console.log('listItems4[3] --> ', listItems4[3]);

// we can do anything with getElementByClassName() that we have done using querySelectorall() but we cannot do something

// e.g.,
/*
listItems4.forEach((item, index) => {
    console.log(index, ' - ',item.innerText);
})
*/

// first we have to convert it into array
let listItemArray = Array.from(listItems4)
listItemArray.forEach((item, index) => {
    console.log(index, ' - ',item.innerText);
})



// method-3 - getElementByTagName()
let listItems5 = document.getElementsByTagName('li')
console.log('listItems5 --> ', listItems5);

