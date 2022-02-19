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

eval("const searchInitial = (input, textField,counterSearch) => {\n    textField.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`\n    counterSearch.innerHTML = 0\n    const searchTextFull = (text, search) => {\n        let mas = [];\n        let lastPosition = 0;\n        while (true) {\n            const textPosition = text.indexOf(search, lastPosition)\n            if (textPosition === -1) break;\n            lastPosition = textPosition + search.length\n            mas.push(textPosition)\n        }\n        counterSearch.innerHTML = mas.length\n\n\n        return mas;\n    };\n\n    input.addEventListener('input', () => {\n        const searchText = input.value\n        const text = textField.innerText\n        if (searchText.length === 0) {\n            counterSearch.innerHTML = 0\n            textField.innerHTML = text\n            return\n        }\n        const mas = searchTextFull(text, searchText)\n        console.log(mas)\n        let position = 0;\n        textField.innerHTML = '';\n        mas.forEach((searchPosition) => {\n            textField.innerHTML += text.slice(position, searchPosition)\n                + '<span class=\"searched-fragment\">' + text.slice(searchPosition, searchPosition + searchText.length) + '</span>'\n            position = searchPosition + searchText.length;\n        })\n        textField.innerHTML += text.slice(position)\n\n    })\n}\n\nsearchInitial(document.querySelector('.search-input'),document.querySelector('.text'), document.querySelector('.search-counter'))\n\nconst droppedMenuRedact = (redact, textField, buttonsMenu, cancel, accept) => {\n    const footer = document.querySelector('.footer')\n    const input = document.querySelector('.textarea-redact')\n\n    const styleRedact = () => {\n        buttonsMenu.style.display = \"block\";\n        redact.style.display = \"none\";\n        footer.style.border = \"none\";\n        textField.style.display = \"none\";\n        input.style.display = \"block\"\n    }\n    let temp = input.value = textField.textContent\n    redact.addEventListener('click', () => {\n       styleRedact()\n    })\n\n    const hideButtons = () => {\n        buttonsMenu.style.display = \"none\";\n        redact.style.display = \"block\";\n        textField.style.border = \"none\";\n        textField.style.display = \"block\";\n        input.style.display = \"none\";\n        footer.style.border = \"1px solid rgba(0, 0, 0, 0.4)\";\n    }\n    cancel.addEventListener('click', () => {\n        hideButtons()\n        textField.innerText = textField.textContent\n        input.value = textField.textContent\n    })\n    accept.addEventListener('click', () => {\n        hideButtons()\n        textField.innerText = document.querySelector('.textarea-redact').value\n    })\n}\ndroppedMenuRedact(document.querySelector('.btn-dropped-menu'), document.querySelector('.text'), document.querySelector('.buttons-menu'), document.querySelector('.btn-cancel'), document.querySelector('.btn-accept'))\n\n//# sourceURL=webpack://test/./src/index.js?");

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