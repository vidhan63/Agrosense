"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[model]/page",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"d627098bc970\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2VmOWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJkNjI3MDk4YmM5NzBcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/[model]/page.js":
/*!*****************************!*\
  !*** ./app/[model]/page.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout */ \"(app-pages-browser)/./app/layout.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"(app-pages-browser)/./app/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home(param) {\n    let { params } = param;\n    var _params_model;\n    _s();\n    const [prediction, setPrediction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const modelName = (_params_model = params.model) === null || _params_model === void 0 ? void 0 : _params_model.toString().replace(\"%20\", \" \");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        let timer;\n        if (prediction) {\n            timer = setTimeout(()=>{\n                setPrediction(null);\n            }, 5000);\n        }\n        return ()=>{\n            clearTimeout(timer);\n        };\n    }, [\n        prediction\n    ]);\n    function sendPrediction() {\n        if (!modelName || !fields[modelName]) {\n            return;\n        }\n        const formData = {};\n        fields[modelName].forEach((field)=>{\n            formData[field] = parseInt(document.getElementById(field.value).value);\n        });\n        const endpoint = {\n            \"Crop Recommendation\": \"/predict\",\n            \"Fertilizer Recommendation\": \"/ferti\",\n            \"Disease Detection\": \"/disease\"\n        };\n        fetch(_constants__WEBPACK_IMPORTED_MODULE_2__.urlCommon + endpoint[modelName], {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        }).then((response)=>response.json()).then((data)=>{\n            console.log(data);\n            setPrediction(data);\n        }).catch((error)=>console.error(\"Error:\", error));\n    }\n    const commonProps = {\n        className: \"bg-cardBg rounded-lg py-1 px-3 focus:border-heading border border-textLight \"\n    };\n    const fields = {\n        \"Crop Recommendation\": [\n            {\n                value: \"N\",\n                label: \"Nitrogen\",\n                defaultValue: 25,\n                type: \"number\"\n            },\n            {\n                value: \"P\",\n                label: \"Phosphorus\",\n                defaultValue: 35,\n                type: \"number\"\n            },\n            {\n                value: \"K\",\n                label: \"Potassium\",\n                defaultValue: 45,\n                type: \"number\"\n            },\n            {\n                value: \"temperature\",\n                label: \"Temperature\",\n                defaultValue: 42.0,\n                type: \"number\"\n            },\n            {\n                value: \"humidity\",\n                label: \"Humidity\",\n                defaultValue: 22,\n                type: \"number\"\n            },\n            {\n                value: \"ph\",\n                label: \"pH\",\n                defaultValue: 32,\n                type: \"number\"\n            },\n            {\n                value: \"rainfall\",\n                label: \"Rainfall\",\n                defaultValue: 55,\n                type: \"number\"\n            }\n        ],\n        \"Fertilizer Recommendation\": [\n            {\n                value: \"Nitrogen\",\n                label: \"Nitrogen\",\n                defaultValue: 25,\n                type: \"number\"\n            },\n            {\n                value: \"Phosphorus\",\n                label: \"Phosphorus\",\n                defaultValue: 35,\n                type: \"number\"\n            },\n            {\n                value: \"Moisture\",\n                label: \"Moisture\",\n                defaultValue: 35,\n                type: \"number\"\n            },\n            {\n                value: \"Potassium\",\n                label: \"Potassium\",\n                defaultValue: 45,\n                type: \"number\"\n            },\n            {\n                value: \"Temperature\",\n                label: \"Temperature\",\n                defaultValue: 40,\n                type: \"number\"\n            },\n            {\n                value: \"Humidity\",\n                label: \"Humidity\",\n                defaultValue: 22,\n                type: \"number\"\n            },\n            {\n                value: \"Soil_Type\",\n                label: \"Soil Type\",\n                defaultValue: \"Loam\",\n                type: \"text\"\n            },\n            {\n                value: \"Crop_Type\",\n                label: \"Crop Type\",\n                defaultValue: \"Rice\",\n                type: \"text\"\n            }\n        ],\n        \"Disease Detection\": [\n            {\n                value: \"img\",\n                label: \"Image\",\n                type: \"file\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen  flex-col items-center  p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \" text-[24px] uppercase font-semibold mb-5 text-center lg:text-[48px]  \".concat(_layout__WEBPACK_IMPORTED_MODULE_1__.poppins.className, \" text-heading relative z-10 font-semibold\"),\n                children: modelName\n            }, void 0, false, {\n                fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                id: \"predictionForm\",\n                className: \"flex flex-col items-center gap-y-3\",\n                children: [\n                    modelName && Array.isArray(fields[modelName]) && fields[modelName].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-start gap-y-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: item.value,\n                                    children: [\n                                        item.label,\n                                        \":\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                                    lineNumber: 168,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    ...commonProps,\n                                    type: item.type,\n                                    id: item.value,\n                                    name: item.value,\n                                    defaultValue: item.defaultValue\n                                }, void 0, false, {\n                                    fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                                    lineNumber: 169,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                            lineNumber: 167,\n                            columnNumber: 13\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"mt-2 bg-white hover:bg-cardBg p-2 px-4 border rounded-lg border-cardBorder\",\n                        onClick: ()=>{\n                            sendPrediction();\n                        },\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                        lineNumber: 178,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                lineNumber: 163,\n                columnNumber: 7\n            }, this),\n            prediction && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Prediction\"\n                    }, void 0, false, {\n                        fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                        lineNumber: 191,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: JSON.stringify(prediction)\n                    }, void 0, false, {\n                        fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                        lineNumber: 192,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                lineNumber: 190,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n        lineNumber: 155,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"cZ8V3d6xYXpC7aDc2gkvQiY7/SU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdoQixLQUFLQyxTQUFTLENBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCO0dBL0x3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1ttb2RlbF0vcGFnZS5qcz9kYjFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgcG9wcGlucyB9IGZyb20gXCIuLi9sYXlvdXRcIjtcbmltcG9ydCB7IHVybENvbW1vbiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IFtwcmVkaWN0aW9uLCBzZXRQcmVkaWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBtb2RlbE5hbWUgPSBwYXJhbXMubW9kZWw/LnRvU3RyaW5nKCkucmVwbGFjZShcIiUyMFwiLCBcIiBcIik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVyO1xuICAgIGlmIChwcmVkaWN0aW9uKSB7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRQcmVkaWN0aW9uKG51bGwpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH07XG4gIH0sIFtwcmVkaWN0aW9uXSk7XG4gIGZ1bmN0aW9uIHNlbmRQcmVkaWN0aW9uKCkge1xuICAgIGlmICghbW9kZWxOYW1lIHx8ICFmaWVsZHNbbW9kZWxOYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xuICAgIGZpZWxkc1ttb2RlbE5hbWVdLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBmb3JtRGF0YVtmaWVsZF0gPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZC52YWx1ZSkudmFsdWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVuZHBvaW50ID0ge1xuICAgICAgXCJDcm9wIFJlY29tbWVuZGF0aW9uXCI6IFwiL3ByZWRpY3RcIixcbiAgICAgIFwiRmVydGlsaXplciBSZWNvbW1lbmRhdGlvblwiOiBcIi9mZXJ0aVwiLFxuICAgICAgXCJEaXNlYXNlIERldGVjdGlvblwiOiBcIi9kaXNlYXNlXCIsXG4gICAgfTtcbiAgICBmZXRjaCh1cmxDb21tb24gKyBlbmRwb2ludFttb2RlbE5hbWVdLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHNldFByZWRpY3Rpb24oZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcikpO1xuICB9XG4gIGNvbnN0IGNvbW1vblByb3BzID0ge1xuICAgIGNsYXNzTmFtZTpcbiAgICAgIFwiYmctY2FyZEJnIHJvdW5kZWQtbGcgcHktMSBweC0zIGZvY3VzOmJvcmRlci1oZWFkaW5nIGJvcmRlciBib3JkZXItdGV4dExpZ2h0IFwiLFxuICB9O1xuICBjb25zdCBmaWVsZHMgPSB7XG4gICAgXCJDcm9wIFJlY29tbWVuZGF0aW9uXCI6IFtcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwiTlwiLFxuICAgICAgICBsYWJlbDogXCJOaXRyb2dlblwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IDI1LFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwiUFwiLFxuICAgICAgICBsYWJlbDogXCJQaG9zcGhvcnVzXCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogMzUsXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogXCJLXCIsXG4gICAgICAgIGxhYmVsOiBcIlBvdGFzc2l1bVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IDQ1LFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwidGVtcGVyYXR1cmVcIixcbiAgICAgICAgbGFiZWw6IFwiVGVtcGVyYXR1cmVcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiA0Mi4wLFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwiaHVtaWRpdHlcIixcbiAgICAgICAgbGFiZWw6IFwiSHVtaWRpdHlcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiAyMixcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBcInBoXCIsXG4gICAgICAgIGxhYmVsOiBcInBIXCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogMzIsXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogXCJyYWluZmFsbFwiLFxuICAgICAgICBsYWJlbDogXCJSYWluZmFsbFwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IDU1LFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFwiRmVydGlsaXplciBSZWNvbW1lbmRhdGlvblwiOiBbXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBcIk5pdHJvZ2VuXCIsXG4gICAgICAgIGxhYmVsOiBcIk5pdHJvZ2VuXCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogMjUsXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogXCJQaG9zcGhvcnVzXCIsXG4gICAgICAgIGxhYmVsOiBcIlBob3NwaG9ydXNcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiAzNSxcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBcIk1vaXN0dXJlXCIsXG4gICAgICAgIGxhYmVsOiBcIk1vaXN0dXJlXCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogMzUsXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogXCJQb3Rhc3NpdW1cIixcbiAgICAgICAgbGFiZWw6IFwiUG90YXNzaXVtXCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogNDUsXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogXCJUZW1wZXJhdHVyZVwiLFxuICAgICAgICBsYWJlbDogXCJUZW1wZXJhdHVyZVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IDQwLFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwiSHVtaWRpdHlcIixcbiAgICAgICAgbGFiZWw6IFwiSHVtaWRpdHlcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiAyMixcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBcIlNvaWxfVHlwZVwiLFxuICAgICAgICBsYWJlbDogXCJTb2lsIFR5cGVcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIkxvYW1cIixcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogXCJDcm9wX1R5cGVcIixcbiAgICAgICAgbGFiZWw6IFwiQ3JvcCBUeXBlXCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJSaWNlXCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFwiRGlzZWFzZSBEZXRlY3Rpb25cIjogW1xuICAgICAge1xuICAgICAgICB2YWx1ZTogXCJpbWdcIixcbiAgICAgICAgbGFiZWw6IFwiSW1hZ2VcIixcbiAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gIGZsZXgtY29sIGl0ZW1zLWNlbnRlciAgcC0yNFwiPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBtYXgtdy01eGwgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gbGc6ZmxleFwiPiAqL31cbiAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+UHJlZGljdG9yPC9oMT4gKi99XG4gICAgICA8cFxuICAgICAgICBjbGFzc05hbWU9e2AgdGV4dC1bMjRweF0gdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGQgbWItNSB0ZXh0LWNlbnRlciBsZzp0ZXh0LVs0OHB4XSAgJHtwb3BwaW5zLmNsYXNzTmFtZX0gdGV4dC1oZWFkaW5nIHJlbGF0aXZlIHotMTAgZm9udC1zZW1pYm9sZGB9XG4gICAgICA+XG4gICAgICAgIHttb2RlbE5hbWV9XG4gICAgICA8L3A+XG4gICAgICA8Zm9ybSBpZD1cInByZWRpY3Rpb25Gb3JtXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLXktM1wiPlxuICAgICAgICB7bW9kZWxOYW1lICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShmaWVsZHNbbW9kZWxOYW1lXSkgJiZcbiAgICAgICAgICBmaWVsZHNbbW9kZWxOYW1lXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgZ2FwLXktMVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17aXRlbS52YWx1ZX0+e2l0ZW0ubGFiZWx9OjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHsuLi5jb21tb25Qcm9wc31cbiAgICAgICAgICAgICAgICB0eXBlPXtpdGVtLnR5cGV9XG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2l0ZW0uZGVmYXVsdFZhbHVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIGJnLXdoaXRlIGhvdmVyOmJnLWNhcmRCZyBwLTIgcHgtNCBib3JkZXIgcm91bmRlZC1sZyBib3JkZXItY2FyZEJvcmRlclwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2VuZFByZWRpY3Rpb24oKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgIHtwcmVkaWN0aW9uICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0yXCI+XG4gICAgICAgICAgPGgyPlByZWRpY3Rpb248L2gyPlxuICAgICAgICAgIDxwPntKU09OLnN0cmluZ2lmeShwcmVkaWN0aW9uKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsicG9wcGlucyIsInVybENvbW1vbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInBhcmFtcyIsInByZWRpY3Rpb24iLCJzZXRQcmVkaWN0aW9uIiwibW9kZWxOYW1lIiwibW9kZWwiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZW5kUHJlZGljdGlvbiIsImZpZWxkcyIsImZvcm1EYXRhIiwiZm9yRWFjaCIsImZpZWxkIiwicGFyc2VJbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJlbmRwb2ludCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImNvbW1vblByb3BzIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJkZWZhdWx0VmFsdWUiLCJ0eXBlIiwibWFpbiIsInAiLCJmb3JtIiwiaWQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXYiLCJodG1sRm9yIiwiaW5wdXQiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[model]/page.js\n"));

/***/ })

});