// to get parent node

let parent1 = document.querySelector('.parent')
console.log('parent1 --> ', parent1);

// to get child nodes for parent node
let childNode = parent1.childNodes
console.log('childNode --> ', childNode);

// child nodes are stored in the object starting with key '0', so it is iterable
console.log('childNode[0] --> ', childNode[0]);
console.log('childNode[1] --> ', childNode[1]);
console.log('childNode[3] --> ', childNode[3]);
console.log('childNode[6] --> ', childNode[6]);

// we use their properties
console.log('childNode[1].nodeName --> ', childNode[1].nodeName);
console.log('childNode[1].textContent --> ', childNode[1].textContent);
console.log('childNode[1].outerHTML --> ', childNode[1].outerHTML);
console.log('childNode[1].innerText --> ', childNode[1].innerText);
console.log('childNode[1].innerHTML --> ', childNode[1].innerHTML);

// we can change them
let changed = childNode[1].innerText = 'child-one'
console.log('childNode[1].innerText --> ', childNode[1].innerText);

// we can set CSS
childNode[1].style.color = 'red'
childNode[1].style.border = '1px solid red'
childNode[1].style.padding = '5px'


// to get first child
let firstchild = parent1.firstChild
console.log('firstchild --> ', firstchild); // because, after <div class="container">, there is a new line character so this is first child of the node

// to get last child
let lastchild = parent1.lastChild
console.log('lastchild --> ', lastchild);// because, there is also a new line character before </div>, so that is the last child of the node

// we can change both
firstchild.textContent = '$First-Child$'
console.log('firstchild --> ', firstchild);

lastchild.textContent = '$Last-Child$'
console.log('lastchild --> ', lastchild)



// to get parent node from chld nodes
let child = document.querySelector('.child')

let parentnode = child.parentNode
console.log('parentnode --> ', parentnode);

// we can apply CSS on the parent node
parentnode.style.background = 'pink'
parentnode.style.padding = '8px'
parentnode.style.display = 'flex'
parentnode.style.justifyContent = 'space-between'

// to get siblings
let sibling2nd = document.querySelector('.child:nth-child(2)')
console.log('sibling2nd --> ', sibling2nd);

// to get its next sibling
let next_2ndSib = sibling2nd.nextSibling
console.log('next_2ndSib --> ', next_2ndSib);// because after '<div class="child" id="2">Child-2</div>', there is new line character '/n' and some spaces, so this is the next node or sibling


// to get its previous sibling
let pre_2ndSib = sibling2nd.previousSibling
console.log('pre_2ndSib --> ', pre_2ndSib);// because before '<div class="child" id="2">Child-2</div>', there is new line character '/n' and some spaces, so this is the previous node or sibling
