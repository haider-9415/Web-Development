// remove clear button
function RemoveClearBtn() {
    let ClearBtn = document.querySelector('.btn-clear')

    ClearBtn.remove()
}

RemoveClearBtn()


// remove child using parent

// method-1
function RemoveChild1(ItemNumber) {
    let ul = document.querySelector('ul')

    let li = document.querySelector(`li:nth-child(${ItemNumber})`)

    ul.removeChild(li)
}

// RemoveChild1(1)
// RemoveChild1(3)

// mmethod-2
function RemoveChild2(ItemNumber) {
    let ul = document.querySelector('ul')

    let li = document.querySelectorAll('li')[ItemNumber -1 ]

    ul.removeChild(li)
}

// RemoveChild2(1)



// remove child directly

// method-1
function RemoveChildDirectly1(ItemNumber) {
    let li = document.querySelectorAll('li')
    
    li[ItemNumber - 1].remove()
}

// RemoveChildDirectly1(2)
// RemoveChildDirectly1(1)

// method-2
const RemoveChildDirectly2 = (ItemNumber) => document.querySelectorAll('li')[ItemNumber -1].remove()

// RemoveChildDirectly2(1)
// RemoveChildDirectly2(3) 
