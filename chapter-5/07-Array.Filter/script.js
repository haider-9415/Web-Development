// it filters uot the elements of the given array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 25, 16, 17, 18, 19, 20]

/*
let evenNumbers1 = numbers.filter(function (num) {
    return num % 2 === 0
})

console.log("evenNumbers1 --> ", evenNumbers1);
*/

/*
// similarly
let evenNumbers2 = numbers.filter(num => num % 2 === 0)
console.log("evenNumbers2 --> ", evenNumbers2);
*/

/*
// using forEach
let evenNumbers3 = []
numbers.forEach(num => {
    if (num%2 ===0) {
        evenNumbers3.push(num);
    }
})
console.log("evenNumbers3 --> ", evenNumbers3);
*/


/*
let companies = [
    { name: 'comp_one', category: 'finance', start: 1981, end: 2004 },
    { name: 'comp_two', category: 'auto', start: 1988, end: 2014 },
    { name: 'comp_three', category: 'te ch', start: 1979, end: 2006 },
    { name: 'comp_four', category: 'finance', start: 1999, end: 2012 },
    { name: 'comp_five', category: 'retail', start: 2000, end: 2016 },
    { name: 'comp_six', category: 'retail', start: 1975, end: 2004 },
    { name: 'comp_seven', category: 'tech', start: 1997, end: 2002 },
    { name: 'comp_eight', category: 'auto', start: 1995, end: 2004 },
    { name: 'comp_nine', category: 'retail', start: 1901, end: 1999 },
]

// get only retail companies
let retail_comp = companies.filter((comp) => comp.category === 'retail')
console.log("retail_comp --> ",retail_comp);

// get companies that started in or after 1980 and ended in or before 2005
let early_comp = companies.filter((comp) => (comp.start >= 1980) && (comp.end <= 2005))
console.log("early_comp --> ",early_comp);

// get companies that lasted 10years or more
let long_comp = companies.filter((comp) => comp.end - comp.start >= 10)
console.log("long_comp --> ",long_comp);

*/


