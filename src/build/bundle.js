/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_local_scss__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_local_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_local_scss__);






/* eslint "jsx-quotes": ["error", "prefer-double"] */





var Clock = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Clock, _Component);

  function Clock() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Clock);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Clock.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Clock)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Clock, [{
    key: 'formatSeconds',
    value: function formatSeconds(totalSeconds) {
      var seconds = totalSeconds % 60;
      var minutes = Math.floor(totalSeconds / 60);
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      return minutes + ':' + seconds;
    }
  }, {
    key: 'render',
    value: function render() {
      var totalSeconds = this.props.totalSeconds;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'scenes-shared-clock-___index-local__container___9pDih' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: 'scenes-shared-clock-___index-local__clock___1OAY_' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'span',
            { className: 'scenes-shared-clock-___index-local__clock-text___1pVea' },
            this.formatSeconds(totalSeconds)
          )
        )
      );
    }
  }]);

  return Clock;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Clock.defaultProps = {
  totalSeconds: 0
};
Clock.propTypes = {
  totalSeconds: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Clock);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_local_scss__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_local_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_local_scss__);






/* eslint "jsx-quotes": ["error", "prefer-double"] */





var Controls = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Controls, _Component);

  function Controls() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Controls);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Controls.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Controls)).call.apply(_ref, [this].concat(args))), _this), _this.onStatusChange = function (newStatus) {
      return function () {
        _this.props.onStatusChange(newStatus);
      };
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }
  /* Here we have a function that returns a function */


  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Controls, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var countdownStatus = this.props.countdownStatus;

      var renderStartButton = function renderStartButton() {
        if (countdownStatus === 'started') {
          /* onClick expects a function. Here we are using the function but we are calling it, meaning that the return value from onStatusChange is gonna get called when person clicks the button - Currying pattern */
          return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'button',
            { className: 'btn btn-info', onClick: _this2.onStatusChange('paused') },
            'Pause'
          );
        } else {
          return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'button',
            { className: 'btn btn-success', onClick: _this2.onStatusChange('started') },
            'Start'
          );
        }
      };
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'scenes-shared-controls-___index-local__container___dyM-r' },
        renderStartButton(),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'button',
          { className: 'btn btn-danger', onClick: this.onStatusChange('stopped') },
          'Clear'
        )
      );
    }
  }]);

  return Controls;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Controls.propTypes = {
  countdownStatus: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  onStatusChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired };


/* harmony default export */ __webpack_exports__["a"] = (Controls);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__client_routes__ = __webpack_require__(21);




var _this = this;

var getMatchParams = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(routes, currentUrl) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_router__["match"])({ routes: routes, location: currentUrl }, function (err, redirect, props) {
                if (err) {
                  return reject(err);
                }
                return resolve(props);
              });
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getMatchParams(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();






function render(component) {
  var content = __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default.a.renderToString(component);
  return content;
}

/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(req, res, next) {
    var renderProps, component;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getMatchParams(__WEBPACK_IMPORTED_MODULE_6__client_routes__["a" /* default */], req.url);

          case 2:
            renderProps = _context2.sent;

            if (!renderProps) {
              _context2.next = 9;
              break;
            }

            component = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["RouterContext"], renderProps);
            _context2.next = 7;
            return render(component);

          case 7:
            req.body = _context2.sent;

            next();

          case 9:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function (_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conf_app_json__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conf_app_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__conf_app_json__);


var isDev = process.env.NODE_ENV === 'development';
var localConf = isDev ? __webpack_require__(20) : {};

var conf = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_1__conf_app_json___default.a, localConf);

/* harmony default export */ __webpack_exports__["a"] = (conf);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_manifest_json__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_manifest_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dist_manifest_json__);


/* webpack creates manifest file inside dist folder after runnin webpack on client side */


