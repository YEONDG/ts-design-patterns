/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/iterator/Array.ts":
/*!*******************************!*\
  !*** ./src/iterator/Array.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayIterator */ "./src/iterator/ArrayIterator.ts");

var Array = /** @class */ (function () {
    function Array(items) {
        this.items = items;
    }
    Array.prototype.getItem = function (index) {
        return this.items[index];
    };
    Array.prototype.getCount = function () {
        return this.items.length;
    };
    Array.prototype.iterator = function () {
        return new _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    };
    return Array;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array);


/***/ }),

/***/ "./src/iterator/ArrayIterator.ts":
/*!***************************************!*\
  !*** ./src/iterator/ArrayIterator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(array) {
        this.array = array;
        this.array = array;
        this.index = -1;
    }
    ArrayIterator.prototype.next = function () {
        this.index++;
        return this.index < this.array.getCount();
    };
    ArrayIterator.prototype.current = function () {
        return this.array.getItem(this.index);
    };
    return ArrayIterator;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayIterator);


/***/ }),

/***/ "./src/iterator/Item.ts":
/*!******************************!*\
  !*** ./src/iterator/Item.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    //   private _name: string;
    //   private _cost: number;
    //   constructor(name: string, cost: number) {
    //     this._name = name;
    //     this._cost = cost;
    //   }
    function Item(_name, _cost) {
        this._name = _name;
        this._cost = _cost;
    }
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


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
  !*** ./src/iterator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./src/iterator/Array.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/iterator/Item.ts");


var items = [
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('쿠쿠다스', 2500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('새우깡', 1000),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('뺴뺴로', 1500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('초코파이', 4500),
];
var array = new _Array__WEBPACK_IMPORTED_MODULE_0__["default"](items);
var iter = array.iterator();
while (iter.next()) {
    var item = iter.current();
    var domItem = document.createElement('div');
    domItem.innerText = "".concat(item.name, " : ").concat(item.cost, "\uC6D0");
    document.body.appendChild(domItem);
    domItem.classList.add('iterator-item');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDO0lBRTVCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFHLElBQUksQ0FBQyxJQUFJLGdCQUFNLElBQUksQ0FBQyxJQUFJLFdBQUcsQ0FBQztJQUNuRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVuQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2l0ZXJhdG9yL0FycmF5LnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9pdGVyYXRvci9BcnJheUl0ZXJhdG9yLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9pdGVyYXRvci9JdGVtLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9pdGVyYXRvci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWdncmVnYXRvciBmcm9tICcuL0FnZ3JlZ2F0b3InO1xuaW1wb3J0IEFycmF5SXRlcmF0b3IgZnJvbSAnLi9BcnJheUl0ZXJhdG9yJztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5pbXBvcnQgSXRlcmF0b3IgZnJvbSAnLi9JdGVyYXRvcic7XG5cbmNsYXNzIEFycmF5IGltcGxlbWVudHMgQWdncmVnYXRvcjxJdGVtPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbXM6IEl0ZW1bXSkge31cblxuICBwdWJsaWMgZ2V0SXRlbShpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdO1xuICB9XG5cbiAgcHVibGljIGdldENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIGl0ZXJhdG9yKCk6IEl0ZXJhdG9yPEl0ZW0+IHtcbiAgICByZXR1cm4gbmV3IEFycmF5SXRlcmF0b3IodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXk7XG4iLCJpbXBvcnQgQXJyYXkgZnJvbSAnLi9BcnJheSc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuaW1wb3J0IEl0ZXJhdG9yIGZyb20gJy4vSXRlcmF0b3InO1xuXG5jbGFzcyBBcnJheUl0ZXJhdG9yIGltcGxlbWVudHMgSXRlcmF0b3I8SXRlbT4ge1xuICBwcml2YXRlIGluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnJheTogQXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5pbmRleCA9IC0xO1xuICB9XG5cbiAgbmV4dCgpOiBib29sZWFuIHtcbiAgICB0aGlzLmluZGV4Kys7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXggPCB0aGlzLmFycmF5LmdldENvdW50KCk7XG4gIH1cbiAgY3VycmVudCgpOiBJdGVtIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5nZXRJdGVtKHRoaXMuaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5SXRlcmF0b3I7XG4iLCJjbGFzcyBJdGVtIHtcbiAgLy8gICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIC8vICAgcHJpdmF0ZSBfY29zdDogbnVtYmVyO1xuXG4gIC8vICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb3N0OiBudW1iZXIpIHtcbiAgLy8gICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAvLyAgICAgdGhpcy5fY29zdCA9IGNvc3Q7XG4gIC8vICAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcsIHByaXZhdGUgX2Nvc3Q6IG51bWJlcikge31cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIGdldCBjb3N0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3N0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBJdGVtO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXJyYXkgZnJvbSAnLi9BcnJheSc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5jb25zdCBpdGVtcyA9IFtcbiAgbmV3IEl0ZW0oJ+y/oOy/oOuLpOyKpCcsIDI1MDApLFxuICBuZXcgSXRlbSgn7IOI7Jqw6rmhJywgMTAwMCksXG4gIG5ldyBJdGVtKCfrurTrurTroZwnLCAxNTAwKSxcbiAgbmV3IEl0ZW0oJ+y0iOy9lO2MjOydtCcsIDQ1MDApLFxuXTtcblxuY29uc3QgYXJyYXkgPSBuZXcgQXJyYXkoaXRlbXMpO1xuY29uc3QgaXRlciA9IGFycmF5Lml0ZXJhdG9yKCk7XG5cbndoaWxlIChpdGVyLm5leHQoKSkge1xuICBjb25zdCBpdGVtID0gaXRlci5jdXJyZW50KCk7XG5cbiAgY29uc3QgZG9tSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb21JdGVtLmlubmVyVGV4dCA9IGAke2l0ZW0ubmFtZX0gOiAke2l0ZW0uY29zdH3sm5BgO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUl0ZW0pO1xuXG4gIGRvbUl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlcmF0b3ItaXRlbScpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9