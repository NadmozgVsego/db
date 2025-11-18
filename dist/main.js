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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\n//import prices from \"./modules/prices\";\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n//prices()\r\n;(0,_modules_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n//# sourceURL=webpack://db/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rendercart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rendercart */ \"./src/modules/rendercart.js\");\n/* harmony import */ var _postdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postdata */ \"./src/modules/postdata.js\");\n\r\n\r\n\r\nconst cart = () => {\r\n  const cartBtn = document.getElementById('cart')\r\n  const cartModal = document.querySelector('.cart')\r\n  const cartCloseBtn = cartModal.querySelector('.cart-close')\r\n  const goodsWrapper = document.querySelector('.goods')\r\n  const cartTotal = cartModal.querySelector('.cart-total > span')\r\n  const cartWrapper = document.querySelector('.cart-wrapper')\r\n  const cartSendBtn = cartModal.querySelector('.cart-confirm')\r\n  const cartCount = cartBtn.querySelector('.counter')\r\n\r\n\r\n  const closeCart = () => {\r\n    cartModal.style.display = ''\r\n    console.log('bited close')\r\n  }\r\n\r\n  const openCart = () => {\r\n    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n    cartModal.style.display = 'flex'\r\n    ;(0,_rendercart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n    cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n      return sum + goodItem.price\r\n    }, 0)\r\n  }\r\n\r\n  cartBtn.addEventListener('click', openCart)\r\n\r\n  cartCloseBtn.addEventListener('click', closeCart)\r\n\r\n  goodsWrapper.addEventListener('click', (event) => {\r\n    if (event.target.classList.contains('btn-primary')) {\r\n      const card = event.target.closest('.card')\r\n      const key = card.dataset.key\r\n      const goods = JSON.parse(localStorage.getItem('goods'))\r\n      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n      const goodItem = goods.find((item) => {\r\n        return +item.id === +key // in my case \"id\" is string\r\n      })\r\n      cart.push(goodItem)\r\n      localStorage.setItem('cart', JSON.stringify(cart))\r\n      cartCount.textContent = cart.length\r\n    }\r\n\r\n  })\r\n\r\n  cartWrapper.addEventListener('click', (event) => {\r\n    if (event.target.classList.contains('btn-primary')) {\r\n      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n      const card = event.target.closest('.card')\r\n      const key = card.dataset.key\r\n      console.log(+key)\r\n      const index = cart.findIndex((item) => {\r\n        return +item.id === +key\r\n      })\r\n      console.log(index);\r\n\r\n      cart.splice(index, 1)\r\n      localStorage.setItem('cart', JSON.stringify(cart))\r\n      console.log(cart)\r\n      ;(0,_rendercart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n      cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n        return sum + goodItem.price\r\n      }, 0)\r\n      cartCount.textContent = cart.length\r\n\r\n    }\r\n\r\n  })\r\n\r\n  cartSendBtn.addEventListener('click', () => {\r\n    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n    ;(0,_postdata__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n      localStorage.removeItem('cart')\r\n      ;(0,_rendercart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([])\r\n      cartTotal.textContent = 0\r\n    })\r\n\r\n  })\r\n\r\n  //cartCloseBtn.onclick = closeCart\r\n\r\n  /*cartCloseBtn.onclick = function() {\r\n    console.log('bited first')\r\n  }\r\n  \r\n  cartCloseBtn.onclick = () => {\r\n    console.log('bited second')\r\n  }\r\n  \r\n  */\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://db/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata */ \"./src/modules/getdata.js\");\n/* harmony import */ var _rendergoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendergoods */ \"./src/modules/rendergoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n  const btnCatalog = document.querySelector('.catalog-button > button')\r\n  const catalogModal = document.querySelector('.catalog')\r\n  const catalogModalItems = document.querySelectorAll('.catalog li')\r\n\r\n  let isOpen = false\r\n\r\n  btnCatalog.addEventListener('click', () => {\r\n    isOpen = !isOpen\r\n    catalogModal.style.display = (isOpen ? 'block' : '')\r\n  })\r\n\r\n  catalogModalItems.forEach(item => {\r\n    item.addEventListener('click', () => {\r\n      const text = item.textContent\r\n      ;(0,_getdata__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        ;(0,_rendergoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilters)(data, text))\r\n      })\r\n    })\r\n\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://db/./src/modules/catalog.js?\n}");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata */ \"./src/modules/getdata.js\");\n/* harmony import */ var _rendergoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendergoods */ \"./src/modules/rendergoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst filter = () => {\r\n  const minInput = document.getElementById('min')\r\n  const maxInput = document.getElementById('max')\r\n  const cbInput = document.getElementById('discount-checkbox')\r\n  const cbSpan = document.querySelector('.filter-check_checkmark')\r\n\r\n  minInput.addEventListener('input', () => {\r\n    console.log(minInput.value);\r\n    console.log(maxInput.value);\r\n\r\n    (0,_getdata__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_rendergoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilters)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotsaleFilters)(data, cbInput.checked), minInput.value, maxInput.value))\r\n    })\r\n  })\r\n\r\n  maxInput.addEventListener('input', () => {\r\n    console.log(minInput.value);\r\n    console.log(maxInput.value);\r\n\r\n    (0,_getdata__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_rendergoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilters)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotsaleFilters)(data, cbInput.checked), minInput.value, maxInput.value))\r\n    })\r\n  })\r\n\r\n  cbInput.addEventListener('change', () => {\r\n    console.log('change');\r\n    console.log(cbInput.checked);\r\n\r\n    if (cbInput.checked) {\r\n      cbSpan.classList.add('checked')\r\n    } else {\r\n      cbSpan.classList.remove('checked')\r\n    }\r\n\r\n    (0,_getdata__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_rendergoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotsaleFilters)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilters)(data, minInput.value, maxInput.value), cbInput.checked))\r\n    })\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\r\n\n\n//# sourceURL=webpack://db/./src/modules/filter.js?\n}");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilters: () => (/* binding */ categoryFilters),\n/* harmony export */   hotsaleFilters: () => (/* binding */ hotsaleFilters),\n/* harmony export */   priceFilters: () => (/* binding */ priceFilters),\n/* harmony export */   searchFilters: () => (/* binding */ searchFilters)\n/* harmony export */ });\nconst searchFilters = (goods, value) => {\r\n\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.title.toLowerCase().includes(value.toLowerCase())\r\n  })\r\n}\r\n\r\nconst categoryFilters = (goods, value) => {\r\n\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.category === value\r\n  })\r\n}\r\n\r\nconst priceFilters = (goods, min, max) => {\r\n\r\n  console.log('from ' + min + ' to ' + max);\r\n\r\n\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.price >= (min === '' ? Number.NEGATIVE_INFINITY : +min) && goodsItem.price <= (max === '' ? Number.POSITIVE_INFINITY : +max)\r\n  })\r\n}\r\n\r\nconst hotsaleFilters = (goods, value) => {\r\n\r\n  return goods.filter((goodsItem) => {\r\n    if (value) {\r\n      return goodsItem.sale === true\r\n    } else {\r\n      return goodsItem\r\n    }\r\n\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://db/./src/modules/filters.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata */ \"./src/modules/getdata.js\");\n/* harmony import */ var _rendergoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendergoods */ \"./src/modules/rendergoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n\r\n  (0,_getdata__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n    (0,_rendergoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n  })\r\n\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://db/./src/modules/load.js?\n}");

