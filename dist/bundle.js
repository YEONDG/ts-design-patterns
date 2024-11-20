/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/visitor/AvgVisitor.ts":
/*!***********************************!*\
  !*** ./src/visitor/AvgVisitor.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/visitor/Item.ts");

var AvgVisitor = /** @class */ (function () {
    function AvgVisitor() {
        this.sum = 0;
        this.count = 0;
    }
    AvgVisitor.prototype.getValue = function () {
        return this.sum / this.count;
    };
    AvgVisitor.prototype.visit = function (unit) {
        if (unit instanceof _Item__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.sum += unit.getValue();
            this.count++;
        }
        else {
            unit.accept(this);
        }
    };
    return AvgVisitor;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvgVisitor);


/***/ }),

/***/ "./src/visitor/Item.ts":
/*!*****************************!*\
  !*** ./src/visitor/Item.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item(value) {
        this.value = value;
    }
    Item.prototype.getValue = function () {
        return this.value;
    };
    Item.prototype.accept = function (visitor) {
        visitor.visit(this);
    };
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ "./src/visitor/ItemList.ts":
/*!*********************************!*\
  !*** ./src/visitor/ItemList.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ItemList = /** @class */ (function () {
    function ItemList() {
        this.list = new Array();
    }
    ItemList.prototype.add = function (unit) {
        this.list.push(unit);
    };
    ItemList.prototype.accept = function (visitor) {
        this.list.forEach(function (unit) { return visitor.visit(unit); });
    };
    return ItemList;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemList);


/***/ }),

/***/ "./src/visitor/SumVisitor.ts":
/*!***********************************!*\
  !*** ./src/visitor/SumVisitor.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/visitor/Item.ts");

var SumVisitor = /** @class */ (function () {
    function SumVisitor() {
        this.sum = 0;
    }
    SumVisitor.prototype.getValue = function () {
        return this.sum;
    };
    SumVisitor.prototype.visit = function (unit) {
        if (unit instanceof _Item__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.sum += unit.getValue();
        }
        else {
            unit.accept(this);
        }
    };
    return SumVisitor;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SumVisitor);


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
  !*** ./src/visitor/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvgVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvgVisitor */ "./src/visitor/AvgVisitor.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/visitor/Item.ts");
/* harmony import */ var _ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemList */ "./src/visitor/ItemList.ts");
/* harmony import */ var _SumVisitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SumVisitor */ "./src/visitor/SumVisitor.ts");




