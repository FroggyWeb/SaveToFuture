"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // install a JSONP callback for chunk loading

  /******/
  function webpackJsonpCallback(data) {
    /******/
    var chunkIds = data[0];
    /******/

    var moreModules = data[1];
    /******/

    var executeModules = data[2];
    /******/

    /******/
    // add "moreModules" to the modules object,

    /******/
    // then flag all "chunkIds" as loaded and fire callback

    /******/

    var moduleId,
        chunkId,
        i = 0,
        resolves = [];
    /******/

    for (; i < chunkIds.length; i++) {
      /******/
      chunkId = chunkIds[i];
      /******/

      if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
        /******/
        resolves.push(installedChunks[chunkId][0]);
        /******/
      }
      /******/


      installedChunks[chunkId] = 0;
      /******/
    }
    /******/


    for (moduleId in moreModules) {
      /******/
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        /******/
        modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/

    }
    /******/


    if (parentJsonpFunction) parentJsonpFunction(data);
    /******/

    /******/

    while (resolves.length) {
      /******/
      resolves.shift()();
      /******/
    }
    /******/

    /******/
    // add entry modules from loaded chunk to deferred list

    /******/


    deferredModules.push.apply(deferredModules, executeModules || []);
    /******/

    /******/
    // run deferred modules when all chunks ready

    /******/

    return checkDeferredModules();
    /******/
  }

  ;
  /******/

  function checkDeferredModules() {
    /******/
    var result;
    /******/

    for (var i = 0; i < deferredModules.length; i++) {
      /******/
      var deferredModule = deferredModules[i];
      /******/

      var fulfilled = true;
      /******/

      for (var j = 1; j < deferredModule.length; j++) {
        /******/
        var depId = deferredModule[j];
        /******/

        if (installedChunks[depId] !== 0) fulfilled = false;
        /******/
      }
      /******/


      if (fulfilled) {
        /******/
        deferredModules.splice(i--, 1);
        /******/

        result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
        /******/
      }
      /******/

    }
    /******/

    /******/


    return result;
    /******/
  }
  /******/

  /******/
  // The module cache

  /******/


  var installedModules = {};
  /******/

  /******/
  // object to store loaded and loading chunks

  /******/
  // undefined = chunk not loaded, null = chunk preloaded/prefetched

  /******/
  // Promise = chunk loading, 0 = chunk loaded

  /******/

  var installedChunks = {
    /******/
    "case": 0
    /******/

  };
  /******/

  /******/

  var deferredModules = [];
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

  var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
  /******/

  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/

  jsonpArray.push = webpackJsonpCallback;
  /******/

  jsonpArray = jsonpArray.slice();
  /******/

  for (var i = 0; i < jsonpArray.length; i++) {
    webpackJsonpCallback(jsonpArray[i]);
  }
  /******/


  var parentJsonpFunction = oldJsonpFunction;
  /******/

  /******/

  /******/
  // add entry module to deferred list

  /******/

  deferredModules.push(["./_dev/js/case.js", "vendor"]);
  /******/
  // run deferred modules when ready

  /******/

  return checkDeferredModules();
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./_dev/js/block/accordion.js":
  /*!************************************!*\
    !*** ./_dev/js/block/accordion.js ***!
    \************************************/

  /*! no exports provided */

  /***/
  function _devJsBlockAccordionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n\n\nvar acc = document.querySelectorAll(\".js-acc-control\");\nacc.forEach(function (el) {\n  el.addEventListener(\"click\", function () {\n    toggleAcc(el);\n  });\n});\n\nvar toggleAcc = function toggleAcc(elem) {\n  var child = elem.closest(\".acc\").querySelector(\".acc-open\");\n\n  if (elem.matches(\".acc-open\")) {\n    elem.classList.remove(\"acc-open\");\n    animHide(elem);\n    return;\n  }\n\n  if (child) {\n    child.classList.remove(\"acc-open\");\n    animHide(child);\n  }\n\n  elem.classList.add(\"acc-open\");\n  animShow(elem);\n};\n\nfunction animShow(elem) {\n  var targ = elem.nextElementSibling;\n  gsap_all__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].to(targ, {\n    height: \"auto\",\n    duration: 0.5\n  });\n}\n\nfunction animHide(elem) {\n  var targ = elem.nextElementSibling;\n  gsap_all__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].to(targ, {\n    height: 0,\n    duration: 0.5\n  });\n}\n\n//# sourceURL=webpack:///./_dev/js/block/accordion.js?");
    /***/
  },

  /***/
  "./_dev/js/block/fullpage.js":
  /*!***********************************!*\
    !*** ./_dev/js/block/fullpage.js ***!
    \***********************************/

  /*! no exports provided */

  /***/
  function _devJsBlockFullpageJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_0__[\"ScrollToPlugin\"]);\ngsap_all__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_0__[\"ScrollTrigger\"]);\nvar tl1 = gsap_all__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].timeline();\nvar sections = document.querySelectorAll(\".section\");\n\nfunction goToSection(section, anim) {\n  gsap_all__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].to(window, {\n    scrollTo: {\n      y: section,\n      autoKill: false\n    },\n    duration: 1\n  });\n\n  if (anim) {\n    anim.restart();\n  }\n}\n\nsections.forEach(function (section) {\n  var intoAnim = gsap_all__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].timeline({\n    paused: true\n  }); // let title = section.querySelector(\".title-section\");\n  // if (title) {\n  //   intoAnim.from(title, {\n  //     opacity: 0,\n  //     delay: 1,\n  //     duration: 1,\n  //   });\n  // }\n\n  gsap_all__WEBPACK_IMPORTED_MODULE_0__[\"ScrollTrigger\"].create({\n    // markers: true,\n    trigger: section,\n    end: \"bottom 70%\",\n    start: \"top 70%\",\n    onEnter: function onEnter() {\n      return goToSection(section, intoAnim);\n    } // onEnterBack: () => goToSection(section),\n\n  });\n});\n\n//# sourceURL=webpack:///./_dev/js/block/fullpage.js?");
    /***/
  },

  /***/
  "./_dev/js/block/nav.js":
  /*!******************************!*\
    !*** ./_dev/js/block/nav.js ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _devJsBlockNavJs(module, exports, __webpack_require__) {
    eval("/* WEBPACK VAR INJECTION */(function($) {var header = $(\".header-page\"),\n    mobnav = $(\".mob-nav\"),\n    mainnav = $(\".menu--header\"),\n    burger = $(\".burger\");\n$(window).on(\"scroll\", function () {\n  if ($(window).scrollTop() > 1) {\n    header.addClass(\"sticky\");\n  } else {\n    header.removeClass(\"sticky\");\n  }\n});\nmainnav.clone().appendTo(mobnav);\n$(\".lang-swith\").clone().appendTo(mobnav);\nburger.on(\"click\", function (e) {\n  e.stopPropagation();\n  $(this).toggleClass(\"open\");\n  $(\"body\").toggleClass(\"mob-nav-open\");\n});\n$(\"body\").on(\"click\", function (e) {\n  // if (!burger.is(e.target) && burger.has(e.target).length === 0) {\n  burger.removeClass(\"open\");\n  $(\"body\").removeClass(\"mob-nav-open\");\n});\n$(\".lang-swith__control\").on(\"click\", function (e) {\n  e.stopPropagation();\n  $(this).parent().toggleClass(\"open\");\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./_dev/js/block/nav.js?");
    /***/
  },

  /***/
  "./_dev/js/case.js":
  /*!*************************!*\
    !*** ./_dev/js/case.js ***!
    \*************************/

  /*! no exports provided */

  /***/
  function _devJsCaseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_fullpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/fullpage */ \"./_dev/js/block/fullpage.js\");\n/* harmony import */ var _block_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/nav */ \"./_dev/js/block/nav.js\");\n/* harmony import */ var _block_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_block_nav__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _block_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/accordion */ \"./_dev/js/block/accordion.js\");\n\n\n\n\n//# sourceURL=webpack:///./_dev/js/case.js?");
    /***/
  }
  /******/

});