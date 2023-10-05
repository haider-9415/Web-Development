// creation of list tags

// method-1
function CreateListItem(item) {
    // let li = `<li>${item}</li>` // it will give error, because it is not object
    // therefore
    let li = document.createElement('li')

    li.innerHTML = `${item}<button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
    </button>` // to add HTML to look like other list items

    document.querySelector('.items').appendChild(li)// to appand 'li' in 'ul'
}

CreateListItem('Eggs')
CreateListItem('Chips')



// method-2
function CreateNewItem(item) {
    let li = document.createElement('li') // to create a n 'li' element

    li.appendChild(document.createTextNode(item))// to enter the text for the li element

    let button = document.createElement('button')
    button.className = "remove-item btn-link text-red" // to add the class that is in HTML page

    let icon = document.createElement('i')
    icon.className = "fa-solid fa-xmark" // that is in HTML page
    
    button.appendChild(icon) // because 'i' tag is inside of 'li' tag

    li.appendChild(button) // because 'button' tag is inside of 'li' tag

    document.querySelector('.items').appendChild(li) // because the 'li' tag is inside of 'ul' tag
}

CreateNewItem('Cold Drinks')
CreateNewItem('Biscuits')



// method-3
// it is the refactor of method-2
function CreateListElement(item) {
    let li = document.createElement('li') // to create a n 'li' element

    li.appendChild(document.createTextNode(item))// to enter the text for the li element

    let button = CreateButton("remove-item btn-link text-red")

    li.appendChild(button) // because 'button' tag is inside of 'li' tag

    document.querySelector('.items').appendChild(li) // because the 'li' tag is inside of 'ul' tag
}

function CreateButton(classes) {
    let button = document.createElement('button')
    button.className = classes

    let icon = CreateIcon("fa-solid fa-xmark")
    button.appendChild(icon) // because 'i' tag is inside of 'li' tag

    return button
}

function CreateIcon(classes) {
    let icon = document.createElement('i')
    icon.className = classes

    return icon
}

CreateListElement('Sugarcane Juice')
CreateListElement('Pomegranate Juice')


