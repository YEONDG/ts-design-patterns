/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mediator/CoolAircon.ts":
/*!************************************!*\
  !*** ./src/mediator/CoolAircon.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var CoolAircon = /** @class */ (function (_super) {
    __extends(CoolAircon, _super);
    function CoolAircon(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bOff = true;
        return _this;
    }
    CoolAircon.prototype.on = function () {
        if (!this.bOff)
            return;
        this.bOff = false;
        this.mediator.participantChanged(this);
    };
    CoolAircon.prototype.off = function () {
        if (this.bOff)
            return;
        this.bOff = true;
        this.mediator.participantChanged(this);
    };
    CoolAircon.prototype.isRunning = function () {
        return !this.bOff;
    };
    CoolAircon.prototype.displayState = function (dom) {
        dom.innerHTML = this.bOff ? '에어컨 꺼짐' : '에어컨 가동';
        if (this.isRunning())
            dom.classList.add('hilighting');
        else
            dom.classList.remove('hilighting');
    };
    return CoolAircon;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoolAircon);


/***/ }),

/***/ "./src/mediator/Door.ts":
/*!******************************!*\
  !*** ./src/mediator/Door.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bClosed = true;
        return _this;
    }
    Door.prototype.open = function () {
        if (!this.bClosed)
            return;
        this.bClosed = false;
        this.mediator.participantChanged(this);
    };
    Door.prototype.close = function () {
        if (this.bClosed)
            return;
        this.bClosed = true;
        this.mediator.participantChanged(this);
    };
    Door.prototype.isClosed = function () {
        return this.bClosed;
    };
    Door.prototype.displayState = function (dom) {
        dom.innerHTML = this.isClosed() ? '문 Closed' : '문 Open';
        if (this.bClosed)
            dom.classList.remove('hilighting');
        else
            dom.classList.add('hilighting');
    };
    return Door;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Door);


/***/ }),

/***/ "./src/mediator/HeatBoiler.ts":
/*!************************************!*\
  !*** ./src/mediator/HeatBoiler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var HeatBoiler = /** @class */ (function (_super) {
    __extends(HeatBoiler, _super);
    function HeatBoiler(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bOff = true;
        return _this;
    }
    HeatBoiler.prototype.on = function () {
        if (!this.bOff)
            return;
        this.bOff = false;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.off = function () {
        if (this.bOff)
            return;
        this.bOff = true;
        this.mediator.participantChanged(this);
    };
    HeatBoiler.prototype.isRunning = function () {
        return !this.bOff;
    };
    HeatBoiler.prototype.displayState = function (dom) {
        dom.innerHTML = this.bOff ? '보일러 꺼짐' : '보일러 가동';
        if (this.isRunning())
            dom.classList.add('hilighting');
        else
            dom.classList.remove('hilighting');
    };
    return HeatBoiler;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeatBoiler);


/***/ }),

/***/ "./src/mediator/Participant.ts":
/*!*************************************!*\
  !*** ./src/mediator/Participant.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Participant = /** @class */ (function () {
    function Participant(mediator) {
        this.mediator = mediator;
    }
    return Participant;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Participant);


/***/ }),

/***/ "./src/mediator/SmartHome.ts":
/*!***********************************!*\
  !*** ./src/mediator/SmartHome.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CoolAircon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoolAircon */ "./src/mediator/CoolAircon.ts");
/* harmony import */ var _Door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Door */ "./src/mediator/Door.ts");
/* harmony import */ var _HeatBoiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeatBoiler */ "./src/mediator/HeatBoiler.ts");
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Window */ "./src/mediator/Window.ts");




