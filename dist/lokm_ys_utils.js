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
		exports["ysUtils"] = factory();
	else
		root["ysUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => /* binding */ chunk\n/* harmony export */ });\n// 将数组拆分成多个 size 长度的区块， 每个区块组成小数组，整体组成个一个二维数组\r\n\r\nfunction chunk(array, size) {\r\n  let bigArr = []\r\n  let smallArr = []\r\n  // 如果是空数组， 直接返回空数组\r\n  if (array.length === 0) {\r\n    return bigArr\r\n  }\r\n  // 处理size\r\n  if (size < 1) {\r\n    size = 1\r\n  }\r\n\r\n  array.forEach((item) => {\r\n    // 将smallArr push 到 bigArr中\r\n    if (smallArr.length === 0) {\r\n      bigArr.push(smallArr)\r\n    }\r\n    // 将元素添加到 smallArr\r\n    smallArr.push(item)\r\n    // 当smallArr.length为size时，让smallArr指向一个新的空数组\r\n    if (smallArr.length === size) {\r\n      smallArr = []\r\n    }\r\n  })\r\n\r\n  return bigArr\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*\
  !*** ./src/array/compact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compact\": () => /* binding */ compact\n/* harmony export */ });\nfunction compact(array) {\r\n  return array.filter((item) => item)\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/array/compact.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => /* binding */ concat\n/* harmony export */ });\nfunction concat(array, ...values) {\r\n  const arr = [...array]\r\n  values.forEach((value) => {\r\n    if (Array.isArray(value)) {\r\n      arr.push(...value)\r\n    } else {\r\n      arr.push(value)\r\n    }\r\n  })\r\n  return arr\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => /* binding */ map,\n/* harmony export */   \"reduce\": () => /* binding */ reduce,\n/* harmony export */   \"filter\": () => /* binding */ filter,\n/* harmony export */   \"find\": () => /* binding */ find,\n/* harmony export */   \"findIndex\": () => /* binding */ findIndex,\n/* harmony export */   \"every\": () => /* binding */ every,\n/* harmony export */   \"some\": () => /* binding */ some\n/* harmony export */ });\nfunction map(array, callback) {\r\n  const arr = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    const result = callback(value, index)\r\n    arr.push(result)\r\n  }\r\n  return arr\r\n}\r\nfunction reduce(array, callback, initValue) {\r\n  let total = initValue\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    total = callback(total, value, index)\r\n  }\r\n  return total\r\n}\r\n\r\nfunction filter(array, callback) {\r\n  const arr = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    const result = callback(value, index)\r\n    if (result) {\r\n      arr.push(value)\r\n    }\r\n  }\r\n  return arr\r\n}\r\n\r\nfunction find(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    const result = callback(value, index)\r\n    if (result) {\r\n      return value\r\n    }\r\n  }\r\n  return undefined\r\n}\r\nfunction findIndex(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    const result = callback(value, index)\r\n    if (result) {\r\n      return index\r\n    }\r\n  }\r\n  return -1\r\n}\r\nfunction every(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    const result = callback(value, index)\r\n    if (!result) {\r\n      return false\r\n    }\r\n  }\r\n}\r\nfunction some(array, callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const value = array[index]\r\n    const result = callback(value, index)\r\n    if (result) {\r\n      return true\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/array/declares.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => /* binding */ difference\n/* harmony export */ });\nfunction difference(array1, ...arrays) {\r\n  if (array1.length === 0) {\r\n    return []\r\n  } else if (arrays.length === 0) {\r\n    return [...array1]\r\n  }\r\n  var newArr = [].concat(...arrays)\r\n\r\n  return array1.filter((item) => {\r\n    var flag = true\r\n\r\n    if (newArr.indexOf(item) !== -1) {\r\n      flag = false\r\n    }\r\n    return flag\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => /* binding */ drop,\n/* harmony export */   \"dropRight\": () => /* binding */ dropRight\n/* harmony export */ });\nfunction drop(array, count = 0) {\r\n  return array.filter((item, index) => index >= count)\r\n}\r\nfunction dropRight(array, count = 0) {\r\n  return array.filter((item, index) => index < array.length - count)\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flattenDeep.js":
/*!**********************************!*\
  !*** ./src/array/flattenDeep.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flattenDeep\": () => /* binding */ flattenDeep\n/* harmony export */ });\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concat */ \"./src/array/concat.js\");\n\r\n\r\nfunction flattenDeep(array) {\r\n  var arr = (0,_concat__WEBPACK_IMPORTED_MODULE_0__.concat)([], ...array)\r\n  while (arr.some((item) => Array.isArray(item))) {\r\n    arr = (0,_concat__WEBPACK_IMPORTED_MODULE_0__.concat)([], ...arr)\r\n  }\r\n  return arr\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/array/flattenDeep.js?");