/* harmony default export */ __webpack_exports__["a"] = (function (req, res, next) {
  var chunks = {
    bundle: __WEBPACK_IMPORTED_MODULE_0__dist_manifest_json___default.a['bundle.js'],
    vendor: __WEBPACK_IMPORTED_MODULE_0__dist_manifest_json___default.a['vendor.js'],
    stylesLocal: __WEBPACK_IMPORTED_MODULE_0__dist_manifest_json___default.a['localcss.css'],
    stylesGlobal: __WEBPACK_IMPORTED_MODULE_0__dist_manifest_json___default.a['bundle.css']
  };
  if (chunks) {
    req.chunk = chunks;
    next();
  }
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
	"outputFilePrefix": "faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/",
	"html": [
		"<link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-57x57.png\">",
		"<link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-60x60.png\">",
		"<link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-72x72.png\">",
		"<link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-76x76.png\">",
		"<link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-114x114.png\">",
		"<link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-120x120.png\">",
		"<link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-144x144.png\">",
		"<link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-152x152.png\">",
		"<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-180x180.png\">",
		"<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">",
		"<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">",
		"<meta name=\"apple-mobile-web-app-title\" content=\"Webpack App\">",
		"<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/favicon-32x32.png\">",
		"<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/favicon-16x16.png\">",
		"<link rel=\"shortcut icon\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/favicon.ico\">",
		"<meta name=\"mobile-web-app-capable\" content=\"yes\">",
		"<meta name=\"theme-color\" content=\"#fff\">",
		"<meta name=\"application-name\" content=\"Webpack App\">",
		"<link rel=\"apple-touch-startup-image\" media=\"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-320x460.png\">",
		"<link rel=\"apple-touch-startup-image\" media=\"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-640x920.png\">",
		"<link rel=\"apple-touch-startup-image\" media=\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-640x1096.png\">",
		"<link rel=\"apple-touch-startup-image\" media=\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-750x1294.png\">",
		"<link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-1182x2208.png\">",
		"<link rel=\"apple-touch-startup-image\" media=\"(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-1242x2148.png\">",
		"<link rel=\"apple-touch-startup-image\" media=\"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-748x1024.png\">",
		"<link rel=\"apple-touch-startup-image\" media=\"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-768x1004.png\">",
		"<link rel=\"apple-touch-startup-image\" media=\"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-1496x2048.png\">",
		"<link rel=\"apple-touch-startup-image\" media=\"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)\" href=\"/faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-1536x2008.png\">"
	],
	"files": [
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-57x57.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-60x60.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-72x72.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-76x76.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-114x114.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-120x120.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-144x144.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-152x152.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-167x167.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-180x180.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-icon-precomposed.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/favicon-16x16.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/favicon-32x32.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/favicon.ico",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/android-chrome-36x36.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/android-chrome-48x48.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/android-chrome-72x72.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/android-chrome-96x96.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/android-chrome-144x144.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/android-chrome-192x192.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/android-chrome-256x256.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/android-chrome-384x384.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/android-chrome-512x512.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/firefox_app_128x128.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/firefox_app_60x60.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/firefox_app_512x512.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-320x460.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-640x920.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-640x1096.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-748x1024.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-750x1294.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-768x1004.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-1182x2208.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-1242x2148.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-1496x2048.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/apple-touch-startup-image-1536x2008.png",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/manifest.json",
		"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/manifest.webapp"
	]
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express-static-gzip");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
	"APP_PORT": 3001
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
	"APP_PORT": 3000
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Container__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Countdown__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Timer__ = __webpack_require__(26);






/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
  { path: '/', component: __WEBPACK_IMPORTED_MODULE_2_Container__["a" /* default */] },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'countdown', component: __WEBPACK_IMPORTED_MODULE_3_Countdown__["a" /* default */] }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_4_Timer__["a" /* default */] })
));

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Navigation__ = __webpack_require__(25);

/* eslint "jsx-quotes": ["error", "prefer-double"] */




var Container = function Container(_ref) {
  var children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_Navigation__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row justify-content-center' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'col-xs-12 col-sm-8 col-lg-3' },
        children
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);






