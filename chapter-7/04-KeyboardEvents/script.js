const itemInput = document.getElementById('item-input')

/*
const onKeyPress = e => {
    if (itemInput.style.background !== 'black') {
        itemInput.style.background = 'black'
        itemInput.style.color = 'white'
    } else {
        itemInput.style.background = 'white'
        itemInput.style.color = 'black'
    }
}
// on using 'keypress', it executes the code 'n' times if you press key 'n' times
itemInput.addEventListener('keypress', onKeyPress)
*/


/*
const onKeyUp = e => {
    if (itemInput.style.background !== 'black') {
        itemInput.style.background = 'black'
        itemInput.style.color = 'white'
    } else {
        itemInput.style.background = 'white'
        itemInput.style.color = 'black'
    }
}
// on using 'keyup', the code will be executed after releasing the key  
itemInput.addEventListener('keyup', onKeyUp)
*/


/*
const onKeyDown = e => {
    if (itemInput.style.background !== 'black') {
        itemInput.style.background = 'black'
        itemInput.style.color = 'white'
    } else {
        itemInput.style.background = 'white'
        itemInput.style.color = 'black'
    }
}
// it works same as 'keypress' works
itemInput.addEventListener('keydown', onKeyDown)
*/



// there are some properties
function KeyEventProperty(e) {
    
    // key
    // document.querySelector('h1').innerText = e.key
    /*
    if (e.key === 'Enter') {
        alert('Are you sure ? ')
    } else {
        document.querySelector('h1').innerText = e.key
    }
    */
    
    /*
    // key code
    if (e.keyCode === 13) {
        alert('Are you sure ? ')
    } else {
        document.querySelector('h1').innerText = e.key
    }
    */
    
    /*
    // code
    // on pressing letter 'x' it returns 'KeyX' 
    if (e.code === 'KeyF') {
        itemInput.style.background = 'blue'
        itemInput.style.color = 'white'
    }
    // on pressing digit 'x' it returns 'Keyx'
    else if (e.code === 'Digit5') {
        itemInput.style.background = 'pink'
        itemInput.style.color = 'red'
    }
    else {
        itemInput.style.background = 'white'
        itemInput.style.color = 'black'
    }
    */
    

    /*
    // shiftKey
    // on pressing 'shift'. it returns true
    if (e.shiftKey) {
        itemInput.style.background = 'black'
        itemInput.style.color = 'white'
        alert('You entered shift')
    }
    */
    // similarly, e.ctrl and e.alt returns true, when the y are pressed and otherwise return flase


    if (e.shiftKey && e.key === 'K') {
        alert('You entered "k" using shift')
    }



}
itemInput.addEventListener('keypress',KeyEventProperty)