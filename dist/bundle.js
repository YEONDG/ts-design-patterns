/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/builder1/Car.ts":
/*!*****************************!*\
  !*** ./src/builder1/Car.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Car = /** @class */ (function () {
    function Car(engine, airbag, color, cameraSensor, AEB) {
        this.engine = engine;
        this.airbag = airbag;
        this.color = color;
        this.cameraSensor = cameraSensor;
        this.AEB = AEB;
    }
    Car.prototype.print = function () {
        console.table(this);
    };
    return Car;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);


/***/ }),

/***/ "./src/builder1/CarBuilder.ts":
/*!************************************!*\
  !*** ./src/builder1/CarBuilder.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car */ "./src/builder1/Car.ts");

var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.engine = undefined;
        this.airbag = false;
        this.color = undefined;
        this.cameraSensor = false;
        this.AEB = undefined;
    }
    CarBuilder.prototype.setEngine = function (v) {
        this.engine = v;
        return this;
    };
    CarBuilder.prototype.setAirbag = function (v) {
        this.airbag = v;
        return this;
    };
    CarBuilder.prototype.setColor = function (v) {
        this.color = v;
        return this;
    };
    CarBuilder.prototype.setCameraSensor = function (v) {
        this.cameraSensor = v;
        return this;
    };
    CarBuilder.prototype.setAEB = function (v) {
        this.AEB = v;
        return this;
    };
    CarBuilder.prototype.build = function () {
        if (this.engine === undefined)
            return null;
        if (this.color === undefined)
            return null;
        if (this.AEB === undefined)
            return null;
        return new _Car__WEBPACK_IMPORTED_MODULE_0__["default"](this.engine, this.airbag, this.color, this.cameraSensor, this.AEB);
    };
    return CarBuilder;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarBuilder);


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
  !*** ./src/builder1/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car */ "./src/builder1/Car.ts");
/* harmony import */ var _CarBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarBuilder */ "./src/builder1/CarBuilder.ts");


var car1 = new _Car__WEBPACK_IMPORTED_MODULE_0__["default"]('V7', true, 'black', true, false);
car1.print();
var car2 = new _CarBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
    .setAEB(false)
    .setAirbag(false)
    .setCameraSensor(true)
    .setColor('white')
    .setEngine('V9')
    .build();
car2.print();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssQ0FBQztLQUNoQixlQUFlLENBQUMsSUFBSSxDQUFDO0tBQ3JCLFFBQVEsQ0FBQyxPQUFPLENBQUM7S0FDakIsU0FBUyxDQUFDLElBQUksQ0FBQztLQUNmLEtBQUssRUFBRSxDQUFDO0FBRVgsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2J1aWxkZXIxL0Nhci50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYnVpbGRlcjEvQ2FyQnVpbGRlci50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYnVpbGRlcjEvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbmdpbmU6IHN0cmluZyxcbiAgICBwcml2YXRlIGFpcmJhZzogYm9vbGVhbixcbiAgICBwcml2YXRlIGNvbG9yOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBjYW1lcmFTZW5zb3I6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBBRUI6IGJvb2xlYW5cbiAgKSB7fVxuXG4gIHByaW50KCk6IHZvaWQge1xuICAgIGNvbnNvbGUudGFibGUodGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCBDYXIgZnJvbSAnLi9DYXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJCdWlsZGVyIHtcbiAgcHJpdmF0ZSBlbmdpbmU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBhaXJiYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBjb2xvcjogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIGNhbWVyYVNlbnNvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIEFFQjogYm9vbGVhbiA9IHVuZGVmaW5lZDtcblxuICBzZXRFbmdpbmUodjogc3RyaW5nKTogQ2FyQnVpbGRlciB7XG4gICAgdGhpcy5lbmdpbmUgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QWlyYmFnKHY6IGJvb2xlYW4pOiBDYXJCdWlsZGVyIHtcbiAgICB0aGlzLmFpcmJhZyA9IHY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRDb2xvcih2OiBzdHJpbmcpOiBDYXJCdWlsZGVyIHtcbiAgICB0aGlzLmNvbG9yID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldENhbWVyYVNlbnNvcih2OiBib29sZWFuKTogQ2FyQnVpbGRlciB7XG4gICAgdGhpcy5jYW1lcmFTZW5zb3IgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QUVCKHY6IGJvb2xlYW4pOiBDYXJCdWlsZGVyIHtcbiAgICB0aGlzLkFFQiA9IHY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBidWlsZCgpOiBDYXIge1xuICAgIGlmICh0aGlzLmVuZ2luZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodGhpcy5jb2xvciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodGhpcy5BRUIgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gbmV3IENhcihcbiAgICAgIHRoaXMuZW5naW5lLFxuICAgICAgdGhpcy5haXJiYWcsXG4gICAgICB0aGlzLmNvbG9yLFxuICAgICAgdGhpcy5jYW1lcmFTZW5zb3IsXG4gICAgICB0aGlzLkFFQlxuICAgICk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENhciBmcm9tICcuL0Nhcic7XG5pbXBvcnQgQ2FyQnVpbGRlciBmcm9tICcuL0NhckJ1aWxkZXInO1xuXG5jb25zdCBjYXIxID0gbmV3IENhcignVjcnLCB0cnVlLCAnYmxhY2snLCB0cnVlLCBmYWxzZSk7XG5jYXIxLnByaW50KCk7XG5cbmNvbnN0IGNhcjIgPSBuZXcgQ2FyQnVpbGRlcigpXG4gIC5zZXRBRUIoZmFsc2UpXG4gIC5zZXRBaXJiYWcoZmFsc2UpXG4gIC5zZXRDYW1lcmFTZW5zb3IodHJ1ZSlcbiAgLnNldENvbG9yKCd3aGl0ZScpXG4gIC5zZXRFbmdpbmUoJ1Y5JylcbiAgLmJ1aWxkKCk7XG5cbmNhcjIucHJpbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==