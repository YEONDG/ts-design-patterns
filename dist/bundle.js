/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/abstract-factory/3DButton.ts":
/*!******************************************!*\
  !*** ./src/abstract-factory/3DButton.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/abstract-factory/Button.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ThreeDButton = /** @class */ (function (_super) {
    __extends(ThreeDButton, _super);
    function ThreeDButton(dom, caption) {
        var _this = _super.call(this, dom, caption) || this;
        _this.render();
        return _this;
    }
    ThreeDButton.prototype.render = function () {
        this.dom.innerHTML = "\n        ".concat(this.caption, "\n        <div></div>\n        <div></div>\n      ");
        this.dom.classList.add('threeD-button');
    };
    return ThreeDButton;
}(_Button__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDButton);


/***/ }),

/***/ "./src/abstract-factory/3DCheckBox.ts":
/*!********************************************!*\
  !*** ./src/abstract-factory/3DCheckBox.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox */ "./src/abstract-factory/CheckBox.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ThreeDCheckBox = /** @class */ (function (_super) {
    __extends(ThreeDCheckBox, _super);
    function ThreeDCheckBox(dom, label, checked) {
        var _this = _super.call(this, dom, label, checked) || this;
        _this.render();
        return _this;
    }
    ThreeDCheckBox.prototype.render = function () {
        this.dom.innerHTML = "\n      <label>CheckBox\n        <input type=\"checkbox\" ".concat(this.checked ? 'checked="checked"' : '', ">\n        <div class=\"box\"></div>\n        <div class=\"line\"></div>\n      </label>\n    ");
        this.dom.classList.add('threeD-checkbox');
    };
    return ThreeDCheckBox;
}(_CheckBox__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDCheckBox);


/***/ }),

/***/ "./src/abstract-factory/3DTextEdit.ts":
/*!********************************************!*\
  !*** ./src/abstract-factory/3DTextEdit.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextEdit */ "./src/abstract-factory/TextEdit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ThreeDTextEdit = /** @class */ (function (_super) {
    __extends(ThreeDTextEdit, _super);
    function ThreeDTextEdit(dom, text) {
        var _this = _super.call(this, dom, text) || this;
        _this.render();
        return _this;
    }
    ThreeDTextEdit.prototype.render = function () {
        this.dom.innerHTML = "<input value=\"".concat(this.text, "\">");
        this.dom.classList.add('threeD-input');
    };
    return ThreeDTextEdit;
}(_TextEdit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDTextEdit);


/***/ }),

/***/ "./src/abstract-factory/3DUIFactory.ts":
/*!*********************************************!*\
  !*** ./src/abstract-factory/3DUIFactory.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UIFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIFactory */ "./src/abstract-factory/UIFactory.ts");
/* harmony import */ var _3DButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3DButton */ "./src/abstract-factory/3DButton.ts");
/* harmony import */ var _3DCheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3DCheckBox */ "./src/abstract-factory/3DCheckBox.ts");
/* harmony import */ var _3DTextEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./3DTextEdit */ "./src/abstract-factory/3DTextEdit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ThreeDUIFactory = /** @class */ (function (_super) {
    __extends(ThreeDUIFactory, _super);
    function ThreeDUIFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeDUIFactory.prototype.createButton = function (dom, caption) {
        return new _3DButton__WEBPACK_IMPORTED_MODULE_1__["default"](dom, caption);
    };
    ThreeDUIFactory.prototype.createCheckBox = function (dom, label, checked) {
        return new _3DCheckBox__WEBPACK_IMPORTED_MODULE_2__["default"](dom, label, checked);
    };
    ThreeDUIFactory.prototype.createTextEdit = function (dom, text) {
        return new _3DTextEdit__WEBPACK_IMPORTED_MODULE_3__["default"](dom, text);
    };
    return ThreeDUIFactory;
}(_UIFactory__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDUIFactory);


/***/ }),

