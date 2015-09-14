'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('./uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var Rows = (function (_React$Component) {
  _inherits(Rows, _React$Component);

  function Rows() {
    _classCallCheck(this, Rows);

    _get(Object.getPrototypeOf(Rows.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Rows, [{
    key: 'rows',
    value: function rows() {
      var rows = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;

          var rowList = [];
          var id = row[Object.keys(row)[0]];

          for (var item in row) {
            rowList.push(_react2['default'].createElement(
              'td',
              { key: (0, _uniqueId2['default'])(row[item]) },
              row[item]
            ));
          }

          rows.push(_react2['default'].createElement(
            'tr',
            { key: (0, _uniqueId2['default'])(id) },
            rowList
          ));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return rows;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'tbody',
        null,
        this.rows()
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      rows: _react2['default'].PropTypes.array
    },
    enumerable: true
  }]);

  return Rows;
})(_react2['default'].Component);

exports['default'] = Rows;
module.exports = exports['default'];