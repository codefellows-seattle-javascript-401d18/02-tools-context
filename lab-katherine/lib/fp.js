'use strict'

let fp = module.exports = {}

//basically just testing the map filter whatever functions
let addOne = function(num){
  return num + 1
}

let lessThan = function(num){
  if (num <= 3) {
    return num;
  }
}


fp.mapThing = function(arr, callback){
  return Array.prototype.map.call(arr, addOne)
}

fp.filterThing = function(arr, callback){
  return Array.prototype.filter.call(arr, lessThan)
}

fp.reduceThing = function(arr, callback){
  return Array.prototype.reduce.call(arr, function(a, b){
    return a + b;
  }, 0)
}

fp.concatThing = function(arr1, arr2){
  return Array.prototype.concat.apply(arr1, arr2)
}

fp.spliceThing = function(arr, args){
  return Array.prototype.splice.apply(arr, args)
}
