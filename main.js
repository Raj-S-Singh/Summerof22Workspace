"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 3761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _final_summer_workspace_configuration_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2728);
/* harmony import */ var _final_summer_workspace_navigationbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8889);
/* harmony import */ var _final_summer_workspace_test_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8381);
/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4577);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8080);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9663);
var _jsxFileName = "/home/david/Projects/final-summer-workspace/apps/mock-test-platform/src/app/app.tsx";








function App() {
  const [launchTest, setLaunchTest] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [noOfOptions, setNoOfOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4);
  const [noOfQuestions, setNoOfQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(30);
  const [timerDuration, setTimerDuration] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(60);
  const [showTimer, setShowTimer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showResults, setShowResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_final_summer_workspace_navigationbar__WEBPACK_IMPORTED_MODULE_2__.Navigationbar, {
      timerDuration: timerDuration,
      showTimer: showTimer,
      onTimerExpire: () => {
        setShowTimer(false);
        setShowResults(true);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), launchTest ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_final_summer_workspace_test_application__WEBPACK_IMPORTED_MODULE_3__.TestApplication, {
      noOfOptions: noOfOptions,
      noOfQuestions: noOfQuestions,
      showResults: showResults
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      id: _app_module_css__WEBPACK_IMPORTED_MODULE_4__["default"]["main-container"],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_final_summer_workspace_configuration_box__WEBPACK_IMPORTED_MODULE_1__.ConfigurationBox, {
        onConfigSubmit: (no_of_options, no_of_questions, timer_duration) => {
          setNoOfOptions(no_of_options);
          setNoOfQuestions(no_of_questions);
          setTimerDuration(timer_duration);
          setShowTimer(true);
          setLaunchTest(true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("footer", {
      id: _app_module_css__WEBPACK_IMPORTED_MODULE_4__["default"]["footer-container"],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
        children: ["Author: Raj Shree Singh ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 45
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          href: "mailto:rssingh1999david@gmail.com",
          children: "Personal Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 1871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7029);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3761);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/home/david/Projects/final-summer-workspace/apps/mock-test-platform/src/main.tsx";




const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 3
}, undefined));

/***/ }),

/***/ 2728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationBox": () => (/* reexport safe */ _lib_configuration_box__WEBPACK_IMPORTED_MODULE_0__.ConfigurationBox)
/* harmony export */ });
/* harmony import */ var _lib_configuration_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6991);


/***/ }),

/***/ 6991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationBox": () => (/* binding */ ConfigurationBox),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configuration_box_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6816);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2686);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9862);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(561);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9663);
var _jsxFileName = "/home/david/Projects/final-summer-workspace/libs/configuration-box/src/lib/configuration-box.tsx";





/* eslint-disable-next-line */



const ConfigurationBox = props => {
  const [noOfQuestions, setNoOfQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(30);
  const [noOfOptions, setNoOfOptions] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(4);
  const [timerDuration, setTimerDuration] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(60);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      id: _configuration_box_module_css__WEBPACK_IMPORTED_MODULE_2__["default"]["card-container"],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        bg: "light",
        text: "dark",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Header, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "tabs",
            defaultActiveKey: "#first",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
                href: "#first",
                children: "Configure"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Body, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Title, {
            children: "Configure your OMR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Text, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "number",
              value: noOfQuestions,
              onChange: e => setNoOfQuestions(e.target.valueAsNumber)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, undefined), ' ', "X", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "number",
              min: 2,
              max: 6,
              value: noOfOptions,
              onChange: e => setNoOfOptions(e.target.valueAsNumber)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("b", {
              children: "Timer (in mins) :"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, undefined), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "number",
              value: timerDuration,
              min: 30,
              max: 180,
              onChange: e => setTimerDuration(e.target.valueAsNumber)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
            variant: "dark",
            onClick: () => props.onConfigSubmit(noOfOptions, noOfQuestions, timerDuration),
            children: "Confirm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigurationBox);

/***/ }),

/***/ 8889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navigationbar": () => (/* reexport safe */ _lib_navigationbar__WEBPACK_IMPORTED_MODULE_0__.Navigationbar)
/* harmony export */ });
/* harmony import */ var _lib_navigationbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2568);


