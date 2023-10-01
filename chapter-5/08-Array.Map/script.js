// it returns an array after applying the operation on each element of the given array which you will define

/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let doubled = numbers.map(num => num * 2)
console.log("doubled --> ", doubled);

let lessOne = numbers.map(num => num - 1)
console.log("lessOne --> ", lessOne);

let concate = numbers.map(num => 'number-'+num)
console.log("concate --> ", concate);
*/


/*
let companies = [
    { name: 'comp_one', category: 'finance', start: 1981, end: 2004 },
    { name: 'comp_two', category: 'auto', start: 1988, end: 2014 },
    { name: 'comp_three', category: 'tech', start: 1979, end: 2006 },
    { name: 'comp_four', category: 'finance', start: 1999, end: 2012 },
    { name: 'comp_five', category: 'retail', start: 2000, end: 2016 },
    { name: 'comp_six', category: 'retail', start: 1975, end: 2004 },
    { name: 'comp_seven', category: 'tech', start: 1997, end: 2002 },
    { name: 'comp_eight', category: 'auto', start: 1995, end: 2004 },
    { name: 'comp_nine', category: 'retail', start: 1901, end: 1999 },
]

// create an array of company names
let comp_name = companies.map(comp => comp.name)
console.log("comp_name --> ", comp_name);

// create an array with just company names and category
let name_cate = companies.map(comp => {
    return {
        name: comp.name,
        category: comp.category
    }
})
console.log("name_cate --> ", name_cate);

// create an array of the length of each company in years
let timespan = companies.map(comp => {
    return {
        name: comp.name,
        timespan: comp.end-comp.start+'years'
    }
})
console.log("timespan --> ",timespan);
*/

/*
// chain map methods, i.e., we can use multiple map()

let arr1 = [1, 2, 3, 4, 5]

let SqrtAanDbl = arr1
    // it will gie square rrot of each number
    .map(num => Math.sqrt(num))
    // it will square these square roots 
    .map(sqrt => sqrt * 2)
    // it will double these square roots
    .map(sqrtdoubled => sqrtdoubled * 2)

console.log("SqrtAanDbl --> ", SqrtAanDbl);
*/


/*
// chaining different methods
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 81, 19, 20]

let EvenDouble = arr2
    // it will filter even numbers
    .filter(even => even % 2 === 0)
    // it will double it
    .map(dbl => dbl * 2)

console.log("EvenDouble --> ",EvenDouble);
*/