let itemInput = document.getElementById('item-input')
let priorityInput = document.getElementById('priority-input')
let checkbox = document.getElementById('checkbox')
let heading = document.querySelector('h1')


function onInput(e) {
    heading.textContent = e.target.value
}

// itemInput.addEventListener('input',onInput)

// priorityInput-.addEventListener('input',onInput)


function onChecked(e) {
    if (e.target.checked) {
        heading.textContent = 'checked'
    } else {
        heading.textContent = 'Shoping List'
    }
}

// checkbox.addEventListener('input', onChecked)


function onFocus() {
    itemInput.style.outlineStyle = 'solid'
    itemInput.style.outlineWidth = '1px'
    itemInput.style.outlineColor = 'red'
}
function onNotFocus() {
    itemInput.style.outlineStyle = 'none'
}

itemInput.addEventListener('focus', onFocus)
itemInput.addEventListener('blur',onNotFocus)

