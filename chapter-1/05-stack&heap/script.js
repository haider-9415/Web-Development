/* Primitive data types are stored in stack memory */

let n1 = 'abcd1234'
let n2 = n1
n2 = 'xyz0987'
// the n2 will only be changed not n1
console.log("n1 --> ", n1);
console.log("n2 --> ",n2);


/* reference data types are stored in heap memory but there names are stored in stack and referencee to them  */

let ob1 = {
    name: 'haider',
    age: 20
}
let ob2 = ob1

ob2.age = 80
/* the age is updated in ob1 also not only in ob2, because ob1 & ob2 both name are stored in stack but both reference to the same object in heap */
console.log("ob1 --> ",ob1)
console.log("ob2 --> ",ob2)
