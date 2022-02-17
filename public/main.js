/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const input = document.querySelector('.input')\nconst textField = document.querySelector('.text')\nconst counterSearch = document.querySelector('.counterSearch')\ntextField.innerHTML = `\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\nThe point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,\nas opposed to using 'Content here, content here', making it look like readable English.\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,\nand a search for 'lorem ipsum' will uncover many web sites still in their infancy.\nVarious versions have evolved over the years, sometimes by accident, sometimes on purpose\n  `\ncounterSearch.innerHTML = ''\nconst searchTextFull = (text, search) => {\n    let mas = [];\n    let lastPosition = 0;\n    while (true) {\n        const textPosition = text.indexOf(search, lastPosition)\n        if (textPosition === -1) break;\n        lastPosition = textPosition + search.length\n        mas.push(textPosition)\n    }\n    counterSearch.innerHTML = mas.length\n    return mas;\n};\n\n\n\ninput.addEventListener('input', () => {\n    const searchText = input.value\n    const text = textField.innerText\n    if(searchText.length === 0) {\n        textField.innerHTML = text\n        return\n    }\n    const mas = searchTextFull(text, searchText)\n    console.log(mas)\n    let position = 0;\n    textField.innerHTML = '';\n    mas.forEach((searchPosition)=>{\n        textField.innerHTML += text.slice(position, searchPosition)\n            + '<span class=\"span\">' + text.slice(searchPosition, searchPosition + searchText.length) + '</span>'\n        position = searchPosition + searchText.length;\n    })\n    textField.innerHTML += text.slice(position)\n})\n\n\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;