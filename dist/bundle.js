/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/interpreter/ActionCommandExpression.ts":
/*!****************************************************!*\
  !*** ./src/interpreter/ActionCommandExpression.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommandExpression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommandExpression */ "./src/interpreter/CommandExpression.ts");
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

var ActionCommandExpression = /** @class */ (function (_super) {
    __extends(ActionCommandExpression, _super);
    function ActionCommandExpression(keyword) {
        return _super.call(this, keyword) || this;
    }
    ActionCommandExpression.prototype.parse = function (context) {
        if (!ActionCommandExpression.checkValidKeyword(this.keyword))
            return false;
        if (context.readNextKeyword() === null)
            return false;
        return true;
    };
    ActionCommandExpression.prototype.run = function () {
        console.log("CMD: ".concat(this.keyword));
        return true;
    };
    ActionCommandExpression.prototype.getDescription = function () {
        return this.keyword;
    };
    ActionCommandExpression.checkValidKeyword = function (keyword) {
        var bOk = keyword === 'FRONT' ||
            keyword === 'BACK' ||
            keyword === 'LEFT' ||
            keyword === 'RIGHT';
        return bOk;
    };
    return ActionCommandExpression;
}(_CommandExpression__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionCommandExpression);


/***/ }),

/***/ "./src/interpreter/BeginExpression.ts":
/*!********************************************!*\
  !*** ./src/interpreter/BeginExpression.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommandListExpression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommandListExpression */ "./src/interpreter/CommandListExpression.ts");

var BeginExpression = /** @class */ (function () {
    function BeginExpression() {
    }
    BeginExpression.prototype.parse = function (context) {
        if (BeginExpression.checkValidKeyword(context.getCurrentKeyword())) {
            context.readNextKeyword();
            this.expression = new _CommandListExpression__WEBPACK_IMPORTED_MODULE_0__["default"]();
            return this.expression.parse(context);
        }
        else {
            return false;
        }
    };
    BeginExpression.prototype.run = function () {
        return this.expression.run();
    };
    BeginExpression.prototype.getDescription = function () {
        return "BEGIN ".concat(this.expression.getDescription());
    };
    BeginExpression.checkValidKeyword = function (keyword) {
        return keyword === 'BEGIN';
    };
    return BeginExpression;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BeginExpression);


/***/ }),

/***/ "./src/interpreter/CommandExpression.ts":
/*!**********************************************!*\
  !*** ./src/interpreter/CommandExpression.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CommandExpression = /** @class */ (function () {
    function CommandExpression(keyword) {
        this.keyword = keyword;
    }
    return CommandExpression;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommandExpression);


/***/ }),

/***/ "./src/interpreter/CommandListExpression.ts":
/*!**************************************************!*\
  !*** ./src/interpreter/CommandListExpression.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionCommandExpression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionCommandExpression */ "./src/interpreter/ActionCommandExpression.ts");
/* harmony import */ var _LoopCommandExpretion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoopCommandExpretion */ "./src/interpreter/LoopCommandExpretion.ts");


