/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/facade/Cache.ts":
/*!*****************************!*\
  !*** ./src/facade/Cache.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Cache = /** @class */ (function () {
    function Cache() {
        this.cache = new Map();
    }
    Cache.prototype.put = function (row) {
        this.cache.set(row.name, row);
    };
    Cache.prototype.get = function (name) {
        return this.cache.get(name);
    };
    return Cache;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cache);


/***/ }),

/***/ "./src/facade/DBMS.ts":
/*!****************************!*\
  !*** ./src/facade/DBMS.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Row */ "./src/facade/Row.ts");

var DBMS = /** @class */ (function () {
    function DBMS() {
        this.db = new Map();
        this.db.set('jane', new _Row__WEBPACK_IMPORTED_MODULE_0__["default"]('Jane', '1990-01-01', 'test1@test.com'));
        this.db.set('john', new _Row__WEBPACK_IMPORTED_MODULE_0__["default"]('John', '1991-02-02', 'test2@test.com'));
        this.db.set('joe', new _Row__WEBPACK_IMPORTED_MODULE_0__["default"]('Joe', '1992-03-03', 'test3@test.com'));
    }
    DBMS.prototype.query = function (name, callback) {
        var _this = this;
        setTimeout(function () {
            callback(_this.db.get(name));
        }, 1500);
    };
    return DBMS;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DBMS);


/***/ }),

/***/ "./src/facade/Facade.ts":
/*!******************************!*\
  !*** ./src/facade/Facade.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cache */ "./src/facade/Cache.ts");
/* harmony import */ var _DBMS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DBMS */ "./src/facade/DBMS.ts");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ "./src/facade/Message.ts");



var Facade = /** @class */ (function () {
    function Facade() {
        this.dbms = new _DBMS__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.cache = new _Cache__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    Facade.prototype.queryName = function (name, onBeforeQuery, onAfterQuery, domOutput) {
        var _this = this;
        var row = this.cache.get(name);
        if (!row) {
            onBeforeQuery();
            this.dbms.query(name, function (row) {
                onAfterQuery();
                if (row) {
                    _this.cache.put(row);
                }
                var message = new _Message__WEBPACK_IMPORTED_MODULE_2__["default"](row);
                message.print(domOutput);
            });
        }
        else {
            var message = new _Message__WEBPACK_IMPORTED_MODULE_2__["default"](row);
            message.print(domOutput);
        }
    };
    return Facade;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Facade);


/***/ }),

/***/ "./src/facade/Message.ts":
/*!*******************************!*\
  !*** ./src/facade/Message.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Message = /** @class */ (function () {
    function Message(row) {
        this.row = row;
    }
    Message.prototype.print = function (dom) {
        var domLayout = document.createElement('div');
        domLayout.classList.add('layout');
        if (this.row) {
            domLayout.innerHTML = "\n        <div class=\"name\">".concat(this.row.name, "</div>\n        <div class=\"birthday\">").concat(this.row.birthday, "</div>\n        <div class=\"email\">").concat(this.row.email, "</div>\n        ");
        }
        else {
            domLayout.innerHTML = "\n        <div class=\"name\">No Data</div>\n        ";
        }
        dom.append(domLayout);
    };
    return Message;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);


/***/ }),

