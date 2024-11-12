/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factory/Bow.ts":
/*!****************************!*\
  !*** ./src/factory/Bow.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Bow = /** @class */ (function () {
    function Bow() {
    }
    Bow.prototype.use = function () {
        return '화살을 멀리서 쐈다.';
    };
    return Bow;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bow);


/***/ }),

/***/ "./src/factory/Factory.ts":
/*!********************************!*\
  !*** ./src/factory/Factory.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.create = function (name) {
        var bCreatable = this.isCreatable(name);
        if (bCreatable) {
            var item = this.createItem(name);
            this.postprocessItem(name);
            return item;
        }
        return null;
    };
    return Factory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Factory);


/***/ }),

/***/ "./src/factory/ItemFactory.ts":
/*!************************************!*\
  !*** ./src/factory/ItemFactory.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bow */ "./src/factory/Bow.ts");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory */ "./src/factory/Factory.ts");
/* harmony import */ var _Shield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shield */ "./src/factory/Shield.ts");
/* harmony import */ var _Sword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sword */ "./src/factory/Sword.ts");
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




var ItemCount = /** @class */ (function () {
    function ItemCount(_maxCount) {
        this._maxCount = _maxCount;
        this._currentCount = 0;
    }
    Object.defineProperty(ItemCount.prototype, "maxCount", {
        get: function () {
            return this._maxCount;
        },
        enumerable: false,
        configurable: true
    });
    ItemCount.prototype.isCreatable = function () {
        return this._currentCount < this._maxCount;
    };
    ItemCount.prototype.increaseCount = function () {
        if (this.isCreatable)
            this._currentCount++;
    };
    return ItemCount;
}());
var ItemFactory = /** @class */ (function (_super) {
    __extends(ItemFactory, _super);
    function ItemFactory() {
        var _this = _super.call(this) || this;
        _this.repository = new Map();
        _this.repository.set('sword', new ItemCount(3));
        _this.repository.set('shield', new ItemCount(5));
        _this.repository.set('bow', new ItemCount(2));
        return _this;
    }
    ItemFactory.prototype.isCreatable = function (name) {
        var itemCount = this.repository.get(name);
        return itemCount.isCreatable();
    };
    ItemFactory.prototype.createItem = function (name) {
        var result = null;
        if (name === 'sword')
            result = new _Sword__WEBPACK_IMPORTED_MODULE_3__["default"]();
        else if (name === 'shield')
            result = new _Shield__WEBPACK_IMPORTED_MODULE_2__["default"]();
        else if (name === 'bow')
            result = new _Bow__WEBPACK_IMPORTED_MODULE_0__["default"]();
        return result;
    };
    ItemFactory.prototype.postprocessItem = function (name) {
        var itemCount = this.repository.get(name);
        itemCount.increaseCount();
    };
    return ItemFactory;
}(_Factory__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFactory);


/***/ }),

/***/ "./src/factory/Shield.ts":
/*!*******************************!*\
  !*** ./src/factory/Shield.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Shield = /** @class */ (function () {
    function Shield() {
    }
    Shield.prototype.use = function () {
        return '방어!';
    };
    return Shield;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shield);


/***/ }),

/***/ "./src/factory/Sword.ts":
/*!******************************!*\
  !*** ./src/factory/Sword.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Sword = /** @class */ (function () {
    function Sword() {
    }
    Sword.prototype.use = function () {
        return '칼로 베었다.';
    };
    return Sword;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sword);


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
  !*** ./src/factory/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemFactory */ "./src/factory/ItemFactory.ts");

