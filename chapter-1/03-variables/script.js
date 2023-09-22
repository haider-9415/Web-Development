// there are three ways to declare a variable

// // way-1 --> var
// var v1 = 'haider'
// console.log("v1 --> ", v1);

// // we can redeclare it
// var v1 = 12345678
// console.log("v1 --> ", v1);

// // we can update it
// v1 = true
// console.log("v1 --> ", v1);

// // we can access it anywhere
// {
//     v1 = false
//     console.log("v1 --> ", v1);
//     var v2 = 12345
//     console.log("v2 --> ", v2);
// }

// v2 = 'haider'
// console.log("v2 --> ", v2);

// var v2 = 986
// console.log("v2 --> ", v2);

// // if we use the variable before its declaration using var then it will give only undefined
// console.log("v3 --> ", v3);
// var v3 = 'abcde1234'


// // way-2 --> let
// let v4 = 'haider'
// console.log("v4 --> ", v4);

// // we can not redeclare, it will give error
// // let v4 = 12345678
// // console.log("v4 --> ", v4);

// // we can update it
// v4 = true
// console.log("v4 --> ", v4);

// let v5 = 9876
// // we cannot access it anywhere
// {
//     console.log("v4 --> ", v4); // we can access it inside this block

    //     // let v4 = false // it is another v4 not that
    //    // console.log("v4 --> ", v4);
    // let v5 = 12345
    // console.log("v5 --> ", v5);
// }
// console.log("v5 --> ", v5); // we cannot access v5 outside of that block

// // console.log("v5 --> ", v5);

// let v5 = 986 // it is another v5 not that
// console.log("v5 --> ", v5);

// // if we use the variable before its declaration using let then it will give error
// // console.log("v6 --> ", v6);
// // let v6 = 'abcde1234'

// // we can declare and assign it value after
// let a
// a = 12345
// console.log("a --> ",a);


// // way-3 --> const
// const v7 = 'haider'

// // we cannot update it
// // v7 = 123456

// // we cannot redeclare it
// // const v7 = true

// //we can access it
// {
//     // console.log(v7);

//     const v7 = 1234 // it is another v7 not that
//     console.log("v7 --> ",v7);
// }
// console.log("v7 --> ", v7); // we can not access it outside of that block

// // we cannot use a variable beore its declaration
// // console.log("v8 --> ", v8);
// const v8 = false

// // we cannot declare only we have to assign it at that time
// const b
// b = 78458
// console.log("b --> ",b);