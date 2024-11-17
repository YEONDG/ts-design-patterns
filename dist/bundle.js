/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/observer/DiceGame.ts":
/*!**********************************!*\
  !*** ./src/observer/DiceGame.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DiceGame = /** @class */ (function () {
    function DiceGame() {
        this.players = new Array();
    }
    DiceGame.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    return DiceGame;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiceGame);


/***/ }),

/***/ "./src/observer/EvenBettingPlayer.ts":
/*!*******************************************!*\
  !*** ./src/observer/EvenBettingPlayer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/observer/Player.ts");
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

var EvenBettingPlayer = /** @class */ (function (_super) {
    __extends(EvenBettingPlayer, _super);
    function EvenBettingPlayer(name) {
        return _super.call(this, name) || this;
    }
    EvenBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = diceNumber % 2 === 0;
    };
    return EvenBettingPlayer;
}(_Player__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EvenBettingPlayer);


/***/ }),

/***/ "./src/observer/FairDiceGame.ts":
/*!**************************************!*\
  !*** ./src/observer/FairDiceGame.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DiceGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiceGame */ "./src/observer/DiceGame.ts");
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

var FairDiceGame = /** @class */ (function (_super) {
    __extends(FairDiceGame, _super);
    function FairDiceGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FairDiceGame.prototype.play = function () {
        var n = Math.floor(Math.random() * 6) + 1;
        this.players.forEach(function (player) {
            player.update(n);
        });
        return n;
    };
    return FairDiceGame;
}(_DiceGame__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FairDiceGame);


/***/ }),

/***/ "./src/observer/NBettingPlayer.ts":
/*!****************************************!*\
  !*** ./src/observer/NBettingPlayer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/observer/Player.ts");
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

var NBettingPlayer = /** @class */ (function (_super) {
    __extends(NBettingPlayer, _super);
    function NBettingPlayer(name, ns) {
        var _this = _super.call(this, name) || this;
        _this.ns = ns;
        return _this;
    }
    NBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = this.ns.includes(diceNumber);
    };
    return NBettingPlayer;
}(_Player__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NBettingPlayer);


/***/ }),

/***/ "./src/observer/OddBettingPlayer.ts":
/*!******************************************!*\
  !*** ./src/observer/OddBettingPlayer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/observer/Player.ts");
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

var OddBettingPlayer = /** @class */ (function (_super) {
    __extends(OddBettingPlayer, _super);
    function OddBettingPlayer(name) {
        return _super.call(this, name) || this;
    }
    OddBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = diceNumber % 2 === 1;
    };
    return OddBettingPlayer;
}(_Player__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OddBettingPlayer);


/***/ }),

/***/ "./src/observer/Player.ts":
/*!********************************!*\
  !*** ./src/observer/Player.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Player = /** @class */ (function () {
    function Player(_name) {
        this._name = _name;
        this._winning = false;
    }
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "winning", {
        get: function () {
            return this._winning;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


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
  !*** ./src/observer/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EvenBettingPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EvenBettingPlayer */ "./src/observer/EvenBettingPlayer.ts");
/* harmony import */ var _FairDiceGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FairDiceGame */ "./src/observer/FairDiceGame.ts");
/* harmony import */ var _NBettingPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NBettingPlayer */ "./src/observer/NBettingPlayer.ts");
/* harmony import */ var _OddBettingPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OddBettingPlayer */ "./src/observer/OddBettingPlayer.ts");




