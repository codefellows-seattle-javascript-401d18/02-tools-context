//create stand alone map, filter, reduce, concat, and splice functions using the call, and apply methods we discussed today

'use strict';
let manyFxs = module.exports = {};

manyFxs.myMapFx = function(arr, callback) {
  if (Array.isArray([arr]) = true) {
    return Array.prototype.map.call(arr, callback);
  } else {
    return 'NOPE';
  }
};
//
//
//
// //Syntax for filter: var newArray = arr.filter(callback[, thisArg])//
// manyFxs.myFilterFx = (arr, callback) => Array.prototype.filter.call(arr, callback);
//
//
//   //
//   //
//   // let arr = [34, 3, 2, 76, 5, 99, 100]
//   // // arr.sort()[0]
//   // let minNum = Math.min.apply(null, arr)
//   // console.log(minNum)
// //
// // let myFilterFx = function() {
// //
// // };
// //
// // let myReduceFx = function() {
// //
// // };
// //
// // let myConcatFx = function() {
// //
// // };
// //
// // let mySpliceFx = function() {
// //
// // };