var list1 = new _ItemList__WEBPACK_IMPORTED_MODULE_2__["default"]();
list1.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](100));
list1.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](200));
list1.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](300));
var list2 = new _ItemList__WEBPACK_IMPORTED_MODULE_2__["default"]();
list2.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](400));
list2.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](500));
list1.add(list2);
var list3 = new _ItemList__WEBPACK_IMPORTED_MODULE_2__["default"]();
list3.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](25));
list2.add(list3);
var sum = new _SumVisitor__WEBPACK_IMPORTED_MODULE_3__["default"]();
list1.accept(sum);
console.log("\uD569\uACC4: ".concat(sum.getValue()));
var avg = new _AvgVisitor__WEBPACK_IMPORTED_MODULE_0__["default"]();
list1.accept(avg);
console.log("\uD3C9\uADE0: ".concat(avg.getValue()));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSw2Q0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFekIsSUFBTSxLQUFLLEdBQUcsSUFBSSxpREFBUSxFQUFFLENBQUM7QUFDN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLDZDQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksNkNBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRXpCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFakIsSUFBTSxLQUFLLEdBQUcsSUFBSSxpREFBUSxFQUFFLENBQUM7QUFDN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLDZDQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRWpCLElBQU0sR0FBRyxHQUFHLElBQUksbURBQVUsRUFBRSxDQUFDO0FBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUUsQ0FBQyxDQUFDO0FBRXJDLElBQU0sR0FBRyxHQUFHLElBQUksbURBQVUsRUFBRSxDQUFDO0FBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3Zpc2l0b3IvQXZnVmlzaXRvci50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvdmlzaXRvci9JdGVtLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy92aXNpdG9yL0l0ZW1MaXN0LnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy92aXNpdG9yL1N1bVZpc2l0b3IudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3Zpc2l0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVuaXQgZnJvbSAnLi9Vbml0JztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5pbXBvcnQgVmlzaXRvciBmcm9tICcuL1Zpc2l0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmdWaXNpdG9yIGltcGxlbWVudHMgVmlzaXRvciB7XG4gIHByaXZhdGUgc3VtID0gMDtcbiAgcHJpdmF0ZSBjb3VudCA9IDA7XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VtIC8gdGhpcy5jb3VudDtcbiAgfVxuXG4gIHZpc2l0KHVuaXQ6IFVuaXQpIHtcbiAgICBpZiAodW5pdCBpbnN0YW5jZW9mIEl0ZW0pIHtcbiAgICAgIHRoaXMuc3VtICs9IHVuaXQuZ2V0VmFsdWUoKTtcbiAgICAgIHRoaXMuY291bnQrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdC5hY2NlcHQodGhpcyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgVW5pdCBmcm9tICcuL1VuaXQnO1xuaW1wb3J0IFZpc2l0b3IgZnJvbSAnLi9WaXNpdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBpbXBsZW1lbnRzIFVuaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbHVlOiBudW1iZXIpIHt9XG5cbiAgZ2V0VmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGFjY2VwdCh2aXNpdG9yOiBWaXNpdG9yKSB7XG4gICAgdmlzaXRvci52aXNpdCh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IFVuaXQgZnJvbSAnLi9Vbml0JztcbmltcG9ydCBWaXNpdG9yIGZyb20gJy4vVmlzaXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1MaXN0IGltcGxlbWVudHMgVW5pdCB7XG4gIHByaXZhdGUgbGlzdCA9IG5ldyBBcnJheTxVbml0PigpO1xuXG4gIGFkZCh1bml0OiBVbml0KTogdm9pZCB7XG4gICAgdGhpcy5saXN0LnB1c2godW5pdCk7XG4gIH1cblxuICBhY2NlcHQodmlzaXRvcjogVmlzaXRvcikge1xuICAgIHRoaXMubGlzdC5mb3JFYWNoKCh1bml0KSA9PiB2aXNpdG9yLnZpc2l0KHVuaXQpKTtcbiAgfVxufVxuIiwiaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcbmltcG9ydCBVbml0IGZyb20gJy4vVW5pdCc7XG5pbXBvcnQgVmlzaXRvciBmcm9tICcuL1Zpc2l0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdW1WaXNpdG9yIGltcGxlbWVudHMgVmlzaXRvciB7XG4gIHByaXZhdGUgc3VtID0gMDtcblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdW07XG4gIH1cblxuICB2aXNpdCh1bml0OiBVbml0KSB7XG4gICAgaWYgKHVuaXQgaW5zdGFuY2VvZiBJdGVtKSB7XG4gICAgICB0aGlzLnN1bSArPSB1bml0LmdldFZhbHVlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXQuYWNjZXB0KHRoaXMpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXZnVmlzaXRvciBmcm9tICcuL0F2Z1Zpc2l0b3InO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcbmltcG9ydCBJdGVtTGlzdCBmcm9tICcuL0l0ZW1MaXN0JztcbmltcG9ydCBTdW1WaXNpdG9yIGZyb20gJy4vU3VtVmlzaXRvcic7XG5cbmNvbnN0IGxpc3QxID0gbmV3IEl0ZW1MaXN0KCk7XG5saXN0MS5hZGQobmV3IEl0ZW0oMTAwKSk7XG5saXN0MS5hZGQobmV3IEl0ZW0oMjAwKSk7XG5saXN0MS5hZGQobmV3IEl0ZW0oMzAwKSk7XG5cbmNvbnN0IGxpc3QyID0gbmV3IEl0ZW1MaXN0KCk7XG5saXN0Mi5hZGQobmV3IEl0ZW0oNDAwKSk7XG5saXN0Mi5hZGQobmV3IEl0ZW0oNTAwKSk7XG5cbmxpc3QxLmFkZChsaXN0Mik7XG5cbmNvbnN0IGxpc3QzID0gbmV3IEl0ZW1MaXN0KCk7XG5saXN0My5hZGQobmV3IEl0ZW0oMjUpKTtcbmxpc3QyLmFkZChsaXN0Myk7XG5cbmNvbnN0IHN1bSA9IG5ldyBTdW1WaXNpdG9yKCk7XG5saXN0MS5hY2NlcHQoc3VtKTtcbmNvbnNvbGUubG9nKGDtlanqs4Q6ICR7c3VtLmdldFZhbHVlKCl9YCk7XG5cbmNvbnN0IGF2ZyA9IG5ldyBBdmdWaXNpdG9yKCk7XG5saXN0MS5hY2NlcHQoYXZnKTtcbmNvbnNvbGUubG9nKGDtj4nqt6A6ICR7YXZnLmdldFZhbHVlKCl9YCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=