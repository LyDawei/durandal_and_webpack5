/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdurandal_webpack"] = self["webpackChunkdurandal_webpack"] || []).push([["app_viewModels_router_index_js"],{

/***/ "./app/viewModels/router/index.js":
/*!****************************************!*\
  !*** ./app/viewModels/router/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var router = __webpack_require__(/*! plugins/router */ \"./node_modules/durandal/js/plugins/router.js\");\nvar ViewModel = __webpack_require__(/*! viewModels/class */ \"./app/viewModels/class.js\");\n\nvar Index = new ViewModel({\n\tview: __webpack_require__(/*! ./index.html */ \"./app/viewModels/router/index.html\")\n});\n\nIndex.router  = router.createChildRouter()\n\t.makeRelative({ fromParent: true })\n\t.map(\n\t\t__webpack_require__(/*! ./routes */ \"./app/viewModels/router/routes.js\")\n\t)\n\t.buildNavigationModel();\n\nmodule.exports = Index;\n\n\n//# sourceURL=webpack://durandal-webpack/./app/viewModels/router/index.js?");

/***/ }),

/***/ "./app/viewModels/router/routes.js":
/*!*****************************************!*\
  !*** ./app/viewModels/router/routes.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nmodule.exports = [\n\t{\n\t\troute: '', \n\t\ttitle: 'What?',\n\t\tmoduleId: function() {\n\t\t\treturn __webpack_require__(/*! ./viewModels/how/how */ \"./app/viewModels/router/viewModels/how/how.js\");\n\t\t},\n\t\tnav: true\n\t},\n\n\t// We can nest async routes, too, allowing us to conviniently\n\t// separate out various parts of our application into distinct,\n\t// async loaded parts. Beautiful!\n\t{\n\t\troute: 'nested', \n\t\ttitle: 'One other thing...',\n\t\tmoduleId: function(cb) {\n\t\t\t__webpack_require__.e(/*! AMD require */ \"app_viewModels_router_viewModels_nested_nested_js\").then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./viewModels/nested/nested */ \"./app/viewModels/router/viewModels/nested/nested.js\")]; (function(module) {\n\t\t\t\tcb(null, module);\n\t\t\t}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);})['catch'](__webpack_require__.oe);\n\t\t},\n\t\tnav: true\n\t}\n];\n\n\n//# sourceURL=webpack://durandal-webpack/./app/viewModels/router/routes.js?");

/***/ }),

/***/ "./app/viewModels/router/viewModels/how/how.js":
/*!*****************************************************!*\
  !*** ./app/viewModels/router/viewModels/how/how.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var router = __webpack_require__(/*! plugins/router */ \"./node_modules/durandal/js/plugins/router.js\");\nvar ViewModel = __webpack_require__(/*! viewModels/class */ \"./app/viewModels/class.js\");\n\nvar How = new ViewModel({\n\tview: __webpack_require__(/*! ./how.html */ \"./app/viewModels/router/viewModels/how/how.html\")\n});\n\nmodule.exports = How;\n\n\n//# sourceURL=webpack://durandal-webpack/./app/viewModels/router/viewModels/how/how.js?");

/***/ }),

/***/ "./app/viewModels/router/index.html":
/*!******************************************!*\
  !*** ./app/viewModels/router/index.html ***!
  \******************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<section id=\\\"async\\\">\\n\\t<header><h3>Router</h3></header>\\n\\t<p>\\n\\t\\tWe can interface nicely with the <code>router</code> component, too. You're seeing that in action now!\\n\\t</p>\\n\\t<br />\\n\\n\\t<article>\\n\\t\\t<header><h4>How?</h4></header>\\n\\t\\t<p>\\n\\t\\t\\tTypically Durandals <code>router</code> module requires you to specify a <code>moduleId</code>\\n\\t\\t\\tfor each route.\\n\\t\\t</p>\\n\\n\\t\\t<p>\\n\\t\\t\\tTo allow Webpack to know these are actual dependencies, we instead set each\\n\\t\\t\\t<code>moduleId</code> to the actual ViewModel module instance instead, and override the core\\n\\t\\t\\tDurandal <code>composition</code> and <code>system</code> modules to handle it.\\n\\t\\t</p>\\n\\t</article>\\n\\t<br />\\n\\n\\t<article>\\n\\t\\t<header><h4>Asynchronous Routes!</h4></header>\\n\\n\\t\\t<ul class=\\\"nav nav-tabs\\\" data-bind=\\\"foreach: router.navigationModel\\\">\\n\\t\\t\\t<li data-bind=\\\"css: { active: isActive }\\\">\\n\\t\\t\\t\\t<a data-bind=\\\"attr: { href: hash }, html: title\\\"></a>\\n\\t\\t\\t</li>\\n\\t\\t</ul>\\n\\n\\t\\t<div class=\\\"container\\\" style=\\\"padding-top: 20px;\\\" data-bind=\\\"router: {}\\\"></div>\\t\\n\\t</article>\\n</section>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://durandal-webpack/./app/viewModels/router/index.html?");

/***/ }),

/***/ "./app/viewModels/router/viewModels/how/how.html":
/*!*******************************************************!*\
  !*** ./app/viewModels/router/viewModels/how/how.html ***!
  \*******************************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<div>\\n\\t<p>\\n\\t\\tAlong with the ability to bundle all the routes together, we can also optionally bundle specific\\n\\t\\tparts of the application together into chucks we can grab on-the-fly when the user goes to\\n\\t\\tspecific routes!\\n\\t</p>\\n\\t<p>\\n\\t\\tIn fact... <b>this very page was requested separately from the main <code>app.js</code></b>.\\n\\t\\tCheck the network tab to see this in action (look for the <code>1.chunk.js</code> file)!\\n\\t</b>\\n\\t<p>\\n\\t\\tThis is great for large apps where we don't need or want the user to download the entirety of\\n\\t\\tthe application code at once.\\n\\t</p>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://durandal-webpack/./app/viewModels/router/viewModels/how/how.html?");

/***/ })

}]);