/***/ }),

/***/ 2568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navigationbar": () => (/* binding */ Navigationbar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4966);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1275);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9862);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9663);
var _jsxFileName = "/home/david/Projects/final-summer-workspace/libs/navigationbar/src/lib/navigationbar.tsx";




const Navigationbar = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bg: "dark",
      variant: "dark",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Brand, {
          href: "#home",
          children: "Navbar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "me-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Link, {
            href: "#home",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Link, {
            href: "#features",
            children: "Features"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Link, {
            href: "#pricing",
            children: "Pricing"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "me-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Text, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_timer__WEBPACK_IMPORTED_MODULE_0__.Timer, {
            isTimer: props.showTimer,
            timerDuration: props.timerDuration * 60,
            currentTime: new Date().valueOf(),
            onTimerExpire: props.onTimerExpire
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigationbar);

/***/ }),

/***/ 5091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timer": () => (/* binding */ Timer)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _timer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7847);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9663);
var _jsxFileName = "/home/david/Projects/final-summer-workspace/libs/navigationbar/src/lib/timer.tsx";






const options = {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
};

const getTimeString = date => {
  return date.toLocaleString('en-us', options);
};

const getTimerString = (num, expiryCallback) => {
  if (num > 0) {
    return `${Math.floor(num / 3600)} : ${Math.floor(num / 60)} : ${Math.floor(num % 60)}`;
  }

  expiryCallback();
  return '00: 00 : 00';
};

const Timer = timerProps => {
  var _timerProps$timerDura;

  // Yupp the entire function reruns itself. So look into the Optimizations using other hooks..
  const startTime = timerProps.currentTime;
  const [currentTimer, setCurrentTimer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Date(startTime));
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const update = setInterval(() => setCurrentTimer(new Date()), 1000);
    return () => clearInterval(update);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: _timer_module_css__WEBPACK_IMPORTED_MODULE_3__["default"]["time-container"],
      children: timerProps.isTimer ? getTimerString(((_timerProps$timerDura = timerProps == null ? void 0 : timerProps.timerDuration) != null ? _timerProps$timerDura : 3600) - (currentTimer.valueOf() - startTime) / 1000, timerProps.onTimerExpire) : getTimeString(currentTimer)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ 8381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestApplication": () => (/* reexport safe */ _lib_test_application__WEBPACK_IMPORTED_MODULE_0__.TestApplication)
/* harmony export */ });
/* harmony import */ var _lib_test_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2286);


/***/ }),

/***/ 5682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultCard": () => (/* binding */ ResultCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _result_card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6276);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
var _jsxFileName = "/home/david/Projects/final-summer-workspace/libs/test-application/src/lib/result-card.tsx";





