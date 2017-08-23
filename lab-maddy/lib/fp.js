'use strict';
//map, filter, reduce, concat, splice functions using the call and apply methods.

let arrayStuff = module.exports = {};

// let double = (num)=>{
//   return num + num;
// };
//
// let greaterThan = (ele)=>{
//   if ele > 10;
// };


arrayStuff.myMap = function(arr, callback){
  return Array.prototype.map.call(arr, callback);
};

arrayStuff.myFilter = function(arr, callback){
  return Array.prtotype.filter.call(arr, callback);
};

//
// function myReduce(arr, callback){
//
// }
//
// function concat(arr, callback){
//
// }
//
// function splice(){
//
// }
