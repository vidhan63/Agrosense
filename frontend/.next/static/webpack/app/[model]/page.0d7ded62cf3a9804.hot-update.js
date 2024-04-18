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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"e963380b6619\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2VmOWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlOTYzMzgwYjY2MTlcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/[model]/page.js":
/*!*****************************!*\
  !*** ./app/[model]/page.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout */ \"(app-pages-browser)/./app/layout.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"(app-pages-browser)/./app/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.1.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home(param) {\n    let { params } = param;\n    var _params_model;\n    _s();\n    const [prediction, setPrediction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const modelName = (_params_model = params.model) === null || _params_model === void 0 ? void 0 : _params_model.toString().replace(\"%20\", \" \");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        let timer;\n        if (prediction) {\n            timer = setTimeout(()=>{\n                setPrediction(null);\n            }, 5000);\n        }\n        return ()=>{\n            clearTimeout(timer);\n        };\n    }, [\n        prediction\n    ]);\n    function sendPrediction() {\n        if (!modelName || !fields[modelName]) {\n            console.error(\"Model not found\");\n            return;\n        }\n        const formData = {};\n        fields[modelName].forEach((field)=>{\n            formData[field] = parseInt(document.getElementById(field.value).value);\n        });\n        const endpoint = {\n            \"Crop Recommendation\": \"/predict\",\n            \"Fertilizer Recommendation\": \"/ferti\",\n            \"Disease Detection\": \"/disease\"\n        };\n        console.log(formData, \"for\", fields[modelName]);\n        fetch(_constants__WEBPACK_IMPORTED_MODULE_2__.urlCommon + endpoint[modelName], {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        }).then((response)=>response.json()).then((data)=>{\n            console.log(data);\n            setPrediction(data);\n        }).catch((error)=>console.error(\"Error:\", error));\n    }\n    const commonProps = {\n        className: \"bg-cardBg rounded-lg py-1 px-3 focus:border-heading border border-textLight \"\n    };\n    const fields = {\n        \"Crop Recommendation\": [\n            {\n                value: \"N\",\n                label: \"Nitrogen\",\n                defaultValue: 25,\n                type: \"number\"\n            },\n            {\n                value: \"P\",\n                label: \"Phosphorus\",\n                defaultValue: 35,\n                type: \"number\"\n            },\n            {\n                value: \"K\",\n                label: \"Potassium\",\n                defaultValue: 45,\n                type: \"number\"\n            },\n            {\n                value: \"temperature\",\n                label: \"Temperature\",\n                defaultValue: 42.0,\n                type: \"number\"\n            },\n            {\n                value: \"humidity\",\n                label: \"Humidity\",\n                defaultValue: 22,\n                type: \"number\"\n            },\n            {\n                value: \"ph\",\n                label: \"pH\",\n                defaultValue: 32,\n                type: \"number\"\n            },\n            {\n                value: \"rainfall\",\n                label: \"Rainfall\",\n                defaultValue: 55,\n                type: \"number\"\n            }\n        ],\n        \"Fertilizer Recommendation\": [\n            {\n                value: \"Nitrogen\",\n                label: \"Nitrogen\",\n                defaultValue: 25,\n                type: \"number\"\n            },\n            {\n                value: \"Phosphorus\",\n                label: \"Phosphorus\",\n                defaultValue: 35,\n                type: \"number\"\n            },\n            {\n                value: \"Moisture\",\n                label: \"Moisture\",\n                defaultValue: 35,\n                type: \"number\"\n            },\n            {\n                value: \"Potassium\",\n                label: \"Potassium\",\n                defaultValue: 45,\n                type: \"number\"\n            },\n            {\n                value: \"Temperature\",\n                label: \"Temperature\",\n                defaultValue: 40,\n                type: \"number\"\n            },\n            {\n                value: \"Humidity\",\n                label: \"Humidity\",\n                defaultValue: 22,\n                type: \"number\"\n            },\n            {\n                value: \"Soil_Type\",\n                label: \"Soil Type\",\n                defaultValue: \"Loam\",\n                type: \"text\"\n            },\n            {\n                value: \"Crop_Type\",\n                label: \"Crop Type\",\n                defaultValue: \"Rice\",\n                type: \"text\"\n            }\n        ],\n        \"Disease Detection\": [\n            {\n                value: \"img\",\n                label: \"Image\",\n                type: \"file\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen  flex-col items-center  p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \" text-[24px] uppercase font-semibold mb-5 text-center lg:text-[48px]  \".concat(_layout__WEBPACK_IMPORTED_MODULE_1__.poppins.className, \" text-heading relative z-10 font-semibold\"),\n                children: modelName\n            }, void 0, false, {\n                fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                lineNumber: 160,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                id: \"predictionForm\",\n                className: \"flex flex-col items-center gap-y-3\",\n                children: [\n                    modelName && Array.isArray(fields[modelName]) && fields[modelName].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-start gap-y-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: item.value,\n                                    children: [\n                                        item.label,\n                                        \":\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                                    lineNumber: 170,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    ...commonProps,\n                                    type: item.type,\n                                    id: item.value,\n                                    name: item.value,\n                                    defaultValue: item.defaultValue\n                                }, void 0, false, {\n                                    fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                                    lineNumber: 171,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                            lineNumber: 169,\n                            columnNumber: 13\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"mt-2 bg-white hover:bg-cardBg p-2 px-4 border rounded-lg border-cardBorder\",\n                        onClick: ()=>{\n                            sendPrediction();\n                        },\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                        lineNumber: 180,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                lineNumber: 165,\n                columnNumber: 7\n            }, this),\n            prediction && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Prediction\"\n                    }, void 0, false, {\n                        fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                        lineNumber: 193,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: JSON.stringify(prediction)\n                    }, void 0, false, {\n                        fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                        lineNumber: 194,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n                lineNumber: 192,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/spark/Desktop/ai/argosense/frontend/app/[model]/page.js\",\n        lineNumber: 157,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"cZ8V3d6xYXpC7aDc2gkvQiY7/SU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbW9kZWxdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDb0M7QUFDSztBQUNHO0FBRTdCLFNBQVNJLEtBQUssS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWO1FBRVRBOztJQURsQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFDN0MsTUFBTUssYUFBWUgsZ0JBQUFBLE9BQU9JLEtBQUssY0FBWkosb0NBQUFBLGNBQWNLLFFBQVEsR0FBR0MsT0FBTyxDQUFDLE9BQU87SUFDMURULGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVU7UUFDSixJQUFJTixZQUFZO1lBQ2RNLFFBQVFDLFdBQVc7Z0JBQ2pCTixjQUFjO1lBQ2hCLEdBQUc7UUFDTDtRQUNBLE9BQU87WUFDTE8sYUFBYUY7UUFDZjtJQUNGLEdBQUc7UUFBQ047S0FBVztJQUNmLFNBQVNTO1FBQ1AsSUFBSSxDQUFDUCxhQUFhLENBQUNRLE1BQU0sQ0FBQ1IsVUFBVSxFQUFFO1lBQ3BDUyxRQUFRQyxLQUFLLENBQUM7WUFDZDtRQUNGO1FBQ0EsTUFBTUMsV0FBVyxDQUFDO1FBQ2xCSCxNQUFNLENBQUNSLFVBQVUsQ0FBQ1ksT0FBTyxDQUFDLENBQUNDO1lBQ3pCRixRQUFRLENBQUNFLE1BQU0sR0FBR0MsU0FBU0MsU0FBU0MsY0FBYyxDQUFDSCxNQUFNSSxLQUFLLEVBQUVBLEtBQUs7UUFDdkU7UUFDQSxNQUFNQyxXQUFXO1lBQ2YsdUJBQXVCO1lBQ3ZCLDZCQUE2QjtZQUM3QixxQkFBcUI7UUFDdkI7UUFDQVQsUUFBUVUsR0FBRyxDQUFDUixVQUFVLE9BQU9ILE1BQU0sQ0FBQ1IsVUFBVTtRQUM5Q29CLE1BQU0zQixpREFBU0EsR0FBR3lCLFFBQVEsQ0FBQ2xCLFVBQVUsRUFBRTtZQUNyQ3FCLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDZDtRQUN2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Ozs7WUFLRlQsNEJBQ0MsOERBQUMrQztnQkFBSWIsV0FBVTs7a0NBQ2IsOERBQUNtQjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDZDtrQ0FBR2IsS0FBS0MsU0FBUyxDQUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtHQWpNd0JGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bbW9kZWxdL3BhZ2UuanM/ZGIxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHBvcHBpbnMgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XG5pbXBvcnQgeyB1cmxDb21tb24gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwYXJhbXMgfSkge1xuICBjb25zdCBbcHJlZGljdGlvbiwgc2V0UHJlZGljdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgbW9kZWxOYW1lID0gcGFyYW1zLm1vZGVsPy50b1N0cmluZygpLnJlcGxhY2UoXCIlMjBcIiwgXCIgXCIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lcjtcbiAgICBpZiAocHJlZGljdGlvbikge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0UHJlZGljdGlvbihudWxsKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9O1xuICB9LCBbcHJlZGljdGlvbl0pO1xuICBmdW5jdGlvbiBzZW5kUHJlZGljdGlvbigpIHtcbiAgICBpZiAoIW1vZGVsTmFtZSB8fCAhZmllbGRzW21vZGVsTmFtZV0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJNb2RlbCBub3QgZm91bmRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZvcm1EYXRhID0ge307XG4gICAgZmllbGRzW21vZGVsTmFtZV0uZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGZvcm1EYXRhW2ZpZWxkXSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkLnZhbHVlKS52YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3QgZW5kcG9pbnQgPSB7XG4gICAgICBcIkNyb3AgUmVjb21tZW5kYXRpb25cIjogXCIvcHJlZGljdFwiLFxuICAgICAgXCJGZXJ0aWxpemVyIFJlY29tbWVuZGF0aW9uXCI6IFwiL2ZlcnRpXCIsXG4gICAgICBcIkRpc2Vhc2UgRGV0ZWN0aW9uXCI6IFwiL2Rpc2Vhc2VcIixcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLCBcImZvclwiLCBmaWVsZHNbbW9kZWxOYW1lXSk7XG4gICAgZmV0Y2godXJsQ29tbW9uICsgZW5kcG9pbnRbbW9kZWxOYW1lXSwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRQcmVkaWN0aW9uKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpKTtcbiAgfVxuICBjb25zdCBjb21tb25Qcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6XG4gICAgICBcImJnLWNhcmRCZyByb3VuZGVkLWxnIHB5LTEgcHgtMyBmb2N1czpib3JkZXItaGVhZGluZyBib3JkZXIgYm9yZGVyLXRleHRMaWdodCBcIixcbiAgfTtcbiAgY29uc3QgZmllbGRzID0ge1xuICAgIFwiQ3JvcCBSZWNvbW1lbmRhdGlvblwiOiBbXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBcIk5cIixcbiAgICAgICAgbGFiZWw6IFwiTml0cm9nZW5cIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiAyNSxcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBcIlBcIixcbiAgICAgICAgbGFiZWw6IFwiUGhvc3Bob3J1c1wiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IDM1LFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwiS1wiLFxuICAgICAgICBsYWJlbDogXCJQb3Rhc3NpdW1cIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiA0NSxcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBcInRlbXBlcmF0dXJlXCIsXG4gICAgICAgIGxhYmVsOiBcIlRlbXBlcmF0dXJlXCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogNDIuMCxcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBcImh1bWlkaXR5XCIsXG4gICAgICAgIGxhYmVsOiBcIkh1bWlkaXR5XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogMjIsXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogXCJwaFwiLFxuICAgICAgICBsYWJlbDogXCJwSFwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IDMyLFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwicmFpbmZhbGxcIixcbiAgICAgICAgbGFiZWw6IFwiUmFpbmZhbGxcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiA1NSxcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBcIkZlcnRpbGl6ZXIgUmVjb21tZW5kYXRpb25cIjogW1xuICAgICAge1xuICAgICAgICB2YWx1ZTogXCJOaXRyb2dlblwiLFxuICAgICAgICBsYWJlbDogXCJOaXRyb2dlblwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IDI1LFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwiUGhvc3Bob3J1c1wiLFxuICAgICAgICBsYWJlbDogXCJQaG9zcGhvcnVzXCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogMzUsXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogXCJNb2lzdHVyZVwiLFxuICAgICAgICBsYWJlbDogXCJNb2lzdHVyZVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IDM1LFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwiUG90YXNzaXVtXCIsXG4gICAgICAgIGxhYmVsOiBcIlBvdGFzc2l1bVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IDQ1LFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwiVGVtcGVyYXR1cmVcIixcbiAgICAgICAgbGFiZWw6IFwiVGVtcGVyYXR1cmVcIixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiA0MCxcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBcIkh1bWlkaXR5XCIsXG4gICAgICAgIGxhYmVsOiBcIkh1bWlkaXR5XCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogMjIsXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogXCJTb2lsX1R5cGVcIixcbiAgICAgICAgbGFiZWw6IFwiU29pbCBUeXBlXCIsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJMb2FtXCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwiQ3JvcF9UeXBlXCIsXG4gICAgICAgIGxhYmVsOiBcIkNyb3AgVHlwZVwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiUmljZVwiLFxuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBcIkRpc2Vhc2UgRGV0ZWN0aW9uXCI6IFtcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwiaW1nXCIsXG4gICAgICAgIGxhYmVsOiBcIkltYWdlXCIsXG4gICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuICBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgIHAtMjRcIj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInotMTAgbWF4LXctNXhsIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZvbnQtbW9ubyB0ZXh0LXNtIGxnOmZsZXhcIj4gKi99XG4gICAgICB7LyogPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPlByZWRpY3RvcjwvaDE+ICovfVxuICAgICAgPHBcbiAgICAgICAgY2xhc3NOYW1lPXtgIHRleHQtWzI0cHhdIHVwcGVyY2FzZSBmb250LXNlbWlib2xkIG1iLTUgdGV4dC1jZW50ZXIgbGc6dGV4dC1bNDhweF0gICR7cG9wcGlucy5jbGFzc05hbWV9IHRleHQtaGVhZGluZyByZWxhdGl2ZSB6LTEwIGZvbnQtc2VtaWJvbGRgfVxuICAgICAgPlxuICAgICAgICB7bW9kZWxOYW1lfVxuICAgICAgPC9wPlxuICAgICAgPGZvcm0gaWQ9XCJwcmVkaWN0aW9uRm9ybVwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC15LTNcIj5cbiAgICAgICAge21vZGVsTmFtZSAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoZmllbGRzW21vZGVsTmFtZV0pICYmXG4gICAgICAgICAgZmllbGRzW21vZGVsTmFtZV0ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGdhcC15LTFcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2l0ZW0udmFsdWV9PntpdGVtLmxhYmVsfTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB7Li4uY29tbW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxuICAgICAgICAgICAgICAgIGlkPXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpdGVtLmRlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBiZy13aGl0ZSBob3ZlcjpiZy1jYXJkQmcgcC0yIHB4LTQgYm9yZGVyIHJvdW5kZWQtbGcgYm9yZGVyLWNhcmRCb3JkZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNlbmRQcmVkaWN0aW9uKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICB7cHJlZGljdGlvbiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMlwiPlxuICAgICAgICAgIDxoMj5QcmVkaWN0aW9uPC9oMj5cbiAgICAgICAgICA8cD57SlNPTi5zdHJpbmdpZnkocHJlZGljdGlvbil9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInBvcHBpbnMiLCJ1cmxDb21tb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJwYXJhbXMiLCJwcmVkaWN0aW9uIiwic2V0UHJlZGljdGlvbiIsIm1vZGVsTmFtZSIsIm1vZGVsIiwidG9TdHJpbmciLCJyZXBsYWNlIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2VuZFByZWRpY3Rpb24iLCJmaWVsZHMiLCJjb25zb2xlIiwiZXJyb3IiLCJmb3JtRGF0YSIsImZvckVhY2giLCJmaWVsZCIsInBhcnNlSW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZW5kcG9pbnQiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJjb21tb25Qcm9wcyIsImNsYXNzTmFtZSIsImxhYmVsIiwiZGVmYXVsdFZhbHVlIiwidHlwZSIsIm1haW4iLCJwIiwiZm9ybSIsImlkIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGl2IiwiaHRtbEZvciIsImlucHV0IiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[model]/page.js\n"));

/***/ })

});