/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/sub.js":
/*!***********************!*\
  !*** ./src/js/sub.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hello": function() { return /* binding */ hello; }
/* harmony export */ });
// export文を使ってhello関数を定義する。
function hello() {
  alert("helloメソッドが実行された。");
}

/***/ }),

/***/ "./src/js/utils/backfaceFixed.js":
/*!***************************************!*\
  !*** ./src/js/utils/backfaceFixed.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backfaceFixed": function() { return /* binding */ backfaceFixed; }
/* harmony export */ });
//https:czenn.dev/tak_dcxi/articles/bbdb6cd9305ba4
var backfaceFixed = function backfaceFixed(fixed) {
  /**
   * 表示されているスクロールバーとの差分を計測し、背面固定時はその差分body要素に余白を生成する
   */
  var scrollbarWidth = window.innerWidth - document.body.clientWidth;
  document.body.style.paddingRight = fixed ? "".concat(scrollbarWidth, "px") : "";
  /**
   * スクロール位置を取得する要素を出力する(`html`or`body`)
   */

  var scrollingElement = function scrollingElement() {
    var browser = window.navigator.userAgent.toLowerCase();
    if ("scrollingElement" in document) return document.scrollingElement;
    if (browser.indexOf("webkit") > 0) return document.body;
    return document.documentElement;
  };
  /**
   * 変数にスクロール量を格納
   */


  var scrollY = fixed ? scrollingElement().scrollTop : parseInt(document.body.style.top || "0");
  /**
   * CSSで背面を固定
   */

  var styles = {
    height: "100vh",
    left: "0",
    overflow: "hidden",
    position: "fixed",
    top: "".concat(scrollY * -1, "px"),
    width: "100vw"
  };
  Object.keys(styles).forEach(function (key) {
    document.body.style[key] = fixed ? styles[key] : "";
  });
  /**
   * 背面固定解除時に元の位置にスクロールする
   */

  if (!fixed) window.scrollTo(0, scrollY * -1);
};



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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub */ "./src/js/sub.js");
/* harmony import */ var _utils_backfaceFixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/backfaceFixed */ "./src/js/utils/backfaceFixed.js");
// import 文を使って sub.js ファイルを読み込む。

 // sub.jsに定義されたJavaScriptを実行する。

(0,_sub__WEBPACK_IMPORTED_MODULE_0__.hello)();

var open = function open() {
  // 背面コンテンツのスクロールを無効にする
  (0,_utils_backfaceFixed__WEBPACK_IMPORTED_MODULE_1__.backfaceFixed)(true);
};

var close = function close() {
  // 背面コンテンツのスクロールの無効を解除する
  (0,_utils_backfaceFixed__WEBPACK_IMPORTED_MODULE_1__.backfaceFixed)(false);
};
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map