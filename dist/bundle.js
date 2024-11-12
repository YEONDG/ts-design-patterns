/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/composite/File.ts":
/*!*******************************!*\
  !*** ./src/composite/File.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./src/composite/Unit.ts");
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

var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(name, size) {
        var _this = _super.call(this, name) || this;
        _this.size = size;
        return _this;
    }
    File.prototype.getSize = function () {
        return this.size;
    };
    return File;
}(_Unit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (File);


/***/ }),

/***/ "./src/composite/Folder.ts":
/*!*********************************!*\
  !*** ./src/composite/Folder.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./src/composite/Unit.ts");
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

var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder(name) {
        var _this = _super.call(this, name) || this;
        _this.units = [];
        return _this;
    }
    Folder.prototype.getSize = function () {
        return this.units.reduce(function (acc, unit) { return acc + unit.getSize(); }, 0);
    };
    Folder.prototype.add = function (unit) {
        this.units.push(unit);
    };
    Folder.prototype.createUnit = function (unit, dom) {
        var domUnit = document.createElement('div');
        domUnit.classList.add('unit');
        domUnit.innerHTML = "<div><span>".concat(unit.getName(), "</span><span>(").concat(unit.getSize(), ")</span></div>");
        dom.append(domUnit);
        return domUnit;
    };
    Folder.prototype.list = function (dom) {
        var _this = this;
        var domUnit = this.createUnit(this, dom);
        var bFolder = this instanceof Folder;
        if (bFolder) {
            domUnit.classList.add('folder');
            this.units.forEach(function (unit) {
                if (unit instanceof Folder) {
                    unit.list(domUnit);
                }
                else {
                    _this.createUnit(unit, domUnit);
                }
            });
        }
    };
    return Folder;
}(_Unit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Folder);


/***/ }),

/***/ "./src/composite/Unit.ts":
/*!*******************************!*\
  !*** ./src/composite/Unit.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Unit = /** @class */ (function () {
    function Unit(name) {
        this.name = name;
    }
    Unit.prototype.getName = function () {
        return this.name;
    };
    return Unit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unit);


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
  !*** ./src/composite/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File */ "./src/composite/File.ts");
/* harmony import */ var _Folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Folder */ "./src/composite/Folder.ts");


var root = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]('root');
root.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]('a.txt', 1000));
root.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]('b.txt', 2000));
var sub1 = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]('sub1');
root.add(sub1);
sub1.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]('sa.txt', 100));
sub1.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]('sb.txt', 4000));
var subSub = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]('sub3');
sub1.add(subSub);
subSub.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]('subsub1.txt', 2250));
subSub.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]('subsub1.txt', 5340));
var sub2 = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]('sub2');
root.add(sub2);
sub2.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]('SA.txt', 200));
sub2.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]('SB.txt', 300));
var dom = document.querySelector('#list');
root.list(dom);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksNkNBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksNkNBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUVsQyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvY29tcG9zaXRlL0ZpbGUudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NvbXBvc2l0ZS9Gb2xkZXIudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NvbXBvc2l0ZS9Vbml0LnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jb21wb3NpdGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVuaXQgZnJvbSAnLi9Vbml0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZSBleHRlbmRzIFVuaXQge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHByaXZhdGUgc2l6ZTogbnVtYmVyKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gIH1cblxuICBnZXRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFVuaXQgZnJvbSAnLi9Vbml0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9sZGVyIGV4dGVuZHMgVW5pdCB7XG4gIHByaXZhdGUgdW5pdHM6IEFycmF5PFVuaXQ+ID0gW107XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gIH1cblxuICBnZXRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudW5pdHMucmVkdWNlKChhY2MsIHVuaXQpID0+IGFjYyArIHVuaXQuZ2V0U2l6ZSgpLCAwKTtcbiAgfVxuXG4gIGFkZCh1bml0OiBVbml0KTogdm9pZCB7XG4gICAgdGhpcy51bml0cy5wdXNoKHVuaXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVVbml0KHVuaXQ6IFVuaXQsIGRvbTogRWxlbWVudCkge1xuICAgIGNvbnN0IGRvbVVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb21Vbml0LmNsYXNzTGlzdC5hZGQoJ3VuaXQnKTtcbiAgICBkb21Vbml0LmlubmVySFRNTCA9IGA8ZGl2PjxzcGFuPiR7dW5pdC5nZXROYW1lKCl9PC9zcGFuPjxzcGFuPigke3VuaXQuZ2V0U2l6ZSgpfSk8L3NwYW4+PC9kaXY+YDtcbiAgICBkb20uYXBwZW5kKGRvbVVuaXQpO1xuICAgIHJldHVybiBkb21Vbml0O1xuICB9XG5cbiAgbGlzdChkb206IEVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21Vbml0ID0gdGhpcy5jcmVhdGVVbml0KHRoaXMsIGRvbSk7XG4gICAgY29uc3QgYkZvbGRlciA9IHRoaXMgaW5zdGFuY2VvZiBGb2xkZXI7XG5cbiAgICBpZiAoYkZvbGRlcikge1xuICAgICAgZG9tVW5pdC5jbGFzc0xpc3QuYWRkKCdmb2xkZXInKTtcbiAgICAgIHRoaXMudW5pdHMuZm9yRWFjaCgodW5pdCkgPT4ge1xuICAgICAgICBpZiAodW5pdCBpbnN0YW5jZW9mIEZvbGRlcikge1xuICAgICAgICAgIHVuaXQubGlzdChkb21Vbml0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZVVuaXQodW5pdCwgZG9tVW5pdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmFtZTogc3RyaW5nKSB7fVxuXG4gIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0U2l6ZSgpOiBudW1iZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBGaWxlIGZyb20gJy4vRmlsZSc7XG5pbXBvcnQgRm9sZGVyIGZyb20gJy4vRm9sZGVyJztcblxuY29uc3Qgcm9vdCA9IG5ldyBGb2xkZXIoJ3Jvb3QnKTtcbnJvb3QuYWRkKG5ldyBGaWxlKCdhLnR4dCcsIDEwMDApKTtcbnJvb3QuYWRkKG5ldyBGaWxlKCdiLnR4dCcsIDIwMDApKTtcblxuY29uc3Qgc3ViMSA9IG5ldyBGb2xkZXIoJ3N1YjEnKTtcbnJvb3QuYWRkKHN1YjEpO1xuc3ViMS5hZGQobmV3IEZpbGUoJ3NhLnR4dCcsIDEwMCkpO1xuc3ViMS5hZGQobmV3IEZpbGUoJ3NiLnR4dCcsIDQwMDApKTtcblxuY29uc3Qgc3ViU3ViID0gbmV3IEZvbGRlcignc3ViMycpO1xuc3ViMS5hZGQoc3ViU3ViKTtcbnN1YlN1Yi5hZGQobmV3IEZpbGUoJ3N1YnN1YjEudHh0JywgMjI1MCkpO1xuc3ViU3ViLmFkZChuZXcgRmlsZSgnc3Vic3ViMS50eHQnLCA1MzQwKSk7XG5cbmNvbnN0IHN1YjIgPSBuZXcgRm9sZGVyKCdzdWIyJyk7XG5yb290LmFkZChzdWIyKTtcbnN1YjIuYWRkKG5ldyBGaWxlKCdTQS50eHQnLCAyMDApKTtcbnN1YjIuYWRkKG5ldyBGaWxlKCdTQi50eHQnLCAzMDApKTtcblxuY29uc3QgZG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QnKTtcbnJvb3QubGlzdChkb20pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9