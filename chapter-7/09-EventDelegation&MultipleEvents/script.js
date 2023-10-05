const icons = document.querySelector('i')

const listItems = document.querySelectorAll('li')

const list = document.querySelector('ul')

/*
listItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.remove()
    })
});
*/

/*
list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        if (e.target.style.color !== 'red') {
            e.target.style.color = 'red'
        } else {
            e.target.style.color = 'black'
        }
    }
})
*/

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove()
    }
})