/***/ }),

/***/ "./src/array/intersection.js":
/*!***********************************!*\
  !*** ./src/array/intersection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"intersection\": () => /* binding */ intersection\n/* harmony export */ });\nfunction intersection(array1, ...arrays) {\r\n  const newArr = []\r\n  array1.forEach((item) => {\r\n    for (let index = 0; index < arrays.length; index++) {\r\n      const array = arrays[index]\r\n      for (let index2 = 0; index2 < array.length; index2++) {\r\n        if (item === array[index]) {\r\n          newArr.push(item)\r\n          break\r\n        }\r\n      }\r\n    }\r\n  })\r\n  return newArr\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/array/intersection.js?");

/***/ }),

/***/ "./src/array/mergeArray.js":
/*!*********************************!*\
  !*** ./src/array/mergeArray.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeArray\": () => /* binding */ mergeArray\n/* harmony export */ });\nfunction mergeArray(array1, ...arrays) {\r\n  const newArr = array1.slice(0)\r\n  const concatArray = [].concat(...arrays)\r\n  concatArray.forEach((item) => {\r\n    let flag = true\r\n    for (let index = 0; index < newArr.length; index++) {\r\n      if (newArr[index] === item) {\r\n        flag = false\r\n        break\r\n      }\r\n    }\r\n    if (flag) newArr.push(item)\r\n  })\r\n  return newArr\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/array/mergeArray.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => /* binding */ pull,\n/* harmony export */   \"pullAll\": () => /* binding */ pullAll\n/* harmony export */ });\nfunction pull(array, ...values) {\r\n  const result = []\r\n  values.forEach((item) => {\r\n    array.forEach((value, index) => {\r\n      if (array[index] === item) {\r\n        result.push(item)\r\n        array.splice(index, 1)\r\n      }\r\n    })\r\n  })\r\n  return result\r\n}\r\n\r\nfunction pullAll(array, values) {\r\n  return pull(array, ...values)\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => /* binding */ slice\n/* harmony export */ });\nfunction slice(array, startIndex, endIndex) {\r\n  const arr = []\r\n  if (array.length === 0) {\r\n    return arr\r\n  }\r\n  if (startIndex < 0 || endIndex > array.length - 1) {\r\n    return new Error('请输入正确的范围')\r\n  }\r\n\r\n  endIndex = endIndex || array.length - 1\r\n\r\n  startIndex = startIndex || 0\r\n\r\n  array.forEach((item, index) => {\r\n    if (index >= startIndex && index <= endIndex) {\r\n      arr.push(item)\r\n    }\r\n  })\r\n  return arr\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique1\": () => /* binding */ unique1,\n/* harmony export */   \"unique2\": () => /* binding */ unique2,\n/* harmony export */   \"unique3\": () => /* binding */ unique3\n/* harmony export */ });\nfunction unique1(arr) {\r\n  const newArr = []\r\n  arr.forEach((value) => {\r\n    if (newArr.indexOf(value) === -1) {\r\n      newArr.push(value)\r\n    }\r\n  })\r\n  return newArr\r\n}\r\nfunction unique2(arr) {\r\n  const newArr = []\r\n  const contain = {}\r\n  arr.forEach((item) => {\r\n    if (!contain.hasOwnProperty(item)) {\r\n      newArr.push(item)\r\n      contain[item] = true\r\n    }\r\n  })\r\n  return newArr\r\n}\r\nfunction unique3(arr) {\r\n  return [...new Set(arr)]\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => /* binding */ apply\n/* harmony export */ });\nfunction apply(func, obj, args) {\r\n  if (obj === undefined || obj === null) {\r\n    obj = window\r\n  }\r\n  obj.tempFn = func\r\n  const result = obj.tempFn(...args)\r\n  delete obj.tempFn\r\n  return result\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => /* binding */ bind\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\nfunction bind(func, obj, ...args) {\r\n  return (...args2) => {\r\n    return func.call(obj, ...args, ...args2)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => /* binding */ call\n/* harmony export */ });\nfunction call(func, obj, ...args) {\r\n  if (obj === undefined || obj === null) {\r\n    obj = window\r\n  }\r\n  obj.tempFn = func\r\n  const result = obj.tempFn(...args)\r\n  delete obj.tempFn\r\n  return result\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => /* binding */ debounce\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\n\r\nfunction debounce(callback, delay) {\r\n  let timeout\r\n  return function (event) {\r\n    if (callback.timeoutId) {\r\n      clearTimeout(callback.timeoutId)\r\n    }\r\n    callback.timeoutId = setTimeout(() => {\r\n      callback.call(this, event)\r\n      delete callback.timeoutId\r\n    }, delay)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => /* binding */ throttle\n/* harmony export */ });\nfunction throttle(callback, delay) {\r\n  let startTime = 0 //默认值不要是Date.now() ==> 第一次时间理解调用\r\n  return function (event) {\r\n    // 节流函数/真正的事件回调函数 this是发生事件的标签\r\n    const currentTime = Date.now()\r\n\r\n    if (currentTime - startTime > delay) {\r\n      callback.call(this, event)\r\n      startTime = currentTime\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => /* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_0__.apply,\n/* harmony export */   \"call\": () => /* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_1__.call,\n/* harmony export */   \"bind\": () => /* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_2__.bind,\n/* harmony export */   \"throttle\": () => /* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_3__.throttle,\n/* harmony export */   \"debounce\": () => /* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_4__.debounce,\n/* harmony export */   \"map\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.map,\n/* harmony export */   \"reduce\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.reduce,\n/* harmony export */   \"filter\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.filter,\n/* harmony export */   \"find\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.find,\n/* harmony export */   \"findIndex\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.findIndex,\n/* harmony export */   \"every\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.every,\n/* harmony export */   \"some\": () => /* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.some,\n/* harmony export */   \"unique1\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique1,\n/* harmony export */   \"unique2\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique2,\n/* harmony export */   \"unique3\": () => /* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique3,\n/* harmony export */   \"concat\": () => /* reexport safe */ _array_concat__WEBPACK_IMPORTED_MODULE_7__.concat,\n/* harmony export */   \"slice\": () => /* reexport safe */ _array_slice__WEBPACK_IMPORTED_MODULE_8__.slice,\n/* harmony export */   \"flattenDeep\": () => /* reexport safe */ _array_flattenDeep__WEBPACK_IMPORTED_MODULE_9__.flattenDeep,\n/* harmony export */   \"compact\": () => /* reexport safe */ _array_compact__WEBPACK_IMPORTED_MODULE_10__.compact,\n/* harmony export */   \"chunk\": () => /* reexport safe */ _array_chunk__WEBPACK_IMPORTED_MODULE_11__.chunk,\n/* harmony export */   \"difference\": () => /* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_12__.difference,\n/* harmony export */   \"intersection\": () => /* reexport safe */ _array_intersection__WEBPACK_IMPORTED_MODULE_13__.intersection,\n/* harmony export */   \"mergeArray\": () => /* reexport safe */ _array_mergeArray__WEBPACK_IMPORTED_MODULE_14__.mergeArray,\n/* harmony export */   \"pull\": () => /* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_15__.pull,\n/* harmony export */   \"pullAll\": () => /* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_15__.pullAll,\n/* harmony export */   \"drop\": () => /* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_16__.drop,\n/* harmony export */   \"dropRight\": () => /* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_16__.dropRight,\n/* harmony export */   \"newInstance\": () => /* reexport safe */ _object_newInstance__WEBPACK_IMPORTED_MODULE_17__.newInstance,\n/* harmony export */   \"myInstanceOf\": () => /* reexport safe */ _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_18__.myInstanceOf\n/* harmony export */ });\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony import */ var _array_flattenDeep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flattenDeep */ \"./src/array/flattenDeep.js\");\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony import */ var _array_intersection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/intersection */ \"./src/array/intersection.js\");\n/* harmony import */ var _array_mergeArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/mergeArray */ \"./src/array/mergeArray.js\");\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://ysUtils/./src/main.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myInstanceOf\": () => /* binding */ myInstanceOf\n/* harmony export */ });\nfunction myInstanceOf(object, type) {\r\n  let protoObj = object.__proto__\r\n  while (protoObj) {\r\n    if (protoObj === type.prototype) return true\r\n    protoObj = protoObj.__proto__\r\n  }\r\n  return false\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => /* binding */ newInstance\n/* harmony export */ });\nfunction newInstance(Fn, ...args) {\r\n  const obj = {}\r\n  obj.__proto__ = Fn.prototype\r\n  let result = Fn.apply(obj, args)\r\n\r\n  if (result instanceof Object) {\r\n    return result\r\n  }\r\n\r\n  return obj\r\n}\r\n\n\n//# sourceURL=webpack://ysUtils/./src/object/newInstance.js?");

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