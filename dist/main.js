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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/prices */ \"./src/modules/prices.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_prices__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n//# sourceURL=webpack://db/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\r\n  const cartBtn = document.getElementById('cart')\r\n  const cartModal = document.querySelector('.cart')\r\n  const cartCloseBtn = cartModal.querySelector('.cart-close')\r\n\r\n  const closeCart = () => {\r\n    cartModal.style.display = ''\r\n    console.log('bited close')\r\n  }\r\n\r\n  const openCart = () => {\r\n    cartModal.style.display = 'flex'\r\n    console.log('bited open')\r\n  }\r\n\r\n  /*cartBtn.onclick = function() {\r\n    console.log('bited')\r\n    openCart()\r\n  }*/\r\n\r\n  cartBtn.addEventListener('click', openCart)\r\n\r\n  //cartCloseBtn.onclick = closeCart\r\n\r\n  /*cartCloseBtn.onclick = function() {\r\n    console.log('bited first')\r\n  }\r\n  \r\n  cartCloseBtn.onclick = () => {\r\n    console.log('bited second')\r\n  }\r\n  \r\n  cartCloseBtn.addEventListener('click', () => {\r\n    console.log('bited first')\r\n  })\r\n  \r\n  */\r\n\r\n  cartCloseBtn.addEventListener('click', closeCart)\r\n\r\n  //console.dir(cartCloseBtn.onclick)\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://db/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata */ \"./src/modules/getdata.js\");\n/* harmony import */ var _rendergoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendergoods */ \"./src/modules/rendergoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n  const btnCatalog = document.querySelector('.catalog-button > button')\r\n  const catalogModal = document.querySelector('.catalog')\r\n  const catalogModalItems = document.querySelectorAll('.catalog li')\r\n\r\n  let isOpen = false\r\n\r\n  btnCatalog.addEventListener('click', () => {\r\n    isOpen = !isOpen\r\n    catalogModal.style.display = (isOpen ? 'block' : '')\r\n  })\r\n\r\n  catalogModalItems.forEach(item => {\r\n    item.addEventListener('click', () => {\r\n      const text = item.textContent\r\n      ;(0,_getdata__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        ;(0,_rendergoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilters)(data, text))\r\n      })\r\n    })\r\n\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://db/./src/modules/catalog.js?\n}");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilters: () => (/* binding */ categoryFilters),\n/* harmony export */   priceFilters: () => (/* binding */ priceFilters),\n/* harmony export */   searchFilters: () => (/* binding */ searchFilters)\n/* harmony export */ });\nconst searchFilters = (goods, value) => {\r\n\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.title.toLowerCase().includes(value.toLowerCase())\r\n  })\r\n}\r\n\r\nconst categoryFilters = (goods, value) => {\r\n\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.category === value\r\n  })\r\n}\r\n\r\nconst priceFilters = (goods, min, max) => {\r\n\r\n  console.log(min + '-' + max);\r\n\r\n\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.price >= (min === 'undefined' ? 0 : min) && goodsItem.price <= (max === 'undefined' ? 999999 : max) //999999 = crutch\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://db/./src/modules/filters.js?\n}");

/***/ }),

/***/ "./src/modules/getdata.js":
/*!********************************!*\
  !*** ./src/modules/getdata.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n\r\n  //console.log(str);\r\n  return fetch(`\r\n    https://learnjs-8db53-default-rtdb.firebaseio.com/goods.json`)\r\n    .then((response) => {\r\n      return response.json()\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\r\n\r\n/*\r\n`\r\n    https://learnjs-8db53-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}\r\n    `\r\n*/\n\n//# sourceURL=webpack://db/./src/modules/getdata.js?\n}");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata */ \"./src/modules/getdata.js\");\n/* harmony import */ var _rendergoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendergoods */ \"./src/modules/rendergoods.js\");\n\r\n//import postData from \"./postdata\";\r\n\r\n\r\nconst load = () => {\r\n  //const cartBtn = document.getElementById('cart')\r\n\r\n  (0,_getdata__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n    (0,_rendergoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n  })/**/\r\n\r\n  /*cartBtn.addEventListener('click', () => {\r\n    postData().then((data) => {\r\n      console.log(data);\r\n\r\n      getData().then((data) => {\r\n        console.log(data);\r\n      })\r\n    })\r\n  })*/\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://db/./src/modules/load.js?\n}");

/***/ }),

/***/ "./src/modules/prices.js":
/*!*******************************!*\
  !*** ./src/modules/prices.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata */ \"./src/modules/getdata.js\");\n/* harmony import */ var _rendergoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendergoods */ \"./src/modules/rendergoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst prices = () => {\r\n  const priceMin = document.querySelector('#min.filter-price_input')\r\n  const priceMax = document.querySelector('#max.filter-price_input')\r\n\r\n  let valMin = 0\r\n  let valMax = 999999\r\n\r\n  priceMax.addEventListener('input', (event) => {\r\n    valMax = event.target.value\r\n\r\n\r\n    ;(0,_getdata__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      ;(0,_rendergoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilters)(data, valMin, valMax))\r\n    })\r\n  })\r\n\r\n  priceMin.addEventListener('input', (event) => {\r\n    valMin = event.target.value\r\n\r\n    ;(0,_getdata__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      ;(0,_rendergoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilters)(data, valMin, valMax))\r\n    })\r\n  })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prices);\n\n//# sourceURL=webpack://db/./src/modules/prices.js?\n}");

/***/ }),

/***/ "./src/modules/rendergoods.js":
/*!************************************!*\
  !*** ./src/modules/rendergoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n  const goodsWrapper = document.querySelector('.goods')\r\n\r\n  goodsWrapper.innerHTML = ''\r\n\r\n  goods.forEach((goodsItem) => {\r\n\r\n    goodsWrapper.insertAdjacentHTML('beforeend', `\r\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n          <div class=\"card\">\r\n          ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n            <div class=\"card-img-wrapper\">\r\n              <span class=\"card-img-top\" style=\"background-image: url('${goodsItem.img}')\"></span>\r\n            </div>\r\n            <div class=\"card-body justify-content-between\">\r\n              <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n              <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n              <button class=\"btn btn-primary\">В корзину</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      `)\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\r\n\n\n//# sourceURL=webpack://db/./src/modules/rendergoods.js?\n}");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata */ \"./src/modules/getdata.js\");\n/* harmony import */ var _rendergoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendergoods */ \"./src/modules/rendergoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n  const searchInput = document.querySelector('.search-wrapper_input')\r\n\r\n  searchInput.addEventListener('input', (event) => {\r\n    const value = event.target.value\r\n\r\n    ;(0,_getdata__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      ;(0,_rendergoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilters)(data, value))\r\n    })\r\n  })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://db/./src/modules/search.js?\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;