var CommandListExpression = /** @class */ (function () {
    function CommandListExpression() {
        this.commands = new Array();
    }
    CommandListExpression.prototype.parse = function (context) {
        while (true) {
            var currentKeyword = context.getCurrentKeyword();
            if (currentKeyword === null) {
                return false;
            }
            else if (currentKeyword === 'END') {
                context.readNextKeyword();
                break;
            }
            else {
                var command = null;
                if (_LoopCommandExpretion__WEBPACK_IMPORTED_MODULE_1__["default"].checkValidKeyword(currentKeyword)) {
                    command = new _LoopCommandExpretion__WEBPACK_IMPORTED_MODULE_1__["default"](currentKeyword);
                }
                else if (_ActionCommandExpression__WEBPACK_IMPORTED_MODULE_0__["default"].checkValidKeyword(currentKeyword)) {
                    command = new _ActionCommandExpression__WEBPACK_IMPORTED_MODULE_0__["default"](currentKeyword);
                }
                if (command !== null) {
                    if (command.parse(context)) {
                        this.commands.push(command);
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        return true;
    };
    CommandListExpression.prototype.run = function () {
        var cntCommands = this.commands.length;
        for (var i = 0; i < cntCommands; i++) {
            var bOk = this.commands[i].run();
            if (!bOk) {
                return false;
            }
        }
        return true;
    };
    CommandListExpression.prototype.getDescription = function () {
        return ('{ ' +
            this.commands.map(function (command) { return command.getDescription(); }).join(', ') +
            ' }');
    };
    return CommandListExpression;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommandListExpression);


/***/ }),

/***/ "./src/interpreter/Context.ts":
/*!************************************!*\
  !*** ./src/interpreter/Context.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Context = /** @class */ (function () {
    function Context(script) {
        this.currentIndex = 0;
        this.keywords = script.split(' ');
    }
    Context.prototype.readNextKeyword = function () {
        this.currentIndex += 1;
        return this.getCurrentKeyword();
    };
    Context.prototype.getCurrentKeyword = function () {
        if (this.keywords.length > this.currentIndex) {
            return this.keywords[this.currentIndex];
        }
        else {
            return null;
        }
    };
    return Context;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);


/***/ }),

/***/ "./src/interpreter/LoopCommandExpretion.ts":
/*!*************************************************!*\
  !*** ./src/interpreter/LoopCommandExpretion.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommandExpression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommandExpression */ "./src/interpreter/CommandExpression.ts");
/* harmony import */ var _CommandListExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommandListExpression */ "./src/interpreter/CommandListExpression.ts");
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


var LoopCommandExpression = /** @class */ (function (_super) {
    __extends(LoopCommandExpression, _super);
    function LoopCommandExpression(keyword) {
        return _super.call(this, keyword) || this;
    }
    LoopCommandExpression.prototype.parse = function (context) {
        if (!LoopCommandExpression.checkValidKeyword(this.keyword))
            return false;
        var countKeyword = context.readNextKeyword();
        if (countKeyword === null)
            return false;
        var count = parseInt(countKeyword);
        if (isNaN(count))
            return false;
        this.loopCount = count;
        this.expression = new _CommandListExpression__WEBPACK_IMPORTED_MODULE_1__["default"]();
        if (context.readNextKeyword() === null)
            return false;
        return this.expression.parse(context);
    };
    LoopCommandExpression.prototype.run = function () {
        for (var i = 0; i < this.loopCount; i++) {
            if (!this.expression.run())
                return false;
        }
        return true;
    };
    LoopCommandExpression.prototype.getDescription = function () {
        return "LOOP ".concat(this.loopCount, " ").concat(this.expression.getDescription());
    };
    LoopCommandExpression.checkValidKeyword = function (keyword) {
        return keyword === 'LOOP';
    };
    return LoopCommandExpression;
}(_CommandExpression__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoopCommandExpression);


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
/*!**********************************!*\
  !*** ./src/interpreter/index.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BeginExpression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BeginExpression */ "./src/interpreter/BeginExpression.ts");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/interpreter/Context.ts");


