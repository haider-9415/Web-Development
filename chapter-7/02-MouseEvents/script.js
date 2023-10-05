let logo = document.querySelector('.logo-img')

/*
// on single click at the note-pad image, the sode inside of this function will be executed
function onSngClick() {
    let list = document.querySelectorAll('li')
    list.forEach(element => {
        element.style.color = 'red'
    });
}

logo.addEventListener('click', onSngClick)
*/

/*
// to apply a code on double click, use 'dblclick' instead of 'click'
function onDblClick() {
    if (document.body.style.background !== 'purple') {
        document.body.style.background = 'purple'
        document.body.style.color = 'white'
    } else {
        document.body.style.background = 'white'
        document.body.style.color = 'black'
    }
}

logo.addEventListener('dblclick', onDblClick)
*/


/*
// to call the function on right click
let AddBtn = document.querySelector('.fa-solid')

function onRightClick() {
    
    document.querySelectorAll('li').forEach((element) => {
        element.style.color = 'blue'
    });
    console.log('on right click');
}
logo.addEventListener('contextmenu',onRightClick)
*/


/*
// to call the function on clicking the image with either right key or left key
function onMouseDown() {
    if (document.body.style.color !== 'pink') {
        document.body.style.color = 'pink'
    } else {
        document.body.style.color = 'green'
    }
}
logo.addEventListener('mousedown', onMouseDown)
// we can use 'mouseup' instead of 'mousedown'
*/


/*
// to call the function on scrolling the mouse
function onScrolling() {
    if (document.querySelector('h1').textContent !== 'Scrolling-Effect') {
        document.querySelector('h1').textContent = 'Scrolling-Effect'
    } else {
        document.querySelector('h1').textContent = 'Scroll Again'
    }
}
logo.addEventListener('wheel', onScrolling)
*/


/*
// to call the function on putting the cursore over the image
function onOvering() {
    if (document.querySelector('h1').style.color !== 'blue') {
        document.querySelector('h1').style.color = 'blue'
    } else {
        document.querySelector('h1').style.color = 'orange'
    }
}
logo.addEventListener('mouseover', onOvering)

// there is an poisite of it
function onTakingBack() {
    document.querySelector('h1').style.border = '5px solid yellow'
}
logo.addEventListener('mouseout', onTakingBack)
*/



// we can call the function on dragging the image
function onDragging() {
    if (document.body.style.color !== 'aqua') {
        document.body.style.color = 'aqua'
    } else {
        document.body.style.color = 'green'
    }
}
// on using 'dragstart', it will call the function when you start to drag it
// logo.addEventListener('dragstart', onDragging)

// on using 'drag', it will be calling the function ultill you stop the dragging
// logo.addEventListener('drag', onDragging)

// on using 'dragend', it will call the function when you stop to drag it
logo.addEventListener('dragend', onDragging)
