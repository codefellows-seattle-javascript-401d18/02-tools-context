'use strict'

let arrMethod = module.exports ={};


arrMethod.myMap = function(arr, callback) {
  return Array.prototype.map.call(arr, callback);
};

arrMethod.myFilter = function(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
};
