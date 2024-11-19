/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/state/Player.ts":
/*!*****************************!*\
  !*** ./src/state/Player.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StandUpState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandUpState */ "./src/state/StandUpState.ts");

var Player = /** @class */ (function () {
    function Player(domTalk) {
        this.domTalk = domTalk;
        this.speed = 0;
        this.state = new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    }
    Player.prototype.getSpeed = function () {
        return this.speed;
    };
    Player.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Player.prototype.setState = function (state) {
        this.state = state;
    };
    Player.prototype.getState = function () {
        return this.state;
    };
    Player.prototype.talk = function (msg) {
        this.domTalk.innerText = msg;
    };
    return Player;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/state/RunState.ts":
/*!*******************************!*\
  !*** ./src/state/RunState.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StandUpState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandUpState */ "./src/state/StandUpState.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State */ "./src/state/State.ts");
/* harmony import */ var _WalkState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WalkState */ "./src/state/WalkState.ts");
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



var RunState = /** @class */ (function (_super) {
    __extends(RunState, _super);
    function RunState(player) {
        return _super.call(this, player) || this;
    }
    RunState.prototype.standUp = function () {
        this.player.talk('뛰다가 갑자기 서면 무릎 열 나가요...!');
        this.player.setSpeed(0);
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
    };
    RunState.prototype.sitDown = function () {
        this.player.talk('뛰다가 앉으려고? 너 죽을래?');
        this.player.setSpeed(0);
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
    };
    RunState.prototype.walk = function () {
        this.player.talk('속도를 줄일게요~');
        this.player.setSpeed(8);
        this.player.setState(new _WalkState__WEBPACK_IMPORTED_MODULE_2__["default"](this.player));
    };
    RunState.prototype.run = function () {
        this.player.talk('더 빨리 뛰라는 얘기지?');
        this.player.setSpeed(this.player.getSpeed() + 2);
    };
    RunState.prototype.getDescription = function () {
        return '뛰는 중';
    };
    return RunState;
}(_State__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RunState);


/***/ }),

/***/ "./src/state/SitDownState.ts":
/*!***********************************!*\
  !*** ./src/state/SitDownState.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StandUpState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandUpState */ "./src/state/StandUpState.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State */ "./src/state/State.ts");
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


var SitDownState = /** @class */ (function (_super) {
    __extends(SitDownState, _super);
    function SitDownState(player) {
        return _super.call(this, player) || this;
    }
    SitDownState.prototype.standUp = function () {
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
        this.player.talk('일어났다.');
    };
    SitDownState.prototype.sitDown = function () {
        this.player.talk('이미 앉아있어. 무리였어.');
    };
    SitDownState.prototype.walk = function () {
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
        this.player.talk('앉아서 어떻게 걸어? 일단 서자.');
    };
    SitDownState.prototype.run = function () {
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
        this.player.talk('앉아서 어떻게 뛰어? 일단 서자.');
    };
    SitDownState.prototype.getDescription = function () {
        return '앉아있음';
    };
    return SitDownState;
}(_State__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SitDownState);


/***/ }),

/***/ "./src/state/StandUpState.ts":
/*!***********************************!*\
  !*** ./src/state/StandUpState.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RunState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RunState */ "./src/state/RunState.ts");
/* harmony import */ var _SitDownState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SitDownState */ "./src/state/SitDownState.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./State */ "./src/state/State.ts");
/* harmony import */ var _WalkState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WalkState */ "./src/state/WalkState.ts");
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




var StandUpState = /** @class */ (function (_super) {
    __extends(StandUpState, _super);
    function StandUpState(player) {
        return _super.call(this, player) || this;
    }
    StandUpState.prototype.standUp = function () {
        this.player.talk('언제 움직일꺼야?');
    };
    StandUpState.prototype.sitDown = function () {
        this.player.setState(new _SitDownState__WEBPACK_IMPORTED_MODULE_1__["default"](this.player));
        this.player.talk('앉으니깐 편하고 좋습니다.');
    };
    StandUpState.prototype.walk = function () {
        this.player.setSpeed(8);
        this.player.setState(new _WalkState__WEBPACK_IMPORTED_MODULE_3__["default"](this.player));
        this.player.talk('걷기는 제2의 생각하기다..');
    };
    StandUpState.prototype.run = function () {
        this.player.setSpeed(10);
        this.player.setState(new _RunState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
        this.player.talk('갑자기 뛴다??');
    };
    StandUpState.prototype.getDescription = function () {
        return '제자리에 서 있음.';
    };
    return StandUpState;
}(_State__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandUpState);


/***/ }),

