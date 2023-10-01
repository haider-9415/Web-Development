let todo = {
    id: 1,
    task: "buy milk",
    users: {
        user1: 'abc',
        user2: 'pqr',
        user3: 'xyz', 
    }
}

let { id, task, users:{user1} } = todo
console.log("id:", id, " - task:", task, " - user:", user1);


// destructure arrays
let arr1 = [10, 20, 30, 40, 50, 60]
let [x1, y1, z1, ...a1] = arr1
console.log('x1:', x1, " - y1:", y1, " - z1:", z1, " - a1:", a1);
// in this, '...' is called rest operator




let arr2 = [
    {
        a: 1,
        b: 2,
        c: 3
    },
    {
        d: 4,
        e: 5,
        f: 6
    }
]

// let { a, b } = arr2
// console.log("a:", a, " - b:", b);// it will give undefined

let { a, b } = arr2[0]
console.log("a:",a, " - b:",b);

let { e, f } = arr2[1]
console.log("e:",e, " - f:",f);