var SmartHome = /** @class */ (function () {
    function SmartHome() {
        this.door = new _Door__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.window = new _Window__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.aircon = new _CoolAircon__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.boiler = new _HeatBoiler__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    }
    SmartHome.prototype.participantChanged = function (participant) {
        if (participant === this.door && !this.door.isClosed()) {
            this.aircon.off();
            this.boiler.off();
        }
        if (participant === this.window && !this.window.isClosed()) {
            this.aircon.off();
            this.boiler.off();
        }
        if (participant === this.aircon && this.aircon.isRunning()) {
            this.boiler.off();
            this.window.close();
            this.door.close();
        }
        if (participant === this.boiler && this.boiler.isRunning()) {
            this.aircon.off();
            this.window.close();
            this.door.close();
        }
    };
    SmartHome.prototype.display = function () {
        var domDoor = document.querySelector('.door');
        var domWindow = document.querySelector('.window');
        var domHeatBoiler = document.querySelector('.heatboiler');
        var domCoolAircon = document.querySelector('.coolaircon');
        this.door.displayState(domDoor);
        this.window.displayState(domWindow);
        this.aircon.displayState(domCoolAircon);
        this.boiler.displayState(domHeatBoiler);
    };
    SmartHome.prototype.install = function () {
        var _this = this;
        var domDoor = document.querySelector('.door');
        var domWindow = document.querySelector('.window');
        var domHeatBoiler = document.querySelector('.heatboiler');
        var domCoolAircon = document.querySelector('.coolaircon');
        domDoor.addEventListener('click', function () {
            _this.door.isClosed() ? _this.door.open() : _this.door.close();
            _this.display();
        });
        domWindow.addEventListener('click', function () {
            _this.window.isClosed() ? _this.window.open() : _this.window.close();
            _this.display();
        });
        domHeatBoiler.addEventListener('click', function () {
            _this.boiler.isRunning() ? _this.boiler.off() : _this.boiler.on();
            _this.display();
        });
        domCoolAircon.addEventListener('click', function () {
            _this.aircon.isRunning() ? _this.aircon.off() : _this.aircon.on();
            _this.display();
        });
        this.display();
    };
    return SmartHome;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartHome);


/***/ }),

/***/ "./src/mediator/Window.ts":
/*!********************************!*\
  !*** ./src/mediator/Window.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/mediator/Participant.ts");
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

var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bClosed = true;
        return _this;
    }
    Window.prototype.open = function () {
        if (!this.bClosed)
            return;
        this.bClosed = false;
        this.mediator.participantChanged(this);
    };
    Window.prototype.close = function () {
        if (this.bClosed)
            return;
        this.bClosed = true;
        this.mediator.participantChanged(this);
    };
    Window.prototype.isClosed = function () {
        return this.bClosed;
    };
    Window.prototype.displayState = function (dom) {
        dom.innerHTML = this.isClosed() ? '창 Closed' : '창 Open';
        if (this.bClosed)
            dom.classList.remove('hilighting');
        else
            dom.classList.add('hilighting');
    };
    return Window;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Window);


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
  !*** ./src/mediator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SmartHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmartHome */ "./src/mediator/SmartHome.ts");