/* eslint "jsx-quotes": ["error", "prefer-double"] */




var CountdownForm = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(CountdownForm, _Component);

  function CountdownForm() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, CountdownForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = CountdownForm.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(CountdownForm)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (e) {
      e.preventDefault();
      var strSeconds = _this.refs.seconds.value;
      /* match a string against a regular expression */
      if (strSeconds.match(/^[0-9]+$/)) {
        _this.refs.seconds.value = '';
        _this.props.onSetCountdown(parseInt(strSeconds, 10));
      } else {
        window.alert('Bad value. Please enter seconds!');
      }
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(CountdownForm, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'form',
          { ref: 'form', onSubmit: this.onSubmit },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { className: 'form-group' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', { type: 'text', className: 'form-control', ref: 'seconds', placeholder: 'enter time in seconds' }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'button',
              { className: 'btn btn-primary btn-block' },
              'Start'
            )
          )
        )
      );
    }
  }]);

  return CountdownForm;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

CountdownForm.propTypes = {
  handleSetCountdown: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
};


/* harmony default export */ __webpack_exports__["a"] = (CountdownForm);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Clock__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_CountdownForm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Controls__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_local_scss__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_local_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__index_local_scss__);






/* eslint "jsx-quotes": ["error", "prefer-double"] */







var Countdown = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Countdown, _Component);

  function Countdown() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Countdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Countdown.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Countdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      count: 0,
      countdownStatus: 'stopped'

      /* we make custom timer object right on this just like state and props are actually properties of the this object. If we don't use something in render(), it shouldn't be in the state. */
    }, _this.timer = {
      intervalId: undefined
    }, _this.componentDidUpdate = function (prevProps, prevState) {
      if (_this.state.countdownStatus !== prevState.countdownStatus) {
        switch (_this.state.countdownStatus) {
          case 'started':
            _this.startTimer();
            break;
          case 'stopped':
            _this.setState({
              count: 0
            });
          /* we didnt call break here so the clearInterval activates for stopped and paused case */
          // falls through
          case 'paused':
            clearInterval(_this.timer.intervalId);
            _this.timer.intervalId = undefined;
            break;
        }
      }
    }, _this.componentWillUnmount = function () {
      clearInterval(_this.timer.intervalId);
      _this.timer.intervalId = undefined;
    }, _this.startTimer = function () {
      /* we save the timer ID in timer object */
      _this.timer.intervalId = setInterval(function () {
        var newCount = _this.state.count - 1;
        _this.setState({
          count: newCount >= 0 ? newCount : 0
        });
        if (newCount === 0) {
          _this.setState({
            countdownStatus: 'stopped'
          });
        }
      }, 1000);
    }, _this.handleSetCountdown = function (seconds) {
      _this.setState({
        count: seconds,
        countdownStatus: 'started'
      });
    }, _this.handleStatusChange = function (newStatus) {
      _this.setState({
        countdownStatus: newStatus
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Countdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          count = _state.count,
          countdownStatus = _state.countdownStatus;

      var renderControlArea = function renderControlArea() {
        if (countdownStatus !== 'stopped') {
          return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_Controls__["a" /* default */], { countdownStatus: countdownStatus, onStatusChange: _this2.handleStatusChange });
        } else {
          return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_CountdownForm__["a" /* default */], { onSetCountdown: _this2.handleSetCountdown });
        }
      };

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'scenes-countdown-___index-local__container___3NM6q' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h1',
          { className: 'scenes-countdown-___index-local__page-title___nJEmL' },
          'Countdown App'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_Clock__["a" /* default */], { totalSeconds: count }),
        renderControlArea()
      );
    }
  }]);

  return Countdown;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Countdown);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_local_scss__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_local_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__index_local_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_img_profilna_jpg__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_img_profilna_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_img_profilna_jpg__);






/* eslint "jsx-quotes": ["error", "prefer-double"] */






