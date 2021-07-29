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

/***/ "./src/task 2.2/style.css":
/*!********************************!*\
  !*** ./src/task 2.2/style.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js_hw_09_2/./src/task_2.2/style.css?");

/***/ }),

/***/ "./src/task 2.2/index.js":
/*!*******************************!*\
  !*** ./src/task 2.2/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/task 2.2/style.css\");\n\n\n// Задание 2.1\n// Напиши функцию delay(ms), которая возвращает промис,\n// переходящий в состояние \"resolved\" через ms миллисекунд.\n// Значением исполнившегося промиса должно быть то кол-во миллисекунд\n// которое передали во время вызова функции delay.\n// const delay = ms => {\n//   // Твой код\n// };\nconst logger = (time) => console.log(`Resolved after ${time}ms`);\n// // Вызовы функции для проверки\n// delay(2000).then(logger); // Resolved after 2000ms\n// delay(1000).then(logger); // Resolved after 1000ms\n// delay(1500).then(logger); // Resolved after 1500ms\n\nconst delay = (ms) => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve(ms);\n    }, ms);\n  });\n};\n\n// const promise = new Promise (resolve, regect{\n//   setTimeout(\"\")\n// })\n// delay(2000).then(logger); // Resolved after 2000ms\n// delay(1000).then(logger); // Resolved after 1000ms\n// delay(1500).then(logger); // Resolved after 1500ms\n\n\n//# sourceURL=webpack://js_hw_09_2/./src/task_2.2/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/task 2.2/index.js");
/******/ 	
/******/ })()
;