var home = new _SmartHome__WEBPACK_IMPORTED_MODULE_0__["default"]();
home.install();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7QUFFcEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxrREFBUyxFQUFFLENBQUM7QUFFN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL21lZGlhdG9yL0Nvb2xBaXJjb24udHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL21lZGlhdG9yL0Rvb3IudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL21lZGlhdG9yL0hlYXRCb2lsZXIudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL21lZGlhdG9yL1BhcnRpY2lwYW50LnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9tZWRpYXRvci9TbWFydEhvbWUudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL21lZGlhdG9yL1dpbmRvdy50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvbWVkaWF0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZGlhdG9yIGZyb20gJy4vTWVkaWF0b3InO1xuaW1wb3J0IFBhcnRpY2lwYW50IGZyb20gJy4vUGFydGljaXBhbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29sQWlyY29uIGV4dGVuZHMgUGFydGljaXBhbnQge1xuICBwcml2YXRlIGJPZmYgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKG1lZGlhdG9yOiBNZWRpYXRvcikge1xuICAgIHN1cGVyKG1lZGlhdG9yKTtcbiAgfVxuXG4gIG9uKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5iT2ZmKSByZXR1cm47XG4gICAgdGhpcy5iT2ZmID0gZmFsc2U7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBvZmYoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYk9mZikgcmV0dXJuO1xuICAgIHRoaXMuYk9mZiA9IHRydWU7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBpc1J1bm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmJPZmY7XG4gIH1cblxuICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLmJPZmYgPyAn7JeQ7Ja07LuoIOq6vOynkCcgOiAn7JeQ7Ja07LuoIOqwgOuPmSc7XG5cbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkgZG9tLmNsYXNzTGlzdC5hZGQoJ2hpbGlnaHRpbmcnKTtcbiAgICBlbHNlIGRvbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWxpZ2h0aW5nJyk7XG4gIH1cbn1cbiIsImltcG9ydCBNZWRpYXRvciBmcm9tICcuL01lZGlhdG9yJztcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tICcuL1BhcnRpY2lwYW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9vciBleHRlbmRzIFBhcnRpY2lwYW50IHtcbiAgcHJpdmF0ZSBiQ2xvc2VkID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcbiAgICBzdXBlcihtZWRpYXRvcik7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5iQ2xvc2VkKSByZXR1cm47XG4gICAgdGhpcy5iQ2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5iQ2xvc2VkKSByZXR1cm47XG4gICAgdGhpcy5iQ2xvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcbiAgfVxuXG4gIGlzQ2xvc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmJDbG9zZWQ7XG4gIH1cblxuICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLmlzQ2xvc2VkKCkgPyAn66y4IENsb3NlZCcgOiAn66y4IE9wZW4nO1xuXG4gICAgaWYgKHRoaXMuYkNsb3NlZCkgZG9tLmNsYXNzTGlzdC5yZW1vdmUoJ2hpbGlnaHRpbmcnKTtcbiAgICBlbHNlIGRvbS5jbGFzc0xpc3QuYWRkKCdoaWxpZ2h0aW5nJyk7XG4gIH1cbn1cbiIsImltcG9ydCBNZWRpYXRvciBmcm9tICcuL01lZGlhdG9yJztcbmltcG9ydCBQYXJ0aWNpcGFudCBmcm9tICcuL1BhcnRpY2lwYW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhdEJvaWxlciBleHRlbmRzIFBhcnRpY2lwYW50IHtcbiAgcHJpdmF0ZSBiT2ZmID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcbiAgICBzdXBlcihtZWRpYXRvcik7XG4gIH1cblxuICBvbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYk9mZikgcmV0dXJuO1xuICAgIHRoaXMuYk9mZiA9IGZhbHNlO1xuICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgb2ZmKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmJPZmYpIHJldHVybjtcbiAgICB0aGlzLmJPZmYgPSB0cnVlO1xuICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgaXNSdW5uaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5iT2ZmO1xuICB9XG5cbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBkb20uaW5uZXJIVE1MID0gdGhpcy5iT2ZmID8gJ+uztOydvOufrCDqurzsp5AnIDogJ+uztOydvOufrCDqsIDrj5knO1xuXG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKCkpIGRvbS5jbGFzc0xpc3QuYWRkKCdoaWxpZ2h0aW5nJyk7XG4gICAgZWxzZSBkb20uY2xhc3NMaXN0LnJlbW92ZSgnaGlsaWdodGluZycpO1xuICB9XG59XG4iLCJpbXBvcnQgTWVkaWF0b3IgZnJvbSAnLi9NZWRpYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBhcnRpY2lwYW50IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1lZGlhdG9yOiBNZWRpYXRvcikge31cblxuICBhYnN0cmFjdCBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgQ29vbEFpcmNvbiBmcm9tICcuL0Nvb2xBaXJjb24nO1xuaW1wb3J0IERvb3IgZnJvbSAnLi9Eb29yJztcbmltcG9ydCBIZWF0Qm9pbGVyIGZyb20gJy4vSGVhdEJvaWxlcic7XG5pbXBvcnQgTWVkaWF0b3IgZnJvbSAnLi9NZWRpYXRvcic7XG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSAnLi9QYXJ0aWNpcGFudCc7XG5pbXBvcnQgV2luZG93IGZyb20gJy4vV2luZG93JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hcnRIb21lIGltcGxlbWVudHMgTWVkaWF0b3Ige1xuICBkb29yID0gbmV3IERvb3IodGhpcyk7XG4gIHdpbmRvdyA9IG5ldyBXaW5kb3codGhpcyk7XG4gIGFpcmNvbiA9IG5ldyBDb29sQWlyY29uKHRoaXMpO1xuICBib2lsZXIgPSBuZXcgSGVhdEJvaWxlcih0aGlzKTtcblxuICBwYXJ0aWNpcGFudENoYW5nZWQocGFydGljaXBhbnQ6IFBhcnRpY2lwYW50KTogdm9pZCB7XG4gICAgaWYgKHBhcnRpY2lwYW50ID09PSB0aGlzLmRvb3IgJiYgIXRoaXMuZG9vci5pc0Nsb3NlZCgpKSB7XG4gICAgICB0aGlzLmFpcmNvbi5vZmYoKTtcbiAgICAgIHRoaXMuYm9pbGVyLm9mZigpO1xuICAgIH1cblxuICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gdGhpcy53aW5kb3cgJiYgIXRoaXMud2luZG93LmlzQ2xvc2VkKCkpIHtcbiAgICAgIHRoaXMuYWlyY29uLm9mZigpO1xuICAgICAgdGhpcy5ib2lsZXIub2ZmKCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRpY2lwYW50ID09PSB0aGlzLmFpcmNvbiAmJiB0aGlzLmFpcmNvbi5pc1J1bm5pbmcoKSkge1xuICAgICAgdGhpcy5ib2lsZXIub2ZmKCk7XG4gICAgICB0aGlzLndpbmRvdy5jbG9zZSgpO1xuICAgICAgdGhpcy5kb29yLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRpY2lwYW50ID09PSB0aGlzLmJvaWxlciAmJiB0aGlzLmJvaWxlci5pc1J1bm5pbmcoKSkge1xuICAgICAgdGhpcy5haXJjb24ub2ZmKCk7XG4gICAgICB0aGlzLndpbmRvdy5jbG9zZSgpO1xuICAgICAgdGhpcy5kb29yLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheSgpIHtcbiAgICBjb25zdCBkb21Eb29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvb3InKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb21XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZG93JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZG9tSGVhdEJvaWxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWF0Ym9pbGVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZG9tQ29vbEFpcmNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29sYWlyY29uJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvb3IuZGlzcGxheVN0YXRlKGRvbURvb3IpO1xuICAgIHRoaXMud2luZG93LmRpc3BsYXlTdGF0ZShkb21XaW5kb3cpO1xuICAgIHRoaXMuYWlyY29uLmRpc3BsYXlTdGF0ZShkb21Db29sQWlyY29uKTtcbiAgICB0aGlzLmJvaWxlci5kaXNwbGF5U3RhdGUoZG9tSGVhdEJvaWxlcik7XG4gIH1cblxuICBpbnN0YWxsKCkge1xuICAgIGNvbnN0IGRvbURvb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9vcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGRvbVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kb3cnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb21IZWF0Qm9pbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYXRib2lsZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb21Db29sQWlyY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2xhaXJjb24nKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGRvbURvb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmRvb3IuaXNDbG9zZWQoKSA/IHRoaXMuZG9vci5vcGVuKCkgOiB0aGlzLmRvb3IuY2xvc2UoKTtcbiAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH0pO1xuXG4gICAgZG9tV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy53aW5kb3cuaXNDbG9zZWQoKSA/IHRoaXMud2luZG93Lm9wZW4oKSA6IHRoaXMud2luZG93LmNsb3NlKCk7XG4gICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIGRvbUhlYXRCb2lsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmJvaWxlci5pc1J1bm5pbmcoKSA/IHRoaXMuYm9pbGVyLm9mZigpIDogdGhpcy5ib2lsZXIub24oKTtcbiAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH0pO1xuXG4gICAgZG9tQ29vbEFpcmNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuYWlyY29uLmlzUnVubmluZygpID8gdGhpcy5haXJjb24ub2ZmKCkgOiB0aGlzLmFpcmNvbi5vbigpO1xuICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpc3BsYXkoKTtcbiAgfVxufVxuIiwiaW1wb3J0IE1lZGlhdG9yIGZyb20gJy4vTWVkaWF0b3InO1xuaW1wb3J0IFBhcnRpY2lwYW50IGZyb20gJy4vUGFydGljaXBhbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3cgZXh0ZW5kcyBQYXJ0aWNpcGFudCB7XG4gIHByaXZhdGUgYkNsb3NlZCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IobWVkaWF0b3I6IE1lZGlhdG9yKSB7XG4gICAgc3VwZXIobWVkaWF0b3IpO1xuICB9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYkNsb3NlZCkgcmV0dXJuO1xuICAgIHRoaXMuYkNsb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMubWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYkNsb3NlZCkgcmV0dXJuO1xuICAgIHRoaXMuYkNsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBpc0Nsb3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5iQ2xvc2VkO1xuICB9XG5cbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBkb20uaW5uZXJIVE1MID0gdGhpcy5pc0Nsb3NlZCgpID8gJ+ywvSBDbG9zZWQnIDogJ+ywvSBPcGVuJztcblxuICAgIGlmICh0aGlzLmJDbG9zZWQpIGRvbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWxpZ2h0aW5nJyk7XG4gICAgZWxzZSBkb20uY2xhc3NMaXN0LmFkZCgnaGlsaWdodGluZycpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTbWFydEhvbWUgZnJvbSAnLi9TbWFydEhvbWUnO1xuXG5jb25zdCBob21lID0gbmV3IFNtYXJ0SG9tZSgpO1xuXG5ob21lLmluc3RhbGwoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==