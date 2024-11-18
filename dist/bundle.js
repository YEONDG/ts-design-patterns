/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chainofresponsibility/DomainHandler.ts":
/*!****************************************************!*\
  !*** ./src/chainofresponsibility/DomainHandler.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handler */ "./src/chainofresponsibility/Handler.ts");
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

var DomainHandler = /** @class */ (function (_super) {
    __extends(DomainHandler, _super);
    function DomainHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DomainHandler.prototype.process = function (url) {
        var startIndex = url.indexOf('://');
        var lastIndex = url.lastIndexOf(':');
        if (startIndex === -1) {
            if (lastIndex === -1) {
                this.displayResult('DOMAIN', url);
            }
            else {
                this.displayResult('DOMAIN', url.substring(0, lastIndex));
            }
        }
        else if (startIndex !== lastIndex) {
            this.displayResult('DOMAIN', url.substring(startIndex + 3, lastIndex));
        }
        else if (startIndex === lastIndex) {
            this.displayResult('DOMAIN', url.substring(startIndex + 3));
        }
        else {
            this.displayResult('DOMAIN', 'NONE');
        }
    };
    return DomainHandler;
}(_Handler__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomainHandler);


/***/ }),

/***/ "./src/chainofresponsibility/Handler.ts":
/*!**********************************************!*\
  !*** ./src/chainofresponsibility/Handler.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Handler = /** @class */ (function () {
    function Handler() {
        this.nextHandler = null;
    }
    Handler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    Handler.prototype.run = function (url) {
        this.process(url);
        if (this.nextHandler)
            this.nextHandler.run(url);
    };
    Handler.prototype.displayResult = function (title, content) {
        var domLayout = document.createElement('div');
        var domTitle = document.createElement('div');
        var domContent = document.createElement('div');
        domLayout.append(domTitle, domContent);
        domLayout.classList.add('layout');
        domTitle.classList.add('title');
        domContent.classList.add('content');
        domTitle.innerText = title;
        domContent.innerText = content;
        var domTarget = document.querySelector('.result');
        domTarget.append(domLayout);
    };
    return Handler;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);


/***/ }),

/***/ "./src/chainofresponsibility/PortHandler.ts":
/*!**************************************************!*\
  !*** ./src/chainofresponsibility/PortHandler.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handler */ "./src/chainofresponsibility/Handler.ts");
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

var PortHandler = /** @class */ (function (_super) {
    __extends(PortHandler, _super);
    function PortHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortHandler.prototype.process = function (url) {
        var index = url.lastIndexOf(':');
        if (index !== -1) {
            var strPort = url.substring(index + 1);
            if (!isNaN(Number(strPort))) {
                this.displayResult('PORT', strPort);
                return;
            }
        }
        this.displayResult('PORT', 'NONE');
    };
    return PortHandler;
}(_Handler__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortHandler);


/***/ }),

/***/ "./src/chainofresponsibility/ProtocolHandler.ts":
/*!******************************************************!*\
  !*** ./src/chainofresponsibility/ProtocolHandler.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handler */ "./src/chainofresponsibility/Handler.ts");
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

var ProtocolHandler = /** @class */ (function (_super) {
    __extends(ProtocolHandler, _super);
    function ProtocolHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProtocolHandler.prototype.process = function (url) {
        var index = url.indexOf('://');
        if (index !== -1) {
            this.displayResult('PROTOCOL', url.substring(0, index));
        }
        else {
            this.displayResult('PROTOCOL', 'none');
        }
    };
    return ProtocolHandler;
}(_Handler__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtocolHandler);


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
/*!********************************************!*\
  !*** ./src/chainofresponsibility/index.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DomainHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomainHandler */ "./src/chainofresponsibility/DomainHandler.ts");
/* harmony import */ var _PortHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortHandler */ "./src/chainofresponsibility/PortHandler.ts");
/* harmony import */ var _ProtocolHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProtocolHandler */ "./src/chainofresponsibility/ProtocolHandler.ts");



