let d = new Date()
console.log("d --> ", d, " - type of d --> ", typeof d);

// to convert into string
d = d.toString()
console.log("d --> ", d, " - type of d --> ", typeof d);


// to geet specific date
let d1 = new Date(2002, 0, 10, 12, 13, 57)
// in this, 2002 is year, 0 is month, 10 is day, 12is hour, 13 is minute and 57 is second
console.log("d1 --> ", d1);


// we can pass string
// remember, on using string, index of months starts from 1 and otherwise it starts from 0
let d2 = new Date('2002-01-10 12:13:57')
console.log("d2 --> ", d2);

d2 = new Date('2002-01-10')
console.log("d2 --> ", d2);

d2 = new Date('10/1/2002 12:13:57')
console.log("d2 --> ", d2);

d2 = new Date('1/10/2002 12:13:57')
console.log("d2 --> ", d2);


// to get time stamp
let d3 = Date.now()
console.log("d3 --> ", d3);
let d4 = new Date(d3)
console.log("d4 --> ", d4);
// or
d5 = new Date('1/10/2002')
console.log("d5 --> ", d5);
d3 = d5.getTime()
console.log("d3 --> ", d3);
d4 = new Date(d3)
console.log("d4 --> ", d4);
//or
d5 = new Date('3/20/2002 3:56:54')
console.log("d5 --> ", d5);
d3 = d5.valueOf()
console.log("d3 --> ", d3);
d4 = new Date(d3)
console.log("d4 --> ", d4);

// bydefault, timestamp is in milisocnds, to get it in seconds use Math.floor(Date.now() / 1000)

