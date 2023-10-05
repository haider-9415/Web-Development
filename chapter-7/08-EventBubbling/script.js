const button = document.querySelector('form button')

const div = document.querySelector('form div:nth-child(2)')

const form = document.querySelector('form')

// on clicking the 'Add Item' button

// first this will be executed
button.addEventListener('click', (e) => {
    alert('button was clicked')

    // e.stopPropagation()// it will stop to execute the other three event listener
})

// third this will be executed
form.addEventListener('click', () => {
    alert('form was clicked')
})

// fourth this will be executed
document.body.addEventListener('click', () => {
    alert('body was clicked')
})

// second this will be executed
div.addEventListener('click', () => {
    alert('div was clicked')
})
