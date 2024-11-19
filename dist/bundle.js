/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/builder2/Builder.ts":
/*!*********************************!*\
  !*** ./src/builder2/Builder.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Builder = /** @class */ (function () {
    function Builder(data) {
        this.data = data;
    }
    return Builder;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Builder);


/***/ }),

/***/ "./src/builder2/Data.ts":
/*!******************************!*\
  !*** ./src/builder2/Data.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Data = /** @class */ (function () {
    function Data(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(Data.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Data;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);


/***/ }),

/***/ "./src/builder2/Director.ts":
/*!**********************************!*\
  !*** ./src/builder2/Director.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Director = /** @class */ (function () {
    function Director(builder) {
        this.builder = builder;
    }
    Director.prototype.build = function () {
        return "".concat(this.builder.head(), " ").concat(this.builder.body(), " ").concat(this.builder.foot());
    };
    return Director;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Director);


/***/ }),

/***/ "./src/builder2/XMLBuilder.ts":
/*!************************************!*\
  !*** ./src/builder2/XMLBuilder.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder */ "./src/builder2/Builder.ts");
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

var XMLBuilder = /** @class */ (function (_super) {
    __extends(XMLBuilder, _super);
    function XMLBuilder(data) {
        return _super.call(this, data) || this;
    }
    XMLBuilder.prototype.head = function () {
        return '<?xml version="1.0" encoding="utf-8"?><DATA>';
    };
    XMLBuilder.prototype.body = function () {
        return "<NAME>".concat(this.data.name, "</NAME><AGE>").concat(this.data.age, "</AGE>");
    };
    XMLBuilder.prototype.foot = function () {
        return '</DATA>';
    };
    return XMLBuilder;
}(_Builder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (XMLBuilder);


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
/*!*******************************!*\
  !*** ./src/builder2/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./src/builder2/Data.ts");
/* harmony import */ var _Director__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Director */ "./src/builder2/Director.ts");
/* harmony import */ var _XMLBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XMLBuilder */ "./src/builder2/XMLBuilder.ts");



var data = new _Data__WEBPACK_IMPORTED_MODULE_0__["default"]('Jane', 76);
// const builder = new PlainTextBuilder(data);
// const builder = new JSONBuilder(data);
var builder = new _XMLBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](data);
var director = new _Director__WEBPACK_IMPORTED_MODULE_1__["default"](builder);
var result = director.build();
console.log(result);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFDRSxpQkFBc0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBS3RDLGNBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7SUFDRSxjQUFvQixLQUFhLEVBQVUsSUFBWTtRQUFuQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFDM0Qsc0JBQUksc0JBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFCQUFHO2FBQVA7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFDSCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BEO0lBQ0Usa0JBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFBRyxDQUFDO0lBRXhDLHdCQUFLLEdBQUw7UUFDRSxPQUFPLFVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsY0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxjQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUUsQ0FBQztJQUNoRixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUitCO0FBR2hDO0lBQXdDLDhCQUFPO0lBYTdDLG9CQUFZLElBQVU7UUFDcEIsYUFBSyxZQUFDLElBQUksQ0FBQyxTQUFDO0lBQ2QsQ0FBQztJQWRELHlCQUFJLEdBQUo7UUFDRSxPQUFPLDhDQUE4QyxDQUFDO0lBQ3hELENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQ0UsT0FBTyxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVEsQ0FBQztJQUNyRSxDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNFLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFLSCxpQkFBQztBQUFELENBQUMsQ0FoQnVDLGdEQUFPLEdBZ0I5Qzs7Ozs7Ozs7VUNuQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ1E7QUFHSTtBQUV0QyxJQUFNLElBQUksR0FBRyxJQUFJLDZDQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRWxDLDhDQUE4QztBQUM5Qyx5Q0FBeUM7QUFDekMsSUFBTSxPQUFPLEdBQUcsSUFBSSxtREFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXJDLElBQU0sUUFBUSxHQUFHLElBQUksaURBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV2QyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9idWlsZGVyMi9CdWlsZGVyLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9idWlsZGVyMi9EYXRhLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9idWlsZGVyMi9EaXJlY3Rvci50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYnVpbGRlcjIvWE1MQnVpbGRlci50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYnVpbGRlcjIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGEgZnJvbSAnLi9EYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkYXRhOiBEYXRhKSB7fVxuXG4gIGFic3RyYWN0IGhlYWQoKTogc3RyaW5nO1xuICBhYnN0cmFjdCBib2R5KCk6IHN0cmluZztcbiAgYWJzdHJhY3QgZm9vdCgpOiBzdHJpbmc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmFtZTogc3RyaW5nLCBwcml2YXRlIF9hZ2U6IG51bWJlcikge31cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIGdldCBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYWdlO1xuICB9XG59XG4iLCJpbXBvcnQgQnVpbGRlciBmcm9tICcuL0J1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnVpbGRlcjogQnVpbGRlcikge31cblxuICBidWlsZCgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5idWlsZGVyLmhlYWQoKX0gJHt0aGlzLmJ1aWxkZXIuYm9keSgpfSAke3RoaXMuYnVpbGRlci5mb290KCl9YDtcbiAgfVxufVxuIiwiaW1wb3J0IEJ1aWxkZXIgZnJvbSAnLi9CdWlsZGVyJztcbmltcG9ydCBEYXRhIGZyb20gJy4vRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTEJ1aWxkZXIgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgaGVhZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwidXRmLThcIj8+PERBVEE+JztcbiAgfVxuXG4gIGJvZHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxOQU1FPiR7dGhpcy5kYXRhLm5hbWV9PC9OQU1FPjxBR0U+JHt0aGlzLmRhdGEuYWdlfTwvQUdFPmA7XG4gIH1cblxuICBmb290KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICc8L0RBVEE+JztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IERhdGEpIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRGF0YSBmcm9tICcuL0RhdGEnO1xuaW1wb3J0IERpcmVjdG9yIGZyb20gJy4vRGlyZWN0b3InO1xuaW1wb3J0IEpTT05CdWlsZGVyIGZyb20gJy4vSlNPTkJ1aWxkZXInO1xuaW1wb3J0IFBsYWluVGV4dEJ1aWxkZXIgZnJvbSAnLi9QbGFpblRleHRCdWlsZGVyJztcbmltcG9ydCBYTUxCdWlsZGVyIGZyb20gJy4vWE1MQnVpbGRlcic7XG5cbmNvbnN0IGRhdGEgPSBuZXcgRGF0YSgnSmFuZScsIDc2KTtcblxuLy8gY29uc3QgYnVpbGRlciA9IG5ldyBQbGFpblRleHRCdWlsZGVyKGRhdGEpO1xuLy8gY29uc3QgYnVpbGRlciA9IG5ldyBKU09OQnVpbGRlcihkYXRhKTtcbmNvbnN0IGJ1aWxkZXIgPSBuZXcgWE1MQnVpbGRlcihkYXRhKTtcblxuY29uc3QgZGlyZWN0b3IgPSBuZXcgRGlyZWN0b3IoYnVpbGRlcik7XG5cbmNvbnN0IHJlc3VsdCA9IGRpcmVjdG9yLmJ1aWxkKCk7XG5cbmNvbnNvbGUubG9nKHJlc3VsdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=