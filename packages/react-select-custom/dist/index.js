"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ReactSelectCustom(props) {
  var activeElement = {};
  var isSimplefilter = true;
  var options = props.elements.map(function (element) {
    if (_typeof(element) === 'object') {
      isSimplefilter = false;
      var arrElementMapped = Object.entries(element).map(function (subElement) {
        return {
          label: subElement[1],
          value: subElement[0]
        };
      });

      if (arrElementMapped && arrElementMapped.length > 0) {
        var elementMapped = arrElementMapped[0];
        return {
          label: elementMapped.label,
          value: elementMapped.value,
          name: props.name
        };
      }
    }

    return {
      label: element,
      value: element,
      name: props.name
    };
  });

  if (props.activeElement && _typeof(props.activeElement) === 'object' && props.activeElement.length && props.activeElement.length > 0) {
    isSimplefilter = false;
  }

  if (isSimplefilter) {
    if (props.isMulti) {
      activeElement = [{
        label: props.activeElement,
        value: props.activeElement,
        name: props.name
      }];
    } else {
      activeElement = {
        label: props.activeElement,
        value: props.activeElement,
        name: props.name
      };
    }
  } else if (_typeof(props.activeElement) === 'object') {
    activeElement = options.filter(function (option) {
      return props.activeElement.find(function (activeElement) {
        return activeElement === option.value;
      });
    });
  } else {
    var arrActiveElement = options.filter(function (option) {
      return option.value === props.activeElement;
    });

    if (arrActiveElement && arrActiveElement.length > 0) {
      activeElement = arrActiveElement[0];
    }
  }

  var dataColor = props.fontColor;

  var dot = function dot() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#ccc';
    return {
      alignItems: 'center',
      display: 'flex',
      ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10
      }
    };
  };

  var calculateColor = function calculateColor(isDisabled, isSelected, color) {
    return isDisabled ? '#ccc' : isSelected ? _chromaJs["default"].contrast(color, 'white') > 2 ? 'white' : 'black' : dataColor;
  };

  var colourStyles = {
    control: function control(styles) {
      return _objectSpread({}, styles, {
        minHeight: '35px',
        backgroundColor: 'white'
      });
    },
    option: function option(styles, _ref) {
      var data = _ref.data,
          isDisabled = _ref.isDisabled,
          isFocused = _ref.isFocused,
          isSelected = _ref.isSelected;
      var color = (0, _chromaJs["default"])(dataColor);
      return _objectSpread({}, styles, {
        backgroundColor: isDisabled ? null : isSelected ? dataColor : isFocused ? color.alpha(0.1).css() : null,
        color: calculateColor(isDisabled, isSelected, color),
        cursor: isDisabled ? 'not-allowed' : 'default'
      });
    },
    input: function input(styles) {
      return _objectSpread({}, styles, {
        height: '20px'
      }, dot());
    },
    placeholder: function placeholder(styles) {
      return _objectSpread({}, styles, {}, dot());
    },
    singleValue: function singleValue(styles, _ref2) {
      var data = _ref2.data;
      return _objectSpread({}, styles, {}, dot(props.activeElement && props.activeElement.length && props.activeElement.length > 0 || props.activeElement ? dataColor : 'red'));
    }
  };

  var selectChangeHandler = function selectChangeHandler(data) {
    var dataValues;

    if (data) {
      if (data.length) {
        if (data.length > 0) {
          dataValues = {
            name: props.name,
            value: data && data.length && data.map(function (dataElement) {
              return dataElement.value;
            })
          };
        } else {
          dataValues = {
            name: props.name,
            value: []
          };
        }
      } else {
        dataValues = {
          name: props.name,
          value: data.value
        };
      }
    } else {
      dataValues = props.isMulti ? {
        name: props.name,
        value: []
      } : {
        name: props.name,
        value: null
      };
    }

    props.inputDataChangeHandler(dataValues);
  };

  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_reactSelect["default"], {
    className: props.className,
    dafaultValue: activeElement,
    value: activeElement,
    options: options,
    onChange: selectChangeHandler,
    styles: colourStyles,
    isDisabled: props.disabled,
    isClearable: true,
    isMulti: props.isMulti,
    closeMenuOnSelect: props.closeMenuOnSelect
  }));
}

ReactSelectCustom.defaultProps = {
  activeElement: '',
  closeMenuOnSelect: true,
  disabled: false,
  elements: [],
  error: false,
  inputDataChangeHandler: function inputDataChangeHandler() {},
  name: '',
  readOnly: false,
  fontColor: '#666666',
  isMulti: false
};
ReactSelectCustom.propTypes = {
  error: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  disabled: _propTypes["default"].bool,
  elements: _propTypes["default"].array,
  inputDataChangeHandler: _propTypes["default"].func,
  label: _propTypes["default"].object,
  name: _propTypes["default"].string,
  readOnly: _propTypes["default"].bool,
  fontColor: _propTypes["default"].string,
  isMulti: _propTypes["default"].bool,
  closeMenuOnSelect: _propTypes["default"].bool
};
var _default = ReactSelectCustom;
exports["default"] = _default;