var diceGame = new _FairDiceGame__WEBPACK_IMPORTED_MODULE_1__["default"]();
var players = [
    new _OddBettingPlayer__WEBPACK_IMPORTED_MODULE_3__["default"]('홀쭉이'),
    new _EvenBettingPlayer__WEBPACK_IMPORTED_MODULE_0__["default"]('짝눈이'),
    new _NBettingPlayer__WEBPACK_IMPORTED_MODULE_2__["default"]('점쟁이', [2, 3, 5]),
];
players.forEach(function (player) {
    diceGame.addPlayer(player);
});
function updateBoard() {
    var domPlayers = document.querySelector('.players');
    domPlayers.innerHTML = '';
    players.forEach(function (player) {
        var domPlayer = document.createElement('div');
        domPlayer.innerText = player.name;
        if (player.winning)
            domPlayer.classList.add('win');
        domPlayers.append(domPlayer);
    });
}
updateBoard();
document.querySelector('button').addEventListener('click', function () {
    var diceNumber = diceGame.play();
    var domDice = document.querySelector('.dice');
    domDice.innerText = diceNumber.toString();
    updateBoard();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFbkMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQWdCLENBQUM7SUFDL0QsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFMUMsV0FBVyxFQUFFLENBQUM7QUFDaEIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvb2JzZXJ2ZXIvRGljZUdhbWUudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL29ic2VydmVyL0V2ZW5CZXR0aW5nUGxheWVyLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9vYnNlcnZlci9GYWlyRGljZUdhbWUudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL29ic2VydmVyL05CZXR0aW5nUGxheWVyLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9vYnNlcnZlci9PZGRCZXR0aW5nUGxheWVyLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9vYnNlcnZlci9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL29ic2VydmVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEaWNlR2FtZSB7XG4gIHByb3RlY3RlZCBwbGF5ZXJzID0gbmV3IEFycmF5PFBsYXllcj4oKTtcblxuICBhZGRQbGF5ZXIocGxheWVyOiBQbGF5ZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpO1xuICB9XG5cbiAgYWJzdHJhY3QgcGxheSgpOiBudW1iZXI7XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbkJldHRpbmdQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZShkaWNlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl93aW5uaW5nID0gZGljZU51bWJlciAlIDIgPT09IDA7XG4gIH1cbn1cbiIsImltcG9ydCBEaWNlR2FtZSBmcm9tICcuL0RpY2VHYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFpckRpY2VHYW1lIGV4dGVuZHMgRGljZUdhbWUge1xuICBwbGF5KCk6IG51bWJlciB7XG4gICAgY29uc3QgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICBwbGF5ZXIudXBkYXRlKG4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG47XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOQmV0dGluZ1BsYXllciBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcHJpdmF0ZSBuczogQXJyYXk8TnVtYmVyPikge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlKGRpY2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3dpbm5pbmcgPSB0aGlzLm5zLmluY2x1ZGVzKGRpY2VOdW1iZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2RkQmV0dGluZ1BsYXllciBleHRlbmRzIFBsYXllciB7XG4gIHVwZGF0ZShkaWNlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl93aW5uaW5nID0gZGljZU51bWJlciAlIDIgPT09IDE7XG4gIH1cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBsYXllciB7XG4gIHByb3RlY3RlZCBfd2lubmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hbWU6IHN0cmluZykge31cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IHdpbm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpbm5pbmc7XG4gIH1cblxuICBhYnN0cmFjdCB1cGRhdGUoZGljZU51bWJlcjogbnVtYmVyKTogdm9pZDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEV2ZW5CZXR0aW5nUGxheWVyIGZyb20gJy4vRXZlbkJldHRpbmdQbGF5ZXInO1xuaW1wb3J0IEZhaXJEaWNlR2FtZSBmcm9tICcuL0ZhaXJEaWNlR2FtZSc7XG5pbXBvcnQgTkJldHRpbmdQbGF5ZXIgZnJvbSAnLi9OQmV0dGluZ1BsYXllcic7XG5pbXBvcnQgT2RkQmV0dGluZ1BsYXllciBmcm9tICcuL09kZEJldHRpbmdQbGF5ZXInO1xuXG5jb25zdCBkaWNlR2FtZSA9IG5ldyBGYWlyRGljZUdhbWUoKTtcblxuY29uc3QgcGxheWVycyA9IFtcbiAgbmV3IE9kZEJldHRpbmdQbGF5ZXIoJ+2ZgOytieydtCcpLFxuICBuZXcgRXZlbkJldHRpbmdQbGF5ZXIoJ+ynneuIiOydtCcpLFxuICBuZXcgTkJldHRpbmdQbGF5ZXIoJ+ygkOyfgeydtCcsIFsyLCAzLCA1XSksXG5dO1xuXG5wbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICBkaWNlR2FtZS5hZGRQbGF5ZXIocGxheWVyKTtcbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVCb2FyZCgpIHtcbiAgY29uc3QgZG9tUGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzJyk7XG4gIGRvbVBsYXllcnMuaW5uZXJIVE1MID0gJyc7XG5cbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBkb21QbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb21QbGF5ZXIuaW5uZXJUZXh0ID0gcGxheWVyLm5hbWU7XG5cbiAgICBpZiAocGxheWVyLndpbm5pbmcpIGRvbVBsYXllci5jbGFzc0xpc3QuYWRkKCd3aW4nKTtcblxuICAgIGRvbVBsYXllcnMuYXBwZW5kKGRvbVBsYXllcik7XG4gIH0pO1xufVxuXG51cGRhdGVCb2FyZCgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgZGljZU51bWJlciA9IGRpY2VHYW1lLnBsYXkoKTtcblxuICBjb25zdCBkb21EaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpY2UnKSBhcyBIVE1MRWxlbWVudDtcbiAgZG9tRGljZS5pbm5lclRleHQgPSBkaWNlTnVtYmVyLnRvU3RyaW5nKCk7XG5cbiAgdXBkYXRlQm9hcmQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9