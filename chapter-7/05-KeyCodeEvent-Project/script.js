/* it gives 'keyCode' and 'code' of the key that you will entered */


// method-1

function GetKeyCode1(e) {
  const insert = document.getElementById('insert')

  insert.innerHTML = `<div class="key">
  ${e.key === ' ' ? 'Space' : e.key}
  <small>e.key</small>
  </div>

  <div class="key">
  ${e.keyCode}
  <small>e.keyCode</small>
  </div>

  <div class="key">
  ${e.code}
  <small>e.code</small>
  </div>`

  // because, on pressing the 'space' it returns string with one space not its name, therefore we have used ternary operator
}

window.addEventListener('keydown', GetKeyCode1)




// method-2
/*
function GetKeyCode2(e) {
  const insert = document.getElementById
    ('insert')
  insert.innerHTML = ''
  
  const KeyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code
  }

  for (let key in KeyCodes) {
    let div = document.createElement('div')
    div.className = 'key'

    let small = document.createElement('small')
    
    let keyText = document.createTextNode(key)
    let valueText = document.createTextNode(KeyCodes[key])

    small.appendChild(keyText)
    div.appendChild(valueText)
    div.appendChild(small)
    insert.appendChild(div)
  }
}

window.addEventListener('keydown', GetKeyCode2)
*/