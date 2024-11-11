/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/decorator/BoxDecorator.ts":
/*!***************************************!*\
  !*** ./src/decorator/BoxDecorator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var BoxDecorator = /** @class */ (function (_super) {
    __extends(BoxDecorator, _super);
    function BoxDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    BoxDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount() + 2;
    };
    BoxDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + 2;
    };
    BoxDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 2;
    };
    BoxDecorator.prototype.getString = function (i) {
        var maxWidth = this.getMaxLength();
        if (i === 0 || i === this.getLinesCount() - 1) {
            return "<span style='color:yellow'>+".concat('-'.repeat(maxWidth - 2), "+</span>");
        }
        else {
            return ("<span style='color:yellow'>|</span>" +
                "".concat(this.targetItem.getString(i - 1)).concat(' '.repeat(maxWidth - this.getLength(i - 1))) +
                "<span style='color:yellow'>|</span>");
        }
    };
    return BoxDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxDecorator);


/***/ }),

/***/ "./src/decorator/Decorator.ts":
/*!************************************!*\
  !*** ./src/decorator/Decorator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/decorator/Item.ts");
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

var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator(targetItem) {
        var _this = _super.call(this) || this;
        _this.targetItem = targetItem;
        return _this;
    }
    return Decorator;
}(_Item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Decorator);


/***/ }),

/***/ "./src/decorator/Item.ts":
/*!*******************************!*\
  !*** ./src/decorator/Item.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.print = function (dom) {
        var result = [];
        var cntLines = this.getLinesCount();
        for (var i = 0; i < cntLines; i++) {
            var string = this.getString(i);
            result.push(string);
        }
        dom.innerHTML = result.join('\n');
    };
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ "./src/decorator/LineNumberDecorator.ts":
/*!**********************************************!*\
  !*** ./src/decorator/LineNumberDecorator.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var LineNumberDecorator = /** @class */ (function (_super) {
    __extends(LineNumberDecorator, _super);
    function LineNumberDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    LineNumberDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    LineNumberDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + 6;
    };
    LineNumberDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 6;
    };
    LineNumberDecorator.prototype.getString = function (i) {
        return ('<span style="color: green">' +
            "".concat(i).padStart(4, '0') +
            "</span><span style='color: dimgray'>: </span> ".concat(this.targetItem.getString(i)));
    };
    return LineNumberDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineNumberDecorator);


/***/ }),

/***/ "./src/decorator/SideDecorator.ts":
/*!****************************************!*\
  !*** ./src/decorator/SideDecorator.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var SideDecorator = /** @class */ (function (_super) {
    __extends(SideDecorator, _super);
    function SideDecorator(targetItem, ch) {
        var _this = _super.call(this, targetItem) || this;
        _this.ch = ch;
        return _this;
    }
    SideDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    SideDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + this.ch.length * 2;
    };
    SideDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + this.ch.length * 2;
    };
    SideDecorator.prototype.getString = function (i) {
        return ("<span style='color:gray'>".concat(this.ch, "</span>") +
            "".concat(this.targetItem.getString(i)) +
            "<span style='color:gray'>".concat(this.ch, "</span>"));
    };
    return SideDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideDecorator);


/***/ }),

/***/ "./src/decorator/Strings.ts":
/*!**********************************!*\
  !*** ./src/decorator/Strings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/decorator/Item.ts");
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

var Strings = /** @class */ (function (_super) {
    __extends(Strings, _super);
    function Strings() {
        var _this = _super.call(this) || this;
        _this.data = new Array();
        return _this;
    }
    Strings.prototype.getLinesCount = function () {
        return this.data.length;
    };
    Strings.prototype.getLength = function (i) {
        return this.data[i].length;
    };
    Strings.prototype.getMaxLength = function () {
        var maxLength = 0;
        this.data.forEach(function (item) {
            if (item.length > maxLength)
                maxLength = item.length;
        });
        return maxLength;
    };
    Strings.prototype.getString = function (i) {
        return this.data[i];
    };
    Strings.prototype.add = function (str) {
        this.data.push(str);
    };
    return Strings;
}(_Item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Strings);


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
/*!********************************!*\
  !*** ./src/decorator/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxDecorator */ "./src/decorator/BoxDecorator.ts");
/* harmony import */ var _LineNumberDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineNumberDecorator */ "./src/decorator/LineNumberDecorator.ts");
/* harmony import */ var _SideDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideDecorator */ "./src/decorator/SideDecorator.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strings */ "./src/decorator/Strings.ts");




