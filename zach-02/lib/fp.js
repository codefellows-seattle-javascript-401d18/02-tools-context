'use strict';

//export object
const fp = module.exports = {};

//map
fp.mapDeal = (arr, callback) => {return Array.prototype.map.call(arr, callback);};

//filter
fp.filterDeal = (arr, callback) => {return Array.prototype.filter.call(arr, callback);};

//reduce
fp.reduceDeal = (arr, callback) => {return Array.prototype.reduce.call(arr, callback);};

//concat
fp.concatDeal = (arr, arr2) => {return Array.prototype.concat.call(arr, arr2);};

//splice
fp.spliceDeal = (arr, arg) => {return Array.prototype.splice.apply(arr, arg);};
