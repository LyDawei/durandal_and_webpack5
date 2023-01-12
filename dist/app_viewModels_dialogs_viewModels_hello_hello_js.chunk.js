/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdurandal_webpack"] = self["webpackChunkdurandal_webpack"] || []).push([["app_viewModels_dialogs_viewModels_hello_hello_js"],{

/***/ "./app/viewModels/dialogs/viewModels/hello/hello.js":
/*!**********************************************************!*\
  !*** ./app/viewModels/dialogs/viewModels/hello/hello.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ko = __webpack_require__(/*! knockout */ \"./node_modules/knockout/build/output/knockout-latest.js\");\nvar dialog = __webpack_require__(/*! plugins/dialog */ \"./node_modules/durandal/js/plugins/dialog.js\");\nvar ViewModel = __webpack_require__(/*! viewModels/class */ \"./app/viewModels/class.js\");\n\nfunction Hello() {\n\tthis.message = ko.observable('');\n\tthis.text = ko.observable('');\n\tthis.title = ko.observable('');\n\tthis.canClose = ko.observable(true);\n};\n\nHello.prototype.view = __webpack_require__(/*! ./hello.html */ \"./app/viewModels/dialogs/viewModels/hello/hello.html\");\n\nHello.prototype.getView = ViewModel.prototype.getView;\n\nHello.prototype.close = function() {\n\treturn dialog.close(this, null);\n};\n\nmodule.exports = Hello;\n\n//# sourceURL=webpack://durandal-webpack/./app/viewModels/dialogs/viewModels/hello/hello.js?");

/***/ }),

/***/ "./app/viewModels/dialogs/viewModels/hello/hello.html":
/*!************************************************************!*\
  !*** ./app/viewModels/dialogs/viewModels/hello/hello.html ***!
  \************************************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"modal-dialog\\\">\\n\\t<div class=\\\"modal-content\\\">\\n\\t\\t<div class=\\\"modal-header\\\">\\n\\t\\t\\t<!-- ko if: canClose -->\\n\\t\\t\\t\\t<a role=\\\"button\\\" title=\\\"Close Dialog\\\" class=\\\"close\\\" data-bind=\\\"click: close\\\">\\n\\t\\t\\t\\t\\t&times;\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t<!-- /ko-->\\n\\n\\t\\t\\t<h4 class=\\\"modal-title\\\">Hello world!</h4>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\\"modal-body\\\">\\n\\t\\t\\t<p>\\n\\t\\t\\t\\tI was loaded in a separate network request to the rest of the application. I'm not\\n\\t\\t\\t\\topened that much, so it's probably for the best... :(\\n\\t\\t\\t</p>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\\"modal-footer\\\">\\n\\t\\t\\t<a class=\\\"btn btn-default\\\" data-bind=\\\"click: close\\\">Bye!</a>\\n\\t\\t</div>\\n\\t</div>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://durandal-webpack/./app/viewModels/dialogs/viewModels/hello/hello.html?");

/***/ })

}]);