var strs = new _Strings__WEBPACK_IMPORTED_MODULE_3__["default"]();
strs.add('hello!');
strs.add('hello!hello!');
strs.add('hello!hello!hello!hello!');
strs.add('hello!hello!hello!hello!hello!');
var domPre = document.querySelector('pre');
// strs.print(domPre);
// const d1 = new SideDecorator(strs, '"');
// d1.print(domPre);
// const d2 = new LineNumberDecorator(strs);
// d2.print(domPre);
// const d3 = new BoxDecorator(strs);
// d3.print(domPre);
var d1 = new _SideDecorator__WEBPACK_IMPORTED_MODULE_2__["default"](strs, '"');
var d2 = new _LineNumberDecorator__WEBPACK_IMPORTED_MODULE_1__["default"](d1);
var d3 = new _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__["default"](d2);
d3.print(domPre);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ2M7QUFDWjtBQUNaO0FBRWhDLElBQU0sSUFBSSxHQUFHLElBQUksZ0RBQU8sRUFBRSxDQUFDO0FBRTNCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBRTNDLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0Msc0JBQXNCO0FBRXRCLDJDQUEyQztBQUMzQyxvQkFBb0I7QUFFcEIsNENBQTRDO0FBQzVDLG9CQUFvQjtBQUVwQixxQ0FBcUM7QUFDckMsb0JBQW9CO0FBRXBCLElBQU0sRUFBRSxHQUFHLElBQUksc0RBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEMsSUFBTSxFQUFFLEdBQUcsSUFBSSw0REFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QyxJQUFNLEVBQUUsR0FBRyxJQUFJLHFEQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDaEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9kZWNvcmF0b3IvQm94RGVjb3JhdG9yLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9kZWNvcmF0b3IvRGVjb3JhdG9yLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9kZWNvcmF0b3IvSXRlbS50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvZGVjb3JhdG9yL0xpbmVOdW1iZXJEZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2RlY29yYXRvci9TaWRlRGVjb3JhdG9yLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9kZWNvcmF0b3IvU3RyaW5ncy50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvZGVjb3JhdG9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZWNvcmF0b3IgZnJvbSAnLi9EZWNvcmF0b3InO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94RGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcbiAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGluZXNDb3VudCgpICsgMjtcbiAgfVxuICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExlbmd0aChpKSArIDI7XG4gIH1cbiAgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRNYXhMZW5ndGgoKSArIDI7XG4gIH1cbiAgZ2V0U3RyaW5nKGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbWF4V2lkdGggPSB0aGlzLmdldE1heExlbmd0aCgpO1xuICAgIGlmIChpID09PSAwIHx8IGkgPT09IHRoaXMuZ2V0TGluZXNDb3VudCgpIC0gMSkge1xuICAgICAgcmV0dXJuIGA8c3BhbiBzdHlsZT0nY29sb3I6eWVsbG93Jz4rJHsnLScucmVwZWF0KG1heFdpZHRoIC0gMil9Kzwvc3Bhbj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBgPHNwYW4gc3R5bGU9J2NvbG9yOnllbGxvdyc+fDwvc3Bhbj5gICtcbiAgICAgICAgYCR7dGhpcy50YXJnZXRJdGVtLmdldFN0cmluZyhpIC0gMSl9JHsnICcucmVwZWF0KFxuICAgICAgICAgIG1heFdpZHRoIC0gdGhpcy5nZXRMZW5ndGgoaSAtIDEpXG4gICAgICAgICl9YCArXG4gICAgICAgIGA8c3BhbiBzdHlsZT0nY29sb3I6eWVsbG93Jz58PC9zcGFuPmBcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKHRhcmdldEl0ZW06IEl0ZW0pIHtcbiAgICBzdXBlcih0YXJnZXRJdGVtKTtcbiAgfVxufVxuIiwiaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRGVjb3JhdG9yIGV4dGVuZHMgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0YXJnZXRJdGVtOiBJdGVtKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgSXRlbSB7XG4gIGFic3RyYWN0IGdldExpbmVzQ291bnQoKTogbnVtYmVyO1xuICBhYnN0cmFjdCBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyO1xuICBhYnN0cmFjdCBnZXRNYXhMZW5ndGgoKTogbnVtYmVyO1xuICBhYnN0cmFjdCBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHByaW50KGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBjbnRMaW5lcyA9IHRoaXMuZ2V0TGluZXNDb3VudCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY250TGluZXM7IGkrKykge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaSk7XG4gICAgICByZXN1bHQucHVzaChzdHJpbmcpO1xuICAgIH1cbiAgICBkb20uaW5uZXJIVE1MID0gcmVzdWx0LmpvaW4oJ1xcbicpO1xuICB9XG59XG4iLCJpbXBvcnQgRGVjb3JhdG9yIGZyb20gJy4vRGVjb3JhdG9yJztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVOdW1iZXJEZWNvcmF0b3IgZXh0ZW5kcyBEZWNvcmF0b3Ige1xuICBnZXRMaW5lc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRMaW5lc0NvdW50KCk7XG4gIH1cbiAgZ2V0TGVuZ3RoKGk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRMZW5ndGgoaSkgKyA2O1xuICB9XG4gIGdldE1heExlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TWF4TGVuZ3RoKCkgKyA2O1xuICB9XG4gIGdldFN0cmluZyhpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICAnPHNwYW4gc3R5bGU9XCJjb2xvcjogZ3JlZW5cIj4nICtcbiAgICAgIGAke2l9YC5wYWRTdGFydCg0LCAnMCcpICtcbiAgICAgIGA8L3NwYW4+PHNwYW4gc3R5bGU9J2NvbG9yOiBkaW1ncmF5Jz46IDwvc3Bhbj4gJHt0aGlzLnRhcmdldEl0ZW0uZ2V0U3RyaW5nKFxuICAgICAgICBpXG4gICAgICApfWBcbiAgICApO1xuICB9XG4gIGNvbnN0cnVjdG9yKHRhcmdldEl0ZW06IEl0ZW0pIHtcbiAgICBzdXBlcih0YXJnZXRJdGVtKTtcbiAgfVxufVxuIiwiaW1wb3J0IERlY29yYXRvciBmcm9tICcuL0RlY29yYXRvcic7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcbiAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGluZXNDb3VudCgpO1xuICB9XG4gIGdldExlbmd0aChpOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGVuZ3RoKGkpICsgdGhpcy5jaC5sZW5ndGggKiAyO1xuICB9XG4gIGdldE1heExlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TWF4TGVuZ3RoKCkgKyB0aGlzLmNoLmxlbmd0aCAqIDI7XG4gIH1cbiAgZ2V0U3RyaW5nKGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIGA8c3BhbiBzdHlsZT0nY29sb3I6Z3JheSc+JHt0aGlzLmNofTwvc3Bhbj5gICtcbiAgICAgIGAke3RoaXMudGFyZ2V0SXRlbS5nZXRTdHJpbmcoaSl9YCArXG4gICAgICBgPHNwYW4gc3R5bGU9J2NvbG9yOmdyYXknPiR7dGhpcy5jaH08L3NwYW4+YFxuICAgICk7XG4gIH1cbiAgY29uc3RydWN0b3IodGFyZ2V0SXRlbTogSXRlbSwgcHJpdmF0ZSBjaDogc3RyaW5nKSB7XG4gICAgc3VwZXIodGFyZ2V0SXRlbSk7XG4gIH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ3MgZXh0ZW5kcyBJdGVtIHtcbiAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoO1xuICB9XG4gIGdldExlbmd0aChpOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRhdGFbaV0ubGVuZ3RoO1xuICB9XG4gIGdldE1heExlbmd0aCgpOiBudW1iZXIge1xuICAgIGxldCBtYXhMZW5ndGggPSAwO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5sZW5ndGggPiBtYXhMZW5ndGgpIG1heExlbmd0aCA9IGl0ZW0ubGVuZ3RoO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXhMZW5ndGg7XG4gIH1cbiAgZ2V0U3RyaW5nKGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtpXTtcbiAgfVxuICBwcml2YXRlIGRhdGEgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhZGQoc3RyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEucHVzaChzdHIpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCb3hEZWNvcmF0b3IgZnJvbSAnLi9Cb3hEZWNvcmF0b3InO1xuaW1wb3J0IExpbmVOdW1iZXJEZWNvcmF0b3IgZnJvbSAnLi9MaW5lTnVtYmVyRGVjb3JhdG9yJztcbmltcG9ydCBTaWRlRGVjb3JhdG9yIGZyb20gJy4vU2lkZURlY29yYXRvcic7XG5pbXBvcnQgU3RyaW5ncyBmcm9tICcuL1N0cmluZ3MnO1xuXG5jb25zdCBzdHJzID0gbmV3IFN0cmluZ3MoKTtcblxuc3Rycy5hZGQoJ2hlbGxvIScpO1xuc3Rycy5hZGQoJ2hlbGxvIWhlbGxvIScpO1xuc3Rycy5hZGQoJ2hlbGxvIWhlbGxvIWhlbGxvIWhlbGxvIScpO1xuc3Rycy5hZGQoJ2hlbGxvIWhlbGxvIWhlbGxvIWhlbGxvIWhlbGxvIScpO1xuXG5jb25zdCBkb21QcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmUnKTtcbi8vIHN0cnMucHJpbnQoZG9tUHJlKTtcblxuLy8gY29uc3QgZDEgPSBuZXcgU2lkZURlY29yYXRvcihzdHJzLCAnXCInKTtcbi8vIGQxLnByaW50KGRvbVByZSk7XG5cbi8vIGNvbnN0IGQyID0gbmV3IExpbmVOdW1iZXJEZWNvcmF0b3Ioc3Rycyk7XG4vLyBkMi5wcmludChkb21QcmUpO1xuXG4vLyBjb25zdCBkMyA9IG5ldyBCb3hEZWNvcmF0b3Ioc3Rycyk7XG4vLyBkMy5wcmludChkb21QcmUpO1xuXG5jb25zdCBkMSA9IG5ldyBTaWRlRGVjb3JhdG9yKHN0cnMsICdcIicpO1xuY29uc3QgZDIgPSBuZXcgTGluZU51bWJlckRlY29yYXRvcihkMSk7XG5jb25zdCBkMyA9IG5ldyBCb3hEZWNvcmF0b3IoZDIpO1xuZDMucHJpbnQoZG9tUHJlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==