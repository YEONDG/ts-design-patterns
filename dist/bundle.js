/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/adapter/Animal.ts":
/*!*******************************!*\
  !*** ./src/adapter/Animal.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animal);


/***/ }),

/***/ "./src/adapter/Cat.ts":
/*!****************************!*\
  !*** ./src/adapter/Cat.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adapter/Animal.ts");
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

var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sound = function () {
        console.log("".concat(this.name, "\uAC00 \uB0D0\uC639~"));
    };
    return Cat;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cat);


/***/ }),

/***/ "./src/adapter/Dog.ts":
/*!****************************!*\
  !*** ./src/adapter/Dog.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adapter/Animal.ts");
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

var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.sound = function () {
        console.log("".concat(this.name, "\uAC00 \uBA4D\uBA4D!"));
    };
    return Dog;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dog);


/***/ }),

/***/ "./src/adapter/Tiger.ts":
/*!******************************!*\
  !*** ./src/adapter/Tiger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Tiger = /** @class */ (function () {
    function Tiger() {
        this._name = null;
    }
    Object.defineProperty(Tiger.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Tiger.prototype.roar = function () {
        return '어흥';
    };
    return Tiger;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tiger);


/***/ }),

/***/ "./src/adapter/TigerAdapter.ts":
/*!*************************************!*\
  !*** ./src/adapter/TigerAdapter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adapter/Animal.ts");
/* harmony import */ var _Tiger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tiger */ "./src/adapter/Tiger.ts");
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


var TigerAdapter = /** @class */ (function (_super) {
    __extends(TigerAdapter, _super);
    function TigerAdapter(name) {
        var _this = _super.call(this, name) || this;
        _this.tiger = new _Tiger__WEBPACK_IMPORTED_MODULE_1__["default"]();
        _this.tiger.name = name;
        return _this;
    }
    TigerAdapter.prototype.sound = function () {
        console.log("".concat(this.tiger.name, "\uAC00 ").concat(this.tiger.roar()));
    };
    return TigerAdapter;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TigerAdapter);


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
/*!******************************!*\
  !*** ./src/adapter/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cat */ "./src/adapter/Cat.ts");
/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dog */ "./src/adapter/Dog.ts");
/* harmony import */ var _TigerAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TigerAdapter */ "./src/adapter/TigerAdapter.ts");



var list = Array();
list.push(new _Dog__WEBPACK_IMPORTED_MODULE_1__["default"]('백구'));
list.push(new _Cat__WEBPACK_IMPORTED_MODULE_0__["default"]('나비'));
list.push(new _Cat__WEBPACK_IMPORTED_MODULE_0__["default"]('냐옹'));
// const tiger = new Tiger();
// tiger.name = '티거';
// list.push(tiger);
list.push(new _TigerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"]('티거'));
list.forEach(function (animal) {
    animal.sound();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxxREFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07SUFDbEIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2FkYXB0ZXIvQW5pbWFsLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9hZGFwdGVyL0NhdC50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYWRhcHRlci9Eb2cudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2FkYXB0ZXIvVGlnZXIudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2FkYXB0ZXIvVGlnZXJBZGFwdGVyLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9hZGFwdGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFuaW1hbCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBuYW1lOiBzdHJpbmcpIHt9XG5cbiAgYWJzdHJhY3Qgc291bmQoKTogdm9pZDtcbn1cbiIsImltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXQgZXh0ZW5kcyBBbmltYWwge1xuICBzb3VuZCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV96rCAIOuDkOyYuX5gKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxufVxuIiwiaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvZyBleHRlbmRzIEFuaW1hbCB7XG4gIHNvdW5kKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX3qsIAg66mN66mNIWApO1xuICB9XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlciB7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIHNldCBuYW1lKHY6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2O1xuICB9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZSE7XG4gIH1cblxuICByb2FyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICfslrTtnaUnO1xuICB9XG59XG4iLCJpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsJztcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlnZXJBZGFwdGVyIGV4dGVuZHMgQW5pbWFsIHtcbiAgcHJpdmF0ZSB0aWdlcjogVGlnZXI7XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gICAgdGhpcy50aWdlciA9IG5ldyBUaWdlcigpO1xuICAgIHRoaXMudGlnZXIubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzb3VuZCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnRpZ2VyLm5hbWV96rCAICR7dGhpcy50aWdlci5yb2FyKCl9YCk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbCc7XG5pbXBvcnQgQ2F0IGZyb20gJy4vQ2F0JztcbmltcG9ydCBEb2cgZnJvbSAnLi9Eb2cnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXInO1xuaW1wb3J0IFRpZ2VyQWRhcHRlciBmcm9tICcuL1RpZ2VyQWRhcHRlcic7XG5cbmNvbnN0IGxpc3QgPSBBcnJheTxBbmltYWw+KCk7XG5cbmxpc3QucHVzaChuZXcgRG9nKCfrsLHqtawnKSk7XG5saXN0LnB1c2gobmV3IENhdCgn64KY67mEJykpO1xubGlzdC5wdXNoKG5ldyBDYXQoJ+uDkOyYuScpKTtcblxuLy8gY29uc3QgdGlnZXIgPSBuZXcgVGlnZXIoKTtcbi8vIHRpZ2VyLm5hbWUgPSAn7Yuw6rGwJztcbi8vIGxpc3QucHVzaCh0aWdlcik7XG5cbmxpc3QucHVzaChuZXcgVGlnZXJBZGFwdGVyKCfti7DqsbAnKSk7XG5cbmxpc3QuZm9yRWFjaCgoYW5pbWFsKSA9PiB7XG4gIGFuaW1hbC5zb3VuZCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=