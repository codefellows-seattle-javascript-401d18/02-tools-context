module.exports = exports = {};

exports.mapi = (arr, callback) => {
  if(Array.isArray(arr)) {
    return Array.prototype.map.call(arr, callback)
  } else {
    return 'This is not an array'
  }
}

exports.filteri = (arr, callback) => {
  return Array.prototype.filter.call(arr, callback)
};

exports.reducei = (arr, callback) => {
  return Array.prototype.reduce.call(arr, callback)
};

exports.concati = (arr1, arr2) => {
  return Array.prototype.concat.call(arr1, arr2)
};

exports.splicei = (arr, start, deleteCount) => {
  return Array.prototype.splice.call(arr, start, deleteCount)
};
