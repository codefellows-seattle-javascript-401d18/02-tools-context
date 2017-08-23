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
  return Array.prototype.filter.call(arr, callback);
};


arrayStuff.myReduce = function(arr, callback){
  return Array.prototype.reduce.call(arr, callback);
};

arrayStuff.myConcat = function(arr1, arr2){
  return Array.prototype.concat.call(arr1, arr2);
};

arrayStuff.mySplice = function(arr1, arr2, arr3){
  return Array.prototype.splice.call(arr1, arr2, arr3);
};
