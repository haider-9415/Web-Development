let text = document.querySelector('p')

let itemList = document.querySelector('.item-list')

let items = itemList.querySelectorAll('li')

function run() {
    // class name of itemList(ul)
    console.log('classes of ul --> ', itemList.className);
    
    // we can add and change classname
    console.log('class of p --> ', text.className);
    text.className = 'dark'
    console.log('class of p --> ', text.className);
    text.className = 'card dark'
    console.log('class of p --> ', text.className);

    //we can gget all classes in the array
    console.log('list of classes of ul --> ', itemList.classList);
    // thereefore we can use loop
    itemList.classList.forEach((cl) => console.log(cl))

    // to add a class
    console.log('class of p --> ', text.className);
    text.classList.add('p-tag')
    console.log('class of p --> ', text.className);

    // to remove a class
    text.classList.remove('dark')
    console.log('class of p --> ', text.className);

    // toggle() it adds class and removes it after refreshing the page, we will add the class 'hidden' which is in only CSS
    // text.classList.toggle('hidden')
    // console.log('class of p --> ', text.className);


    // to replace the class
    text.classList.replace('p-tag', 'dark')
    console.log('class of p --> ', text.className);


    // we can change and add style
    itemList.style.color = 'red'
    itemList.style.display = 'flex'
    itemList.style.justifyContent = 'space-between'
    /*
    items[1].style.border = '10px solid black'
    items[3].style.border = '5px dotted blue'
    */
    // or
    items.forEach((item,index) => {
        item.style.border = '2px solid blue'
        item.style.padding = '5px'
        item.style.listStyle = 'none'

        if (index === 2) {
            item.style.color = 'blue'
        }
    })
    
}

document.querySelector('button').onclick = run
// onclick is property, here it means when you click on the 'run' button then all code inside the 'run' function will be executed 