/***/ }),

/***/ "./src/modules/postdata.js":
/*!*********************************!*\
  !*** ./src/modules/postdata.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\r\n  return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n    method: 'POST',\r\n    body: JSON.stringify({ cart }),\r\n    /*headers: {\r\n      'Content-Type:': 'application/json; charset=UTF-8',\r\n    },*/\r\n  })\r\n    .then(res => res.json())\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\r\n//https://learnjs-8db53-default-rtdb.firebaseio.com/goods.json\r\n// https://jsonplaceholder.typicode.com/posts\n\n//# sourceURL=webpack://db/./src/modules/postdata.js?\n}");

/***/ }),

/***/ "./src/modules/rendercart.js":
/*!***********************************!*\
  !*** ./src/modules/rendercart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n  const cartWrapper = document.querySelector('.cart-wrapper')\r\n\r\n\r\n  cartWrapper.innerHTML = ''\r\n\r\n  if (goods.length === 0) {\r\n    cartWrapper.insertAdjacentHTML('beforeend', `\r\n      <div id=\"cart-empty\">\r\n        Ваша корзина пока пуста\r\n      </div>\r\n      `)\r\n  } else {\r\n    goods.forEach((goodsItem) => {\r\n\r\n      cartWrapper.insertAdjacentHTML('beforeend', `\r\n          <div class=\"card\" data-key=${goodsItem.id}>\r\n          ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n            <div class=\"card-img-wrapper\">\r\n              <span class=\"card-img-top\" style=\"background-image: url('${goodsItem.img}')\"></span>\r\n            </div>\r\n            <div class=\"card-body justify-content-between\">\r\n              <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n              <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n              <button class=\"btn btn-primary\">Удалить</button>\r\n            </div>\r\n          </div>\r\n      `)\r\n    });\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\r\n\r\n\n\n//# sourceURL=webpack://db/./src/modules/rendercart.js?\n}");

/***/ }),

/***/ "./src/modules/rendergoods.js":
/*!************************************!*\
  !*** ./src/modules/rendergoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n  const goodsWrapper = document.querySelector('.goods')\r\n\r\n  localStorage.setItem('goods', JSON.stringify(goods))\r\n\r\n  goodsWrapper.innerHTML = ''\r\n\r\n  goods.forEach((goodsItem) => {\r\n\r\n    goodsWrapper.insertAdjacentHTML('beforeend', `\r\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n          <div class=\"card\" data-key=${goodsItem.id}>\r\n          ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n            <div class=\"card-img-wrapper\">\r\n              <span class=\"card-img-top\" style=\"background-image: url('${goodsItem.img}')\"></span>\r\n            </div>\r\n            <div class=\"card-body justify-content-between\">\r\n              <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n              <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n              <button class=\"btn btn-primary\">В корзину</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      `)\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\r\n\n\n//# sourceURL=webpack://db/./src/modules/rendergoods.js?\n}");

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