"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {



let moduleName = location.pathname.slice(1);
let handler;

try {
  let context = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

  handler = context('./' + moduleName);
} catch (e) {
  alert("No such path");
}

if (handler) {
  handler(function (route) {
    route();
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBRUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5sZXQgbW9kdWxlTmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpO1xuXG5sZXQgaGFuZGxlcjtcbnRyeSB7XG4gICAgbGV0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJ2J1bmRsZSEuL3JvdXRlcy8nLCB0cnVlLCAvXlxcLlxcLy8pO1xuICAgIGhhbmRsZXIgPSBjb250ZXh0KCcuLycgKyBtb2R1bGVOYW1lKTtcbn0gY2F0Y2ggKGUpIHtcbiAgICBhbGVydChcIk5vIHN1Y2ggcGF0aFwiKTtcbn1cblxuaWYgKGhhbmRsZXIpIHtcbiAgICBoYW5kbGVyKGZ1bmN0aW9uIChyb3V0ZSkge1xuXG4gICAgICAgIHJvdXRlKCk7XG5cbiAgICB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=