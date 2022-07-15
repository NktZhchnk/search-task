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

eval("const nameValue = document.querySelector('.nameValue');\nconst phoneValue = document.querySelector('.phoneValue');\nconst priceValue = document.querySelector('.priceValue');\nconst btnInTable = document.querySelector('.btnInTable');\nconst searchInput = document.querySelector('.inputSearch')\nconst openSearch = document.querySelector('.open-search')\nconst divSearch = document.querySelector('.div-search')\nbtnInTable.addEventListener(\"click\", () => {\n    addTable();\n});\nlet toggle = false;\n\nlet tableData = [];\nlet tableDataFiltered = [];\nlet autoId = 1;\n\n\nconst createRow = (data) => {\n    const {phone, price, name, id} = data;\n    const row = document.createElement(\"tr\");\n\n    row.innerHTML = `\n        <td>${name}</td>\n        <td>${phone}</td>\n        <td>${price}</td>\n        <td class=\"fixBorder\">\n            <button class=\"button-remove\">x</button>\n        </td>\n    `;\n    const remove = row.querySelector('button');\n\n    remove.addEventListener('click', () => {\n        row.remove();\n        tableData = tableData.filter((item) => item.id !== id);\n    });\n    return row;\n}\n\n\n\nconst addTable = () => {\n    const name = nameValue.value;\n    const phone = phoneValue.value;\n    const price = priceValue.value;\n\n    nameValue.value = '';\n    phoneValue.value = '';\n    priceValue.value = '';\n\n    createTableItem({name, phone, price});\n};\n\nconst createTableItem = (data) => {\n    const id = autoId++;\n    tableData.push({...data, id});\n\n    searchFn();\n    render();\n}\n\nconst lookInput = () => {\n    searchFn()\n    render()\n}\n\nlet searchTimer = null\n\nsearchInput.addEventListener('input', () => {\n    clearTimeout(searchTimer)\n    searchTimer = setTimeout(lookInput, 500);\n})\n\n\nconst searchFn = () => {\n    const comparisonFn = (a, b) => b.toLowerCase().indexOf(a.toLowerCase()) !== -1;\n    let data = searchInput.value;\n\n    if (data.trim().length === 0) {\n        tableDataFiltered = tableData;\n        return;\n    }\n\n    tableDataFiltered = [];\n    tableData.forEach((item) => {\n        let check = false;\n        ['name', 'phone'].forEach((key) => {\n            if (comparisonFn(data, item[key])) {\n                check = true\n            }\n        })\n        if (check) {\n            tableDataFiltered.push(item)\n        }\n    });\n};\n\nconst render = () => {\n    const table = document.querySelector('.table tbody');\n    table.innerHTML = '';\n\n\n    tableDataFiltered.forEach((item) => {\n        table.appendChild(createRow(item));\n    });\n}\n\nopenSearch.addEventListener(\"click\", () => {\n    if (toggle === false) {\n        searchInput.style.display = \"block\"\n        toggle = true\n        const backSearch = document.createElement(\"button\");\n        backSearch.innerHTML = `x`;\n        backSearch.style.width = \"25px\";\n        backSearch.style.height = \"25px\";\n        backSearch.style.position = \"relative\";\n        backSearch.style.left = \"455px\";\n        backSearch.addEventListener('click', () => {\n            openSearch.style.display = \"block\";\n            searchInput.style.display = \"none\";\n            backSearch.remove()\n            toggle = false;\n            searchInput.value = '';\n            lookInput();\n        });\n        divSearch.appendChild(backSearch);\n        openSearch.style.display = \"none\";\n    } else {\n        searchInput.style.display = \"none\";\n\n    }\n});\n\n\n//# sourceURL=webpack://test/./src/index.js?");

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