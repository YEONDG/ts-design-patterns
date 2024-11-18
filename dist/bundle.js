/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/prototype/Group.ts":
/*!********************************!*\
  !*** ./src/prototype/Group.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Group = /** @class */ (function () {
    function Group() {
        this.shapes = new Array();
    }
    Group.prototype.add = function (shape) {
        this.shapes.push(shape.copy());
        return this;
    };
    Group.prototype.copy = function () {
        var result = new Group();
        this.shapes.forEach(function (shape) { return result.add(shape); });
        return result;
    };
    Group.prototype.draw = function (canvas) {
        this.shapes.forEach(function (shape) { return shape.draw(canvas); });
        return this;
    };
    Group.prototype.moveOffset = function (dx, dy) {
        this.shapes.forEach(function (shape) { return shape.moveOffset(dx, dy); });
        return this;
    };
    return Group;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Group);


/***/ }),

/***/ "./src/prototype/Line.ts":
/*!*******************************!*\
  !*** ./src/prototype/Line.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Line = /** @class */ (function () {
    function Line(pt1, pt2) {
        this.pt1 = pt1.copy();
        this.pt2 = pt2.copy();
    }
    Line.prototype.setPt1 = function (pt) {
        this.pt1 = pt.copy();
        return this;
    };
    Line.prototype.setPt2 = function (pt) {
        this.pt2 = pt.copy();
        return this;
    };
    Line.prototype.getPt1 = function () {
        return this.pt1;
    };
    Line.prototype.getPt2 = function () {
        return this.pt2;
    };
    Line.prototype.copy = function () {
        var result = new Line(this.pt1, this.pt2);
        return result;
    };
    Line.prototype.draw = function (canvas) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(this.pt1.getX(), this.pt1.getY());
        ctx.lineTo(this.pt2.getX(), this.pt2.getY());
        ctx.stroke();
        return this;
    };
    Line.prototype.moveOffset = function (dx, dy) {
        this.pt1.moveOffset(dx, dy);
        this.pt2.moveOffset(dx, dy);
        return this;
    };
    return Line;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);


/***/ }),

/***/ "./src/prototype/Point.ts":
/*!********************************!*\
  !*** ./src/prototype/Point.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (v) {
        this.x = v;
        return this;
    };
    Point.prototype.setY = function (v) {
        this.y = v;
        return this;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.copy = function () {
        var result = new Point(this.x, this.y);
        return result;
    };
    Point.prototype.draw = function (canvas) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, 2 * Math.PI);
        ctx.fill();
        return this;
    };
    Point.prototype.moveOffset = function (dx, dy) {
        this.x += dx;
        this.y += dy;
        return this;
    };
    return Point;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Point);


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
  !*** ./src/prototype/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Group */ "./src/prototype/Group.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "./src/prototype/Line.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Point */ "./src/prototype/Point.ts");



