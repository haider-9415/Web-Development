// Falsy Values

// 1-false
if (false) {
    console.log('this is truthy');
} else {
    console.log('false --> this is falsy');
}
console.log("Boolean(false) --> ", Boolean(false));

// 2-0
if (0) {
    console.log('this is truthy');
} else {
    console.log('0 --> this is falsy');
}
console.log("Boolean(0) --> ", Boolean(0));

// 3-"" or '' empty string
if ("") {
    console.log('this is truthy');
} else {
    console.log('"" --> this is falsy');
}
console.log('Boolean("") --> ', Boolean(""));

// 4-null
if (null) {
    console.log('this is truthy');
} else {
    console.log('null --> this is falsy');
}
console.log("Boolean(null) --> ", Boolean(null));

// 5-undefined
if (undefined) {
    console.log('this is truthy');
} else {
    console.log('undefined --> this is falsy');
}
console.log("Boolean(undefined) --> ", Boolean(undefined));

// 6-NaN
if (NaN) {
    console.log('this is truthy');
} else {
    console.log('NaN --> this is falsy');
}
console.log("Boolean(NaN) --> ", Boolean(NaN));

// 7-on calling the empty function with ()
function func1() {
}
if (func1()) {
    console.log('func1() --> this is truthy');
} else {
    console.log('func1() --> this is falsy');
}
console.log("Boolean(func1()) --> ", Boolean(func1()));



// trythy values

// 1-true
if (true) {
    console.log('true --> this is truthy');
} else {
    console.log('true --> this is falsy');
}
console.log("Boolean(true) --> ", Boolean(true));

// 2-non empty string
if (' ') {
    console.log("' ' --> this is truthy");
} else {
    console.log("' ' --> this is falsy");
}
console.log("Boolean(' ') --> ", Boolean(' '));

if ("0") {
    console.log('"0" --> this is truthy');
} else {
    console.log('"0" --> this is falsy');
}
console.log('Boolean("0") --> ', Boolean("0"));

if ("false") {
    console.log('"false" --> this is truthy');
} else {
    console.log('"false" --> this is falsy');
}
console.log('Boolean("false") --> ', Boolean("false"));

// 3-array empty or non-empty
if ([1,2]) {
    console.log('[1,2] --> this is truthy');
} else {
    console.log('[1,2] --> this is falsy');
}
console.log("Boolean([1,2]) --> ", Boolean([1,2]));

// 4-object empty or non-empty
if ({a:1,b:2}) {
    console.log('{a:1,b:2} --> this is truthy');
} else {
    console.log('{a:1,b:2} --> this is falsy');
}
console.log("Boolean({a:1,b:2}) --> ", Boolean({a:1,b:2}));

// 5-empty function without ()
function func2() {
    
}
if (func2) {
    console.log('func2 --> this is truthy');
} else {
    console.log('func2 --> this is falsy');
}
console.log("Boolean(func2) --> ", Boolean(func2));

// 6-non empty function with or without ()function func2() {
function func3() {
    return 12+12
}
if (func3) {
    console.log('func3 --> this is truthy');
} else {
    console.log('func3 --> this is falsy');
}
console.log("Boolean(func3) --> ", Boolean(func3));

function func4() {
    return 12+12
}
if (func4()) {
    console.log('func4() --> this is truthy');
} else {
    console.log('func4() --> this is falsy');
}
console.log("Boolean(func4()) --> ", Boolean(func4()));

// and everything else that is not falsy




// truthy and falsy caveats

if (0 !== undefined) {
    console.log('0 --> this is falsy');// this line will be executed
} else {
    console.log('this is 0');
}

// similarly
if (!isNaN(0)) {
    console.log('0 --> this is falsy');// this line will be executed
} else {
    console.log('this is 0');
}

// it will work same with truthy values
if (true !== undefined) {
    console.log('true --> this is truthy');// this line will be executed
} else {
    console.log('this is true');
}

// similarly
if (!isNaN(true)) {
    console.log('true --> this is truthy');// this line will be executed
} else {
    console.log('this is true');
}