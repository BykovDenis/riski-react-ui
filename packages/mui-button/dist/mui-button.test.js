"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Button Component', function () {
  it('handles onClick events', function () {
    var onClick = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onClick: onClick
    }, "Hello world! Click me"));
    wrapper.find('button').simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });
});