/***/ "./src/abstract-factory/Button.ts":
/*!****************************************!*\
  !*** ./src/abstract-factory/Button.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Button = /** @class */ (function () {
    function Button(dom, caption) {
        this.dom = dom;
        this.caption = caption;
    }
    return Button;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/abstract-factory/CheckBox.ts":
/*!******************************************!*\
  !*** ./src/abstract-factory/CheckBox.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CheckBox = /** @class */ (function () {
    function CheckBox(dom, label, checked) {
        this.dom = dom;
        this.label = label;
        this.checked = checked;
    }
    return CheckBox;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);


/***/ }),

/***/ "./src/abstract-factory/FlatButton.ts":
/*!********************************************!*\
  !*** ./src/abstract-factory/FlatButton.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/abstract-factory/Button.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlatButton = /** @class */ (function (_super) {
    __extends(FlatButton, _super);
    function FlatButton(dom, caption) {
        var _this = _super.call(this, dom, caption) || this;
        _this.render();
        return _this;
    }
    FlatButton.prototype.render = function () {
        this.dom.innerText = this.caption;
        this.dom.classList.add('flat-button');
    };
    return FlatButton;
}(_Button__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatButton);


/***/ }),

/***/ "./src/abstract-factory/FlatCheckBox.ts":
/*!**********************************************!*\
  !*** ./src/abstract-factory/FlatCheckBox.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox */ "./src/abstract-factory/CheckBox.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlatCheckBox = /** @class */ (function (_super) {
    __extends(FlatCheckBox, _super);
    function FlatCheckBox(dom, label, checked) {
        var _this = _super.call(this, dom, label, checked) || this;
        _this.render();
        return _this;
    }
    FlatCheckBox.prototype.render = function () {
        this.dom.innerHTML = "\n      <label>".concat(this.label, "\n        <input type=\"checkbox\" ").concat(this.checked ? 'checked="checked"' : '', ">\n        <span></span>\n      </label>\n    ");
        this.dom.classList.add('flat-checkbox');
    };
    return FlatCheckBox;
}(_CheckBox__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatCheckBox);


/***/ }),

/***/ "./src/abstract-factory/FlatTextEdit.ts":
/*!**********************************************!*\
  !*** ./src/abstract-factory/FlatTextEdit.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextEdit */ "./src/abstract-factory/TextEdit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlatTextEdit = /** @class */ (function (_super) {
    __extends(FlatTextEdit, _super);
    function FlatTextEdit(dom, text) {
        var _this = _super.call(this, dom, text) || this;
        _this.render();
        return _this;
    }
    FlatTextEdit.prototype.render = function () {
        this.dom.innerHTML = "<input value=\"".concat(this.text, "\">");
        this.dom.classList.add('flat-input');
    };
    return FlatTextEdit;
}(_TextEdit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatTextEdit);


/***/ }),

/***/ "./src/abstract-factory/FlatUIFactory.ts":
/*!***********************************************!*\
  !*** ./src/abstract-factory/FlatUIFactory.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FlatButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlatButton */ "./src/abstract-factory/FlatButton.ts");
/* harmony import */ var _FlatCheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlatCheckBox */ "./src/abstract-factory/FlatCheckBox.ts");
/* harmony import */ var _FlatTextEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlatTextEdit */ "./src/abstract-factory/FlatTextEdit.ts");
/* harmony import */ var _UIFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIFactory */ "./src/abstract-factory/UIFactory.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FlatUIFactory = /** @class */ (function (_super) {
    __extends(FlatUIFactory, _super);
    function FlatUIFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlatUIFactory.prototype.createButton = function (dom, caption) {
        return new _FlatButton__WEBPACK_IMPORTED_MODULE_0__["default"](dom, caption);
    };
    FlatUIFactory.prototype.createCheckBox = function (dom, label, checked) {
        return new _FlatCheckBox__WEBPACK_IMPORTED_MODULE_1__["default"](dom, label, checked);
    };
    FlatUIFactory.prototype.createTextEdit = function (dom, text) {
        return new _FlatTextEdit__WEBPACK_IMPORTED_MODULE_2__["default"](dom, text);
    };
    return FlatUIFactory;
}(_UIFactory__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatUIFactory);