var Navigation = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Navigation, _Component);

  function Navigation() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Navigation);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Navigation.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Navigation)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Navigation, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'scenes-shared-navigation-___index-local__container___3BH2r' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'nav',
          { className: 'navbar navbar-toggleable-sm navbar-light bg-faded scenes-shared-navigation-___index-local__nav-bar___1qasW' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'button',
            { className: 'navbar-toggler navbar-toggler-right', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNavAltMarkup', 'aria-controls': 'navbarNavAltMarkup', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('span', { className: 'navbar-toggler-icon' })
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'a',
            { className: 'navbar-brand', href: '#' },
            'ReactTimer'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { className: 'collapse navbar-collapse', id: 'navbarNavAltMarkup' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'div',
              { className: 'navbar-nav scenes-shared-navigation-___index-local__navLinks___KVAm2' },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_router__["IndexLink"],
                { to: '/', className: 'nav-item nav-link' },
                'Timer'
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_router__["Link"],
                { to: '/countdown', className: 'nav-item nav-link' },
                'Countdown'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'div',
              { className: 'navbar-nav ml-auto' },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'span',
                { className: 'navbar-text ml-auto scenes-shared-navigation-___index-local__nav-text___P4xqV' },
                'Created by ',
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'a',
                  { href: 'https://github.com/Igor-Vuk', target: '_blank' },
                  'Igor Vukelic'
                ),
                ' ',
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_8__styles_img_profilna_jpg___default.a, className: 'scenes-shared-navigation-___index-local__profileImg___uIkvz' })
              )
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Navigation);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Clock__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Controls__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_local_scss__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_local_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__index_local_scss__);






/* eslint "jsx-quotes": ["error", "prefer-double"] */






var Timer = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Timer, _Component);

  function Timer() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Timer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Timer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Timer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      count: 0,
      timerStatus: 'stopped'
    }, _this.timer = {
      intervalId: undefined
    }, _this.componentDidUpdate = function (prevProps, prevState) {
      if (_this.state.timerStatus !== prevState.timerStatus) {
        switch (_this.state.timerStatus) {
          case 'started':
            _this.startTimer();
            break;
          case 'stopped':
            _this.setState({
              count: 0
            });
          // falls through
          case 'paused':
            clearInterval(_this.timer.intervalId);
            _this.timer.intervalId = undefined;
            break;
        }
      }
    }, _this.componentWillUnmount = function () {
      clearInterval(_this.timer.intervalId);
      _this.timer.intervalId = undefined;
    }, _this.startTimer = function () {
      _this.timer.intervalId = setInterval(function () {
        var newCount = _this.state.count + 1;
        _this.setState({
          count: newCount
        });
      }, 1000);
    }, _this.handleStatusChange = function (newStatus) {
      _this.setState({
        timerStatus: newStatus
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Timer, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          timerStatus = _state.timerStatus,
          count = _state.count;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'scenes-timer-___index-local__container___2AgZX' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h1',
          { className: 'scenes-timer-___index-local__page-title___2FgKT' },
          'Timer App'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_Clock__["a" /* default */], { totalSeconds: count }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_Controls__["a" /* default */], { countdownStatus: timerStatus, onStatusChange: this.handleStatusChange })
      );
    }
  }]);

  return Timer;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Timer);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conf__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appRenderer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webpackUtils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_static_gzip__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_static_gzip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_express_static_gzip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dist_faviconsList_json__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dist_faviconsList_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__dist_faviconsList_json__);









var APP_PORT = __WEBPACK_IMPORTED_MODULE_3__conf__["a" /* default */].APP_PORT;

var PORT = process.env.PORT || APP_PORT;
var NGINX_PORT = process.env.HEROKU ? '/tmp/nginx.socket' : PORT;
var app = new __WEBPACK_IMPORTED_MODULE_0_express___default.a();
process.env.PWD = process.cwd();

// app.set('views', path.join(__dirname, '../', 'build', 'views'))
app.set('views', __WEBPACK_IMPORTED_MODULE_1_path___default.a.join(process.env.PWD + '/src/build/views'));
app.set('view engine', 'ejs');

