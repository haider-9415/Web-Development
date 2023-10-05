/*
// method-1  using with HTML attribute 'onclick="onClear()"' in button tag

function onClear() {
    alert('Clear items')

    let itemList = document.querySelector('ul')

    itemList.innerHTML = ''
}
*/


let clearbtn = document.querySelector('#clear')
/*
// method-2   using JS listeners

clearbtn.onclick = function () {
    alert('Clea items')
}
*/


// method-3
function clrAlert() {
    alert('Clear items')
    
    /*
    // way-1
    let itemList = document.querySelector('ul')
    itemList.innerHTML = ''
    */
    
    // way-2
    let items = document.querySelectorAll('li')
    items.forEach((item) => item.remove())
}
clearbtn.addEventListener('click', clrAlert)


// to remove the event listener after a certain period of time
/*
setTimeout(() => clearbtn.removeEventListener('click', clrAlert)
    , 5000);// after 5s, that alert will not be shown
*/


/*
// to show the evenet listener once at a certain period of time
setTimeout(() => clearbtn.click(), 5000);// it will show the alert once after 5s
*/