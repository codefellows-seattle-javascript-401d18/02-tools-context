module.exports = exports = {};

exports.mapi = (arr, callback) => {
  if(Array.isArray(arr)) {
    return Array.prototype.map.call(arr, callback)
  } else {
    return 'This is not an array'
  }
}

exports.filteri = (arr, callback) => {
  if(Array.isArray(arr)) {
    return Array.prototype.filter.call(arr, callback)
  } else {
    return 'This is not an array'
  }
};

exports.reducei = (arr, callback) => {
  if(Array.isArray(arr)) {
    return Array.prototype.reduce.call(arr, callback)
  } else {
    return 'This is not an array'
  }
};

exports.concati = (arr1, arr2) => {
  if(Array.isArray(arr1) && Array.isArray(arr2)) {
    return Array.prototype.concat.call(arr1, arr2)
  } else {
    return 'One or both of these args are not arrays'
  }
};

exports.splicei = (arr, start, deleteCount, item) => {
  if(Array.isArray(arr)) {
    return Array.prototype.splice.call(arr, start, deleteCount, item)
  } else {
    return 'This is not an array'
  }
};
