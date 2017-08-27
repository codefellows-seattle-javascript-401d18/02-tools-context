'use strict';

const fp = module.exports = {};

// Calling the .map method
fp.map = (ctx, callback) => Array.prototype.map.call(ctx, callback);

// Calling the .filter method
fp.filter = (ctx, callback) => Array.prototype.filter.call(ctx, callback);

// Calling the .reduce method
fp.reduce = (ctx, callback) => Array.prototype.reduce.call(ctx, callback);

// Calling the .concat method
fp.concat = (ctx, arr) => Array.prototype.concat.apply(ctx, arr);

// Calling the .splice method
fp.splice = (ctx, start, count) => Array.prototype.splice.call(ctx, start, count);
