/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/memento/BlindMan.ts":
/*!*********************************!*\
  !*** ./src/memento/BlindMan.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   Memento: () => (/* binding */ Memento),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Action;
(function (Action) {
    Action[Action["UP"] = 1] = "UP";
    Action[Action["DOWN"] = 2] = "DOWN";
    Action[Action["LEFT"] = 3] = "LEFT";
    Action[Action["RIGHT"] = 4] = "RIGHT";
})(Action || (Action = {}));
var Memento = /** @class */ (function () {
    function Memento(_x, _y, actions) {
        this._x = _x;
        this._y = _y;
        this._actions = new Array();
        this._actions = structuredClone(actions);
    }
    Object.defineProperty(Memento.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Memento.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Memento.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    return Memento;
}());

var BlindMan = /** @class */ (function () {
    function BlindMan(currentX, currentY, targetX, targetY) {
        this.currentX = currentX;
        this.currentY = currentY;
        this.targetX = targetX;
        this.targetY = targetY;
        this.actions = new Array();
    }
    BlindMan.prototype.walk = function (action) {
        this.actions.push(action);
        if (action === Action.UP)
            this.currentY += 1;
        else if (action === Action.RIGHT)
            this.currentX += 1;
        else if (action === Action.DOWN)
            this.currentY -= 1;
        else if (action === Action.LEFT)
            this.currentX -= 1;
        return Math.sqrt(Math.pow(this.currentX - this.targetX, 2) +
            Math.pow(this.currentY - this.targetY, 2));
    };
    BlindMan.prototype.createMemento = function () {
        var memento = new Memento(this.currentX, this.currentY, this.actions);
        return memento;
    };
    BlindMan.prototype.restoreMemento = function (memento) {
        this.currentX = memento.x;
        this.currentY = memento.y;
        this.actions = structuredClone(memento.actions);
    };
    BlindMan.prototype.resultPath = function () {
        return this.actions.map(function (action) { return Action[action]; }).join(' -> ');
    };
    return BlindMan;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlindMan);


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
  !*** ./src/memento/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlindMan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlindMan */ "./src/memento/BlindMan.ts");

var blindMan = new _BlindMan__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 10, 10);
var minDistance = Number.MAX_VALUE;
var memento = null;
while (true) {
    var action = Math.floor(Math.random() * 4) + 1;
    var distance = blindMan.walk(action);
    console.log(_BlindMan__WEBPACK_IMPORTED_MODULE_0__.Action[action], distance);
    if (distance === 0.0) {
        console.log('도착!');
        break;
    }
    if (minDistance > distance) {
        minDistance = distance;
        memento = blindMan.createMemento();
    }
    else {
        if (memento != null) {
            blindMan.restoreMemento(memento);
        }
    }
}
console.log(blindMan.resultPath());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNyQyxDQUFDO1NBQU0sQ0FBQztRQUNOLElBQUksT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9tZW1lbnRvL0JsaW5kTWFuLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9tZW1lbnRvL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEFjdGlvbiB7XG4gIFVQID0gMSxcbiAgRE9XTiA9IDIsXG4gIExFRlQgPSAzLFxuICBSSUdIVCA9IDQsXG59XG5cbmV4cG9ydCBjbGFzcyBNZW1lbnRvIHtcbiAgcHJpdmF0ZSBfYWN0aW9ucyA9IG5ldyBBcnJheTxBY3Rpb24+KCk7XG4gIGdldCBhY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfeDogbnVtYmVyLCBwcml2YXRlIF95OiBudW1iZXIsIGFjdGlvbnM6IEFycmF5PEFjdGlvbj4pIHtcbiAgICB0aGlzLl9hY3Rpb25zID0gc3RydWN0dXJlZENsb25lKGFjdGlvbnMpO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3g7XG4gIH1cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxpbmRNYW4ge1xuICBwcml2YXRlIGFjdGlvbnMgPSBuZXcgQXJyYXk8QWN0aW9uPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY3VycmVudFg6IG51bWJlcixcbiAgICBwcml2YXRlIGN1cnJlbnRZOiBudW1iZXIsXG4gICAgcHJpdmF0ZSB0YXJnZXRYOiBudW1iZXIsXG4gICAgcHJpdmF0ZSB0YXJnZXRZOiBudW1iZXJcbiAgKSB7fVxuXG4gIHdhbGsoYWN0aW9uOiBBY3Rpb24pOiBudW1iZXIge1xuICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XG5cbiAgICBpZiAoYWN0aW9uID09PSBBY3Rpb24uVVApIHRoaXMuY3VycmVudFkgKz0gMTtcbiAgICBlbHNlIGlmIChhY3Rpb24gPT09IEFjdGlvbi5SSUdIVCkgdGhpcy5jdXJyZW50WCArPSAxO1xuICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gQWN0aW9uLkRPV04pIHRoaXMuY3VycmVudFkgLT0gMTtcbiAgICBlbHNlIGlmIChhY3Rpb24gPT09IEFjdGlvbi5MRUZUKSB0aGlzLmN1cnJlbnRYIC09IDE7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3codGhpcy5jdXJyZW50WCAtIHRoaXMudGFyZ2V0WCwgMikgK1xuICAgICAgICBNYXRoLnBvdyh0aGlzLmN1cnJlbnRZIC0gdGhpcy50YXJnZXRZLCAyKVxuICAgICk7XG4gIH1cblxuICBjcmVhdGVNZW1lbnRvKCk6IE1lbWVudG8ge1xuICAgIGNvbnN0IG1lbWVudG8gPSBuZXcgTWVtZW50byh0aGlzLmN1cnJlbnRYLCB0aGlzLmN1cnJlbnRZLCB0aGlzLmFjdGlvbnMpO1xuICAgIHJldHVybiBtZW1lbnRvO1xuICB9XG5cbiAgcmVzdG9yZU1lbWVudG8obWVtZW50bzogTWVtZW50bykge1xuICAgIHRoaXMuY3VycmVudFggPSBtZW1lbnRvLng7XG4gICAgdGhpcy5jdXJyZW50WSA9IG1lbWVudG8ueTtcbiAgICB0aGlzLmFjdGlvbnMgPSBzdHJ1Y3R1cmVkQ2xvbmUobWVtZW50by5hY3Rpb25zKTtcbiAgfVxuXG4gIHJlc3VsdFBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiBBY3Rpb25bYWN0aW9uXSkuam9pbignIC0+ICcpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCbGluZE1hbiwgeyBBY3Rpb24sIE1lbWVudG8gfSBmcm9tICcuL0JsaW5kTWFuJztcblxuY29uc3QgYmxpbmRNYW4gPSBuZXcgQmxpbmRNYW4oMCwgMCwgMTAsIDEwKTtcblxubGV0IG1pbkRpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRTtcbmxldCBtZW1lbnRvOiBNZW1lbnRvID0gbnVsbDtcblxud2hpbGUgKHRydWUpIHtcbiAgY29uc3QgYWN0aW9uOiBBY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDE7XG4gIGNvbnN0IGRpc3RhbmNlID0gYmxpbmRNYW4ud2FsayhhY3Rpb24pO1xuXG4gIGNvbnNvbGUubG9nKEFjdGlvblthY3Rpb25dLCBkaXN0YW5jZSk7XG5cbiAgaWYgKGRpc3RhbmNlID09PSAwLjApIHtcbiAgICBjb25zb2xlLmxvZygn64+E7LCpIScpO1xuICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKG1pbkRpc3RhbmNlID4gZGlzdGFuY2UpIHtcbiAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIG1lbWVudG8gPSBibGluZE1hbi5jcmVhdGVNZW1lbnRvKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG1lbWVudG8gIT0gbnVsbCkge1xuICAgICAgYmxpbmRNYW4ucmVzdG9yZU1lbWVudG8obWVtZW50byk7XG4gICAgfVxuICB9XG59XG5cbmNvbnNvbGUubG9nKGJsaW5kTWFuLnJlc3VsdFBhdGgoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=