var handler1 = new _ProtocolHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();
var handler2 = new _PortHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();
var handler3 = new _DomainHandler__WEBPACK_IMPORTED_MODULE_0__["default"]();
handler1.setNext(handler2).setNext(handler3);
var domInput = document.querySelector('#url');
var domBtn = document.querySelector('#btn');
domBtn.addEventListener('click', function () {
    var url = domInput.value;
    handler1.run(url);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxDQVQ0QyxnREFBTyxHQVNuRDs7Ozs7Ozs7VUNYRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDSjtBQUNRO0FBRWhELElBQU0sUUFBUSxHQUFHLElBQUksd0RBQWUsRUFBRSxDQUFDO0FBQ3ZDLElBQU0sUUFBUSxHQUFHLElBQUksb0RBQVcsRUFBRSxDQUFDO0FBQ25DLElBQU0sUUFBUSxHQUFHLElBQUksc0RBQWEsRUFBRSxDQUFDO0FBRXJDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTdDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFxQixDQUFDO0FBQ3BFLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFzQixDQUFDO0FBRW5FLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDL0IsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUMzQixRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NoYWlub2ZyZXNwb25zaWJpbGl0eS9Eb21haW5IYW5kbGVyLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jaGFpbm9mcmVzcG9uc2liaWxpdHkvSGFuZGxlci50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvY2hhaW5vZnJlc3BvbnNpYmlsaXR5L1BvcnRIYW5kbGVyLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jaGFpbm9mcmVzcG9uc2liaWxpdHkvUHJvdG9jb2xIYW5kbGVyLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jaGFpbm9mcmVzcG9uc2liaWxpdHkvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSAnLi9IYW5kbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tYWluSGFuZGxlciBleHRlbmRzIEhhbmRsZXIge1xuICBwcm90ZWN0ZWQgcHJvY2Vzcyh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdXJsLmxhc3RJbmRleE9mKCc6Jyk7XG5cbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gLTEpIHtcbiAgICAgIGlmIChsYXN0SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVJlc3VsdCgnRE9NQUlOJywgdXJsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVJlc3VsdCgnRE9NQUlOJywgdXJsLnN1YnN0cmluZygwLCBsYXN0SW5kZXgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0YXJ0SW5kZXggIT09IGxhc3RJbmRleCkge1xuICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KCdET01BSU4nLCB1cmwuc3Vic3RyaW5nKHN0YXJ0SW5kZXggKyAzLCBsYXN0SW5kZXgpKTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0SW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KCdET01BSU4nLCB1cmwuc3Vic3RyaW5nKHN0YXJ0SW5kZXggKyAzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheVJlc3VsdCgnRE9NQUlOJywgJ05PTkUnKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEhhbmRsZXIge1xuICBwcm90ZWN0ZWQgbmV4dEhhbmRsZXI6IEhhbmRsZXIgPSBudWxsO1xuICBzZXROZXh0KGhhbmRsZXI6IEhhbmRsZXIpOiBIYW5kbGVyIHtcbiAgICB0aGlzLm5leHRIYW5kbGVyID0gaGFuZGxlcjtcbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBwcm9jZXNzKHVybDogc3RyaW5nKTogdm9pZDtcblxuICBydW4odXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb2Nlc3ModXJsKTtcbiAgICBpZiAodGhpcy5uZXh0SGFuZGxlcikgdGhpcy5uZXh0SGFuZGxlci5ydW4odXJsKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkaXNwbGF5UmVzdWx0KHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGRvbUxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRvbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9tQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZG9tTGF5b3V0LmFwcGVuZChkb21UaXRsZSwgZG9tQ29udGVudCk7XG5cbiAgICBkb21MYXlvdXQuY2xhc3NMaXN0LmFkZCgnbGF5b3V0Jyk7XG4gICAgZG9tVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBkb21Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICAgIGRvbVRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIGRvbUNvbnRlbnQuaW5uZXJUZXh0ID0gY29udGVudDtcblxuICAgIGNvbnN0IGRvbVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQnKTtcbiAgICBkb21UYXJnZXQuYXBwZW5kKGRvbUxheW91dCk7XG4gIH1cbn1cbiIsImltcG9ydCBIYW5kbGVyIGZyb20gJy4vSGFuZGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcnRIYW5kbGVyIGV4dGVuZHMgSGFuZGxlciB7XG4gIHByb3RlY3RlZCBwcm9jZXNzKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB1cmwubGFzdEluZGV4T2YoJzonKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBzdHJQb3J0ID0gdXJsLnN1YnN0cmluZyhpbmRleCArIDEpO1xuICAgICAgaWYgKCFpc05hTihOdW1iZXIoc3RyUG9ydCkpKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVJlc3VsdCgnUE9SVCcsIHN0clBvcnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwbGF5UmVzdWx0KCdQT1JUJywgJ05PTkUnKTtcbiAgfVxufVxuIiwiaW1wb3J0IEhhbmRsZXIgZnJvbSAnLi9IYW5kbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvdG9jb2xIYW5kbGVyIGV4dGVuZHMgSGFuZGxlciB7XG4gIHByb3RlY3RlZCBwcm9jZXNzKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KCdQUk9UT0NPTCcsIHVybC5zdWJzdHJpbmcoMCwgaW5kZXgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KCdQUk9UT0NPTCcsICdub25lJyk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBEb21haW5IYW5kbGVyIGZyb20gJy4vRG9tYWluSGFuZGxlcic7XG5pbXBvcnQgUG9ydEhhbmRsZXIgZnJvbSAnLi9Qb3J0SGFuZGxlcic7XG5pbXBvcnQgUHJvdG9jb2xIYW5kbGVyIGZyb20gJy4vUHJvdG9jb2xIYW5kbGVyJztcblxuY29uc3QgaGFuZGxlcjEgPSBuZXcgUHJvdG9jb2xIYW5kbGVyKCk7XG5jb25zdCBoYW5kbGVyMiA9IG5ldyBQb3J0SGFuZGxlcigpO1xuY29uc3QgaGFuZGxlcjMgPSBuZXcgRG9tYWluSGFuZGxlcigpO1xuXG5oYW5kbGVyMS5zZXROZXh0KGhhbmRsZXIyKS5zZXROZXh0KGhhbmRsZXIzKTtcblxuY29uc3QgZG9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXJsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IGRvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCB1cmwgPSBkb21JbnB1dC52YWx1ZTtcbiAgaGFuZGxlcjEucnVuKHVybCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==