/***/ "./src/facade/Row.ts":
/*!***************************!*\
  !*** ./src/facade/Row.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Row = /** @class */ (function () {
    function Row(_name, _birthday, _email) {
        this._name = _name;
        this._birthday = _birthday;
        this._email = _email;
    }
    Object.defineProperty(Row.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    return Row;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);


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
/*!*****************************!*\
  !*** ./src/facade/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Facade */ "./src/facade/Facade.ts");
// import Cache from './Cache';
// import DBMS from './DBMS';
// import Message from './Message';

// const dbms = new DBMS();
// const cache = new Cache();
var domInput = document.querySelector('input');
var domButton = document.querySelector('button');
var domResult = document.querySelector('.result');
var facade = new _Facade__WEBPACK_IMPORTED_MODULE_0__["default"]();
domButton.addEventListener('click', function () {
    var name = domInput.value;
    facade.queryName(name, function () {
        domInput.value = '(조회중...)';
        domButton.disabled = true;
    }, function () {
        domInput.value = name;
        domButton.disabled = false;
    }, domResult);
    //   const row = cache.get(name);
    //   if (!row) {
    //     domInput.value = '(조회중...)';
    //     domButton.disabled = true;
    //     dbms.query(name, (row) => {
    //       domInput.value = name;
    //       domButton.disabled = false;
    //       if (row) {
    //         cache.put(row);
    //       }
    //       const message = new Message(row);
    //       message.print(domResult);
    //     });
    //   } else {
    //     const message = new Message(row);
    //     message.print(domResult);
    //   }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hDLE1BQU07QUFDUixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9mYWNhZGUvQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2ZhY2FkZS9EQk1TLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9mYWNhZGUvRmFjYWRlLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9mYWNhZGUvTWVzc2FnZS50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvZmFjYWRlL1Jvdy50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvZmFjYWRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3cgZnJvbSAnLi9Sb3cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWNoZSB7XG4gIHByaXZhdGUgY2FjaGU6IE1hcDxzdHJpbmcsIFJvdz4gPSBuZXcgTWFwKCk7XG5cbiAgcHV0KHJvdzogUm93KTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZS5zZXQocm93Lm5hbWUsIHJvdyk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKTogUm93IHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQobmFtZSk7XG4gIH1cbn1cbiIsImltcG9ydCBSb3cgZnJvbSAnLi9Sb3cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEQk1TIHtcbiAgcHJpdmF0ZSBkYiA9IG5ldyBNYXA8c3RyaW5nLCBSb3c+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYi5zZXQoJ2phbmUnLCBuZXcgUm93KCdKYW5lJywgJzE5OTAtMDEtMDEnLCAndGVzdDFAdGVzdC5jb20nKSk7XG4gICAgdGhpcy5kYi5zZXQoJ2pvaG4nLCBuZXcgUm93KCdKb2huJywgJzE5OTEtMDItMDInLCAndGVzdDJAdGVzdC5jb20nKSk7XG4gICAgdGhpcy5kYi5zZXQoJ2pvZScsIG5ldyBSb3coJ0pvZScsICcxOTkyLTAzLTAzJywgJ3Rlc3QzQHRlc3QuY29tJykpO1xuICB9XG5cbiAgcXVlcnkobmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHJvdzogUm93KSA9PiB2b2lkKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjayh0aGlzLmRiLmdldChuYW1lKSBhcyBSb3cpO1xuICAgIH0sIDE1MDApO1xuICB9XG59XG4iLCJpbXBvcnQgQ2FjaGUgZnJvbSAnLi9DYWNoZSc7XG5pbXBvcnQgREJNUyBmcm9tICcuL0RCTVMnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9NZXNzYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjYWRlIHtcbiAgcHJpdmF0ZSBkYm1zID0gbmV3IERCTVMoKTtcbiAgcHJpdmF0ZSBjYWNoZSA9IG5ldyBDYWNoZSgpO1xuXG4gIHF1ZXJ5TmFtZShcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgb25CZWZvcmVRdWVyeTogKCkgPT4gdm9pZCxcbiAgICBvbkFmdGVyUXVlcnk6ICgpID0+IHZvaWQsXG4gICAgZG9tT3V0cHV0OiBFbGVtZW50XG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHJvdyA9IHRoaXMuY2FjaGUuZ2V0KG5hbWUpO1xuICAgIGlmICghcm93KSB7XG4gICAgICBvbkJlZm9yZVF1ZXJ5KCk7XG5cbiAgICAgIHRoaXMuZGJtcy5xdWVyeShuYW1lLCAocm93KSA9PiB7XG4gICAgICAgIG9uQWZ0ZXJRdWVyeSgpO1xuICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgdGhpcy5jYWNoZS5wdXQocm93KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uocm93KTtcbiAgICAgICAgbWVzc2FnZS5wcmludChkb21PdXRwdXQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShyb3cpO1xuICAgICAgbWVzc2FnZS5wcmludChkb21PdXRwdXQpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFJvdyBmcm9tICcuL1Jvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdzogUm93KSB7fVxuXG4gIHByaW50KGRvbTogRWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZG9tTGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dCcpO1xuXG4gICAgaWYgKHRoaXMucm93KSB7XG4gICAgICBkb21MYXlvdXQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7dGhpcy5yb3cubmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJpcnRoZGF5XCI+JHt0aGlzLnJvdy5iaXJ0aGRheX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVtYWlsXCI+JHt0aGlzLnJvdy5lbWFpbH08L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tTGF5b3V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5ObyBEYXRhPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZG9tLmFwcGVuZChkb21MYXlvdXQpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSb3cge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfYmlydGhkYXk6IHN0cmluZyxcbiAgICBwcml2YXRlIF9lbWFpbDogc3RyaW5nXG4gICkge31cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBnZXQgYmlydGhkYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYmlydGhkYXk7XG4gIH1cbiAgZ2V0IGVtYWlsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBDYWNoZSBmcm9tICcuL0NhY2hlJztcbi8vIGltcG9ydCBEQk1TIGZyb20gJy4vREJNUyc7XG4vLyBpbXBvcnQgTWVzc2FnZSBmcm9tICcuL01lc3NhZ2UnO1xuXG5pbXBvcnQgRmFjYWRlIGZyb20gJy4vRmFjYWRlJztcblxuLy8gY29uc3QgZGJtcyA9IG5ldyBEQk1TKCk7XG4vLyBjb25zdCBjYWNoZSA9IG5ldyBDYWNoZSgpO1xuXG5jb25zdCBkb21JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBkb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbmNvbnN0IGRvbVJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQnKTtcblxuY29uc3QgZmFjYWRlID0gbmV3IEZhY2FkZSgpO1xuXG5kb21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb21JbnB1dC52YWx1ZTtcblxuICBmYWNhZGUucXVlcnlOYW1lKFxuICAgIG5hbWUsXG4gICAgKCkgPT4ge1xuICAgICAgZG9tSW5wdXQudmFsdWUgPSAnKOyhsO2ajOykkS4uLiknO1xuICAgICAgZG9tQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgICgpID0+IHtcbiAgICAgIGRvbUlucHV0LnZhbHVlID0gbmFtZTtcbiAgICAgIGRvbUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0sXG4gICAgZG9tUmVzdWx0XG4gICk7XG5cbiAgLy8gICBjb25zdCByb3cgPSBjYWNoZS5nZXQobmFtZSk7XG5cbiAgLy8gICBpZiAoIXJvdykge1xuICAvLyAgICAgZG9tSW5wdXQudmFsdWUgPSAnKOyhsO2ajOykkS4uLiknO1xuICAvLyAgICAgZG9tQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAvLyAgICAgZGJtcy5xdWVyeShuYW1lLCAocm93KSA9PiB7XG4gIC8vICAgICAgIGRvbUlucHV0LnZhbHVlID0gbmFtZTtcbiAgLy8gICAgICAgZG9tQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIC8vICAgICAgIGlmIChyb3cpIHtcbiAgLy8gICAgICAgICBjYWNoZS5wdXQocm93KTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uocm93KTtcbiAgLy8gICAgICAgbWVzc2FnZS5wcmludChkb21SZXN1bHQpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShyb3cpO1xuICAvLyAgICAgbWVzc2FnZS5wcmludChkb21SZXN1bHQpO1xuICAvLyAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9