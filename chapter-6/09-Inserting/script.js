// to insert element

function InsertElement(text) {
    let filter = document.querySelector('.filter') // it is because we will insert after or before 'Filter Items'

    let h1 = document.createElement('h1') // to create element to be inserted

    h1.textContent = text // text to be inserted in 'h1' element

    /* to insert element */

    // both of the followinbg are to insert before "Filter Items"
    filter.insertAdjacentElement('beforebegin', h1)
    // filter.insertAdjacentElement('afterbegin', h1)

    // both of the followinbg are to insert after "Filter Items"
    // filter.insertAdjacentElement('afterend', h1)
    // filter.insertAdjacentElement('beforeend', h1)

}

InsertElement('example of inserting element')


// to insert text
function InsertText(text) {
    
    let element = document.querySelector('li:first-child') // to select the element after which or before which the text to be inserted

    /*to insert text */
    
    // to insert after and outside of the first 'li' element
    // element.insertAdjacentText('afterend', text)
    
    // to insert after and inside of the first 'li' element
    // element.insertAdjacentText('beforeend',text)
    
    // to insert before and inside of the first 'li' element
    // element.insertAdjacentText('afterbegin', text)
    
    // to insert before and outside of the first 'li' element
    // element.insertAdjacentText('beforebegin', text)

}

InsertText('example of inserting text')



// to insert HTML
function Insert_h4(content) {
    let clear_btn = document.querySelector('#clear')// to select 'Clear All' button using its ID

    /* to insert HTML */

    // to insert after and outside of the 'Clear All' button
    // clear_btn.insertAdjacentHTML('afterend',`<h4>${content}</h4>`)
    
    // to insert after and inside of the 'Clear All' button
    // clear_btn.insertAdjacentHTML('beforeend',`<h4>${content}</h4>`)
    
    // to insert before and inside of the 'Clear All' button
    // clear_btn.insertAdjacentHTML('afterbegin', `<h4>${content}</h4>`)
    
    // to insert before and inside of the 'Clear All' button
    // clear_btn.insertAdjacentHTML('beforebegin',`<h4>${content}</h4>`)
}

Insert_h4("this is h4 element")



// to insert HTML
function InsertHTML(content) {
    let clear_btn = document.querySelector('#clear')// to select 'Clear All' button using its ID

    /* to insert HTML */

    // to insert after and outside of the 'Clear All' button
    // clear_btn.insertAdjacentHTML('afterend',`<h4>${content}</h4>`)
    
    // to insert after and inside of the 'Clear All' button
    // clear_btn.insertAdjacentHTML('beforeend',`<h4>${content}</h4>`)
    
    // to insert before and inside of the 'Clear All' button
    // clear_btn.insertAdjacentHTML('afterbegin', `<h4>${content}</h4>`)
    
    // to insert before and outside of the 'Clear All' button
    // clear_btn.insertAdjacentHTML('beforebegin',content)
}

InsertHTML("<h4>this is h4 element</h4>")
InsertHTML("<h5>this is h5 element</h5>")
InsertHTML("<h6>this is h6 element</h6>")



// to insert before an element
function InsertBefore(content) {
    let ul = document.querySelector('ul')// we will insert the new element inside it

    let li = document.createElement('li')// we will insert an 'li' element
    li.textContent = content

    let refer_elem = document.querySelector('li:nth-child(3)')// it is the element which we will make as a reference to inset the new 'li' element
    
    /* to insert the element */
    ul.insertBefore(li, refer_elem)
}

InsertBefore('example of insert before')



// to insert after an element
// there is no function like 'insertBefore()' to insert after an element, we have to create that function
/* to insert li element */
function insertAfter(content, refer_no) {
    let li = document.createElement('li')//  element to be inserted
    li.textContent = content

    // the following 6 lines of code is to apply CSS that is applied on actual elements
    let button = document.createElement('button')
    button.className = "remove-item btn-link text-red"

    let icon = document.createElement('i')
    icon.className = "fa-solid fa-xmark"

    button.appendChild(icon)
    li.appendChild(button)

    
    let refer_elem = document.querySelector(`li:nth-child(${refer_no})`)// element to become reference element

    refer_elem.insertAdjacentElement('afterend',li)
}

insertAfter('example-1 of insert after', 4)
insertAfter('example-2 of insert after', 1)