/* set max-age to '1y' (maximum) or 31536000 for client static assets */
/* request for "/" or "<somepath>/" will now serve index.html as compressed version. If we dont want this add indexFromEmptyFile false  */
// app.use(expressStaticGzip(path.join(__dirname, '../', 'dist'), {indexFromEmptyFile: false, maxAge: '1y'}))
// app.use(expressStaticGzip(path.join(process.env.PWD + '/src/dist'), {indexFromEmptyFile: false, enableBrotli: true, maxAge: '1y'}))
// app.use(Express.static(path.join(__dirname, '../', 'dist'), {maxAge: '1y'}))
// app.use(Express.static(path.join(process.env.PWD + '/src/dist'), {maxAge: '1y'}))

if (!process.env.HEROKU) {
  app.use(__WEBPACK_IMPORTED_MODULE_6_express_static_gzip___default()(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(process.env.PWD + '/src/dist'), { indexFromEmptyFile: false, enableBrotli: true, maxAge: '1y' }));
}

/* check with the server before using the cached resource */
app.use(function (req, res, next) {
  res.set('Cache-Control', 'no-cache');
  return next();
});

/* Use server side rendering for first load */
app.use(__WEBPACK_IMPORTED_MODULE_4__appRenderer__["a" /* default */]);

/* Use CommonChunks and long term caching */
app.use(__WEBPACK_IMPORTED_MODULE_5__webpackUtils__["a" /* default */]);

// Routes
app.get('*', function (req, res) {
  res.render('index', { app: req.body, webpack: req.chunk, favicons: __WEBPACK_IMPORTED_MODULE_7__dist_faviconsList_json___default.a });
});

app.listen(NGINX_PORT, function () {
  if (process.env.DYNO) {
    console.log('Running on Heroku..!!');
    __WEBPACK_IMPORTED_MODULE_2_fs___default.a.openSync('/tmp/app-initialized', 'w');
  }
  console.log('Node server is listening on port ' + NGINX_PORT);
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "$countdown-page-title: $blue;\r\n\r\n.src-client-scenes-countdown-___index-local__container___P_vvw {\r\n  .src-client-scenes-countdown-___index-local__page-title___2Ufal {\r\n    margin: 2rem 0;\r\n    text-align: center;\r\n    color: $countdown-page-title;\r\n  }\r\n}\r\n", ""]);

// exports
exports.locals = {
	"container": "src-client-scenes-countdown-___index-local__container___P_vvw",
	"page-title": "src-client-scenes-countdown-___index-local__page-title___2Ufal"
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "$clock-text-color: $white;\r\n$clock-bg-color: $transparent-blue;\r\n$clock-border-color: $blue;\r\n\r\n.src-client-scenes-shared-clock-___index-local__container___Xbtqm {\r\n\r\n  .src-client-scenes-shared-clock-___index-local__clock___3FcT2 {\r\n    background-color: $clock-bg-color;\r\n    border: 2px solid $clock-border-color;\r\n    border-radius: 50%;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 4rem auto;\r\n    height: 14rem;\r\n    width: 14rem;\r\n  }\r\n  .src-client-scenes-shared-clock-___index-local__clock-text___2rRTq {\r\n    color: $clock-text-color;\r\n    font-size: 2.25rem;\r\n    font-weight: 300;\r\n  }\r\n}\r\n", ""]);

// exports
exports.locals = {
	"container": "src-client-scenes-shared-clock-___index-local__container___Xbtqm",
	"clock": "src-client-scenes-shared-clock-___index-local__clock___3FcT2",
	"clock-text": "src-client-scenes-shared-clock-___index-local__clock-text___2rRTq"
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".src-client-scenes-shared-controls-___index-local__container___2tXxd {\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n  button {\r\n    padding: .75rem 3rem;\r\n    box-shadow: inset 0 0 0 0.1px #27496d,0 5px 15px #193047;\r\n    position: relative;\r\n    width: 30%;\r\n\r\n    &:focus {\r\n      box-shadow: inset 0 0 0 0.1px #27496d,0 5px 15px #193047;\r\n    }\r\n\r\n    &:active {\r\n      transform: translateY(4px)\r\n    }\r\n  }\r\n\r\n  button:first-child {\r\n    margin-right: 1.5rem;\r\n  }\r\n}\r\n", ""]);

