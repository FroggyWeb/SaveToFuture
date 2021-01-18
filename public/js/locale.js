"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "/";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./_dev/js/locale.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./_dev/data/langlist.json":
  /*!*********************************!*\
    !*** ./_dev/data/langlist.json ***!
    \*********************************/

  /*! exports provided: langList, default */

  /***/
  function _devDataLanglistJson(module) {
    eval("module.exports = JSON.parse(\"{\\\"langList\\\":[\\\"en\\\",\\\"ru\\\"]}\");\n\n//# sourceURL=webpack:///./_dev/data/langlist.json?");
    /***/
  },

  /***/
  "./_dev/js/locale.js":
  /*!***************************!*\
    !*** ./_dev/js/locale.js ***!
    \***************************/

  /*! no exports provided */

  /***/
  function _devJsLocaleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_langlist_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data/langlist.json */ \"./_dev/data/langlist.json\");\nvar _data_langlist_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../data/langlist.json */ \"./_dev/data/langlist.json\", 1);\n\nvar url = window.location.pathname.split(\"/\");\nvar urlLocale = url[1];\nvar urlPage = url[2];\nvar browserLang = (navigator.language || navigator.userLanguage).substring(0, 2);\nvar currentLang = document.documentElement.lang;\nvar langList = _data_langlist_json__WEBPACK_IMPORTED_MODULE_0__[\"langList\"]; // список доступных языков из /data/langlist.json\n\nif (!langList.includes(browserLang)) {\n  browserLang = \"en\";\n}\n\nvar redirect = function redirect(lang) {\n  // if (urlLocale != lang) window.location.replace(`/${lang}/${urlPage}`);\n  if (urlLocale != lang) window.location.replace(\"/public/\".concat(lang, \"/\").concat(urlPage)); //temp for github\n};\n\nvar changeLang = localStorage.getItem(\"locale\") || browserLang;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var langList = document.querySelectorAll(\".lang-swith\");\n  langList.forEach(function (langNav) {\n    langNav.addEventListener(\"click\", function (e) {\n      e.stopPropagation();\n      var changeLang = e.target.dataset.lang;\n      this.classList.toggle(\"open\");\n\n      if (changeLang != currentLang && changeLang) {\n        localStorage.setItem(\"locale\", changeLang);\n        redirect(changeLang);\n      }\n    });\n  });\n});\nredirect(changeLang);\n\n//# sourceURL=webpack:///./_dev/js/locale.js?");
    /***/
  }
  /******/

});