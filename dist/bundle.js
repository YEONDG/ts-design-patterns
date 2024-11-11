/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template/Article.ts":
/*!*********************************!*\
  !*** ./src/template/Article.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Article = /** @class */ (function () {
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    Article.prototype.getTitle = function () {
        return this.title;
    };
    Article.prototype.getContent = function () {
        return this.content;
    };
    Article.prototype.getFooter = function () {
        return this.footer;
    };
    return Article;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ "./src/template/DisplayArticleTemplate.ts":
/*!************************************************!*\
  !*** ./src/template/DisplayArticleTemplate.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DisplayArticleTemplate = /** @class */ (function () {
    function DisplayArticleTemplate(article) {
        var _this = this;
        this.article = article;
        this.displayHtml = function () {
            return "\n  ".concat(_this.titleHtml(), "\n  ").concat(_this.contentHtml(), "\n  ").concat(_this.footerHtml(), "\n  ");
        };
    }
    return DisplayArticleTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayArticleTemplate);


/***/ }),

/***/ "./src/template/EditableDisplayArticle.ts":
/*!************************************************!*\
  !*** ./src/template/EditableDisplayArticle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
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

var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    function EditableDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    EditableDisplayArticle.prototype.titleHtml = function () {
        return "<div><span>\uC81C\uBAA9</span><input value='".concat(this.article.getTitle(), "' /></div>");
    };
    EditableDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "".concat(item, "\n"); });
        return "<span>\uB0B4\uC6A9</span><br/><textarea cols='50' rows='5'>".concat(items.join(''), "</textarea>");
    };
    EditableDisplayArticle.prototype.footerHtml = function () {
        return "<div><span>\uAE00\uC4F4\uC774</span><input value='".concat(this.article.getFooter(), "'/></div>");
    };
    return EditableDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableDisplayArticle);


/***/ }),

/***/ "./src/template/SimpleDisplayArticle.ts":
/*!**********************************************!*\
  !*** ./src/template/SimpleDisplayArticle.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template/DisplayArticleTemplate.ts");
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

var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    function SimpleDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    SimpleDisplayArticle.prototype.titleHtml = function () {
        return "\n    <h1>".concat(this.article.getTitle(), "</h1>\n    ");
    };
    SimpleDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "<li>".concat(item, "</li>"); });
        return "<ul>".concat(items.join(''), "</ul>");
    };
    SimpleDisplayArticle.prototype.footerHtml = function () {
        return "<h3>".concat(this.article.getFooter(), "</h3>");
    };
    return SimpleDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplayArticle);


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
  !*** ./src/template/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/template/Article.ts");
/* harmony import */ var _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDisplayArticle */ "./src/template/EditableDisplayArticle.ts");
/* harmony import */ var _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleDisplayArticle */ "./src/template/SimpleDisplayArticle.ts");