var domCanvas = document.querySelector('canvas');
var pt1 = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](100, 100);
// pt1.draw(domCanvas);
var pt2 = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](200, 100);
// pt2.draw(domCanvas);
var line1 = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](pt1, pt2);
// line1.draw(domCanvas);
var pt3 = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](200, 200);
var pt4 = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](100, 200);
var line2 = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](pt2, pt3);
var line3 = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](pt3, pt4);
var line4 = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](pt4, pt1);
var rect = new _Group__WEBPACK_IMPORTED_MODULE_0__["default"]();
rect.add(line1).add(line2).add(line3).add(line4);
var cloneRect = rect.copy();
cloneRect.moveOffset(200, 200);
rect.moveOffset(-50, -50);
rect.draw(domCanvas);
cloneRect.draw(domCanvas);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDO0FBQ2hDLElBQU0sR0FBRyxHQUFHLElBQUksOENBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFaEMsSUFBTSxLQUFLLEdBQUcsSUFBSSw2Q0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqQyxJQUFNLEtBQUssR0FBRyxJQUFJLDZDQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksNkNBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFakMsSUFBTSxJQUFJLEdBQUcsSUFBSSw4Q0FBSyxFQUFFLENBQUM7QUFFekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVqRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckIsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9wcm90b3R5cGUvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3Byb3RvdHlwZS9MaW5lLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9wcm90b3R5cGUvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3Byb3RvdHlwZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvdG90eXBlIGZyb20gJy4vUHJvdG90eXBlJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXAgaW1wbGVtZW50cyBQcm90b3R5cGUsIFNoYXBlIHtcbiAgcHJpdmF0ZSBzaGFwZXMgPSBuZXcgQXJyYXk8U2hhcGUgfCBQcm90b3R5cGU+KCk7XG5cbiAgYWRkKHNoYXBlOiBTaGFwZSB8IFByb3RvdHlwZSkge1xuICAgIHRoaXMuc2hhcGVzLnB1c2goKHNoYXBlIGFzIFByb3RvdHlwZSkuY29weSgpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvcHkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEdyb3VwKCk7XG4gICAgdGhpcy5zaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHJlc3VsdC5hZGQoc2hhcGUpKTtcblxuICAgIHJldHVybiByZXN1bHQgYXMgdGhpcztcbiAgfVxuXG4gIGRyYXcoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHRoaXMge1xuICAgIHRoaXMuc2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiAoc2hhcGUgYXMgU2hhcGUpLmRyYXcoY2FudmFzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtb3ZlT2Zmc2V0KGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnNoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4gKHNoYXBlIGFzIFNoYXBlKS5tb3ZlT2Zmc2V0KGR4LCBkeSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9Qb2ludCc7XG5pbXBvcnQgUHJvdG90eXBlIGZyb20gJy4vUHJvdG90eXBlJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSBpbXBsZW1lbnRzIFByb3RvdHlwZSwgU2hhcGUge1xuICBwcml2YXRlIHB0MTogUG9pbnQ7XG4gIHByaXZhdGUgcHQyOiBQb2ludDtcblxuICBjb25zdHJ1Y3RvcihwdDE6IFBvaW50LCBwdDI6IFBvaW50KSB7XG4gICAgdGhpcy5wdDEgPSBwdDEuY29weSgpO1xuICAgIHRoaXMucHQyID0gcHQyLmNvcHkoKTtcbiAgfVxuXG4gIHNldFB0MShwdDogUG9pbnQpIHtcbiAgICB0aGlzLnB0MSA9IHB0LmNvcHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFB0MihwdDogUG9pbnQpIHtcbiAgICB0aGlzLnB0MiA9IHB0LmNvcHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFB0MSgpIHtcbiAgICByZXR1cm4gdGhpcy5wdDE7XG4gIH1cbiAgZ2V0UHQyKCkge1xuICAgIHJldHVybiB0aGlzLnB0MjtcbiAgfVxuXG4gIGNvcHkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IExpbmUodGhpcy5wdDEsIHRoaXMucHQyKTtcbiAgICByZXR1cm4gcmVzdWx0IGFzIHRoaXM7XG4gIH1cblxuICBkcmF3KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB0aGlzIHtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0aGlzLnB0MS5nZXRYKCksIHRoaXMucHQxLmdldFkoKSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLnB0Mi5nZXRYKCksIHRoaXMucHQyLmdldFkoKSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtb3ZlT2Zmc2V0KGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnB0MS5tb3ZlT2Zmc2V0KGR4LCBkeSk7XG4gICAgdGhpcy5wdDIubW92ZU9mZnNldChkeCwgZHkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgUHJvdG90eXBlIGZyb20gJy4vUHJvdG90eXBlJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQgaW1wbGVtZW50cyBQcm90b3R5cGUsIFNoYXBlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB4OiBudW1iZXIsIHByaXZhdGUgeTogbnVtYmVyKSB7fVxuXG4gIHNldFgodjogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFkodjogbnVtYmVyKSB7XG4gICAgdGhpcy55ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFgoKSB7XG4gICAgcmV0dXJuIHRoaXMueDtcbiAgfVxuXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIHRoaXMueTtcbiAgfVxuXG4gIGNvcHkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcbiAgICByZXR1cm4gcmVzdWx0IGFzIHRoaXM7XG4gIH1cblxuICBkcmF3KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB0aGlzIHtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgNCwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1vdmVPZmZzZXQoZHg6IG51bWJlciwgZHk6IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMueCArPSBkeDtcbiAgICB0aGlzLnkgKz0gZHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdyb3VwIGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IExpbmUgZnJvbSAnLi9MaW5lJztcbmltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcblxuY29uc3QgZG9tQ2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5cbmNvbnN0IHB0MSA9IG5ldyBQb2ludCgxMDAsIDEwMCk7XG4vLyBwdDEuZHJhdyhkb21DYW52YXMpO1xuXG5jb25zdCBwdDIgPSBuZXcgUG9pbnQoMjAwLCAxMDApO1xuLy8gcHQyLmRyYXcoZG9tQ2FudmFzKTtcblxuY29uc3QgbGluZTEgPSBuZXcgTGluZShwdDEsIHB0Mik7XG4vLyBsaW5lMS5kcmF3KGRvbUNhbnZhcyk7XG5cbmNvbnN0IHB0MyA9IG5ldyBQb2ludCgyMDAsIDIwMCk7XG5jb25zdCBwdDQgPSBuZXcgUG9pbnQoMTAwLCAyMDApO1xuXG5jb25zdCBsaW5lMiA9IG5ldyBMaW5lKHB0MiwgcHQzKTtcbmNvbnN0IGxpbmUzID0gbmV3IExpbmUocHQzLCBwdDQpO1xuY29uc3QgbGluZTQgPSBuZXcgTGluZShwdDQsIHB0MSk7XG5cbmNvbnN0IHJlY3QgPSBuZXcgR3JvdXAoKTtcblxucmVjdC5hZGQobGluZTEpLmFkZChsaW5lMikuYWRkKGxpbmUzKS5hZGQobGluZTQpO1xuXG5jb25zdCBjbG9uZVJlY3QgPSByZWN0LmNvcHkoKTtcbmNsb25lUmVjdC5tb3ZlT2Zmc2V0KDIwMCwgMjAwKTtcblxucmVjdC5tb3ZlT2Zmc2V0KC01MCwgLTUwKTtcblxucmVjdC5kcmF3KGRvbUNhbnZhcyk7XG5jbG9uZVJlY3QuZHJhdyhkb21DYW52YXMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9