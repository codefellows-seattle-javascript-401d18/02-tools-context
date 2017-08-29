//GOAL: create stand alone map, filter, reduce, concat, and splice functions using the call, and apply methods we discussed today

'use strict';

let manyFxs = module.exports = {};

//MAP
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
manyFxs.myReduceFx = (arr, callback) => {
  if (Array.isArray(arr)) {
    return Array.prototype.reduce.call(arr, callback);
  } else {
    return 'TRY AGAIN';
  }
};

//CONCAT -- UPDATED
manyFxs.myConcatFx = (a, b) => {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.concat(b);
  } else {
    return 'PUT IN WORDS PLZ';
  }
};

//SPLICE
manyFxs.mySpliceFx = (arr, callback) => {
  return Array.prototype.splice.call(arr, callback);
};
