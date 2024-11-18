/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/proxy/ProxyImage.ts":
/*!*********************************!*\
  !*** ./src/proxy/ProxyImage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RealImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RealImage */ "./src/proxy/RealImage.ts");

var ProxyImage = /** @class */ (function () {
    function ProxyImage(title, url, parent) {
        this.title = title;
        this.url = url;
        this.parent = parent;
        this.image = null;
        this.domLayout = null;
        this.domTitle = null;
        this.domLayout = document.createElement('div');
        this.domLayout.classList.add('layout');
        this.parent.append(this.domLayout);
        this.domTitle = document.createElement('div');
        this.domTitle.classList.add('title-proxy');
        this.domTitle.innerHTML = "<span>".concat(this.title, "</span><br/><span>Click to load</span>");
        this.domLayout.append(this.domTitle);
    }
    ProxyImage.prototype.append = function () {
        var _this = this;
        if (this.image)
            return;
        this.domLayout.addEventListener('click', function () {
            _this.domLayout.style.border = 'none';
            _this.domLayout.innerHTML = '';
            _this.image = new _RealImage__WEBPACK_IMPORTED_MODULE_0__["default"](_this.title, _this.url, _this.domLayout);
            _this.image.append();
        });
    };
    return ProxyImage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProxyImage);


/***/ }),

/***/ "./src/proxy/RealImage.ts":
/*!********************************!*\
  !*** ./src/proxy/RealImage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RealImage = /** @class */ (function () {
    function RealImage(title, url, parent) {
        this.title = title;
        this.url = url;
        this.parent = parent;
        this.domLayout = null;
        this.domTitle = null;
        this.domImage = null;
        this.domLoading = null;
        this.domLayout = document.createElement('div');
        this.domLayout.classList.add('layout');
        this.parent.appendChild(this.domLayout);
        this.domTitle = document.createElement('div');
        this.domTitle.classList.add('title');
        this.domTitle.innerText = this.title;
        this.domLayout.append(this.domTitle);
        this.domLoading = document.createElement('div');
        this.domLoading.classList.add('loading');
        this.domLoading.innerText = 'Loading...';
    }
    RealImage.prototype.append = function () {
        var _this = this;
        if (this.domImage)
            return;
        this.domImage = new Image();
        this.domLayout.append(this.domLoading);
        this.domImage.src = this.url;
        this.domImage.onload = function () {
            setTimeout(function () {
                _this.domLayout.removeChild(_this.domLoading);
                _this.domLayout.append(_this.domImage);
            }, Math.random() * 5000 + 3000);
        };
    };
    return RealImage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RealImage);


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
  !*** ./src/proxy/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProxyImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProxyImage */ "./src/proxy/ProxyImage.ts");