/***/ }),

/***/ "./src/abstract-factory/TextEdit.ts":
/*!******************************************!*\
  !*** ./src/abstract-factory/TextEdit.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var TextEdit = /** @class */ (function () {
    function TextEdit(dom, text) {
        this.dom = dom;
        this.text = text;
    }
    return TextEdit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextEdit);


/***/ }),

/***/ "./src/abstract-factory/UIFactory.ts":
/*!*******************************************!*\
  !*** ./src/abstract-factory/UIFactory.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var UIFactory = /** @class */ (function () {
    function UIFactory() {
    }
    return UIFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIFactory);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/abstract-factory/index.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _3DUIFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3DUIFactory */ "./src/abstract-factory/3DUIFactory.ts");
/* harmony import */ var _FlatUIFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlatUIFactory */ "./src/abstract-factory/FlatUIFactory.ts");


var factory;
var flatMode = true;
if (flatMode) {
    factory = new _FlatUIFactory__WEBPACK_IMPORTED_MODULE_1__["default"]();
}
else {
    factory = new _3DUIFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
}
var domButton = document.querySelector('.button');
var domCheckBox = document.querySelector('.checkbox');
var domTextEdit = document.querySelector('.textedit');
factory.createButton(domButton, 'BUTTON');
factory.createCheckBox(domCheckBox, 'CheckBox', true);
factory.createTextEdit(domTextEdit, 'DesignPattern');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvM0RCdXR0b24udHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvM0RDaGVja0JveC50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS8zRFRleHRFZGl0LnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5LzNEVUlGYWN0b3J5LnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5L0J1dHRvbi50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9DaGVja0JveC50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9GbGF0QnV0dG9uLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5L0ZsYXRDaGVja0JveC50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9GbGF0VGV4dEVkaXQudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvRmxhdFVJRmFjdG9yeS50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9UZXh0RWRpdC50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9VSUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlREJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgY2FwdGlvbik7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICR7dGhpcy5jYXB0aW9ufVxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgYDtcblxuICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoJ3RocmVlRC1idXR0b24nKTtcbiAgfVxufVxuIiwiaW1wb3J0IENoZWNrQm94IGZyb20gJy4vQ2hlY2tCb3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZURDaGVja0JveCBleHRlbmRzIENoZWNrQm94IHtcbiAgY29uc3RydWN0b3IoZG9tOiBIVE1MRWxlbWVudCwgbGFiZWw6IHN0cmluZywgY2hlY2tlZDogYm9vbGVhbikge1xuICAgIHN1cGVyKGRvbSwgbGFiZWwsIGNoZWNrZWQpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kb20uaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsPkNoZWNrQm94XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3RoaXMuY2hlY2tlZCA/ICdjaGVja2VkPVwiY2hlY2tlZFwiJyA6ICcnfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICAgICAgPC9sYWJlbD5cbiAgICBgO1xuXG4gICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZCgndGhyZWVELWNoZWNrYm94Jyk7XG4gIH1cbn1cbiIsImltcG9ydCBUZXh0RWRpdCBmcm9tICcuL1RleHRFZGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVEVGV4dEVkaXQgZXh0ZW5kcyBUZXh0RWRpdCB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgdGV4dCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgPGlucHV0IHZhbHVlPVwiJHt0aGlzLnRleHR9XCI+YDtcbiAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKCd0aHJlZUQtaW5wdXQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSAnLi9DaGVja0JveCc7XG5pbXBvcnQgVUlGYWN0b3J5IGZyb20gJy4vVUlGYWN0b3J5JztcbmltcG9ydCBUZXh0RWRpdCBmcm9tICcuL1RleHRFZGl0JztcbmltcG9ydCBUaHJlZURCdXR0b24gZnJvbSAnLi8zREJ1dHRvbic7XG5pbXBvcnQgVGhyZWVEQ2hlY2tCb3ggZnJvbSAnLi8zRENoZWNrQm94JztcbmltcG9ydCBUaHJlZURUZXh0RWRpdCBmcm9tICcuLzNEVGV4dEVkaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZURVSUZhY3RvcnkgZXh0ZW5kcyBVSUZhY3Rvcnkge1xuICBjcmVhdGVCdXR0b24oZG9tOiBIVE1MRWxlbWVudCwgY2FwdGlvbjogc3RyaW5nKTogQnV0dG9uIHtcbiAgICByZXR1cm4gbmV3IFRocmVlREJ1dHRvbihkb20sIGNhcHRpb24pO1xuICB9XG5cbiAgY3JlYXRlQ2hlY2tCb3goZG9tOiBIVE1MRWxlbWVudCwgbGFiZWw6IHN0cmluZywgY2hlY2tlZDogYm9vbGVhbik6IENoZWNrQm94IHtcbiAgICByZXR1cm4gbmV3IFRocmVlRENoZWNrQm94KGRvbSwgbGFiZWwsIGNoZWNrZWQpO1xuICB9XG5cbiAgY3JlYXRlVGV4dEVkaXQoZG9tOiBIVE1MRWxlbWVudCwgdGV4dDogc3RyaW5nKTogVGV4dEVkaXQge1xuICAgIHJldHVybiBuZXcgVGhyZWVEVGV4dEVkaXQoZG9tLCB0ZXh0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRvbTogSFRNTEVsZW1lbnQsIHByb3RlY3RlZCBjYXB0aW9uOiBzdHJpbmcpIHt9XG4gIGFic3RyYWN0IHJlbmRlcigpOiB2b2lkO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ2hlY2tCb3gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZG9tOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgbGFiZWw6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgY2hlY2tlZDogYm9vbGVhblxuICApIHt9XG5cbiAgYWJzdHJhY3QgcmVuZGVyKCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhdEJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgY2FwdGlvbik7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lclRleHQgPSB0aGlzLmNhcHRpb247XG4gICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZCgnZmxhdC1idXR0b24nKTtcbiAgfVxufVxuIiwiaW1wb3J0IENoZWNrQm94IGZyb20gJy4vQ2hlY2tCb3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGF0Q2hlY2tCb3ggZXh0ZW5kcyBDaGVja0JveCB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIGxhYmVsOiBzdHJpbmcsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBzdXBlcihkb20sIGxhYmVsLCBjaGVja2VkKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZG9tLmlubmVySFRNTCA9IGBcbiAgICAgIDxsYWJlbD4ke3RoaXMubGFiZWx9XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3RoaXMuY2hlY2tlZCA/ICdjaGVja2VkPVwiY2hlY2tlZFwiJyA6ICcnfT5cbiAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICBgO1xuXG4gICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZCgnZmxhdC1jaGVja2JveCcpO1xuICB9XG59XG4iLCJpbXBvcnQgVGV4dEVkaXQgZnJvbSAnLi9UZXh0RWRpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXRUZXh0RWRpdCBleHRlbmRzIFRleHRFZGl0IHtcbiAgY29uc3RydWN0b3IoZG9tOiBIVE1MRWxlbWVudCwgdGV4dDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZG9tLCB0ZXh0KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZG9tLmlubmVySFRNTCA9IGA8aW5wdXQgdmFsdWU9XCIke3RoaXMudGV4dH1cIj5gO1xuICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoJ2ZsYXQtaW5wdXQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSAnLi9DaGVja0JveCc7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICcuL0ZsYXRCdXR0b24nO1xuaW1wb3J0IEZsYXRDaGVja0JveCBmcm9tICcuL0ZsYXRDaGVja0JveCc7XG5pbXBvcnQgRmxhdFRleHRFZGl0IGZyb20gJy4vRmxhdFRleHRFZGl0JztcbmltcG9ydCBUZXh0RWRpdCBmcm9tICcuL1RleHRFZGl0JztcbmltcG9ydCBVSUZhY3RvcnkgZnJvbSAnLi9VSUZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGF0VUlGYWN0b3J5IGV4dGVuZHMgVUlGYWN0b3J5IHtcbiAgY3JlYXRlQnV0dG9uKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZyk6IEJ1dHRvbiB7XG4gICAgcmV0dXJuIG5ldyBGbGF0QnV0dG9uKGRvbSwgY2FwdGlvbik7XG4gIH1cblxuICBjcmVhdGVDaGVja0JveChkb206IEhUTUxFbGVtZW50LCBsYWJlbDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKTogQ2hlY2tCb3gge1xuICAgIHJldHVybiBuZXcgRmxhdENoZWNrQm94KGRvbSwgbGFiZWwsIGNoZWNrZWQpO1xuICB9XG5cbiAgY3JlYXRlVGV4dEVkaXQoZG9tOiBIVE1MRWxlbWVudCwgdGV4dDogc3RyaW5nKTogVGV4dEVkaXQge1xuICAgIHJldHVybiBuZXcgRmxhdFRleHRFZGl0KGRvbSwgdGV4dCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFRleHRFZGl0IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRvbTogSFRNTEVsZW1lbnQsIHByb3RlY3RlZCB0ZXh0OiBzdHJpbmcpIHt9XG4gIGFic3RyYWN0IHJlbmRlcigpOiB2b2lkO1xufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSAnLi9DaGVja0JveCc7XG5pbXBvcnQgVGV4dEVkaXQgZnJvbSAnLi9UZXh0RWRpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFVJRmFjdG9yeSB7XG4gIGFic3RyYWN0IGNyZWF0ZUJ1dHRvbihkb206IEhUTUxFbGVtZW50LCBjYXB0aW9uOiBzdHJpbmcpOiBCdXR0b247XG4gIGFic3RyYWN0IGNyZWF0ZUNoZWNrQm94KFxuICAgIGRvbTogSFRNTEVsZW1lbnQsXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBjYXB0aW9uOiBib29sZWFuXG4gICk6IENoZWNrQm94O1xuICBhYnN0cmFjdCBjcmVhdGVUZXh0RWRpdChkb206IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcpOiBUZXh0RWRpdDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRocmVlRFVJRmFjdG9yeSBmcm9tICcuLzNEVUlGYWN0b3J5JztcbmltcG9ydCBGbGF0VUlGYWN0b3J5IGZyb20gJy4vRmxhdFVJRmFjdG9yeSc7XG5pbXBvcnQgVUlGYWN0b3J5IGZyb20gJy4vVUlGYWN0b3J5JztcblxubGV0IGZhY3Rvcnk6IFVJRmFjdG9yeTtcblxuY29uc3QgZmxhdE1vZGUgPSB0cnVlO1xuXG5pZiAoZmxhdE1vZGUpIHtcbiAgZmFjdG9yeSA9IG5ldyBGbGF0VUlGYWN0b3J5KCk7XG59IGVsc2Uge1xuICBmYWN0b3J5ID0gbmV3IFRocmVlRFVJRmFjdG9yeSgpO1xufVxuXG5jb25zdCBkb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBkb21DaGVja0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgZG9tVGV4dEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dGVkaXQnKSBhcyBIVE1MRWxlbWVudDtcblxuZmFjdG9yeS5jcmVhdGVCdXR0b24oZG9tQnV0dG9uLCAnQlVUVE9OJyk7XG5mYWN0b3J5LmNyZWF0ZUNoZWNrQm94KGRvbUNoZWNrQm94LCAnQ2hlY2tCb3gnLCB0cnVlKTtcbmZhY3RvcnkuY3JlYXRlVGV4dEVkaXQoZG9tVGV4dEVkaXQsICdEZXNpZ25QYXR0ZXJuJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=