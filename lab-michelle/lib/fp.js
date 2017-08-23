//GOAL: create stand alone map, filter, reduce, concat, and splice functions using the call, and apply methods we discussed today

'use strict';

let manyFxs = module.exports = {};

//MAP
//Shouldn't the first one of these function things be a regular function() instead of => to create scope?
manyFxs.myMapFx = (arr, callback) => {
  if (Array.isArray(arr)) {
    return Array.prototype.map.call(arr, callback);
  } else {
    return 'NOPE';
  }
};

//FILTER
manyFxs.myFilterFx = (arr, callback) => {
  if (Array.isArray(arr)) {
    return Array.prototype.filter.call(arr, callback);
  } else {
    return 'WUT DUDE NO';
  }
};

//REDUCE
manyFxs.myReduceFx = (arr, sum, callback) => {
  if (Array.isArray(arr)) {
    return Array.prototype.reduce.call(arr, sum, callback);
  } else {
    return 'TRY AGAIN';
  }
};

//CONCAT
let myConcatFx = function() {
};
//SPLICE
let mySpliceFx = function() {
};
