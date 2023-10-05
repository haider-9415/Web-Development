
/*
- `target` - The element that triggered the event

- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered

- `timeStamp` - The time that the event was triggered

- `clientX` - The x position of the mouse click relative to the window

- `clientY` - The y position of the mouse click relative to the window

- `offsetX` - The x position of the mouse click relative to the element

- `offsetY` - The y position of the mouse click relative to the element

- `pageX` - The x position of the mouse click relative to the page

- `pageY` - The y position of the mouse click relative to the page

- `screenX` - The x position of the mouse click relative to the screen

- `screenY` - The y position of the mouse click relative to the screen
*/



let logo = document.querySelector('img')

function onCick(event) {
    // target and currentTarget
    /*
    console.log('event.target --> ',event.target);
    // we can add CSS 
    event.target.style.background = 'black'
    console.log('event.currentTarget --> ',event.currentTarget);
    */
    
    // type
    // console.log('event.type --> ',event.type);

    // timeStamp
    // console.log('event.timeStamp --> ', event.timeStamp);
    
    // clientX
    // console.log('event.clientX --> ', event.clientX);
    
    // clientY
    // console.log('event.clientY --> ', event.clientY);
    
    // offsetX
    // console.log('event.offsetX --> ', event.offsetX);
    
    // offsetY
    // console.log('event.offsetY --> ', event.offsetY);
    
    // pageX
    // console.log('event.pageX --> ', event.pageX);
    
    // pageY
    // console.log('event.pageY --> ', event.pageY);
    
    // screenX
    // console.log('event.screenX --> ', event.screenX);
    
    // screenY
    // console.log('event.screenY --> ',event.screenY);
}

// logo.addEventListener('click', onCick)

// for type
// logo.addEventListener('drag', onCick)

/*
// another example of 'target' and 'currentTarget'
document.body.addEventListener('click',function (event) {
    console.log('event.target --> ', event.target);
    
    console.log('event.currentTarget --> ',event.currentTarget);
})
*/


// other
/*
document.querySelector('a').addEventListener('click',function name(e) {
    e.preventDefault() // to stop the working of link
    console.log('Linked was clicked');
})
*/


// using drag
function onDrag(e) {
    let h1 = document.querySelector('h1')
    h1.textContent = `X ${e.offsetX} Y ${e.offsetY}`
}
logo.addEventListener('drag', onDrag)