const ResultCard = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: _result_card_module_css__WEBPACK_IMPORTED_MODULE_2__["default"]["result-card"],
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: _result_card_module_css__WEBPACK_IMPORTED_MODULE_2__["default"]["result-card-header"],
      children: "View your answers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: _result_card_module_css__WEBPACK_IMPORTED_MODULE_2__["default"]["result-card-entries"],
      children: [...props.answerSheet].map((ans, index) => {
        if (index > 0) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            children: [`${index}. \u2002`, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("code", {
              children: `${ans ? ans : ''}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 29
          }, undefined);
        }

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {}, void 0, false);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultCard);

/***/ }),

/***/ 2286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestApplication": () => (/* binding */ TestApplication),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5735);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6886);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5450);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6562);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7826);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(561);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2621);
/* harmony import */ var _result_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5682);
/* harmony import */ var _test_application_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(983);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9663);
var _jsxFileName = "/home/david/Projects/final-summer-workspace/libs/test-application/src/lib/test-application.tsx";






/* eslint-disable-next-line */



function TestApplication(props) {
  const navigatorRows = Math.ceil(props.noOfQuestions / 10);
  const navigatorCols = 10;
  const [currQuestion, setCurrQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const [answerSheet, setAnswerSheet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Array(props.noOfQuestions + 1));
  const [showConfirmation, setShowConfirmation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const toggleShowConfirmation = () => setShowConfirmation(!showConfirmation);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: _test_application_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].container,
    children: props.showResults ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_result_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      answerSheet: answerSheet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: _test_application_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].questions,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          id: _test_application_module_css__WEBPACK_IMPORTED_MODULE_4__["default"]["questions-header"],
          children: "Navigator Deck"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: _test_application_module_css__WEBPACK_IMPORTED_MODULE_4__["default"]["navigator-deck"],
          size: "sm",
          variant: "dark",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tbody", {
            children: [...Array(navigatorRows).keys()].map(rowNo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
              children: [...Array(navigatorCols).keys()].map(colNo => rowNo * 10 + colNo + 1).filter(index => index <= props.noOfQuestions).map(index => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  variant: "outline-light",
                  type: "checkbox",
                  id: `button-${index}`,
                  size: "sm",
                  value: index,
                  checked: currQuestion == index,
                  onChange: () => {
                    setCurrQuestion(index);
                  },
                  children: index
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 57
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 53
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 41
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: _test_application_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].options,
        children: ["Choose the correct answer", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: [[...Array(props.noOfOptions).keys()].map(optionNo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Check, {
            type: "checkbox",
            name: "group-checkbox",
            id: `checkbox-${optionNo + 1}`,
            label: `${optionNo + 1}`,
            onClick: () => {
              let newArr = [...answerSheet];
              newArr[currQuestion] = optionNo + 1;
              setAnswerSheet(newArr);
            },
            checked: answerSheet[currQuestion] === optionNo + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 37
          }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: _test_application_module_css__WEBPACK_IMPORTED_MODULE_4__["default"]["previous-button"],
            variant: "outline-info",
            onClick: () => {
              toggleShowConfirmation();
              setCurrQuestion(currQuestion - 1);
            },
            children: "Previous"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
            id: _test_application_module_css__WEBPACK_IMPORTED_MODULE_4__["default"]["next-button"],
            variant: "outline-info",
            onClick: () => {
              toggleShowConfirmation();
              setCurrQuestion(currQuestion + 1);
            },
            children: "Next"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onClose: toggleShowConfirmation,
          show: showConfirmation,
          animation: true,
          delay: 1000,
          bg: "dark",
          autohide: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
            className: _test_application_module_css__WEBPACK_IMPORTED_MODULE_4__["default"]["option-notification"],
            children: "Options saved !!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }, this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestApplication);

/***/ }),

/***/ 4577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main-container":"app_main-container__2EJDa","footer-container":"app_footer-container__3N89C"});

/***/ }),

/***/ 6816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"card-container":"configuration-box_card-container__gvabs"});

/***/ }),

/***/ 7847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"time-container":"timer_time-container__3pPBQ"});

/***/ }),

/***/ 6276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"result-card":"result-card_result-card__qGbcy","result-card-header":"result-card_result-card-header__2o1Sj","result-card-entries":"result-card_result-card-entries__NBRhL"});

/***/ }),

/***/ 983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"test-application_container__3tqXp","questions":"test-application_questions__1CNPB","options":"test-application_options__TW0tj","questions-header":"test-application_questions-header__2Tlgg","navigator-deck":"test-application_navigator-deck__375wm","previous-button":"test-application_previous-button__3iVII","next-button":"test-application_next-button__3rtUJ","option-notification":"test-application_option-notification__3SuvG"});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1871)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map