var items = [
    [
        '설산야경',
        'https://cdn.bhdw.net/im/snow-mountain-night-wallpaper-81305_w635.webp',
    ],
    [
        '외로운늑대',
        'https://cdn.bhdw.net/im/fantasy-world-wallpaper-29897_w635.webp',
    ],
    [
        '강변황혼',
        'https://cdn.bhdw.net/im/sunset-minimalist-wallpaper-81072_w635.webp',
    ],
    [
        '일출',
        'https://cdn.bhdw.net/im/sunset-scenery-minimalist-wallpaper-81379_w635.webp',
    ],
    [
        '지구탈출',
        'https://cdn.bhdw.net/im/mountain-scenery-art-wallpaper-81095_w635.webp',
    ],
    [
        '고양이',
        'https://wallpapers.com/images/hd/cute-praying-animal-kitten-fhuzpz6q5d3l5qpw.webp',
    ],
    [
        '사마귀',
        'https://wallpapers.com/images/high/sparkling-brown-praying-mantis-brhsitcpcco26pcl.webp',
    ],
    [
        '앵무새',
        'https://wallpapers.com/images/high/golden-conure-parrots-bifvcsdpuwm1gxlf.webp',
    ],
    [
        '비둘기',
        'https://wallpapers.com/images/high/flying-homing-pigeon-low-angle-shot-bliq95v02wjt2d7b.webp',
    ],
    [
        '벌',
        'https://wallpapers.com/images/high/bee-desktop-wallpaper-c0hpghgtppnmux5f.webp',
    ],
    [
        '닭',
        'https://wallpapers.com/images/high/rooster-tied-in-rock-9x6089a6edflz844.webp',
    ],
    [
        '도마뱀',
        'https://wallpapers.com/images/high/green-gecko-reptile-atv6058gd3fj8ors.webp',
    ],
    [
        '노란앵무새',
        'https://wallpapers.com/images/high/two-conure-parrots-with-blurry-backdrop-elrhq1l9840e79xd.webp',
    ],
    [
        '하얀비둘기',
        'https://wallpapers.com/images/high/elegant-white-indian-fantail-pigeons-cxlk42hr0htvks8p.webp',
    ],
    [
        '부엉이',
        'https://wallpapers.com/images/high/little-owlet-animal-lg0huhcfvtwb6kci.webp',
    ],
    [
        '무지개비둘기',
        'https://wallpapers.com/images/high/colorful-homing-pigeon-birds-macro-shot-64tnhxlh4t361yxq.webp',
    ],
    [
        '뱀',
        'https://wallpapers.com/images/high/cobra-close-up-hissing-tongue-4l5lbdbi3rblrsjj.webp',
    ],
];
var domList = document.querySelector('.list');
items.forEach(function (item) {
    var title = item[0];
    var url = item[1];
    //   const img = new RealImage(title, url, domList);
    var img = new _ProxyImage__WEBPACK_IMPORTED_MODULE_0__["default"](title, url, domList);
    img.append();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hELEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3Byb3h5L1Byb3h5SW1hZ2UudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3Byb3h5L1JlYWxJbWFnZS50cyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvLi9zcmMvcHJveHkvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnO1xuaW1wb3J0IFJlYWxJbWFnZSBmcm9tICcuL1JlYWxJbWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3h5SW1hZ2UgaW1wbGVtZW50cyBJbWFnZSB7XG4gIHByaXZhdGUgaW1hZ2U6IFJlYWxJbWFnZSA9IG51bGw7XG4gIHByaXZhdGUgZG9tTGF5b3V0OiBIVE1MRGl2RWxlbWVudCA9IG51bGw7XG4gIHByaXZhdGUgZG9tVGl0bGU6IEhUTUxEaXZFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZyxcbiAgICBwcml2YXRlIHBhcmVudDogRWxlbWVudFxuICApIHtcbiAgICB0aGlzLmRvbUxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZG9tTGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dCcpO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmRvbUxheW91dCk7XG5cbiAgICB0aGlzLmRvbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5kb21UaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1wcm94eScpO1xuICAgIHRoaXMuZG9tVGl0bGUuaW5uZXJIVE1MID0gYDxzcGFuPiR7dGhpcy50aXRsZX08L3NwYW4+PGJyLz48c3Bhbj5DbGljayB0byBsb2FkPC9zcGFuPmA7XG4gICAgdGhpcy5kb21MYXlvdXQuYXBwZW5kKHRoaXMuZG9tVGl0bGUpO1xuICB9XG5cbiAgYXBwZW5kKCkge1xuICAgIGlmICh0aGlzLmltYWdlKSByZXR1cm47XG4gICAgdGhpcy5kb21MYXlvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmRvbUxheW91dC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICB0aGlzLmRvbUxheW91dC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgUmVhbEltYWdlKHRoaXMudGl0bGUsIHRoaXMudXJsLCB0aGlzLmRvbUxheW91dCk7XG4gICAgICB0aGlzLmltYWdlLmFwcGVuZCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWxJbWFnZSBpbXBsZW1lbnRzIEltYWdlIHtcbiAgcHJpdmF0ZSBkb21MYXlvdXQ6IEhUTUxEaXZFbGVtZW50ID0gbnVsbDtcbiAgcHJpdmF0ZSBkb21UaXRsZTogSFRNTERpdkVsZW1lbnQgPSBudWxsO1xuICBwcml2YXRlIGRvbUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbnVsbDtcbiAgcHJpdmF0ZSBkb21Mb2FkaW5nOiBIVE1MRGl2RWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IEVsZW1lbnRcbiAgKSB7XG4gICAgdGhpcy5kb21MYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmRvbUxheW91dC5jbGFzc0xpc3QuYWRkKCdsYXlvdXQnKTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmRvbUxheW91dCk7XG5cbiAgICB0aGlzLmRvbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5kb21UaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRoaXMuZG9tVGl0bGUuaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcbiAgICB0aGlzLmRvbUxheW91dC5hcHBlbmQodGhpcy5kb21UaXRsZSk7XG5cbiAgICB0aGlzLmRvbUxvYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmRvbUxvYWRpbmcuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICAgIHRoaXMuZG9tTG9hZGluZy5pbm5lclRleHQgPSAnTG9hZGluZy4uLic7XG4gIH1cblxuICBhcHBlbmQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZG9tSW1hZ2UpIHJldHVybjtcbiAgICB0aGlzLmRvbUltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICB0aGlzLmRvbUxheW91dC5hcHBlbmQodGhpcy5kb21Mb2FkaW5nKTtcbiAgICB0aGlzLmRvbUltYWdlLnNyYyA9IHRoaXMudXJsO1xuXG4gICAgdGhpcy5kb21JbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kb21MYXlvdXQucmVtb3ZlQ2hpbGQodGhpcy5kb21Mb2FkaW5nKTtcbiAgICAgICAgdGhpcy5kb21MYXlvdXQuYXBwZW5kKHRoaXMuZG9tSW1hZ2UpO1xuICAgICAgfSwgTWF0aC5yYW5kb20oKSAqIDUwMDAgKyAzMDAwKTtcbiAgICB9O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm94eUltYWdlIGZyb20gJy4vUHJveHlJbWFnZSc7XG5pbXBvcnQgUmVhbEltYWdlIGZyb20gJy4vUmVhbEltYWdlJztcblxuY29uc3QgaXRlbXMgPSBbXG4gIFtcbiAgICAn7ISk7IKw7JW86rK9JyxcbiAgICAnaHR0cHM6Ly9jZG4uYmhkdy5uZXQvaW0vc25vdy1tb3VudGFpbi1uaWdodC13YWxscGFwZXItODEzMDVfdzYzNS53ZWJwJyxcbiAgXSxcbiAgW1xuICAgICfsmbjroZzsmrTripHrjIAnLFxuICAgICdodHRwczovL2Nkbi5iaGR3Lm5ldC9pbS9mYW50YXN5LXdvcmxkLXdhbGxwYXBlci0yOTg5N193NjM1LndlYnAnLFxuICBdLFxuICBbXG4gICAgJ+qwleuzgO2Zqe2YvCcsXG4gICAgJ2h0dHBzOi8vY2RuLmJoZHcubmV0L2ltL3N1bnNldC1taW5pbWFsaXN0LXdhbGxwYXBlci04MTA3Ml93NjM1LndlYnAnLFxuICBdLFxuICBbXG4gICAgJ+ydvOy2nCcsXG4gICAgJ2h0dHBzOi8vY2RuLmJoZHcubmV0L2ltL3N1bnNldC1zY2VuZXJ5LW1pbmltYWxpc3Qtd2FsbHBhcGVyLTgxMzc5X3c2MzUud2VicCcsXG4gIF0sXG4gIFtcbiAgICAn7KeA6rWs7YOI7LacJyxcbiAgICAnaHR0cHM6Ly9jZG4uYmhkdy5uZXQvaW0vbW91bnRhaW4tc2NlbmVyeS1hcnQtd2FsbHBhcGVyLTgxMDk1X3c2MzUud2VicCcsXG4gIF0sXG4gIFtcbiAgICAn6rOg7JaR7J20JyxcbiAgICAnaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGQvY3V0ZS1wcmF5aW5nLWFuaW1hbC1raXR0ZW4tZmh1enB6NnE1ZDNsNXFwdy53ZWJwJyxcbiAgXSxcbiAgW1xuICAgICfsgqzrp4jqt4AnLFxuICAgICdodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL3NwYXJrbGluZy1icm93bi1wcmF5aW5nLW1hbnRpcy1icmhzaXRjcGNjbzI2cGNsLndlYnAnLFxuICBdLFxuICBbXG4gICAgJ+yVteustOyDiCcsXG4gICAgJ2h0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvZ29sZGVuLWNvbnVyZS1wYXJyb3RzLWJpZnZjc2RwdXdtMWd4bGYud2VicCcsXG4gIF0sXG4gIFtcbiAgICAn67mE65GY6riwJyxcbiAgICAnaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9mbHlpbmctaG9taW5nLXBpZ2Vvbi1sb3ctYW5nbGUtc2hvdC1ibGlxOTV2MDJ3anQyZDdiLndlYnAnLFxuICBdLFxuICBbXG4gICAgJ+uyjCcsXG4gICAgJ2h0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvYmVlLWRlc2t0b3Atd2FsbHBhcGVyLWMwaHBnaGd0cHBubXV4NWYud2VicCcsXG4gIF0sXG4gIFtcbiAgICAn64utJyxcbiAgICAnaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9yb29zdGVyLXRpZWQtaW4tcm9jay05eDYwODlhNmVkZmx6ODQ0LndlYnAnLFxuICBdLFxuICBbXG4gICAgJ+uPhOuniOuxgCcsXG4gICAgJ2h0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvZ3JlZW4tZ2Vja28tcmVwdGlsZS1hdHY2MDU4Z2QzZmo4b3JzLndlYnAnLFxuICBdLFxuICBbXG4gICAgJ+uFuOuegOyVteustOyDiCcsXG4gICAgJ2h0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvdHdvLWNvbnVyZS1wYXJyb3RzLXdpdGgtYmx1cnJ5LWJhY2tkcm9wLWVscmhxMWw5ODQwZTc5eGQud2VicCcsXG4gIF0sXG4gIFtcbiAgICAn7ZWY7JaA67mE65GY6riwJyxcbiAgICAnaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9lbGVnYW50LXdoaXRlLWluZGlhbi1mYW50YWlsLXBpZ2VvbnMtY3hsazQyaHIwaHR2a3M4cC53ZWJwJyxcbiAgXSxcbiAgW1xuICAgICfrtoDsl4nsnbQnLFxuICAgICdodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL2xpdHRsZS1vd2xldC1hbmltYWwtbGcwaHVoY2Z2dHdiNmtjaS53ZWJwJyxcbiAgXSxcbiAgW1xuICAgICfrrLTsp4DqsJzruYTrkZjquLAnLFxuICAgICdodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL2NvbG9yZnVsLWhvbWluZy1waWdlb24tYmlyZHMtbWFjcm8tc2hvdC02NHRuaHhsaDR0MzYxeXhxLndlYnAnLFxuICBdLFxuICBbXG4gICAgJ+uxgCcsXG4gICAgJ2h0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvY29icmEtY2xvc2UtdXAtaGlzc2luZy10b25ndWUtNGw1bGJkYmkzcmJscnNqai53ZWJwJyxcbiAgXSxcbl07XG5cbmNvbnN0IGRvbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuXG5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gaXRlbVswXTtcbiAgY29uc3QgdXJsID0gaXRlbVsxXTtcblxuICAvLyAgIGNvbnN0IGltZyA9IG5ldyBSZWFsSW1hZ2UodGl0bGUsIHVybCwgZG9tTGlzdCk7XG4gIGNvbnN0IGltZyA9IG5ldyBQcm94eUltYWdlKHRpdGxlLCB1cmwsIGRvbUxpc3QpO1xuICBpbWcuYXBwZW5kKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==