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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js_hw_09_2/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.json */ \"./src/menu.json\");\n\n\nconst ul = document.createElement('ul');\n\n_menu_json__WEBPACK_IMPORTED_MODULE_1__.forEach(({ image, name, description, price, ingredients }) => {\n  const li = document.createElement('li');\n  const article = document.createElement('article');\n  const img = document.createElement('img');\n  const div = document.createElement('div');\n  const h2 = document.createElement('h2');\n  const i = document.createElement('i');\n  const pCardprice = document.createElement('p');\n  const pCard__descr = document.createElement('p');\n  //   const liList = document.createElement('li');\n\n  ingredients.forEach((elem) => {\n    const b = `<li class=\"tag-list__item\">${elem}</li>`;\n    console.log(b);\n  });\n\n  li.append(article);\n  article.append(img);\n  img.insertAdjacentElement('afterend', div);\n  div.insertAdjacentElement('afterbegin', h2);\n  h2.insertAdjacentElement('afterend', pCardprice);\n  pCardprice.insertAdjacentElement('afterbegin', i);\n  pCardprice.insertAdjacentElement('afterbegin', i);\n  i.insertAdjacentText('afterend', price + ` кредитов`);\n  i.insertAdjacentText('beforeend', 'monetization_on');\n  pCardprice.insertAdjacentElement('afterend', pCard__descr);\n\n  li.setAttribute('class', 'menu__item');\n  article.setAttribute('class', 'card');\n  img.setAttribute('src', image);\n  div.setAttribute('class', 'card__content');\n  h2.setAttribute('class', 'card__name\"');\n  pCardprice.setAttribute('class', 'card__price');\n  pCard__descr.setAttribute('class', 'card__descr');\n  i.setAttribute('class', 'material-icons');\n  liList.setAttribute('class', 'tag-list__item');\n\n  //   ul.insertAdjacentElement('afterbegin', liList);\n  h2.innerHTML = name;\n  pCard__descr.innerHTML = description;\n\n  //   console.log(liList);\n});\n\n// {\n/* <li class=\"menu__item\">\n  <article class=\"card\">\n    <img\n      src=\"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg\"\n      alt=\"Картофель, запеченный в мундире\"\n      class=\"card__image\"\n    />\n    <div class=\"card__content\">\n      <h2 class=\"card__name\">Картофель, запеченный в мундире</h2>\n      <p class=\"card__price\">\n        <i class=\"material-icons\"> monetization_on </i>\n        100 кредитов\n      </p>\n      <p class=\"card__descr\">\n        Ароматный, сытный, шипящий домашний картофель, фаршированный\n        сметанно-беконной начинкой, — это очень простой и очень эффектный способ\n        накормить большое количество человек, практически не потратив на готовку\n        ни сил, ни времени. Обычную картошку при желании тут можно заменить на\n        сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий\n        красный перец.\n      </p>\n      <ul class=\"tag-list\">\n        <li class=\"tag-list__item\">Картофель</li>\n        <li class=\"tag-list__item\">Чеснок</li>\n        <li class=\"tag-list__item\">Сметана</li>\n        <li class=\"tag-list__item\">Бекон</li>\n        <li class=\"tag-list__item\">Твердый сыр</li>\n        <li class=\"tag-list__item\">Зеленый лук</li>\n      </ul>\n    </div>\n    <button class=\"card__button button\">\n      <i class=\"material-icons button__icon\"> shopping_cart </i>\n      В корзину\n    </button>\n  </article>\n</li> */\n// }\n\n\n//# sourceURL=webpack://js_hw_09_2/./src/index.js?");

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"id\":\"XWaQXcbk0\",\"name\":\"Картофель, запеченный в мундире\",\"description\":\"Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.\",\"image\":\"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg\",\"price\":100,\"ingredients\":[\"Картофель\",\"Чеснок\",\"Сметана\",\"Бекон\",\"Твердый сыр\",\"Зеленый лук\"]},{\"id\":\"pkXzyRp1P\",\"name\":\"Томатный магрибский суп\",\"description\":\"Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.\",\"image\":\"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg\",\"price\":150,\"ingredients\":[\"Помидоры\",\"Куриный бульон\",\"Мед\",\"Петрушка\",\"Кинза\",\"Паприка\"]},{\"id\":\"QMom9q4Ku\",\"name\":\"Крем-суп из тыквы\",\"description\":\"Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.\",\"image\":\"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png\",\"price\":100,\"ingredients\":[\"Тыква\",\"Петрушка\",\"Сливки\",\"Бренди\",\"Куриный бульон\"]},{\"id\":\"k2k0UrjZG\",\"name\":\"Салат из красной фасоли с творожным сыром\",\"description\":\"Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.\",\"image\":\"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg\",\"price\":150,\"ingredients\":[\"Фасоль\",\"Соль\",\"Чеснок\",\"Оливковое масло\",\"Творожный сыр\",\"Красный лук\"]},{\"id\":\"j2k8U1jZd\",\"name\":\"Классический греческий салат \",\"description\":\"Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.\",\"image\":\"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg\",\"price\":350,\"ingredients\":[\"Оливковое масло\",\"Лимонный сок\",\"Чеснок\",\"Помидоры\",\"Красный лук\",\"Сыр фета\",\"Маслины\"]},{\"id\":\"X2aQ7cvkd\",\"name\":\"Маффины с голубикой и мускатным орехом\",\"description\":\"Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.\",\"image\":\"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg\",\"price\":170,\"ingredients\":[\"Сливочное масло\",\"Пшеничная мука\",\"Голубика\",\"Ванильный экстракт\",\"Мускатный орех\"]},{\"id\":\"nk3zy1pf8\",\"name\":\"Азу по‑татарски\",\"description\":\"Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.\",\"image\":\"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg\",\"price\":270,\"ingredients\":[\"Говядина\",\"Соленые огурцы\",\"Картофель\",\"Мясной бульон\",\"Чеснок\"]},{\"id\":\"b7k2U13fd\",\"name\":\"Жареный рис с яйцом по‑китайски\",\"description\":\"Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.\",\"image\":\"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg\",\"price\":240,\"ingredients\":[\"Круглый рис\",\"Мини цукини\",\"Тертый имбирь\",\"Грибы шиитаке\",\"Соевый соус\",\"Кунжутное масло\"]}]');\n\n//# sourceURL=webpack://js_hw_09_2/./src/menu.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;