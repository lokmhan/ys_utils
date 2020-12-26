/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aUtils"] = factory();
	else
		root["aUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/declare.js":
/*!******************************!*\
  !*** ./src/array/declare.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => /* binding */ map,\n/* harmony export */   \"reduce\": () => /* binding */ reduce,\n/* harmony export */   \"filter\": () => /* binding */ filter,\n/* harmony export */   \"find\": () => /* binding */ find,\n/* harmony export */   \"findIndex\": () => /* binding */ findIndex,\n/* harmony export */   \"every\": () => /* binding */ every,\n/* harmony export */   \"some\": () => /* binding */ some\n/* harmony export */ });\nfunction map(array, callback) {\r\n  const arr = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    const result = callback(value, index)\r\n    arr.push(result)\r\n  }\r\n  return arr\r\n}\r\nfunction reduce(array, callback, initValue) {\r\n  let total = initValue\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    total = callback(total, value, index)\r\n  }\r\n  return total\r\n}\r\n\r\nfunction filter(array, callback) {\r\n  const arr = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    const result = callback(value, index)\r\n    if (result) {\r\n      arr.push(value)\r\n    }\r\n  }\r\n  return arr\r\n}\r\n\r\nfunction find(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    const result = callback(value, index)\r\n    if (result) {\r\n      return value\r\n    }\r\n  }\r\n  return undefined\r\n}\r\nfunction findIndex(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    const result = callback(value, index)\r\n    if (result) {\r\n      return index\r\n    }\r\n  }\r\n  return -1\r\n}\r\nfunction every(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    const result = callback(value, index)\r\n    if (!result) {\r\n      return false\r\n    }\r\n  }\r\n}\r\nfunction some(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    const result = callback(value, index)\r\n    if (result) {\r\n      return true\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/array/declare.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique1\": () => /* binding */ unique1,\n/* harmony export */   \"unique2\": () => /* binding */ unique2,\n/* harmony export */   \"unique3\": () => /* binding */ unique3\n/* harmony export */ });\nfunction unique1(arr) {\r\n  const newArr = []\r\n  arr.forEach((value) => {\r\n    if (newArr.indexOf(value) === -1) {\r\n      newArr.push(value)\r\n    }\r\n  })\r\n  return newArr\r\n}\r\nfunction unique2(arr) {\r\n  const newArr = []\r\n  const contain = {}\r\n  arr.forEach((item) => {\r\n    if (!contain.hasOwnProperty(item)) {\r\n      newArr.push(item)\r\n      contain[item] = true\r\n    }\r\n  })\r\n  return newArr\r\n}\r\nfunction unique3(arr) {\r\n  return [...new Set(arr)]\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => /* binding */ apply\n/* harmony export */ });\nfunction apply(func, obj, args) {\r\n  if (obj === undefined || obj === null) {\r\n    obj = window\r\n  }\r\n  obj.tempFn = func\r\n  const result = obj.tempFn(...args)\r\n  delete obj.tempFn\r\n  return result\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => /* binding */ bind\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\nfunction bind(func, obj, ...args) {\r\n  return (...args2) => {\r\n    return func.call(obj, ...args, ...args2)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ call\n/* harmony export */ });\nfunction call(func, obj, ...args) {\r\n  if (obj === undefined || obj === null) {\r\n    obj = window\r\n  }\r\n  obj.tempFn = func\r\n  var result = obj.tempFn(...args)\r\n  delete obj.tempFn\r\n  return result\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => /* binding */ debounce\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\n\r\nfunction debounce(callback, delay) {\r\n  let timeout\r\n  return function (event) {\r\n    if (callback.timeoutId) {\r\n      clearTimeout(callback.timeoutId)\r\n    }\r\n    callback.timeoutId = setTimeout(() => {\r\n      callback.call(this, event)\r\n      delete callback.timeoutId\r\n    }, delay)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => /* binding */ throttle\n/* harmony export */ });\nfunction throttle(callback, delay) {\r\n  let startTime = 0 //默认值不要是Date.now() ==> 第一次时间理解调用\r\n  return function (event) {\r\n    // 节流函数/真正的事件回调函数 this是发生事件的标签\r\n    const currentTime = Date.now()\r\n\r\n    if (currentTime - startTime > delay) {\r\n      callback.call(this, event)\r\n      startTime = currentTime\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => /* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_0__.apply,\n/* harmony export */   \"call\": () => /* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_1__.default,\n/* harmony export */   \"bind\": () => /* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_2__.bind,\n/* harmony export */   \"throttle\": () => /* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_3__.throttle,\n/* harmony export */   \"debounce\": () => /* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_4__.debounce,\n/* harmony export */   \"map\": () => /* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.map,\n/* harmony export */   \"reduce\": () => /* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.reduce,\n/* harmony export */   \"filter\": () => /* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.filter,\n/* harmony export */   \"find\": () => /* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.find,\n/* harmony export */   \"findIndex\": () => /* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.findIndex,\n/* harmony export */   \"every\": () => /* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.every,\n/* harmony export */   \"some\": () => /* reexport safe */ _array_declare__WEBPACK_IMPORTED_MODULE_5__.some,\n/* harmony export */   \"unique1\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique1,\n/* harmony export */   \"unique2\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique2,\n/* harmony export */   \"unique3\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique3\n/* harmony export */ });\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _array_declare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declare */ \"./src/array/declare.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/main.js");
/******/ })()
;
});