/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/task 3.0/style.css":
/*!********************************!*\
  !*** ./src/task 3.0/style.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js_hw_09_2/./src/task_3.0/style.css?");

/***/ }),

/***/ "./src/task 3.0/index.js":
/*!*******************************!*\
  !*** ./src/task 3.0/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/task 3.0/style.css\");\n\n\nconst list_items = [\n  'Item 1',\n  'Item 2',\n  'Item 3',\n  'Item 4',\n  'Item 5',\n  'Item 6',\n  'Item 7',\n  'Item 8',\n  'Item 9',\n  'Item 10',\n  'Item 11',\n  'Item 12',\n  'Item 13',\n  'Item 14',\n  'Item 15',\n  'Item 16',\n  'Item 17',\n  'Item 18',\n  'Item 19',\n  'Item 20',\n  'Item 21',\n  'Item 22',\n];\n\nconst main = document.querySelector('main');\n\nclass Pagination {\n  constructor(data, limit, appendElemet) {\n    this.data = data;\n    this.currentPage = 1;\n    this.appendElemet = appendElemet;\n    this.limit = limit;\n    this.divItem = document.querySelector('#list');\n    this.divPagination = document.querySelector('#pagination');\n    this.allPages = Math.ceil(this.data.length / this.limit);\n    this.nextButton = '>';\n    this.previousButton = '<';\n    this.divPagination.addEventListener('click', this.onPageClick.bind(this));\n  }\n\n  createList() {\n    const start = (this.currentPage - 1) * this.limit;\n    const end = start + this.limit;\n    const arrayOfItem = this.data.slice(start, end);\n\n    arrayOfItem.forEach((elem) => {\n      const divList = document.createElement('div');\n      this.divItem.append(divList);\n      divList.innerText = elem;\n    });\n  }\n\n  createButton() {\n    const start = this.currentPage;\n    const end =\n      start + this.limit >= this.allPages ? this.allPages : start + this.limit;\n\n    for (let i = start; i <= end; i += 1) {\n      const divMain = document.createElement('div');\n      const aMain = document.createElement('a');\n      divMain.style.cursor = 'pointer';\n      divMain.append(aMain);\n      aMain.append(i);\n      this.divPagination.append(divMain);\n      divMain.setAttribute('id', 'button');\n    }\n    const arrowRight = document.createElement('div');\n    const arrowLeft = document.createElement('div');\n    arrowRight.setAttribute('id', 'buttonRight');\n    arrowLeft.setAttribute('id', 'buttonLeft');\n    arrowRight.innerText = this.nextButton;\n    arrowLeft.innerText = this.previousButton;\n    this.divPagination.prepend(arrowLeft);\n    this.divPagination.append(arrowRight);\n  }\n\n  // nextPreviousClick() {\n  //   this.event.stopPropagation();\n  //   this.divPagination.innerHTML = '';\n  //   this.divItem.innerHTML = '';\n  //   if (this.currentPage === 1 && event.target.innerText === '<') {\n  //     this.currentPage = 1;\n  //   }\n  //   // else if (\n  //   //   this.currentPage === this.allPages &&\n  //   //   event.target.innerText === \"<\"\n  //   // ) {\n  //   //   this.currentPage = this.allPages;\n  //   // }\n  //   this.render();\n  // }\n\n  onPageClick(event) {\n    this.divPagination.innerHTML = '';\n    this.divItem.innerHTML = '';\n    if (event.target.innerText === '<' && this.currentPage === 1) {\n      this.currentPage = 1;\n    } else if (\n      event.target.innerText === '>' &&\n      this.currentPage === this.allPages\n    ) {\n      this.currentPage = this.allPages;\n    } else if (event.target.innerText === '>') {\n      this.currentPage++;\n    } else if (event.target.innerText === '<') {\n      this.currentPage--;\n    } else if (event.target.innerText === '') {\n      this.currentPage = this.currentPage;\n    } else {\n      this.currentPage = parseInt(event.target.innerText);\n    }\n    this.render();\n  }\n\n  render() {\n    this.createButton();\n    this.createList();\n  }\n}\nconst b = new Pagination(list_items, 5, main);\n\nb.render();\n////////////////////???//?/?/?/?/??///////?/?????????\n\n\n//# sourceURL=webpack://js_hw_09_2/./src/task_3.0/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/task 3.0/index.js");
/******/ 	
/******/ })()
;