/***/ "./src/state/State.ts":
/*!****************************!*\
  !*** ./src/state/State.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var State = /** @class */ (function () {
    function State(player) {
        this.player = player;
    }
    return State;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);


/***/ }),

/***/ "./src/state/WalkState.ts":
/*!********************************!*\
  !*** ./src/state/WalkState.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RunState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RunState */ "./src/state/RunState.ts");
/* harmony import */ var _SitDownState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SitDownState */ "./src/state/SitDownState.ts");
/* harmony import */ var _StandUpState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandUpState */ "./src/state/StandUpState.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./State */ "./src/state/State.ts");
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




var WalkState = /** @class */ (function (_super) {
    __extends(WalkState, _super);
    function WalkState(player) {
        return _super.call(this, player) || this;
    }
    WalkState.prototype.standUp = function () {
        this.player.setSpeed(0);
        this.player.talk('멈춰...');
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_2__["default"](this.player));
    };
    WalkState.prototype.sitDown = function () {
        this.player.setSpeed(0);
        this.player.talk('걷다가 앉으면 넘어질 수 있어요...');
        this.player.setState(new _SitDownState__WEBPACK_IMPORTED_MODULE_1__["default"](this.player));
    };
    WalkState.prototype.walk = function () {
        this.player.talk('난 걷는 걸 좋아하지!');
    };
    WalkState.prototype.run = function () {
        this.player.setSpeed(20);
        this.player.talk('걷다가 뛰면 더 빨리 갈 수 있지!');
        this.player.setState(new _RunState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
    };
    WalkState.prototype.getDescription = function () {
        return '걷는 중';
    };
    return WalkState;
}(_State__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalkState);


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
/*!****************************!*\
  !*** ./src/state/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/state/Player.ts");

var domTalk = document.querySelector('.talk');
var domStand = document.querySelector('.stand');
var domSit = document.querySelector('.sit');
var domWalk = document.querySelector('.walk');
var domRun = document.querySelector('.run');
var player = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"](domTalk);
function putDescription() {
    var domDescription = document.querySelector('.description');
    domDescription.innerText = "".concat(player
        .getState()
        .getDescription(), " / \uC18D\uB3C4: ").concat(player.getSpeed(), " km/h");
}
putDescription();
domStand.addEventListener('click', function () {
    player.getState().standUp();
    putDescription();
});
domSit.addEventListener('click', function () {
    player.getState().sitDown();
    putDescription();
});
domWalk.addEventListener('click', function () {
    player.getState().walk();
    putDescription();
});
domRun.addEventListener('click', function () {
    player.getState().run();
    putDescription();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUcxQztJQW1CRSxnQkFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQWxCaEMsVUFBSyxHQUFXLENBQUMsQ0FBQztRQW1CeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHFEQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQWxCRCx5QkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCx5QkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBR0QseUJBQVEsR0FBUixVQUFTLEtBQVk7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELHlCQUFRLEdBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQU1ELHFCQUFJLEdBQUosVUFBSyxHQUFXO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQy9CLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCeUM7QUFDZDtBQUNRO0FBRXBDO0lBQXNDLDRCQUFLO0lBQ3pDLGtCQUFZLE1BQWM7UUFDeEIsYUFBSyxZQUFDLE1BQU0sQ0FBQyxTQUFDO0lBQ2hCLENBQUM7SUFFRCwwQkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFEQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUkscURBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsdUJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksa0RBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsc0JBQUcsR0FBSDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDRSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQ0EvQnFDLDhDQUFLLEdBK0IxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkN5QztBQUNkO0FBRTVCO0lBQTBDLGdDQUFLO0lBQzdDLHNCQUFZLE1BQWM7UUFDeEIsYUFBSyxZQUFDLE1BQU0sQ0FBQyxTQUFDO0lBQ2hCLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxxREFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMkJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUkscURBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwwQkFBRyxHQUFIO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxxREFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDRSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLENBM0J5Qyw4Q0FBSyxHQTJCOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJpQztBQUNRO0FBQ2Q7QUFDUTtBQUVwQztJQUEwQyxnQ0FBSztJQXFCN0Msc0JBQVksTUFBYztRQUN4QixhQUFLLFlBQUMsTUFBTSxDQUFDLFNBQUM7SUFDaEIsQ0FBQztJQXRCRCw4QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELDhCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFEQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsMkJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksa0RBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCwwQkFBRyxHQUFIO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxpREFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxxQ0FBYyxHQUFkO1FBQ0UsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUlILG1CQUFDO0FBQUQsQ0FBQyxDQXhCeUMsOENBQUssR0F3QjlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJEO0lBQ0UsZUFBc0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBUTFDLFlBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZpQztBQUNRO0FBQ0E7QUFDZDtBQUU1QjtJQUF1Qyw2QkFBSztJQUMxQyxtQkFBWSxNQUFjO1FBQ3hCLGFBQUssWUFBQyxNQUFNLENBQUMsU0FBQztJQUNoQixDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUkscURBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxxREFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHVCQUFHLEdBQUg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksaURBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsa0NBQWMsR0FBZDtRQUNFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQ0E5QnNDLDhDQUFLLEdBOEIzQzs7Ozs7Ozs7VUNwQ0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044QjtBQUU5QixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQztBQUMvRCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBZ0IsQ0FBQztBQUNqRSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBZ0IsQ0FBQztBQUM3RCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQztBQUMvRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBZ0IsQ0FBQztBQUU3RCxJQUFNLE1BQU0sR0FBRyxJQUFJLCtDQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbkMsU0FBUyxjQUFjO0lBQ3JCLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFnQixDQUFDO0lBQzdFLGNBQWMsQ0FBQyxTQUFTLEdBQUcsVUFBRyxNQUFNO1NBQ2pDLFFBQVEsRUFBRTtTQUNWLGNBQWMsRUFBRSw4QkFBVSxNQUFNLENBQUMsUUFBUSxFQUFFLFVBQU8sQ0FBQztBQUN4RCxDQUFDO0FBRUQsY0FBYyxFQUFFLENBQUM7QUFFakIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNqQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIsY0FBYyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQy9CLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QixjQUFjLEVBQUUsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDaEMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLGNBQWMsRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUMvQixNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEIsY0FBYyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvc3RhdGUvUGxheWVyLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdGF0ZS9SdW5TdGF0ZS50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvc3RhdGUvU2l0RG93blN0YXRlLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdGF0ZS9TdGFuZFVwU3RhdGUudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0YXRlL1N0YXRlLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdGF0ZS9XYWxrU3RhdGUudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0YXRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGFuZFVwU3RhdGUgZnJvbSAnLi9TdGFuZFVwU3RhdGUnO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vU3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSAwO1xuXG4gIGdldFNwZWVkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3BlZWQ7XG4gIH1cblxuICBzZXRTcGVlZChzcGVlZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0ZTogU3RhdGU7XG4gIHNldFN0YXRlKHN0YXRlOiBTdGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxuICBnZXRTdGF0ZSgpOiBTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVRhbGs6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBTdGFuZFVwU3RhdGUodGhpcyk7XG4gIH1cblxuICB0YWxrKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kb21UYWxrLmlubmVyVGV4dCA9IG1zZztcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgU3RhbmRVcFN0YXRlIGZyb20gJy4vU3RhbmRVcFN0YXRlJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL1N0YXRlJztcbmltcG9ydCBXYWxrU3RhdGUgZnJvbSAnLi9XYWxrU3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdW5TdGF0ZSBleHRlbmRzIFN0YXRlIHtcbiAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIpIHtcbiAgICBzdXBlcihwbGF5ZXIpO1xuICB9XG5cbiAgc3RhbmRVcCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci50YWxrKCfrm7Dri6TqsIAg6rCR7J6Q6riwIOyEnOuptCDrrLTrpo4g7Je0IOuCmOqwgOyalC4uLiEnKTtcbiAgICB0aGlzLnBsYXllci5zZXRTcGVlZCgwKTtcbiAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgU3RhbmRVcFN0YXRlKHRoaXMucGxheWVyKSk7XG4gIH1cblxuICBzaXREb3duKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnRhbGsoJ+ubsOuLpOqwgCDslYnsnLzroKTqs6A/IOuEiCDso73snYTrnpg/Jyk7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3BlZWQoMCk7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFN0YW5kVXBTdGF0ZSh0aGlzLnBsYXllcikpO1xuICB9XG5cbiAgd2FsaygpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci50YWxrKCfsho3rj4Trpbwg7KSE7J286rKM7JqUficpO1xuICAgIHRoaXMucGxheWVyLnNldFNwZWVkKDgpO1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBXYWxrU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgfVxuXG4gIHJ1bigpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci50YWxrKCfrjZQg67mo66asIOubsOudvOuKlCDslpjquLDsp4A/Jyk7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3BlZWQodGhpcy5wbGF5ZXIuZ2V0U3BlZWQoKSArIDIpO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ+ubsOuKlCDspJEnO1xuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbmltcG9ydCBTdGFuZFVwU3RhdGUgZnJvbSAnLi9TdGFuZFVwU3RhdGUnO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vU3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaXREb3duU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyKSB7XG4gICAgc3VwZXIocGxheWVyKTtcbiAgfVxuXG4gIHN0YW5kVXAoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFN0YW5kVXBTdGF0ZSh0aGlzLnBsYXllcikpO1xuICAgIHRoaXMucGxheWVyLnRhbGsoJ+ydvOyWtOuCrOuLpC4nKTtcbiAgfVxuXG4gIHNpdERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIudGFsaygn7J2066+4IOyVieyVhOyeiOyWtC4g66y066as7JiA7Ja0LicpO1xuICB9XG5cbiAgd2FsaygpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgU3RhbmRVcFN0YXRlKHRoaXMucGxheWVyKSk7XG4gICAgdGhpcy5wbGF5ZXIudGFsaygn7JWJ7JWE7IScIOyWtOuWu+qyjCDqsbjslrQ/IOydvOuLqCDshJzsnpAuJyk7XG4gIH1cblxuICBydW4oKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFN0YW5kVXBTdGF0ZSh0aGlzLnBsYXllcikpO1xuICAgIHRoaXMucGxheWVyLnRhbGsoJ+yVieyVhOyEnCDslrTrlrvqsowg65uw7Ja0PyDsnbzri6gg7ISc7J6QLicpO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ+yVieyVhOyeiOydjCc7XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IFJ1blN0YXRlIGZyb20gJy4vUnVuU3RhdGUnO1xuaW1wb3J0IFNpdERvd25TdGF0ZSBmcm9tICcuL1NpdERvd25TdGF0ZSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9TdGF0ZSc7XG5pbXBvcnQgV2Fsa1N0YXRlIGZyb20gJy4vV2Fsa1N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhbmRVcFN0YXRlIGV4dGVuZHMgU3RhdGUge1xuICBzdGFuZFVwKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnRhbGsoJ+yWuOygnCDsm4Dsp4Hsnbzqurzslbw/Jyk7XG4gIH1cbiAgc2l0RG93bigpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgU2l0RG93blN0YXRlKHRoaXMucGxheWVyKSk7XG4gICAgdGhpcy5wbGF5ZXIudGFsaygn7JWJ7Jy864uI6rmQIO2OuO2VmOqzoCDsoovsirXri4jri6QuJyk7XG4gIH1cbiAgd2FsaygpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5zZXRTcGVlZCg4KTtcbiAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgV2Fsa1N0YXRlKHRoaXMucGxheWVyKSk7XG4gICAgdGhpcy5wbGF5ZXIudGFsaygn6rG36riw64qUIOygnDLsnZgg7IOd6rCB7ZWY6riw64ukLi4nKTtcbiAgfVxuICBydW4oKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3BlZWQoMTApO1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBSdW5TdGF0ZSh0aGlzLnBsYXllcikpO1xuICAgIHRoaXMucGxheWVyLnRhbGsoJ+qwkeyekOq4sCDrm7Tri6Q/PycpO1xuICB9XG4gIGdldERlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICfsoJzsnpDrpqzsl5Ag7IScIOyeiOydjC4nO1xuICB9XG4gIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyKSB7XG4gICAgc3VwZXIocGxheWVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFN0YXRlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBsYXllcjogUGxheWVyKSB7fVxuXG4gIGFic3RyYWN0IHN0YW5kVXAoKTogdm9pZDtcbiAgYWJzdHJhY3Qgc2l0RG93bigpOiB2b2lkO1xuICBhYnN0cmFjdCB3YWxrKCk6IHZvaWQ7XG4gIGFic3RyYWN0IHJ1bigpOiB2b2lkO1xuXG4gIGFic3RyYWN0IGdldERlc2NyaXB0aW9uKCk6IHN0cmluZztcbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IFJ1blN0YXRlIGZyb20gJy4vUnVuU3RhdGUnO1xuaW1wb3J0IFNpdERvd25TdGF0ZSBmcm9tICcuL1NpdERvd25TdGF0ZSc7XG5pbXBvcnQgU3RhbmRVcFN0YXRlIGZyb20gJy4vU3RhbmRVcFN0YXRlJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL1N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2Fsa1N0YXRlIGV4dGVuZHMgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllcikge1xuICAgIHN1cGVyKHBsYXllcik7XG4gIH1cblxuICBzdGFuZFVwKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFNwZWVkKDApO1xuICAgIHRoaXMucGxheWVyLnRhbGsoJ+upiOy2sC4uLicpO1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBTdGFuZFVwU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgfVxuXG4gIHNpdERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3BlZWQoMCk7XG4gICAgdGhpcy5wbGF5ZXIudGFsaygn6rG364uk6rCAIOyVieycvOuptCDrhJjslrTsp4gg7IiYIOyeiOyWtOyalC4uLicpO1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBTaXREb3duU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgfVxuXG4gIHdhbGsoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIudGFsaygn64KcIOqxt+uKlCDqsbgg7KKL7JWE7ZWY7KeAIScpO1xuICB9XG5cbiAgcnVuKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFNwZWVkKDIwKTtcbiAgICB0aGlzLnBsYXllci50YWxrKCfqsbfri6TqsIAg65uw66m0IOuNlCDruajrpqwg6rCIIOyImCDsnojsp4AhJyk7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFJ1blN0YXRlKHRoaXMucGxheWVyKSk7XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiAn6rG364qUIOykkSc7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5cbmNvbnN0IGRvbVRhbGsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFsaycpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgZG9tU3RhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhbmQnKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGRvbVNpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXQnKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGRvbVdhbGsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2FsaycpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgZG9tUnVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJ1bicpIGFzIEhUTUxFbGVtZW50O1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKGRvbVRhbGspO1xuXG5mdW5jdGlvbiBwdXREZXNjcmlwdGlvbigpIHtcbiAgY29uc3QgZG9tRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKSBhcyBIVE1MRWxlbWVudDtcbiAgZG9tRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYCR7cGxheWVyXG4gICAgLmdldFN0YXRlKClcbiAgICAuZ2V0RGVzY3JpcHRpb24oKX0gLyDsho3rj4Q6ICR7cGxheWVyLmdldFNwZWVkKCl9IGttL2hgO1xufVxuXG5wdXREZXNjcmlwdGlvbigpO1xuXG5kb21TdGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcGxheWVyLmdldFN0YXRlKCkuc3RhbmRVcCgpO1xuICBwdXREZXNjcmlwdGlvbigpO1xufSk7XG5cbmRvbVNpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcGxheWVyLmdldFN0YXRlKCkuc2l0RG93bigpO1xuICBwdXREZXNjcmlwdGlvbigpO1xufSk7XG5cbmRvbVdhbGsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBsYXllci5nZXRTdGF0ZSgpLndhbGsoKTtcbiAgcHV0RGVzY3JpcHRpb24oKTtcbn0pO1xuXG5kb21SdW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBsYXllci5nZXRTdGF0ZSgpLnJ1bigpO1xuICBwdXREZXNjcmlwdGlvbigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=