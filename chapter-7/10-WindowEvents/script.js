// document.querySelector('h1').textContent = 'Hello World'
// it will give error and not working because we have used 'script' tag inside of 'head' tag not in 'body' tag

// at this time, we use

/*
window.onload = function () {
    document.querySelector('h1').textContent = 'Hello World'// now it will work


}
*/

// or
/*
window.addEventListener('load', () =>
    (document.querySelector('h1').textContent = 'Hello World again')
)
*/

// or
/*
window.addEventListener('DOMContentLoaded', () =>
    (document.querySelector('h1').textContent = 'this is h1 tag')
)
*/


// on using 'defer' as attribute in 'script' tag
/*
document.querySelector('h1').innerText = 'using "defer" as attribute'
*/


// on using resize
// this code will be executed on resizing the window
/*
window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`
})
*/


// on using scrolled
/*
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        document.body.style.background = 'black'
        document.body.style.color = 'white'
    } else {
        document.body.style.background = 'white'
        document.body.style.color = 'black'
    }
})
*/


// on using focus and blur
window.addEventListener('focus', () => {
    document.querySelector('p').style.color = 'blue'
})

window.addEventListener('blur', () => {
    document.querySelector('p').style.color = 'black'
})