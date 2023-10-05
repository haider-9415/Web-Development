// method - 1

/*
function ReplaceFirstItem() {
    let ElemToBeRepl = document.querySelector('li:first-child')

    let li = document.createElement('li')
    li.textContent = 'Repl-1st-Elem'

    ElemToBeRepl.replaceWith(li)
}

ReplaceFirstItem()
*/


// method-2

/*
function ReplaceSecondItem() {
    let ElemToBeRepl = document.querySelector('li:nth-child(2)')

    ElemToBeRepl.outerHTML = '<li>Repl-2nd-Elem</li>'
}

ReplaceSecondItem()
*/

// similarly

/*
function ReplaceButtonItem() {
    let ElemToBeRepl = document.querySelector('.btn-clear')

    ElemToBeRepl.outerHTML = '<button>Clear</button>'

}

ReplaceButtonItem()
*/



// we can replace all elements of same kind
function ReplaceAllListItems() {
    let ElemToBeRepl = document.querySelectorAll('li') // because we have to replace all therefore we will use 'querySelectorAll'

    // ElemToBeRepl stores node list,so we will use forEach
    ElemToBeRepl.forEach((element, index) => {

        // to choose specific item and do something else
        if (index === 3) {
            element.outerHTML = '<li>Repl-fourth-Elem</li>'
        } else {
            element.outerHTML = '<li>Repl-All-Elem</li>';
        }

        //or
        // element.innerHTML = 'Replaced'
    });

    /*
    // we can use ternary operator
    ElemToBeRepl.forEach((element, index) => {
        (element.outerHTML = index === 2 ? '<li>Repl-third-Elem</li>' : '<li>Repl-All-Elem</li>'
    )});
    */
}

ReplaceAllListItems()


// we can replace child element using parent element
function ReplaceChild() {
    let parent = document.querySelector('header')

    let child = document.querySelector('header h1')

    let NewElement = document.createElement('h3')
    NewElement.textContent = 'Replaced-By-h3'

    parent.replaceChild(NewElement, child)
}

ReplaceChild()