var article = new _Article__WEBPACK_IMPORTED_MODULE_0__["default"]('반가워요 제목', ['하이', '두번쨰', '뭔데'], 'YDG');
var display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
document.querySelector('.content').innerHTML = display.displayHtml();
document.querySelector('.edit-mode').addEventListener('change', function (e) {
    var display;
    if (event.target.checked) {
        display = new _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__["default"](article);
    }
    else {
        display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
    }
    document.querySelector('.content').innerHTML = display.displayHtml();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFDRSxpQkFDVSxLQUFhLEVBQ2IsT0FBaUIsRUFDakIsTUFBYztRQUZkLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQztJQUVHLDBCQUFRLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVNLDRCQUFVLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFTSwyQkFBUyxHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7SUFDRSxnQ0FBc0IsT0FBZ0I7UUFBdEMsaUJBQTBDO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFFdEIsZ0JBQVcsR0FBRztZQUM1QixPQUFPLGNBQ1AsS0FBSSxDQUFDLFNBQVMsRUFBRSxpQkFDaEIsS0FBSSxDQUFDLFdBQVcsRUFBRSxpQkFDbEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxTQUNsQixDQUFDO1FBQ0YsQ0FBQyxDQUFDO0lBUnVDLENBQUM7SUFhNUMsNkJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y2RDtBQUU5RDtJQUFvRCwwQ0FBc0I7SUFheEUsZ0NBQVksT0FBZ0I7UUFDMUIsYUFBSyxZQUFDLE9BQU8sQ0FBQyxTQUFDO0lBQ2pCLENBQUM7SUFkUywwQ0FBUyxHQUFuQjtRQUNFLE9BQU8sc0RBQXFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGVBQVksQ0FBQztJQUNsRixDQUFDO0lBQ1MsNENBQVcsR0FBckI7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxpQkFBRyxJQUFJLE9BQUksRUFBWCxDQUFXLENBQUMsQ0FBQztRQUNuRSxPQUFPLHFFQUFvRCxLQUFLLENBQUMsSUFBSSxDQUNuRSxFQUFFLENBQ0gsZ0JBQWEsQ0FBQztJQUNqQixDQUFDO0lBQ1MsMkNBQVUsR0FBcEI7UUFDRSxPQUFPLDREQUFzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFXLENBQUM7SUFDbkYsQ0FBQztJQUlILDZCQUFDO0FBQUQsQ0FBQyxDQWhCbUQsK0RBQXNCLEdBZ0J6RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjZEO0FBRTlEO0lBQWtELHdDQUFzQjtJQWF0RSw4QkFBWSxPQUFnQjtRQUMxQixhQUFLLFlBQUMsT0FBTyxDQUFDLFNBQUM7SUFDakIsQ0FBQztJQWRTLHdDQUFTLEdBQW5CO1FBQ0UsT0FBTyxvQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxnQkFDNUIsQ0FBQztJQUNKLENBQUM7SUFDUywwQ0FBVyxHQUFyQjtRQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLHFCQUFPLElBQUksVUFBTyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDMUUsT0FBTyxjQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQU8sQ0FBQztJQUN0QyxDQUFDO0lBQ1MseUNBQVUsR0FBcEI7UUFDRSxPQUFPLGNBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBTyxDQUFDO0lBQ2hELENBQUM7SUFJSCwyQkFBQztBQUFELENBQUMsQ0FoQmlELCtEQUFzQixHQWdCdkU7Ozs7Ozs7O1VDbkJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05nQztBQUM4QjtBQUNKO0FBRTFELElBQU0sT0FBTyxHQUFHLElBQUksZ0RBQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRW5FLElBQU0sT0FBTyxHQUFHLElBQUksNkRBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRXJFLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQztJQUNoRSxJQUFJLE9BQU8sQ0FBQztJQUVaLElBQXVCLEtBQUssQ0FBQyxNQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0MsT0FBTyxHQUFHLElBQUksK0RBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLEdBQUcsSUFBSSw2REFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3ZFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3RlbXBsYXRlL0FydGljbGUudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3RlbXBsYXRlL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3RlbXBsYXRlL0VkaXRhYmxlRGlzcGxheUFydGljbGUudHMiLCJ3ZWJwYWNrOi8vdHMtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3RlbXBsYXRlL1NpbXBsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy90ZW1wbGF0ZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcnRpY2xlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgY29udGVudDogc3RyaW5nW10sXG4gICAgcHJpdmF0ZSBmb290ZXI6IHN0cmluZ1xuICApIHt9XG5cbiAgcHVibGljIGdldFRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29udGVudCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGb290ZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb290ZXI7XG4gIH1cbn1cbiIsImltcG9ydCBBcnRpY2xlIGZyb20gJy4vQXJ0aWNsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXJ0aWNsZTogQXJ0aWNsZSkge31cblxuICBwdWJsaWMgcmVhZG9ubHkgZGlzcGxheUh0bWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgJHt0aGlzLnRpdGxlSHRtbCgpfVxuICAke3RoaXMuY29udGVudEh0bWwoKX1cbiAgJHt0aGlzLmZvb3Rlckh0bWwoKX1cbiAgYDtcbiAgfTtcblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgdGl0bGVIdG1sKCk6IHN0cmluZztcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNvbnRlbnRIdG1sKCk6IHN0cmluZztcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGZvb3Rlckh0bWwoKTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IEFydGljbGUgZnJvbSAnLi9BcnRpY2xlJztcbmltcG9ydCBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIGZyb20gJy4vRGlzcGxheUFydGljbGVUZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRhYmxlRGlzcGxheUFydGljbGUgZXh0ZW5kcyBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIHtcbiAgcHJvdGVjdGVkIHRpdGxlSHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdj48c3Bhbj7soJzrqqk8L3NwYW4+PGlucHV0IHZhbHVlPScke3RoaXMuYXJ0aWNsZS5nZXRUaXRsZSgpfScgLz48L2Rpdj5gO1xuICB9XG4gIHByb3RlY3RlZCBjb250ZW50SHRtbCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoKGl0ZW0pID0+IGAke2l0ZW19XFxuYCk7XG4gICAgcmV0dXJuIGA8c3Bhbj7rgrTsmqk8L3NwYW4+PGJyLz48dGV4dGFyZWEgY29scz0nNTAnIHJvd3M9JzUnPiR7aXRlbXMuam9pbihcbiAgICAgICcnXG4gICAgKX08L3RleHRhcmVhPmA7XG4gIH1cbiAgcHJvdGVjdGVkIGZvb3Rlckh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxkaXY+PHNwYW4+6riA7JO07J20PC9zcGFuPjxpbnB1dCB2YWx1ZT0nJHt0aGlzLmFydGljbGUuZ2V0Rm9vdGVyKCl9Jy8+PC9kaXY+YDtcbiAgfVxuICBjb25zdHJ1Y3RvcihhcnRpY2xlOiBBcnRpY2xlKSB7XG4gICAgc3VwZXIoYXJ0aWNsZSk7XG4gIH1cbn1cbiIsImltcG9ydCBBcnRpY2xlIGZyb20gJy4vQXJ0aWNsZSc7XG5pbXBvcnQgRGlzcGxheUFydGljbGVUZW1wbGF0ZSBmcm9tICcuL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVEaXNwbGF5QXJ0aWNsZSBleHRlbmRzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xuICBwcm90ZWN0ZWQgdGl0bGVIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICA8aDE+JHt0aGlzLmFydGljbGUuZ2V0VGl0bGUoKX08L2gxPlxuICAgIGA7XG4gIH1cbiAgcHJvdGVjdGVkIGNvbnRlbnRIdG1sKCk6IHN0cmluZyB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmFydGljbGUuZ2V0Q29udGVudCgpLm1hcCgoaXRlbSkgPT4gYDxsaT4ke2l0ZW19PC9saT5gKTtcbiAgICByZXR1cm4gYDx1bD4ke2l0ZW1zLmpvaW4oJycpfTwvdWw+YDtcbiAgfVxuICBwcm90ZWN0ZWQgZm9vdGVySHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGgzPiR7dGhpcy5hcnRpY2xlLmdldEZvb3RlcigpfTwvaDM+YDtcbiAgfVxuICBjb25zdHJ1Y3RvcihhcnRpY2xlOiBBcnRpY2xlKSB7XG4gICAgc3VwZXIoYXJ0aWNsZSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFydGljbGUgZnJvbSAnLi9BcnRpY2xlJztcbmltcG9ydCBFZGl0YWJsZURpc3BsYXlBcnRpY2xlIGZyb20gJy4vRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSc7XG5pbXBvcnQgU2ltcGxlRGlzcGxheUFydGljbGUgZnJvbSAnLi9TaW1wbGVEaXNwbGF5QXJ0aWNsZSc7XG5cbmNvbnN0IGFydGljbGUgPSBuZXcgQXJ0aWNsZSgn67CY6rCA7JuM7JqUIOygnOuqqScsIFsn7ZWY7J20JywgJ+uRkOuyiOyosCcsICfrrZTrjbAnXSwgJ1lERycpO1xuXG5jb25zdCBkaXNwbGF5ID0gbmV3IFNpbXBsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5pbm5lckhUTUwgPSBkaXNwbGF5LmRpc3BsYXlIdG1sKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LW1vZGUnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICBsZXQgZGlzcGxheTtcblxuICBpZiAoKDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LnRhcmdldCkuY2hlY2tlZCkge1xuICAgIGRpc3BsYXkgPSBuZXcgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZShhcnRpY2xlKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5ID0gbmV3IFNpbXBsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5pbm5lckhUTUwgPSBkaXNwbGF5LmRpc3BsYXlIdG1sKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==