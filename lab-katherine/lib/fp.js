'use strict'

let fp = module.exports = {}

fp.mapThing = function(arr, callback){
  return Array.prototype.map.call(arr, num => num + 1)
}

fp.filterThing = function(arr, callback){
  return Array.prototype.filter.call(arr, num => (num <= 3) ? num : null)
}

fp.reduceThing = function(arr, callback){
  return Array.prototype.reduce.call(arr, (a, b) => a + b)
}

fp.concatThing = function(arr1, arr2){
  return Array.prototype.concat.apply(arr1, arr2)
}

fp.spliceThing = function(arr, args){
  return Array.prototype.splice.apply(arr, args)
}