/*
const script = 'BEGIN FRONT LOOP 2 BACK RIGHT END BACK END';

const context = new Context(script);

while (true) {
  const keyword = context.getCurrentKeyword();
  if (keyword === null) {
    break;
  }

  console.log(keyword);
  context.readNextKeyword();
}
*/
var script = 'BEGIN FRONT LOOP 3 LOOP 2 RIGHT BACK END RIGHT END BACK END';
console.log(script);
var context = new _Context__WEBPACK_IMPORTED_MODULE_1__["default"](script);
var expression = new _BeginExpression__WEBPACK_IMPORTED_MODULE_0__["default"]();
if (expression.parse(context)) {
    console.log(expression.getDescription());
    expression.run();
}
else {
    console.log('ERROR');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05nRDtBQUNoQjtBQUVoQzs7Ozs7Ozs7Ozs7Ozs7RUFjRTtBQUVGLElBQU0sTUFBTSxHQUFHLDZEQUE2RCxDQUFDO0FBRTdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFcEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxnREFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLElBQU0sVUFBVSxHQUFHLElBQUksd0RBQWUsRUFBRSxDQUFDO0FBRXpDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ25CLENBQUM7S0FBTSxDQUFDO0lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2ludGVycHJldGVyL0FjdGlvbkNvbW1hbmRFeHByZXNzaW9uLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9pbnRlcnByZXRlci9CZWdpbkV4cHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2ludGVycHJldGVyL0NvbW1hbmRFeHByZXNzaW9uLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9pbnRlcnByZXRlci9Db21tYW5kTGlzdEV4cHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2ludGVycHJldGVyL0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2ludGVycHJldGVyL0xvb3BDb21tYW5kRXhwcmV0aW9uLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9pbnRlcnByZXRlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbWFuZEV4cHJlc3Npb24gZnJvbSAnLi9Db21tYW5kRXhwcmVzc2lvbic7XG5pbXBvcnQgQ29udGV4dCBmcm9tICcuL0NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25Db21tYW5kRXhwcmVzc2lvbiBleHRlbmRzIENvbW1hbmRFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Ioa2V5d29yZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoa2V5d29yZCk7XG4gIH1cblxuICBwYXJzZShjb250ZXh0OiBDb250ZXh0KTogYm9vbGVhbiB7XG4gICAgaWYgKCFBY3Rpb25Db21tYW5kRXhwcmVzc2lvbi5jaGVja1ZhbGlkS2V5d29yZCh0aGlzLmtleXdvcmQpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGNvbnRleHQucmVhZE5leHRLZXl3b3JkKCkgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJ1bigpOiBib29sZWFuIHtcbiAgICBjb25zb2xlLmxvZyhgQ01EOiAke3RoaXMua2V5d29yZH1gKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMua2V5d29yZDtcbiAgfVxuXG4gIHN0YXRpYyBjaGVja1ZhbGlkS2V5d29yZChrZXl3b3JkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBiT2sgPVxuICAgICAga2V5d29yZCA9PT0gJ0ZST05UJyB8fFxuICAgICAga2V5d29yZCA9PT0gJ0JBQ0snIHx8XG4gICAgICBrZXl3b3JkID09PSAnTEVGVCcgfHxcbiAgICAgIGtleXdvcmQgPT09ICdSSUdIVCc7XG4gICAgcmV0dXJuIGJPaztcbiAgfVxufVxuIiwiaW1wb3J0IENvbW1hbmRMaXN0RXhwcmVzc2lvbiBmcm9tICcuL0NvbW1hbmRMaXN0RXhwcmVzc2lvbic7XG5pbXBvcnQgQ29udGV4dCBmcm9tICcuL0NvbnRleHQnO1xuaW1wb3J0IEV4cHJlc3Npb24gZnJvbSAnLi9FeHByZXNzaW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVnaW5FeHByZXNzaW9uIGltcGxlbWVudHMgRXhwcmVzc2lvbiB7XG4gIHByaXZhdGUgZXhwcmVzc2lvbjogQ29tbWFuZExpc3RFeHByZXNzaW9uO1xuXG4gIHBhcnNlKGNvbnRleHQ6IENvbnRleHQpOiBib29sZWFuIHtcbiAgICBpZiAoQmVnaW5FeHByZXNzaW9uLmNoZWNrVmFsaWRLZXl3b3JkKGNvbnRleHQuZ2V0Q3VycmVudEtleXdvcmQoKSkpIHtcbiAgICAgIGNvbnRleHQucmVhZE5leHRLZXl3b3JkKCk7XG4gICAgICB0aGlzLmV4cHJlc3Npb24gPSBuZXcgQ29tbWFuZExpc3RFeHByZXNzaW9uKCk7XG4gICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uLnBhcnNlKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcnVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb24ucnVuKCk7XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgQkVHSU4gJHt0aGlzLmV4cHJlc3Npb24uZ2V0RGVzY3JpcHRpb24oKX1gO1xuICB9XG4gIHN0YXRpYyBjaGVja1ZhbGlkS2V5d29yZChrZXl3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5d29yZCA9PT0gJ0JFR0lOJztcbiAgfVxufVxuIiwiaW1wb3J0IENvbnRleHQgZnJvbSAnLi9Db250ZXh0JztcbmltcG9ydCBFeHByZXNzaW9uIGZyb20gJy4vRXhwcmVzc2lvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbW1hbmRFeHByZXNzaW9uIGltcGxlbWVudHMgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBrZXl3b3JkOiBzdHJpbmcpIHt9XG5cbiAgYWJzdHJhY3QgcGFyc2UoY29udGV4dDogQ29udGV4dCk6IGJvb2xlYW47XG4gIGFic3RyYWN0IHJ1bigpOiBib29sZWFuO1xuICBhYnN0cmFjdCBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgQWN0aW9uQ29tbWFuZEV4cHJlc3Npb24gZnJvbSAnLi9BY3Rpb25Db21tYW5kRXhwcmVzc2lvbic7XG5pbXBvcnQgQ29tbWFuZEV4cHJlc3Npb24gZnJvbSAnLi9Db21tYW5kRXhwcmVzc2lvbic7XG5pbXBvcnQgQ29udGV4dCBmcm9tICcuL0NvbnRleHQnO1xuaW1wb3J0IEV4cHJlc3Npb24gZnJvbSAnLi9FeHByZXNzaW9uJztcbmltcG9ydCBMb29wQ29tbWFuZEV4cHJlc3Npb24gZnJvbSAnLi9Mb29wQ29tbWFuZEV4cHJldGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1hbmRMaXN0RXhwcmVzc2lvbiBpbXBsZW1lbnRzIEV4cHJlc3Npb24ge1xuICBwcml2YXRlIGNvbW1hbmRzID0gbmV3IEFycmF5PENvbW1hbmRFeHByZXNzaW9uPigpO1xuXG4gIHBhcnNlKGNvbnRleHQ6IENvbnRleHQpOiBib29sZWFuIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgY3VycmVudEtleXdvcmQgPSBjb250ZXh0LmdldEN1cnJlbnRLZXl3b3JkKCk7XG5cbiAgICAgIGlmIChjdXJyZW50S2V5d29yZCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRLZXl3b3JkID09PSAnRU5EJykge1xuICAgICAgICBjb250ZXh0LnJlYWROZXh0S2V5d29yZCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjb21tYW5kOiBDb21tYW5kRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgICAgICAgaWYgKExvb3BDb21tYW5kRXhwcmVzc2lvbi5jaGVja1ZhbGlkS2V5d29yZChjdXJyZW50S2V5d29yZCkpIHtcbiAgICAgICAgICBjb21tYW5kID0gbmV3IExvb3BDb21tYW5kRXhwcmVzc2lvbihjdXJyZW50S2V5d29yZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoQWN0aW9uQ29tbWFuZEV4cHJlc3Npb24uY2hlY2tWYWxpZEtleXdvcmQoY3VycmVudEtleXdvcmQpKSB7XG4gICAgICAgICAgY29tbWFuZCA9IG5ldyBBY3Rpb25Db21tYW5kRXhwcmVzc2lvbihjdXJyZW50S2V5d29yZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tbWFuZCAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChjb21tYW5kLnBhcnNlKGNvbnRleHQpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLnB1c2goY29tbWFuZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBydW4oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY250Q29tbWFuZHMgPSB0aGlzLmNvbW1hbmRzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNudENvbW1hbmRzOyBpKyspIHtcbiAgICAgIGNvbnN0IGJPayA9IHRoaXMuY29tbWFuZHNbaV0ucnVuKCk7XG4gICAgICBpZiAoIWJPaykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICAneyAnICtcbiAgICAgIHRoaXMuY29tbWFuZHMubWFwKChjb21tYW5kKSA9PiBjb21tYW5kLmdldERlc2NyaXB0aW9uKCkpLmpvaW4oJywgJykgK1xuICAgICAgJyB9J1xuICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHQge1xuICBwcml2YXRlIGtleXdvcmRzOiBzdHJpbmdbXTtcblxuICBwcml2YXRlIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3Ioc2NyaXB0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmtleXdvcmRzID0gc2NyaXB0LnNwbGl0KCcgJyk7XG4gIH1cblxuICByZWFkTmV4dEtleXdvcmQoKTogc3RyaW5nIHtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCArPSAxO1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRLZXl3b3JkKCk7XG4gIH1cblxuICBnZXRDdXJyZW50S2V5d29yZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmtleXdvcmRzLmxlbmd0aCA+IHRoaXMuY3VycmVudEluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5rZXl3b3Jkc1t0aGlzLmN1cnJlbnRJbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENvbW1hbmRFeHByZXNzaW9uIGZyb20gJy4vQ29tbWFuZEV4cHJlc3Npb24nO1xuaW1wb3J0IENvbW1hbmRMaXN0RXhwcmVzc2lvbiBmcm9tICcuL0NvbW1hbmRMaXN0RXhwcmVzc2lvbic7XG5pbXBvcnQgQ29udGV4dCBmcm9tICcuL0NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29wQ29tbWFuZEV4cHJlc3Npb24gZXh0ZW5kcyBDb21tYW5kRXhwcmVzc2lvbiB7XG4gIHByaXZhdGUgbG9vcENvdW50OiBudW1iZXI7XG4gIHByaXZhdGUgZXhwcmVzc2lvbjogQ29tbWFuZExpc3RFeHByZXNzaW9uO1xuXG4gIGNvbnN0cnVjdG9yKGtleXdvcmQ6IHN0cmluZykge1xuICAgIHN1cGVyKGtleXdvcmQpO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dDogQ29udGV4dCk6IGJvb2xlYW4ge1xuICAgIGlmICghTG9vcENvbW1hbmRFeHByZXNzaW9uLmNoZWNrVmFsaWRLZXl3b3JkKHRoaXMua2V5d29yZCkpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGNvdW50S2V5d29yZCA9IGNvbnRleHQucmVhZE5leHRLZXl3b3JkKCk7XG4gICAgaWYgKGNvdW50S2V5d29yZCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgY291bnQgPSBwYXJzZUludChjb3VudEtleXdvcmQpO1xuICAgIGlmIChpc05hTihjb3VudCkpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmxvb3BDb3VudCA9IGNvdW50O1xuXG4gICAgdGhpcy5leHByZXNzaW9uID0gbmV3IENvbW1hbmRMaXN0RXhwcmVzc2lvbigpO1xuICAgIGlmIChjb250ZXh0LnJlYWROZXh0S2V5d29yZCgpID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbi5wYXJzZShjb250ZXh0KTtcbiAgfVxuXG4gIHJ1bigpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG9vcENvdW50OyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5leHByZXNzaW9uLnJ1bigpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgTE9PUCAke3RoaXMubG9vcENvdW50fSAke3RoaXMuZXhwcmVzc2lvbi5nZXREZXNjcmlwdGlvbigpfWA7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tWYWxpZEtleXdvcmQoa2V5d29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGtleXdvcmQgPT09ICdMT09QJztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQmVnaW5FeHByZXNzaW9uIGZyb20gJy4vQmVnaW5FeHByZXNzaW9uJztcbmltcG9ydCBDb250ZXh0IGZyb20gJy4vQ29udGV4dCc7XG5cbi8qXG5jb25zdCBzY3JpcHQgPSAnQkVHSU4gRlJPTlQgTE9PUCAyIEJBQ0sgUklHSFQgRU5EIEJBQ0sgRU5EJztcblxuY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KHNjcmlwdCk7XG5cbndoaWxlICh0cnVlKSB7XG4gIGNvbnN0IGtleXdvcmQgPSBjb250ZXh0LmdldEN1cnJlbnRLZXl3b3JkKCk7XG4gIGlmIChrZXl3b3JkID09PSBudWxsKSB7XG4gICAgYnJlYWs7XG4gIH1cblxuICBjb25zb2xlLmxvZyhrZXl3b3JkKTtcbiAgY29udGV4dC5yZWFkTmV4dEtleXdvcmQoKTtcbn1cbiovXG5cbmNvbnN0IHNjcmlwdCA9ICdCRUdJTiBGUk9OVCBMT09QIDMgTE9PUCAyIFJJR0hUIEJBQ0sgRU5EIFJJR0hUIEVORCBCQUNLIEVORCc7XG5cbmNvbnNvbGUubG9nKHNjcmlwdCk7XG5cbmNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dChzY3JpcHQpO1xuY29uc3QgZXhwcmVzc2lvbiA9IG5ldyBCZWdpbkV4cHJlc3Npb24oKTtcblxuaWYgKGV4cHJlc3Npb24ucGFyc2UoY29udGV4dCkpIHtcbiAgY29uc29sZS5sb2coZXhwcmVzc2lvbi5nZXREZXNjcmlwdGlvbigpKTtcbiAgZXhwcmVzc2lvbi5ydW4oKTtcbn0gZWxzZSB7XG4gIGNvbnNvbGUubG9nKCdFUlJPUicpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9