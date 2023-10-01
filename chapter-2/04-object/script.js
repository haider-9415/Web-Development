// in this, data stored in key-value pair and key acts as the index of its value

let ob1 = {
    name: "haider",
    'age': 21,
    'class': "12th-B",
    subject: "Java Script"
}
console.log("ob1 --> ", ob1);


// we can access values using its key
console.log("ob1.name --> ", ob1.name);
console.log("ob1.class --> ", ob1.class);
console.log("ob1['age'] --> ", ob1['age']);
console.log("ob1['subject'] --> ", ob1['subject']);



// the value may be an object or an array
let ob2 = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        e: 5,
        f: 6,
        g: 7
    },
    h: ['apple','orange','grapes']
}
console.log("ob2 --> ", ob2);

console.log("ob2.d.e --> ",ob2.d.e);
console.log("ob2.d.g --> ",ob2.d.g);
console.log("ob2.d['f'] --> ",ob2.d['f']);
console.log("ob2.h[0] --> ",ob2.h[0]);
console.log("ob2.h[1] --> ",ob2.h[1]);
console.log("ob2.h[2] --> ",ob2.h[2]);



// we can update the values
ob1.name = "abcdefgh"
ob1['age'] = 18
console.log("ob1 --> ", ob1);


// we can delete a key value pair from an object
delete ob1.subject
console.log("ob1 --> ", ob1);


// we can add a key value pair
ob1.email = 'xyz@example.com'
console.log("ob1 --> ", ob1);
