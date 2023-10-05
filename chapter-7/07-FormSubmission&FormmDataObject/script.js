const form = document.getElementById('item-form')

/*
// for form submission
function onSubmit(e) {
    const item = document.getElementById('item-input').value

    const priority = document.getElementById('priority-input').value

    if (item === '' || priority === '0') {
        alert('Please fill all fields')
        return
    }

    console.log('item --> ',item, ' -  priority --> ',priority);
}

form.addEventListener('submit', onSubmit)
*/

// for data onject
function formData() {
    
    const formData = new FormData(form)

    /*
    const item = formData.get('item')
    const priority = formData.get('priority')
    console.log('item --> ',item,' - priority --> ',priority);

    if (item === '' || priority === '0') {
        alert('Please fill all fields')
        return
    }
    */
    
    //or
    const entries = formData.entries() // it returns an iterator so we will use loop
    for (const entry of entries) {
        // console.log('entry --> ',entry);// it will return arrays
        // to get only selected value

        console.log('entry[1] --> ',entry[1]);
    }
}
form.addEventListener('submit', formData)
