(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MioxComponents"] = factory();
	else
		root["MioxComponents"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (miox) {
	    miox.define((0, _index2.default)(miox.component), true);
	    miox.define((0, _index4.default)(miox.component), true);
	    miox.define((0, _index6.default)(miox.component), true);
	    miox.define((0, _index8.default)(miox.component), true);
	    miox.define((0, _index10.default)(miox.component), true);
	    miox.define((0, _index12.default)(miox.component), true);
	    miox.define((0, _index14.default)(miox, miox.component), true);
	    miox.define((0, _index16.default)(miox.component), true);
	    miox.define((0, _index18.default)(miox.component), true);
	    miox.define((0, _index20.default)(miox.component), true);
	};

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(6);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(7);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(13);

	var _index8 = _interopRequireDefault(_index7);

	var _index9 = __webpack_require__(14);

	var _index10 = _interopRequireDefault(_index9);

	var _index11 = __webpack_require__(17);

	var _index12 = _interopRequireDefault(_index11);

	var _index13 = __webpack_require__(18);

	var _index14 = _interopRequireDefault(_index13);

	var _index15 = __webpack_require__(21);

	var _index16 = _interopRequireDefault(_index15);

	var _index17 = __webpack_require__(26);

	var _index18 = _interopRequireDefault(_index17);

	var _index19 = __webpack_require__(27);

	var _index20 = _interopRequireDefault(_index19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (component) {
	    return {
	        "appview": (0, _appview2.default)(component),
	        "appview-head": (0, _appviewHead2.default)(component),
	        "appview-body": (0, _appviewBody2.default)(component),
	        "appview-foot": (0, _appviewFoot2.default)(component)
	    };
	};

	var _appview = __webpack_require__(2);

	var _appview2 = _interopRequireDefault(_appview);

	var _appviewHead = __webpack_require__(3);

	var _appviewHead2 = _interopRequireDefault(_appviewHead);

	var _appviewBody = __webpack_require__(4);

	var _appviewBody2 = _interopRequireDefault(_appviewBody);

	var _appviewFoot = __webpack_require__(5);

	var _appviewFoot2 = _interopRequireDefault(_appviewFoot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var AppView = function (_Component) {
	        _inherits(AppView, _Component);

	        function AppView() {
	            _classCallCheck(this, AppView);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppView).call(this));

	            _this.name = 'appview';
	            return _this;
	        }

	        _createClass(AppView, [{
	            key: 'computed',
	            value: function computed(_computed) {
	                _computed.style = function () {
	                    if (this.blank) {
	                        return {
	                            'padding-top': 20
	                        };
	                    }
	                };

	                return _computed;
	            }
	        }, {
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-appview" role="appview" :class="{\'mx-appview-horizontal\': horizontal}" :style="style"><slot></slot></div>';
	            }
	        }, {
	            key: 'props',
	            value: function props() {
	                var props = {};
	                props.blank = Boolean;
	                props.horizontal = Boolean;
	                return props;
	            }
	        }]);

	        return AppView;
	    }(Component);

	    return AppView;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var AppViewHead = function (_Component) {
	        _inherits(AppViewHead, _Component);

	        function AppViewHead() {
	            _classCallCheck(this, AppViewHead);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppViewHead).call(this));

	            _this.name = 'appview-head';
	            return _this;
	        }

	        _createClass(AppViewHead, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-appview-head" role="appview-head"><slot></slot></div>';
	            }
	        }]);

	        return AppViewHead;
	    }(Component);

	    return AppViewHead;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var AppViewBody = function (_Component) {
	        _inherits(AppViewBody, _Component);

	        function AppViewBody() {
	            _classCallCheck(this, AppViewBody);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppViewBody).call(this));

	            _this.name = 'appview-body';
	            return _this;
	        }

	        _createClass(AppViewBody, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-appview-body" role="appview-body"><slot></slot></div>';
	            }
	        }]);

	        return AppViewBody;
	    }(Component);

	    return AppViewBody;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var AppViewFoot = function (_Component) {
	        _inherits(AppViewFoot, _Component);

	        function AppViewFoot() {
	            _classCallCheck(this, AppViewFoot);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppViewFoot).call(this));

	            _this.name = 'appview-foot';
	            return _this;
	        }

	        _createClass(AppViewFoot, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-appview-foot" role="appview-foot"><slot></slot></div>';
	            }
	        }]);

	        return AppViewFoot;
	    }(Component);

	    return AppViewFoot;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Aspect = function (_Component) {
	        _inherits(Aspect, _Component);

	        function Aspect() {
	            _classCallCheck(this, Aspect);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Aspect).call(this));

	            _this.name = 'aspect';
	            return _this;
	        }

	        _createClass(Aspect, [{
	            key: 'computed',
	            value: function computed(options) {
	                options.class = function () {
	                    var cls = [];
	                    if (this.align) {
	                        cls.push('mx-text-' + this.align);
	                    }
	                    return cls.join(' ');
	                };
	                return options;
	            }
	        }, {
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-aspect" role="aspect" :style="{width:width}" :class="class"><div class="mx-aspect-inner"><slot></slot></div><div class="mx-aspect-after" :style="{\'padding-bottom\':ratio}"></div></div>';
	            }
	        }, {
	            key: 'props',
	            value: function props() {
	                var props = {};
	                props.width = { type: String, default: '100%' };
	                props.align = String;
	                props.ratio = { type: String, default: "100%" };
	                return props;
	            }
	        }]);

	        return Aspect;
	    }(Component);

	    return {
	        "aspect": Aspect
	    };
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (component) {
	    return {
	        "cells": (0, _cells2.default)(component),
	        "cell": (0, _cell2.default)(component),
	        "cell-head": (0, _cellHead2.default)(component),
	        "cell-body": (0, _cellBody2.default)(component),
	        "cell-foot": (0, _cellFoot2.default)(component)
	    };
	};

	var _cells = __webpack_require__(8);

	var _cells2 = _interopRequireDefault(_cells);

	var _cell = __webpack_require__(9);

	var _cell2 = _interopRequireDefault(_cell);

	var _cellHead = __webpack_require__(10);

	var _cellHead2 = _interopRequireDefault(_cellHead);

	var _cellBody = __webpack_require__(11);

	var _cellBody2 = _interopRequireDefault(_cellBody);

	var _cellFoot = __webpack_require__(12);

	var _cellFoot2 = _interopRequireDefault(_cellFoot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Cells = function (_Component) {
	        _inherits(Cells, _Component);

	        function Cells() {
	            _classCallCheck(this, Cells);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cells).call(this));

	            _this.name = 'cells';
	            return _this;
	        }

	        _createClass(Cells, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-cells" role="cells" :style="{\'border-color\':borderColor}"><slot></slot></div>';
	            }
	        }, {
	            key: 'props',
	            value: function props() {
	                var props = {};
	                props.borderColor = String;
	                return props;
	            }
	        }]);

	        return Cells;
	    }(Component);

	    return Cells;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Cell = function (_Component) {
	        _inherits(Cell, _Component);

	        function Cell() {
	            _classCallCheck(this, Cell);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cell).call(this));

	            _this.name = 'cell';
	            return _this;
	        }

	        _createClass(Cell, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-cell" role="cell" data-left="0" :class="{\'mx-cell-linked\':linked}" :style="{\'border-color\':borderColor,\'padding-left\':left}"><slot></slot></div>';
	            }
	        }, {
	            key: 'props',
	            value: function props() {
	                var props = {};
	                props.linked = Boolean;
	                props.borderColor = String;
	                props.left = { type: String, default: '' };
	                return props;
	            }
	        }]);

	        return Cell;
	    }(Component);

	    return Cell;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Cell_Head = function (_Component) {
	        _inherits(Cell_Head, _Component);

	        function Cell_Head() {
	            _classCallCheck(this, Cell_Head);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cell_Head).call(this));

	            _this.name = 'cell-head';
	            return _this;
	        }

	        _createClass(Cell_Head, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-cell-head" role="cell:head"><slot></slot></div>';
	            }
	        }]);

	        return Cell_Head;
	    }(Component);

	    return Cell_Head;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Cell_Body = function (_Component) {
	        _inherits(Cell_Body, _Component);

	        function Cell_Body() {
	            _classCallCheck(this, Cell_Body);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cell_Body).call(this));

	            _this.name = 'cell-body';
	            return _this;
	        }

	        _createClass(Cell_Body, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-cell-body" role="cell:body"><slot></slot></div>';
	            }
	        }]);

	        return Cell_Body;
	    }(Component);

	    return Cell_Body;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Cell_Foot = function (_Component) {
	        _inherits(Cell_Foot, _Component);

	        function Cell_Foot() {
	            _classCallCheck(this, Cell_Foot);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cell_Foot).call(this));

	            _this.name = 'cell-foot';
	            return _this;
	        }

	        _createClass(Cell_Foot, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-cell-foot" role="cell-foot"><slot></slot></div>';
	            }
	        }]);

	        return Cell_Foot;
	    }(Component);

	    return Cell_Foot;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Checkbox = function (_Component) {
	        _inherits(Checkbox, _Component);

	        function Checkbox() {
	            _classCallCheck(this, Checkbox);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this));

	            _this.name = 'checkbox';
	            return _this;
	        }

	        _createClass(Checkbox, [{
	            key: "template",
	            value: function template() {
	                return "\n                <label class=\"mx-checkbox\" :type=\"type\" role=\"input:checkbox\" >\n                    <input :checked=\"checked\" type=\"checkbox\" :name=\"name\" :value=\"value\" class=\"mx-checkbox-input\">\n                    <span :style=\"{'font-size':size}\"  @click=\"elClick\" class=\"mx-checkbox-vision\"></span>\n                    <slot><slot>\n                </label>";
	            }
	        }, {
	            key: "methods",
	            value: function methods(_methods) {
	                _methods.elClick = function () {
	                    this.$el.click();
	                };

	                return _methods;
	            }
	        }, {
	            key: "props",
	            value: function props() {
	                return {
	                    name: String,
	                    value: String,
	                    size: String,
	                    type: String,
	                    checked: Boolean
	                };
	            }
	        }]);

	        return Checkbox;
	    }(Component);

	    return {
	        "checkbox": Checkbox
	    };
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (component) {
	    return {
	        "flex": (0, _flex2.default)(component),
	        "flex-item": (0, _flexItem2.default)(component)
	    };
	};

	var _flex = __webpack_require__(15);

	var _flex2 = _interopRequireDefault(_flex);

	var _flexItem = __webpack_require__(16);

	var _flexItem2 = _interopRequireDefault(_flexItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Flex = function (_Component) {
	        _inherits(Flex, _Component);

	        function Flex() {
	            _classCallCheck(this, Flex);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Flex).call(this));

	            _this.name = 'flex';
	            return _this;
	        }

	        _createClass(Flex, [{
	            key: 'computed',
	            value: function computed(options) {
	                options.style = function () {
	                    return this.flex != undefined ? {
	                        boxFlex: this.flex,
	                        flex: this.flex
	                    } : {};
	                };

	                options.class = function () {
	                    var classes = [];

	                    if (this.direction) {
	                        classes.push('mx-flex-direction-' + this.direction);
	                    }

	                    if (this.justify) {
	                        classes.push('mx-flex-justify-' + this.justify);
	                    }

	                    if (this.alignItems) {
	                        classes.push('mx-flex-align-items-' + this.alignItems);
	                    }

	                    if (this.alignContent) {
	                        classes.push('mx-flex-align-content-' + this.alignContent);
	                    }

	                    if (this.wrap) {
	                        classes.push('mx-flex-wrap-' + this.wrap);
	                    }

	                    return classes.join(' ');
	                };

	                return options;
	            }
	        }, {
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-flex-box" :class="class" :style="style"><slot></slot></div>';
	            }
	        }, {
	            key: 'props',
	            value: function props() {
	                return {
	                    flex: String,
	                    direction: String, // row|column|row-reverse|column-reverse
	                    justify: String, // start|center|end|between|around
	                    alignItems: String, // start|center|end|between|around
	                    alignContent: String, // start|center|end|between|around
	                    wrap: String // wrap|nowrap|wrap-reverse
	                };
	            }
	        }]);

	        return Flex;
	    }(Component);

	    return Flex;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Flex_Item = function (_Component) {
	        _inherits(Flex_Item, _Component);

	        function Flex_Item() {
	            _classCallCheck(this, Flex_Item);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Flex_Item).call(this));

	            _this.name = 'flex-item';
	            return _this;
	        }

	        _createClass(Flex_Item, [{
	            key: 'computed',
	            value: function computed(options) {
	                options.style = function () {
	                    var cls = {};

	                    if (this.flex) {
	                        cls.boxFlex = this.flex;
	                        cls.flex = this.flex;
	                    }

	                    if (this.order) {
	                        cls.order = this.order;
	                    }

	                    return cls;
	                };

	                options.classes = function () {
	                    var classes = [];

	                    if (this.justify) {
	                        classes.push('mx-flex-justify-' + this.justify);
	                    }

	                    if (this.alignSelf) {
	                        classes.push('mx-flex-align-self-' + this.alignSelf);
	                    }

	                    return classes.join(' ');
	                };

	                return options;
	            }
	        }, {
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-flex-item" :class="classes" :style="style"><slot></slot></div>';
	            }
	        }, {
	            key: 'props',
	            value: function props() {
	                return ['flex', 'order', 'justify', 'align-self', 'basis'];
	            }
	        }]);

	        return Flex_Item;
	    }(Component);

	    return Flex_Item;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Middle = function (_Component) {
	        _inherits(Middle, _Component);

	        function Middle() {
	            _classCallCheck(this, Middle);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Middle).call(this));

	            _this.name = 'middle';
	            return _this;
	        }

	        _createClass(Middle, [{
	            key: 'computed',
	            value: function computed(options) {
	                options.class = function () {
	                    var cls = [];
	                    if (this.align) {
	                        cls.push('mx-text-' + this.align);
	                    }
	                    return cls.join(' ');
	                };
	                return options;
	            }
	        }, {
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-middle-outter" role="middle" :style="{\'height\':height}" :class="class"><div class="mx-middle-inner"><slot></slot></div></div>';
	            }
	        }, {
	            key: 'props',
	            value: function props(_props, take) {
	                return ['height', 'align'];
	            }
	        }]);

	        return Middle;
	    }(Component);

	    return {
	        "middle": Middle
	    };
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (miox, component) {
	    return {
	        "navgation": (0, _navgation2.default)(miox, component),
	        "navgation-item": (0, _navgationItem2.default)(miox, component)
	    };
	};

	var _navgation = __webpack_require__(19);

	var _navgation2 = _interopRequireDefault(_navgation);

	var _navgationItem = __webpack_require__(20);

	var _navgationItem2 = _interopRequireDefault(_navgationItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (miox, Component) {
	    var Navgation = function (_Component) {
	        _inherits(Navgation, _Component);

	        function Navgation() {
	            _classCallCheck(this, Navgation);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navgation).call(this));

	            _this.name = 'navgation';
	            return _this;
	        }

	        _createClass(Navgation, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-navgation"><flex align-items="center" justify="center"><slot></slot></flex></div>';
	            }
	        }]);

	        return Navgation;
	    }(Component);

	    return Navgation;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (miox, Component) {
	    var Navgation_Item = function (_Component) {
	        _inherits(Navgation_Item, _Component);

	        function Navgation_Item() {
	            _classCallCheck(this, Navgation_Item);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navgation_Item).call(this));

	            _this.name = 'navgation-item';
	            return _this;
	        }

	        _createClass(Navgation_Item, [{
	            key: 'computed',
	            value: function computed(_computed) {
	                _computed.grid = function () {
	                    return (this.center ? 1 : 0) + ' 0 ' + (this.width || 0);
	                };
	                return _computed;
	            }
	        }, {
	            key: 'template',
	            value: function template() {
	                return '<flex-item :flex.sync="grid" :class="{\'mx-text-center\': center, \'mx-text-left\': left, \'mx-text-right\': right}"><slot></slot></flex-item>';
	            }
	        }, {
	            key: 'props',
	            value: function props() {
	                var props = {};
	                props.width = String;
	                props.center = Boolean;
	                props.left = Boolean;
	                props.right = Boolean;
	                return props;
	            }
	        }]);

	        return Navgation_Item;
	    }(Component);

	    return Navgation_Item;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (component) {
	    return {
	        "panel": (0, _panel2.default)(component),
	        "panel-head": (0, _panelHead2.default)(component),
	        "panel-body": (0, _panelBody2.default)(component),
	        "panel-foot": (0, _panelFoot2.default)(component)
	    };
	};

	var _panel = __webpack_require__(22);

	var _panel2 = _interopRequireDefault(_panel);

	var _panelHead = __webpack_require__(23);

	var _panelHead2 = _interopRequireDefault(_panelHead);

	var _panelBody = __webpack_require__(24);

	var _panelBody2 = _interopRequireDefault(_panelBody);

	var _panelFoot = __webpack_require__(25);

	var _panelFoot2 = _interopRequireDefault(_panelFoot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Panel = function (_Component) {
	        _inherits(Panel, _Component);

	        function Panel() {
	            _classCallCheck(this, Panel);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Panel).call(this));

	            _this.name = 'panel';
	            return _this;
	        }

	        _createClass(Panel, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-panel" :style="{\'border-color\':borderColor}"><slot></slot></div>';
	            }
	        }, {
	            key: 'props',
	            value: function props() {
	                var props = {};
	                props.borderColor = String;
	                return props;
	            }
	        }]);

	        return Panel;
	    }(Component);

	    return Panel;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Panel_Head = function (_Component) {
	        _inherits(Panel_Head, _Component);

	        function Panel_Head() {
	            _classCallCheck(this, Panel_Head);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Panel_Head).call(this));

	            _this.name = 'panel-head';
	            return _this;
	        }

	        _createClass(Panel_Head, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-panel-head" :class="{\'mx-panel-linked\':linked}"><slot></slot></div>';
	            }
	        }, {
	            key: 'props',
	            value: function props() {
	                return {
	                    linked: Boolean
	                };
	            }
	        }]);

	        return Panel_Head;
	    }(Component);

	    return Panel_Head;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Panel_Body = function (_Component) {
	        _inherits(Panel_Body, _Component);

	        function Panel_Body() {
	            _classCallCheck(this, Panel_Body);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Panel_Body).call(this));

	            _this.name = 'panel-body';
	            return _this;
	        }

	        _createClass(Panel_Body, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-panel-body"><slot></slot></div>';
	            }
	        }]);

	        return Panel_Body;
	    }(Component);

	    return Panel_Body;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Panel_Foot = function (_Component) {
	        _inherits(Panel_Foot, _Component);

	        function Panel_Foot() {
	            _classCallCheck(this, Panel_Foot);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Panel_Foot).call(this));

	            _this.name = 'panel-foot';
	            return _this;
	        }

	        _createClass(Panel_Foot, [{
	            key: 'template',
	            value: function template() {
	                return '<div class="mx-panel-foot" :class="{\'mx-panel-linked\':linked}"><slot></slot></div>';
	            }
	        }, {
	            key: 'props',
	            value: function props() {
	                return {
	                    linked: Boolean
	                };
	            }
	        }]);

	        return Panel_Foot;
	    }(Component);

	    return Panel_Foot;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Radio = function (_Component) {
	        _inherits(Radio, _Component);

	        function Radio() {
	            _classCallCheck(this, Radio);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Radio).call(this));

	            _this.name = 'radio';
	            return _this;
	        }

	        _createClass(Radio, [{
	            key: 'template',
	            value: function template() {
	                return '\n            <label class="mx-radio" role="input:radio">\n                <input type="radio" :name="name" :value="value" class="mx-radio-input" v-model="data">\n                <span :style="{\'font-size\':size}" @click.stop="radioClick" class="mx-radio-vision"></span>\n                <slot><slot>\n            </label>';
	            }
	        }, {
	            key: 'methods',
	            value: function methods(_methods) {
	                _methods.radioClick = function () {
	                    this.data = this.value;
	                };

	                return _methods;
	            }
	        }, {
	            key: 'events',
	            value: function events(_events) {
	                _events['click'] = function () {
	                    this.radioClick();
	                };

	                return _events;
	            }
	        }, {
	            key: 'props',
	            value: function props(_props, take) {
	                return ['name', 'value', 'size', 'data'];
	            }
	        }]);

	        return Radio;
	    }(Component);

	    return {
	        "radio": Radio
	    };
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (component) {
	    return {
	        "toolbar": (0, _toolbar2.default)(component),
	        "toolbar-item": (0, _toolbarItem2.default)(component)
	    };
	};

	var _toolbar = __webpack_require__(28);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _toolbarItem = __webpack_require__(29);

	var _toolbarItem2 = _interopRequireDefault(_toolbarItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Toolbar = function (_Component) {
	        _inherits(Toolbar, _Component);

	        function Toolbar() {
	            _classCallCheck(this, Toolbar);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Toolbar).call(this));

	            _this.name = 'toolbar';
	            _this.active = null;
	            return _this;
	        }

	        _createClass(Toolbar, [{
	            key: 'template',
	            value: function template() {
	                return '\n                <div class="mx-toolbar"><flex align-items="center" justify="center"><slot></slot></flex></div>\n            ';
	            }
	        }, {
	            key: 'computed',
	            value: function computed(_computed) {
	                _computed.items = function () {
	                    return this.$getChildrens();
	                };
	                return _computed;
	            }
	        }, {
	            key: 'events',
	            value: function events(_events) {
	                var that = this;
	                _events['ask'] = function (bar) {
	                    var items = this.items;
	                    var old = that.active;
	                    if (old !== bar) {
	                        that.active = bar;
	                        var a = -1,
	                            b = -1;
	                        bar.$emit('active:on');
	                        a = this.inArray(bar, items);
	                        if (old) {
	                            old.$emit('active:off');
	                            b = this.inArray(old, items);
	                        }
	                        this.$emit('change', a, b);
	                    }
	                };
	                return _events;
	            }
	        }, {
	            key: 'methods',
	            value: function methods(_methods) {
	                _methods.$getChildrens = function () {
	                    var childrens = this.$children;
	                    var result = [];
	                    for (var i = 0; i < childrens.length; i++) {
	                        var children = childrens[i];
	                        if ('toolbar-item' === children.$options.name) {
	                            result.push(children);
	                        }
	                    }
	                    return result;
	                };

	                _methods.inArray = function (a, b) {
	                    return b.indexOf(a);
	                };

	                return _methods;
	            }
	        }, {
	            key: 'ready',
	            value: function ready() {
	                return function () {
	                    var _this2 = this;

	                    this.$nextTick(function () {
	                        var items = _this2.items;
	                        if (items.length) {
	                            items[0].click();
	                        }
	                    });
	                };
	            }
	        }]);

	        return Toolbar;
	    }(Component);

	    return Toolbar;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (Component) {
	    var Toolbar_Item = function (_Component) {
	        _inherits(Toolbar_Item, _Component);

	        function Toolbar_Item() {
	            _classCallCheck(this, Toolbar_Item);

	            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Toolbar_Item).call(this));

	            _this.name = 'toolbar-item';
	            return _this;
	        }

	        _createClass(Toolbar_Item, [{
	            key: 'data',
	            value: function data() {
	                return function () {
	                    return {
	                        active: false
	                    };
	                };
	            }
	        }, {
	            key: 'methods',
	            value: function methods(_methods) {
	                _methods.click = function () {
	                    this.$parent.$emit('ask', this);
	                };
	                return _methods;
	            }
	        }, {
	            key: 'events',
	            value: function events(_events) {
	                _events['active:on'] = function () {
	                    this.active = true;
	                };
	                _events['active:off'] = function () {
	                    this.active = false;
	                };
	                return _events;
	            }
	        }, {
	            key: 'template',
	            value: function template() {
	                return '\n                <flex-item flex="1" align="center"><div class="mx-toolbar-item" :class="{\'active\':active}" @click="click"><slot></slot></div></flex-item>\n            ';
	            }
	        }]);

	        return Toolbar_Item;
	    }(Component);

	    return Toolbar_Item;
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;