'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = uniqueId;
var number = 0;

function uniqueId(id) {
  number++;
  return number + '-' + id;
}

module.exports = exports['default'];