var factory = new _ItemFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var domOutput = document.querySelector('textarea');
var buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    return button.addEventListener('click', function (e) {
        var itemName = e.target.innerText;
        var item = factory.create(itemName);
        if (item) {
            domOutput.value += "\n".concat(item.use());
        }
        else {
            domOutput.value += "\n".concat(itemName, "\uC740(\uB294) \uC0DD\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
        }
        domOutput.scrollTop = domOutput.scrollHeight;
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO2FBQU0sQ0FBQztZQUNOLFNBQVMsQ0FBQyxLQUFLLElBQUksWUFBSyxRQUFRLHVFQUFrQixDQUFDO1FBQ3JELENBQUM7UUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7SUFDL0MsQ0FBQyxDQUFDO0FBWEYsQ0FXRSxDQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvZmFjdG9yeS9Cb3cudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2ZhY3RvcnkvRmFjdG9yeS50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvZmFjdG9yeS9JdGVtRmFjdG9yeS50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvZmFjdG9yeS9TaGllbGQudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2ZhY3RvcnkvU3dvcmQudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2ZhY3RvcnkvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm93IGltcGxlbWVudHMgSXRlbSB7XG4gIHVzZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAn7ZmU7IK07J2EIOupgOumrOyEnCDskIjri6QuJztcbiAgfVxufVxuIiwiaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcblxuZXhwb3J0IHR5cGUgSXRlbU5hbWUgPSAnc3dvcmQnIHwgJ3NoaWVsZCcgfCAnYm93JztcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRmFjdG9yeSB7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpc0NyZWF0YWJsZShuYW1lOiBJdGVtTmFtZSk6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVJdGVtKG5hbWU6IEl0ZW1OYW1lKTogSXRlbTtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHBvc3Rwcm9jZXNzSXRlbShuYW1lOiBJdGVtTmFtZSk6IHZvaWQ7XG5cbiAgY3JlYXRlKG5hbWU6IEl0ZW1OYW1lKTogSXRlbSB7XG4gICAgY29uc3QgYkNyZWF0YWJsZSA9IHRoaXMuaXNDcmVhdGFibGUobmFtZSk7XG4gICAgaWYgKGJDcmVhdGFibGUpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0obmFtZSk7XG4gICAgICB0aGlzLnBvc3Rwcm9jZXNzSXRlbShuYW1lKTtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgQm93IGZyb20gJy4vQm93JztcbmltcG9ydCBGYWN0b3J5LCB7IEl0ZW1OYW1lIH0gZnJvbSAnLi9GYWN0b3J5JztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5pbXBvcnQgU2hpZWxkIGZyb20gJy4vU2hpZWxkJztcbmltcG9ydCBTd29yZCBmcm9tICcuL1N3b3JkJztcblxuY2xhc3MgSXRlbUNvdW50IHtcbiAgcHJpdmF0ZSBfY3VycmVudENvdW50ID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tYXhDb3VudDogbnVtYmVyKSB7fVxuXG4gIGdldCBtYXhDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4Q291bnQ7XG4gIH1cblxuICBpc0NyZWF0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENvdW50IDwgdGhpcy5fbWF4Q291bnQ7XG4gIH1cblxuICBpbmNyZWFzZUNvdW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQ3JlYXRhYmxlKSB0aGlzLl9jdXJyZW50Q291bnQrKztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtRmFjdG9yeSBleHRlbmRzIEZhY3Rvcnkge1xuICBwcm90ZWN0ZWQgaXNDcmVhdGFibGUobmFtZTogSXRlbU5hbWUpOiBib29sZWFuIHtcbiAgICBjb25zdCBpdGVtQ291bnQgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0KG5hbWUpO1xuICAgIHJldHVybiBpdGVtQ291bnQuaXNDcmVhdGFibGUoKTtcbiAgfVxuICBwcm90ZWN0ZWQgY3JlYXRlSXRlbShuYW1lOiBJdGVtTmFtZSk6IEl0ZW0ge1xuICAgIGxldCByZXN1bHQ6IEl0ZW0gPSBudWxsO1xuXG4gICAgaWYgKG5hbWUgPT09ICdzd29yZCcpIHJlc3VsdCA9IG5ldyBTd29yZCgpO1xuICAgIGVsc2UgaWYgKG5hbWUgPT09ICdzaGllbGQnKSByZXN1bHQgPSBuZXcgU2hpZWxkKCk7XG4gICAgZWxzZSBpZiAobmFtZSA9PT0gJ2JvdycpIHJlc3VsdCA9IG5ldyBCb3coKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgcG9zdHByb2Nlc3NJdGVtKG5hbWU6IEl0ZW1OYW1lKTogdm9pZCB7XG4gICAgY29uc3QgaXRlbUNvdW50ID0gdGhpcy5yZXBvc2l0b3J5LmdldChuYW1lKTtcblxuICAgIGl0ZW1Db3VudC5pbmNyZWFzZUNvdW50KCk7XG4gIH1cblxuICBwcml2YXRlIHJlcG9zaXRvcnkgPSBuZXcgTWFwPEl0ZW1OYW1lLCBJdGVtQ291bnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVwb3NpdG9yeS5zZXQoJ3N3b3JkJywgbmV3IEl0ZW1Db3VudCgzKSk7XG4gICAgdGhpcy5yZXBvc2l0b3J5LnNldCgnc2hpZWxkJywgbmV3IEl0ZW1Db3VudCg1KSk7XG4gICAgdGhpcy5yZXBvc2l0b3J5LnNldCgnYm93JywgbmV3IEl0ZW1Db3VudCgyKSk7XG4gIH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaWVsZCBpbXBsZW1lbnRzIEl0ZW0ge1xuICB1c2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ+uwqeyWtCEnO1xuICB9XG59XG4iLCJpbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd29yZCBpbXBsZW1lbnRzIEl0ZW0ge1xuICB1c2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ+y5vOuhnCDrsqDsl4jri6QuJztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJdGVtTmFtZSB9IGZyb20gJy4vRmFjdG9yeSc7XG5pbXBvcnQgSXRlbUZhY3RvcnkgZnJvbSAnLi9JdGVtRmFjdG9yeSc7XG5cbmNvbnN0IGZhY3RvcnkgPSBuZXcgSXRlbUZhY3RvcnkoKTtcblxuY29uc3QgZG9tT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgaXRlbU5hbWUgPSAoZS50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmlubmVyVGV4dDtcblxuICAgIGNvbnN0IGl0ZW0gPSBmYWN0b3J5LmNyZWF0ZShpdGVtTmFtZSBhcyBJdGVtTmFtZSk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGRvbU91dHB1dC52YWx1ZSArPSBgXFxuJHtpdGVtLnVzZSgpfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbU91dHB1dC52YWx1ZSArPSBgXFxuJHtpdGVtTmFtZX3snYAo64qUKSDsg53shLHtlaAg7IiYIOyXhuyKteuLiOuLpC5gO1xuICAgIH1cblxuICAgIGRvbU91dHB1dC5zY3JvbGxUb3AgPSBkb21PdXRwdXQuc2Nyb2xsSGVpZ2h0O1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==