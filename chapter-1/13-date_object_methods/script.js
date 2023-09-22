let d = new Date()
console.log("d --> ", d);


// to convert into string
let x1 = d.toString()
console.log("x1 --> ",x1);


// to get timestamp of the date in mili seconds
let x2 = d.getTime()
console.log("x2 --> ", x2);

let x3 = d.valueOf()
console.log("x3 --> ", x3);


// to get only year
let x4 = d.getFullYear()
console.log("x4 --> ",x4);


// to get only month
let x5 = d.getMonth()
console.log("x5 --> ", x5);// because, inthis, month starts from 0
// therefore
let x6 = d.getMonth() + 1
console.log("x6 --> ",x6);


// to get only month
let x7 = d.getDate()
console.log("x7 --> ", x7);


// to get day of the week, it starts from sunday
let x8 = d.getDay()
console.log("x8 --> ", x8);


// to get only hours
let x9 = d.getHours()
console.log("x9 --> ", x9);


// to get only minutes
let x10 = d.getMinutes()
console.log("x10 --> ", x10);


// to get only seconds
let x12 = d.getSeconds()
console.log("x12 --> ", x12);


// to get only milliseconds
let x13 = d.getMilliseconds()
console.log("x13 --> ", x13);


// we can construct the date using these methods
let x14 = `${x4}-${x6}-${x7}`
console.log("x14 --> ", x14);



// we can use an API called 'Intl' to get the date in the format of a perticular place 
let x15 = Intl.DateTimeFormat("en-US").format(d)
console.log("x15 --> ", x15);

let x16 = Intl.DateTimeFormat("en-EG").format(d)
console.log("x16 --> ", x16);

let x17 = Intl.DateTimeFormat("default").format(d)
console.log("x17 --> ", x17);

// to get the month
let x18 = Intl.DateTimeFormat("default", {month: "long"}).format(d)
console.log("x18 --> ", x18);

let x19 = Intl.DateTimeFormat("default", {month: "short"}).format(d)
console.log("x19 --> ", x19);

// we can also use it instead of using that API
let x20 = d.toLocaleString("default", {month: "short"})
console.log("x20 --> ", x20);

let x21 = d.toLocaleString("default", { month: "long" })
console.log("x21 --> ", x21);

let x22 = d.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timezone: "India"
})
console.log("x22 --> ", x22);
