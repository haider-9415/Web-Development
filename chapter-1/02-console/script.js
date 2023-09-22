/* consol is an object which has properties and methods, on running the
"console" in browser's console, you can see it  */

// to access its methods, dot is used

// log method
console.log(100)
console.log("hello word")
console.log(1222, 122.3, "hello word", true, undefined)

const x = 100
console.log("x --> ", x)

// error method
// it is shown in the red color in the browser's consol
console.error("this is error method")

// warn method
// it is shown in the yellow color in the browser's consol
console.warn("this is warn method")

// table method
// it shows the object in table formate in the browser's consol
console.table({ name: "haider", email: "xyz@example.com", number: 1234567890 })


// group method
// it makes a group
console.group("first") // "first is the group name"
console.log("x --> ", x, "in group")
console.error("this is error method in group")
console.warn("this is warn method in group")
console.groupEnd()


// we can use CSS using log method but only in the browser's consol
const style = "padding:20px; background-color:white; color: green; width: 150px;"

console.log("%cthis is CSS", style);