// exports
exports.locals = {
	"container": "src-client-scenes-shared-controls-___index-local__container___2tXxd"
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* To override some of bootstrap elements with high specificity we neste everything inside class container to increase specificity of our classes.\r\nIf needed we can increase it even more using further nesting or by chaining selector by itself ex. .btn.btn {} */\r\n\r\n/* Navigation bar */\r\n$nav-background: $lightblue;\r\n$nav-text: $blue;\r\n\r\n.src-client-scenes-shared-navigation-___index-local__container___7pqhp {\r\n\r\n  .src-client-scenes-shared-navigation-___index-local__nav-bar___3_s9Z {\r\n    background-color: $nav-background;\r\n    font-weight: 500;\r\n  }\r\n\r\n  .src-client-scenes-shared-navigation-___index-local__navLinks___-vFYX {\r\n    padding-top: 10px;\r\n  }\r\n\r\n  .src-client-scenes-shared-navigation-___index-local__nav-text___1m4E0 {\r\n    text-decoration: none;\r\n    cursor: default;\r\n    padding-top: 0.5em;\r\n  }\r\n  .src-client-scenes-shared-navigation-___index-local__profileImg___Z9ICh {\r\n    border: 1px solid black;\r\n    margin-left: 10px;\r\n  }\r\n}\r\n", ""]);

// exports
exports.locals = {
	"container": "src-client-scenes-shared-navigation-___index-local__container___7pqhp",
	"nav-bar": "src-client-scenes-shared-navigation-___index-local__nav-bar___3_s9Z",
	"navLinks": "src-client-scenes-shared-navigation-___index-local__navLinks___-vFYX",
	"nav-text": "src-client-scenes-shared-navigation-___index-local__nav-text___1m4E0",
	"profileImg": "src-client-scenes-shared-navigation-___index-local__profileImg___Z9ICh"
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "$timer-page-title: $blue;\r\n\r\n.src-client-scenes-timer-___index-local__container___1u1uJ {\r\n  .src-client-scenes-timer-___index-local__page-title___263AT {\r\n    margin: 3rem 0;\r\n    text-align: center;\r\n    color: $timer-page-title;\r\n  }\r\n}\r\n", ""]);

// exports
exports.locals = {
	"container": "src-client-scenes-timer-___index-local__container___1u1uJ",
	"page-title": "src-client-scenes-timer-___index-local__page-title___263AT"
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {
	"assets/sky.jpg": "assets/sky.d38b95c798702525ecb8215d1256ba06.jpg",
	"bundle.css": "stylesheet/stylesGlobal.067ba0b6bec42f135839ad9c8bfe6f6b.css",
	"bundle.css.map": "stylesheet/stylesGlobal.067ba0b6bec42f135839ad9c8bfe6f6b.css.map",
	"bundle.js": "bundle.e5a83a18ed03a517af8b.js",
	"bundle.js.map": "bundle.e5a83a18ed03a517af8b.js.map",
	"faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/clock.png": "faviconIcons.a0860ac1335a39fbcb184f6f67f844c5/.cache",
	"localcss.css": "stylesheet/stylesLocal.3d62f49ea9bf49e51e524725baf94be9.local.css",
	"localcss.css.map": "stylesheet/stylesLocal.3d62f49ea9bf49e51e524725baf94be9.local.css.map",
	"vendor.js": "vendor.6b24dfce843197b1ee6c.js",
	"vendor.js.map": "vendor.6b24dfce843197b1ee6c.js.map"
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map