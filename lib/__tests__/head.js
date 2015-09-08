'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _head = require('../head');

var _head2 = _interopRequireDefault(_head);

/* globals describe, it */

describe('Head component', function () {
  var component = new _head2['default']();

  describe('#titleize', function () {
    it('should titleize a string properly', function () {
      _assert2['default'].equal('Foo Bar', component.titleize('foo bar'));
    });

    it('should titleize a snake case string properly', function () {
      _assert2['default'].equal('Foo Bar', component.titleize('foo_bar'));
    });

    it('should titleize a camel cased string properly', function () {
      _assert2['default'].equal('Foo Bar', component.titleize('fooBar'));
    });

    it('should titleize a constantized string properly', function () {
      _assert2['default'].equal('Foo Bar', component.titleize('FooBar'));
    });
  });
});