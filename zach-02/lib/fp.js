'use strict';

//export object
const arrFunctions = module.exports = {};


let arr = [1 , 2, 3];
//map
let map = (arr, callback) => {return Array.prototype.map.call();};

let double = (arr) => { map((i) =>{return i * 2})};

//mapdouble
// arrFunctions.double = arrFunctions.map( (i) => {return i * 2});
//
// //filter
// arrFunctions.filter = () => {};
//
// //reduce
// arrFunctions.reduce = () => {};
//
// //concat
// arrFunctions.concat = () => {};
//
// //splice
// arrFunctions.splice = () => {};
