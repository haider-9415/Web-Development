let post = {
    id: 1,
    title: 'post one',
    body: 'this is the body'
}

console.log("post --> ", post);


// to convert to JSON string
// this is send to the srver
let str1 = JSON.stringify(post)

console.log("str1 --> ", str1);
console.log("type of str1 --> ",typeof str1);

// to convert from JSOON string to object
let ob1 = JSON.parse(str1)
console.log("ob1 --> ", ob1);
console.log("type of ob1 --> ",typeof ob1);



// we can do this with array of objects
let arr1 = [
    {
        id: 1,
        title: 'post one',
        body: 'this is the body'
    },
    {
        id: 2,
        title: 'post two',
        body: 'this is the body'
    }
]

let str2 = JSON.stringify(arr1)
console.log("str2 --> ", str2);

let ob2 = JSON.parse(str2)
console.log("ob2 --> ", ob2);