// these aree used when there are two or more condition

// operator --> &&
// when all condition are true then it will give true otherwise it ill give false

console.log("10 < 20 && 20 < 30) --> ",10 < 20 && 20 < 30);
console.log("10 < 20 && 20 < 30) --> ",10 > 20 && 20 > 30);
console.log("10 < 20 && 20 > 30) --> ",10 < 20 && 20 > 30);
console.log("10 > 20 && 20 < 30) --> ",10 > 20 && 20 < 30);


// operator --> ||
// when all conditions are false then it will give false otherwise it ill give true

console.log("10 < 20 || 20 < 30) --> ",10 < 20 || 20 < 30);
console.log("10 < 20 || 20 < 30) --> ",10 > 20 || 20 > 30);
console.log("10 < 20 || 20 > 30) --> ",10 < 20 || 20 > 30);
console.log("10 > 20 || 20 < 30) --> ",10 > 20 || 20 < 30);



// && returns left side value if it is false otherwise returns right value

console.log("false && true --> ", false && true);
console.log("'false' && true --> ",'false' && true);
console.log("[1,2,3] && 100 --> ",[1,2,3] && 100);
console.log("10 && 20 && 200 --> ",10 && 20 && 200);
console.log("10 && 0 && 200 --> ",10 && 0 && 200);
console.log("null && 20 && 200 --> ",null && 20 && 200);


let posts = []
console.log("posts[0] --> ", posts[0]);// it will return 'undefined'

posts.length > 0 && console.log("posts[0] --> ", posts[0]);// it will not return 'undefined' because, for now, 'posts.length > 0' is a falsy value


// || returns left side value if it is true otherwise returns right value
console.log("'false' || true --> ", 'false' || true);
console.log("100 || 200 --> ", 100 || 200);
console.log("0 || 200 --> ", 0 || 200);
console.log("'' || null || 0 --> ", '' || null || 0);
console.log("0 || true || false --> ", 0 || true || false);



// ?? returns right side value if the left side value is null or undefined otherwise it returns left side 

console.log("100 ?? 200 --> ", 100 ?? 200);
console.log("null ?? 200 --> ", null ?? 200);
console.log("100 ?? undifened --> ", 100 ?? undefined);
console.log("undefined ?? 200 --> ", undefined ?? 200);
console.log("100 ?? null ?? 200 --> ", 100 ?? null ?? 200);
console.log("undefined ?? 100 ?? 200 --> ", undefined ?? 100 ?? 200);
console.log("false ?? 200 --> ", false ?? 200);




// we can use them with assignment operator '='

// ||= assigns the right side value only if the left side value is a falsy value
let o1 = false
o1 ||= 100 // --> o1 = o1 || 100
console.log('o1 --> ', o1); 

let o2 = true
o2 ||= 100 // --> o2 = o2 || 100
console.log('o2 --> ', o2); 


// &&= assigns the right side value only if the left side value is a truthy value
let o3 = false
o3 &&= 100 // --> o3 = o3 && 100
console.log('o3 --> ', o3); 

let o4 = true
o4 &&= 100 // --> o4 = o4 && 100
console.log('o4 --> ', o4); 


// ??= assigns the right side value only if the the left side value is 'null' or 'undefined'
let o5 = null
o5 ??= 100 // --> o5 = o5 ?? 100
console.log('o5 --> ', o5); 

let o6 = undefined
o6 ??= 100 // --> o6 = o6 ?? 100
console.log('o6 --> ', o6); 

let o7 = false
o7 ??= 100 // --> o7 = o7 ?? 100
console.log('o7 --> ', o7); 
