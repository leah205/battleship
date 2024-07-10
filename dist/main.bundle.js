/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

.nav {
    height: 100px;
}

* {
    box-sizing: border-box;
}

.place-ships-container {
    justify-content: center;
    justify-items: center;
    width: 800px;
    margin: auto;
    text-align: center;
    display: grid;
    grid-template-areas:
        'header .'
        'gameboard ship-arsenal'
        'start-button .';
    grid-template-columns: 800px 400px;
    grid-template-rows: 100px 800px 100px;
    column-gap: 30px;
}

.place-ships-container h1 {
    margin-top: 30px;
    grid-area: header;
    font-size: 3rem;
    color: rgb(149, 149, 50);
}

.place-ships-container .gameboard {
    grid-area: gameboard;
}

.gameboard {
    width: 800px;
    height: 800px;
    display: grid;
    justify-items: normal;
    grid-template-areas:
        '. x-axis'
        'y-axis grid';

    grid-template-columns: 1fr 10fr;
    grid-template-rows: 1fr 10fr;
}
.gameboard .ship-grid {
    position: relative;
    grid-row: 2;
    grid-column: 2;
}
.gameboard .x-axis {
    grid-area: x-axis;
}

.x-axis,
.y-axis {
    font-size: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.gameboard .y-axis {
    grid-area: y-axis;
    flex-direction: column;
}
.grid {
    justify-items: stretch;
    background: rgb(7, 0, 78);
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-area: grid;
}
.grid div {
    border: 1px solid rgb(157, 166, 181);
}
.ship-arsenal {
    grid-area: ship-arsenal;
    background: white;
    height: 500px;
    align-self: center;
    border-radius: 20px;
}
.ship-arsenal img {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
}

.ship-grid {
    position: absolute;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    border: 1px solid pink;
}
.ship-grid img {
    position: relative;
}
.start-button {
    grid-area: start-button;
    justify-self: center;
    align-self: center;
    background: rgb(168, 168, 168);
    color: rgb(7, 0, 78);
    height: 70px;
    width: 100px;
    font-size: 1.5rem;
    border-radius: 5px;
    border: 0;
}
.game-container {
    margin-top: 100px;
    justify-content: space-around;
    display: flex;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;AACA,gDAAgD;AAChD;;;;;;;;;;;IAWI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,YAAY;AAChB;AACA;;;;IAII,WAAW;IACX,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb;;;wBAGoB;IACpB,kCAAkC;IAClC,qCAAqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,qBAAqB;IACrB;;qBAEiB;;IAEjB,+BAA+B;IAC/B,4BAA4B;AAChC;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,cAAc;AAClB;AACA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,eAAe;IACf,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;AACA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,eAAe;AACnB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,sCAAsC;IACtC,mCAAmC;IACnC,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,oBAAoB;IACpB,kBAAkB;IAClB,8BAA8B;IAC9B,oBAAoB;IACpB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,6BAA6B;IAC7B,aAAa;AACjB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n.nav {\n    height: 100px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n.place-ships-container {\n    justify-content: center;\n    justify-items: center;\n    width: 800px;\n    margin: auto;\n    text-align: center;\n    display: grid;\n    grid-template-areas:\n        'header .'\n        'gameboard ship-arsenal'\n        'start-button .';\n    grid-template-columns: 800px 400px;\n    grid-template-rows: 100px 800px 100px;\n    column-gap: 30px;\n}\n\n.place-ships-container h1 {\n    margin-top: 30px;\n    grid-area: header;\n    font-size: 3rem;\n    color: rgb(149, 149, 50);\n}\n\n.place-ships-container .gameboard {\n    grid-area: gameboard;\n}\n\n.gameboard {\n    width: 800px;\n    height: 800px;\n    display: grid;\n    justify-items: normal;\n    grid-template-areas:\n        '. x-axis'\n        'y-axis grid';\n\n    grid-template-columns: 1fr 10fr;\n    grid-template-rows: 1fr 10fr;\n}\n.gameboard .ship-grid {\n    position: relative;\n    grid-row: 2;\n    grid-column: 2;\n}\n.gameboard .x-axis {\n    grid-area: x-axis;\n}\n\n.x-axis,\n.y-axis {\n    font-size: 2rem;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.gameboard .y-axis {\n    grid-area: y-axis;\n    flex-direction: column;\n}\n.grid {\n    justify-items: stretch;\n    background: rgb(7, 0, 78);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    grid-area: grid;\n}\n.grid div {\n    border: 1px solid rgb(157, 166, 181);\n}\n.ship-arsenal {\n    grid-area: ship-arsenal;\n    background: white;\n    height: 500px;\n    align-self: center;\n    border-radius: 20px;\n}\n.ship-arsenal img {\n    margin-bottom: 10px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n.ship-grid {\n    position: absolute;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: 1px solid pink;\n}\n.ship-grid img {\n    position: relative;\n}\n.start-button {\n    grid-area: start-button;\n    justify-self: center;\n    align-self: center;\n    background: rgb(168, 168, 168);\n    color: rgb(7, 0, 78);\n    height: 70px;\n    width: 100px;\n    font-size: 1.5rem;\n    border-radius: 5px;\n    border: 0;\n}\n.game-container {\n    margin-top: 100px;\n    justify-content: space-around;\n    display: flex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "../../node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display/board-display.js":
/*!**************************************!*\
  !*** ./src/display/board-display.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBoard)
/* harmony export */ });
function createBoard() {
  const board = document.createElement('div');
  board.classList.add('gameboard');
  board.appendChild(createAxis('ABCDEFGHIJ', 'x-axis'));
  board.appendChild(createAxis('0123456789', 'y-axis'));
  board.appendChild(createGrid());
  board.appendChild(createShipGrid());
  return board;
}
function createShipGrid() {
  const grid = document.createElement('div');
  grid.classList.add('ship-grid');
  return grid;
}
function createAxis(content, className) {
  const container = document.createElement('div');
  container.classList.add(className);
  content.split('').forEach(ele => {
    const eleContainer = document.createElement('div');
    eleContainer.textContent = ele;
    container.appendChild(eleContainer);
  });
  return container;
}
function createGrid() {
  const grid = document.createElement('div');
  grid.classList.add('grid');
  for (let i = 0; i < 100; i++) {
    grid.appendChild(document.createElement('div'));
  }
  return grid;
}

/***/ }),

/***/ "./src/display/drag.js":
/*!*****************************!*\
  !*** ./src/display/drag.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ enableDragAndDrop)
/* harmony export */ });
/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop */ "./src/display/drop.js");
//change to enable drag


function enableDragAndDrop(target, player) {
  let startingX;
  let startingY;
  let startingLeft;
  let startingTop;
  function drag(e) {
    const gameContainer = document.querySelector('.game-container');
    if (gameContainer) return;
    target.style.position = 'relative';
    target.style.left = target.style.left || 0;
    target.style.left = `calc(${startingLeft} + ${e.clientX - startingX}px)`;
    target.style.top = `calc(${startingTop} + ${e.clientY - startingY}px)`;
  }
  target.addEventListener('mousedown', function (event) {
    startingX = event.clientX;
    startingY = event.clientY;
    startingLeft = target.style.left || `0px`;
    startingTop = target.style.top || `0px`;
    event.preventDefault();
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', endMove);
  });
  function endMove() {
    setTimeout(() => {
      (0,_drop__WEBPACK_IMPORTED_MODULE_0__["default"])(startingLeft, startingTop, target, player);
    }, 1);
    window.removeEventListener('mousemove', drag);
    window.removeEventListener('mouseup', endMove);
  }
}

/***/ }),

/***/ "./src/display/drop.js":
/*!*****************************!*\
  !*** ./src/display/drop.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drop)
/* harmony export */ });
/* harmony import */ var _start_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-button */ "./src/display/start-button.js");
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag */ "./src/display/drag.js");
/* harmony import */ var _toggle_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-axis */ "./src/display/toggle-axis.js");
let errorMargin;



//commit please

function drop(startingLeft, startingTop, target, player) {
  const shipArsenal = document.querySelector('.ship-arsenal');
  const shipGrid = document.querySelector('.ship-grid');
  errorMargin = getSquares()[0].getBoundingClientRect().width / 2;
  if (target.classList.contains('toggled')) {
    target.classList.remove('toggled');
    return;
  }
  console.log(1);
  if (!getFirstSquare(findLeft(target), findTop(target)) || player.getBoard().coordinateTaken(getStartingCoordinate(target))) {
    console.log('yo');
    target.style.left = startingLeft;
    target.style.top = startingTop;
    return;
  }
  console.log('hello');
  const start = getStartingCoordinate(findLeft(target), findTop(target));
  console.log('aloha');
  player.getBoard().placeShip([0, 0], 3, 'horizontal');
  console.log(start);
  console.log(getLength(target));
  console.log(getDirection(target));
  // player.getBoard().placeShip(start, getLength(target), getDirection(target));
  console.log(player.getBoard().isPlacedCorrectlyAt(start));
  if (player.getBoard().isPlacedCorrectlyAt(start)) {
    console.log(2);
    const newTarget = target.cloneNode();
    if (target.parentNode === shipArsenal) {
      shipArsenal.removeChild(target);
    } else {
      shipGrid.removeChild(target);
      player.getBoard().removeShip(getStartingCoordinate(target));
    }
    newTarget.style['grid-area'] = getGridArea(start, getLength(newTarget), getDirection(newTarget));
    newTarget.style.left = 0;
    newTarget.style.top = 0;
    shipGrid.appendChild(newTarget);
    (0,_drag__WEBPACK_IMPORTED_MODULE_1__["default"])(newTarget);
    (0,_toggle_axis__WEBPACK_IMPORTED_MODULE_2__["default"])(newTarget);
    if (!shipArsenal.firstChild) {
      (0,_start_button__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
  } else {
    console.log('boohoo');
  }
}
function getDirection(ship) {
  return ship.classList.contains('vertical') ? 'vertical' : 'horizontal';
}
function getLength(target) {
  const measure = target.classList.contains('vertical') ? 'height' : 'width';
  const gridSlotWidth = document.querySelector('.ship-grid').getBoundingClientRect()['width'] / 10;
  return Math.round(target.getBoundingClientRect()[measure] / gridSlotWidth);
}
function getFirstSquare(left, top) {
  return getSquares().filter(square => {
    return square.offsetLeft > left - errorMargin && square.offsetTop > top - errorMargin && square.offsetLeft <= left + errorMargin && square.offsetTop <= top + errorMargin;
  })[0];
}
function getSquares() {
  return Array.from(document.querySelectorAll('.grid div'));
}
function getGridArea(coordinate, length, direction) {
  if (direction === 'vertical') {
    newTarget.style['grid-row'] = `${coordinate[1] + 1} / ${coordinate[1] + 1 + length}`;
    newTarget.style['grid-column'] = `${firstSquareColumn + 1}`;
  } else {
    newTarget.style['grid-column'] = `${firstSquareColumn + 1} / ${firstSquareColumn + 1 + length}`;
    newTarget.style['grid-row'] = `${firstSquareRow + 1}`;
  }
}
function getStartingCoordinate(target) {
  const firstSquareRow = Math.floor(getSquares().indexOf(getFirstSquare(target)) / 10);
  const firstSquareColumn = getSquares().indexOf(getFirstSquare(target)) % 10;
  return [firstSquareColumn, firstSquareRow];
}
function findLeft(ship) {
  if (ship.offsetParent != document.body) {
    return ship.offsetParent.offsetLeft + ship.offsetLeft;
  }
  return ship.offsetLeft;
}
function findTop(ship) {
  if (ship.offsetParent != document.body) {
    return ship.offsetParent.offsetTop + ship.offsetTop;
  }
  return ship.offsetTop;
}

/***/ }),

/***/ "./src/display/overlap-ships.js":
/*!**************************************!*\
  !*** ./src/display/overlap-ships.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipsOverlap)
/* harmony export */ });
/* harmony import */ var _logic_conversions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/conversions */ "./src/logic/conversions.js");

function shipsOverlap(target) {
  const ships = Array.from(document.querySelectorAll('.ship-grid img'));
  return (0,_logic_conversions__WEBPACK_IMPORTED_MODULE_0__["default"])(target).some(targetCoor => {
    return ships.some(ship => {
      return (0,_logic_conversions__WEBPACK_IMPORTED_MODULE_0__["default"])(ship).some(coor => {
        return coor[0] === targetCoor[0] && coor[1] === targetCoor[1] && ship !== target;
      });
    });
  });
}

/***/ }),

/***/ "./src/display/ship-display.js":
/*!*************************************!*\
  !*** ./src/display/ship-display.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShipImg: () => (/* binding */ createShipImg)
/* harmony export */ });
/* harmony import */ var _images_battleship_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/battleship.svg */ "./src/images/battleship.svg");
/* harmony import */ var _images_carrier_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/carrier.svg */ "./src/images/carrier.svg");
/* harmony import */ var _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/destroyer.svg */ "./src/images/destroyer.svg");
/* harmony import */ var _images_submarine_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/submarine.svg */ "./src/images/submarine.svg");
/* harmony import */ var _images_vertical_battleship_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/vertical-battleship.svg */ "./src/images/vertical-battleship.svg");
/* harmony import */ var _images_vertical_carrier_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/vertical-carrier.svg */ "./src/images/vertical-carrier.svg");
/* harmony import */ var _images_vertical_destroyer_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/vertical-destroyer.svg */ "./src/images/vertical-destroyer.svg");
/* harmony import */ var _images_vertical_submarine_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/vertical-submarine.svg */ "./src/images/vertical-submarine.svg");








const horizontalShips = [_images_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__, _images_submarine_svg__WEBPACK_IMPORTED_MODULE_3__, _images_battleship_svg__WEBPACK_IMPORTED_MODULE_0__, _images_carrier_svg__WEBPACK_IMPORTED_MODULE_1__];
const verticalShips = [_images_vertical_destroyer_svg__WEBPACK_IMPORTED_MODULE_6__, _images_vertical_submarine_svg__WEBPACK_IMPORTED_MODULE_7__, _images_vertical_battleship_svg__WEBPACK_IMPORTED_MODULE_4__, _images_vertical_carrier_svg__WEBPACK_IMPORTED_MODULE_5__];
function getDisplayFromCoordinates(coor, length) {}
function createShipImg(length, direction) {
  const image = document.createElement('img');
  const shipArray = direction === 'horizontal' ? horizontalShips : verticalShips;
  image.src = shipArray[length - 2];
  image.setAttribute('draggable', 'true');
  return image;
}


/***/ }),

/***/ "./src/display/start-button.js":
/*!*************************************!*\
  !*** ./src/display/start-button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-game */ "./src/display/start-game.js");

function displayStartButton() {
  const container = document.querySelector('.place-ships-container');
  const startButton = document.createElement('button');
  startButton.textContent = 'Start';
  startButton.classList.add('start-button');
  container.appendChild(startButton);
  startButton.addEventListener('click', () => {
    (0,_start_game__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayStartButton);

/***/ }),

/***/ "./src/display/start-game.js":
/*!***********************************!*\
  !*** ./src/display/start-game.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _board_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-display */ "./src/display/board-display.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "./src/player.js");


function startGame() {
  const humanBoard = document.querySelector('.gameboard');
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game-container');
  const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('human', 1);
  const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('computer', 2);
  addShipsToBoard(player1);
  addShipsToBoard(player2);
  gameContainer.appendChild(renderBoard(player1));
  gameContainer.appendChild(renderBoard(player2));
  document.body.appendChild(gameContainer);
  document.body.removeChild(document.querySelector('.place-ships-container'));
}
function addShipsToBoard(player) {
  console.log(player.getType());
  if (player.getType() === 'human') {
    const ships = document.querySelectorAll('.ship-grid img');
    ships.forEach(ship => {
      placeShipFromBoard(ship, player);
    });
  } else {
    player.getBoard().placeShipsRandomly();
  }
}
function renderBoard(player) {
  let board;
  if (player.getType() === 'human') {
    board = document.querySelector('.gameboard').cloneNode(true);
  } else {
    board = (0,_board_display__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
  //doesn't work
  board.classList.add(document.querySelector('.game-container .gameboard') ? 'player-2' : 'player-1');
  return board;
}
function placeShipFromBoard(target, player) {
  const [rowStart, rowEnd] = target.style['grid-row'].split('/');
  const [columnStart, columnEnd] = target.style['grid-column'].split('/');
  if (target.classList.contains('vertical')) {
    const length = rowEnd - rowStart;
    //method to remove ship at a starting position
    //method to get all coordinates/see if is in collision with another ship
    player.getBoard().placeShip([columnStart - 1, rowStart - 1], length, 'vertical');
  } else {
    const length = columnEnd - columnStart;
    player.getBoard().placeShip([columnStart - 1, rowStart - 1], length, 'horizontal');
  }
}

/***/ }),

/***/ "./src/display/starting-screen.js":
/*!****************************************!*\
  !*** ./src/display/starting-screen.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _board_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-display */ "./src/display/board-display.js");
/* harmony import */ var _ship_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship-display */ "./src/display/ship-display.js");


function createStartingPage() {
  const container = document.createElement('div');
  container.classList.add('place-ships-container');
  const header = document.createElement('h1');
  header.textContent = 'Place your ships!';
  container.appendChild(header);
  container.appendChild((0,_board_display__WEBPACK_IMPORTED_MODULE_0__["default"])());
  container.appendChild(createShipArsenal([2, 3, 3, 4, 5]));
  document.body.appendChild(container);
  createShipArsenal([2, 3, 3, 4, 5]);
}
function createShipArsenal(arr) {
  const shipArsenal = document.createElement('div');
  shipArsenal.classList.add('ship-arsenal');
  arr.forEach(num => {
    shipArsenal.appendChild((0,_ship_display__WEBPACK_IMPORTED_MODULE_1__.createShipImg)(num, 'horizontal'));
  });
  return shipArsenal;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStartingPage);

/***/ }),

/***/ "./src/display/toggle-axis.js":
/*!************************************!*\
  !*** ./src/display/toggle-axis.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_battleship_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/battleship.svg */ "./src/images/battleship.svg");
/* harmony import */ var _images_carrier_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/carrier.svg */ "./src/images/carrier.svg");
/* harmony import */ var _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/destroyer.svg */ "./src/images/destroyer.svg");
/* harmony import */ var _images_submarine_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/submarine.svg */ "./src/images/submarine.svg");
/* harmony import */ var _images_vertical_battleship_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/vertical-battleship.svg */ "./src/images/vertical-battleship.svg");
/* harmony import */ var _images_vertical_carrier_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/vertical-carrier.svg */ "./src/images/vertical-carrier.svg");
/* harmony import */ var _images_vertical_destroyer_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/vertical-destroyer.svg */ "./src/images/vertical-destroyer.svg");
/* harmony import */ var _images_vertical_submarine_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/vertical-submarine.svg */ "./src/images/vertical-submarine.svg");
/* harmony import */ var _overlap_ships__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overlap-ships */ "./src/display/overlap-ships.js");
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drag */ "./src/display/drag.js");










const horizontalShips = [_images_battleship_svg__WEBPACK_IMPORTED_MODULE_0__, _images_carrier_svg__WEBPACK_IMPORTED_MODULE_1__, _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__, _images_submarine_svg__WEBPACK_IMPORTED_MODULE_3__];
const verticalShips = [_images_vertical_battleship_svg__WEBPACK_IMPORTED_MODULE_4__, _images_vertical_carrier_svg__WEBPACK_IMPORTED_MODULE_5__, _images_vertical_destroyer_svg__WEBPACK_IMPORTED_MODULE_6__, _images_vertical_submarine_svg__WEBPACK_IMPORTED_MODULE_7__];
function toggleAxis(target) {
  let toggle = true;
  target.addEventListener('click', () => {
    const newTarget = target.cloneNode();
    toggleTarget(newTarget);
    if (toggle && !isIllegalToggle(target)) {
      if (target.parentNode === document.querySelector('.ship-grid')) {
        toggleInGrid(newTarget);
        target.parentNode.removeChild(target);
        if (!(0,_overlap_ships__WEBPACK_IMPORTED_MODULE_8__["default"])(newTarget)) {
          document.querySelector('.ship-grid').appendChild(newTarget);
          (0,_drag__WEBPACK_IMPORTED_MODULE_9__["default"])(newTarget);
          toggleAxis(newTarget);
        } else {
          document.querySelector('.ship-grid').appendChild(target);
        }
      } else {
        target.parentNode.removeChild(target);
        document.querySelector('.ship-arsenal').appendChild(newTarget);
        (0,_drag__WEBPACK_IMPORTED_MODULE_9__["default"])(newTarget);
        toggleAxis(newTarget);
      }
      target.classList.add('toggled');
    }
    toggle = true;
  });
  target.addEventListener('mousedown', () => {
    toggle = true;
    target.addEventListener('mousemove', toggleOff);
  });
  function toggleOff() {
    toggle = false;
  }
  target.addEventListener('mouseup', () => {
    target.removeEventListener('mousemove', toggleOff);
  });
}
function toggleTarget(target) {
  const parent = target.parentNode;
  const newTarget = target.cloneNode();
  if (horizontalShips.includes(target.src)) {
    target.src = verticalShips[horizontalShips.indexOf(target.src)];
    target.classList.add('vertical');
  } else {
    target.src = horizontalShips[verticalShips.indexOf(target.src)];
    target.classList.remove('vertical');
  }
}
function toggleInGrid(target) {
  const [columnStart, columnEnd] = target.style['grid-column'].split('/');
  const [rowStart, rowEnd] = target.style['grid-row'].split('/');
  target.style['grid-column'] = `${columnStart} / ${Number(columnStart) + ((rowEnd || rowStart) - rowStart)}`;
  target.style['grid-row'] = `${rowStart} / ${Number(rowStart) + ((columnEnd || columnStart) - columnStart)}`;
}
function isIllegalToggle(target) {
  const [columnStart, columnEnd] = target.style['grid-column'].split('/');
  const [rowStart, rowEnd] = target.style['grid-row'].split('/');
  return Number(columnStart) + ((rowEnd || rowStart) - rowStart) > 11 || Number(rowStart) + ((columnEnd || columnStart) - columnStart) > 11;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleAxis);

/***/ }),

/***/ "./src/driver.js":
/*!***********************!*\
  !*** ./src/driver.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStartingPage: () => (/* reexport safe */ _display_starting_screen__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   loadEventListeners: () => (/* binding */ loadEventListeners)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _display_starting_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/starting-screen */ "./src/display/starting-screen.js");
/* harmony import */ var _display_drag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/drag */ "./src/display/drag.js");
/* harmony import */ var _display_toggle_axis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/toggle-axis */ "./src/display/toggle-axis.js");




function loadEventListeners() {
  const shipArsenal = document.querySelector('.ship-arsenal');
  const ships = Array.from(shipArsenal.querySelectorAll('img'));
  const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('human');
  ships.forEach(ship => {
    (0,_display_drag__WEBPACK_IMPORTED_MODULE_2__["default"])(ship, player1);
    (0,_display_toggle_axis__WEBPACK_IMPORTED_MODULE_3__["default"])(ship);
  });
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");

function Gameboard() {
  const shipBoard = [];
  const hitBoard = [];
  const getHitBoard = () => hitBoard;
  const getShipBoard = () => shipBoard;
  function getCoordinatesIndex(coordinates) {
    return Number(`${coordinates[1]}${coordinates[0]}`);
  }
  function getShipAt(starting) {
    return shipBoard.find(ship => getCoordinatePair(getShipBoard().indexOf(ship)) === starting);
  }
  function findAttackedShip(coordinates) {
    return shipBoard.find(ship => {
      if (ship) {
        return getCoordinateArr(getCoordinatePair(getShipBoard().indexOf(ship)), ship.getDirection(), ship.getLength()).some(coor => {
          return coor[0] == coordinates[0] && coor[1] == coordinates[1];
        });
      }
    });
  }
  function receiveAttack(coordinates) {
    if (findAttackedShip(coordinates)) {
      findAttackedShip(coordinates).hit();
      addAttack(getCoordinatesIndex(coordinates), 'H');
    } else {
      addAttack(getCoordinatesIndex(coordinates), 'M');
    }
  }
  function addAttack(index, status) {
    hitBoard[index] = status;
  }
  function allShipsSunk() {
    return getShipBoard().every(ship => ship.isSunk());
  }
  function placeShip(coordinates, length, direction) {
    console.log('yo');
    shipBoard[getCoordinatesIndex(coordinates)] = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length, direction);
  }
  function removeShip(coor) {
    getShipBoard()[getCoordinatesIndex(coor)] = '';
  }
  function coordinateTaken(coor) {
    return !!getShipBoard()[getCoordinatesIndex(coor)];
  }
  function isPlacedCorrectlyAt(coor) {
    const ship = getShipBoard()[getCoordinatesIndex(coor)];
    return shipInGrid(coor, ship.getDirection(), ship.getLength()) && !shipOverlapping(coor, ship.getDirection(), ship.getLength());
  }
  function getCoordinatePair(index) {
    return index.toString().split('').reverse().map(num => Number(num));
  }
  function getCoordinateArr(coor, direction, length) {
    const arr = [];
    if (direction === 'vertical') {
      for (let i = coor[1]; i < coor[1] + length; i++) {
        arr.push([coor[0], i]);
      }
    } else {
      for (let i = coor[0]; i < coor[0] + length; i++) {
        arr.push([i, coor[1]]);
      }
    }
    return arr;
  }
  function shipOverlapping(targetCoor, direction, length) {
    const ships = getShipBoard().filter(ship => {
      return ship && getShipBoard().indexOf(ship) !== getCoordinatesIndex(targetCoor);
    });
    return getCoordinateArr(targetCoor, direction, length).some(pair => {
      return ships.some(ship => {
        return getCoordinateArr(getCoordinatePair(getShipBoard().indexOf(ship)), ship.getDirection(), ship.getLength()).some(coor => {
          return coor[1] === pair[1] && coor[0] === pair[0];
        });
      });
    });
  }
  function shipInGrid(coor, direction, length) {
    if (direction === 'vertical') {
      return coor[1] + length - 1 < 10;
    }
    return coor[0] + length - 1 < 10;
  }
  function placeShipsRandomly() {
    const lengths = [2, 3, 3, 4, 5];
    lengths.forEach(length => {
      placeShipRandomly(length);
    });

    /*function placeShipRandomly(length) {
        const direction =
            Math.random() * 2 >= 1 ? 'vertical' : 'horizontal';
        let coordinates = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
        ];
        if (direction === 'vertical') {
            if (
                isIllegalPlacement(
                    coordinates[1],
                    coordinates,
                    length,
                    'vertical'
                )
            ) {
                placeShipRandomly(length);
            } else {
                placeShip(coordinates, length, direction);
            }
        } else {
            if (
                isIllegalPlacement(
                    coordinates[0],
                    coordinates,
                    length,
                    'horizontal'
                )
            ) {
                placeShipRandomly(length);
            } else {
                placeShip(coordinates, length, direction);
            }
        }
    
    }*/
  }
  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
    placeShipsRandomly,
    coordinateTaken,
    removeShip,
    isPlacedCorrectlyAt,
    getShipBoard,
    getHitBoard,
    getShipAt
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/logic/conversions.js":
/*!**********************************!*\
  !*** ./src/logic/conversions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ findCoordinates)
/* harmony export */ });
function findCoordinateArr(columnStart, columnEnd, rowStart, rowEnd) {
  //let [columnStart, columnEnd] = gridColumn.split('/');
  //columnEnd = Number(columnEnd) || Number(columnStart) + 1;

  //let [rowStart, rowEnd] = gridRow.split('/');
  // rowEnd = Number(rowEnd) || Number(rowStart) + 1;

  const coorArr = [];
  if (columnEnd - columnStart <= 1) {
    for (let i = rowStart; i < rowEnd; i++) {
      coorArr.push([columnStart - 1, i - 1]);
    }
  } else {
    for (let i = columnStart; i < columnEnd; i++) {
      coorArr.push([i - 1, rowStart - 1]);
    }
  }
  return coorArr;
}
function findCoordinates(ship) {
  return findCoordinateArr(ship.style['grid-column-start'], ship.style['grid-column-end'], ship.style['grid-row-start'], ship.style['grid-row-end']);
}

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

function Player(type, num) {
  const getType = () => type;
  const getNum = () => num;
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const getBoard = () => board;
  return {
    getType,
    getBoard,
    getNum
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Ship(length, direction = 'horizontal') {
  let hitCount = 0;
  const getDirection = () => direction;
  const getLength = () => length;
  function hit() {
    hitCount += 1;
  }
  const isSunk = () => hitCount === length;
  const getHitCount = () => hitCount;
  return {
    getLength,
    getHitCount,
    hit,
    isSunk,
    getDirection
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/images/battleship.svg":
/*!***********************************!*\
  !*** ./src/images/battleship.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ffe054c35aa850dfd6a.svg";

/***/ }),

/***/ "./src/images/carrier.svg":
/*!********************************!*\
  !*** ./src/images/carrier.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d558c9f519ef202100e.svg";

/***/ }),

/***/ "./src/images/destroyer.svg":
/*!**********************************!*\
  !*** ./src/images/destroyer.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f09cb058e0d0f9cedb7.svg";

/***/ }),

/***/ "./src/images/submarine.svg":
/*!**********************************!*\
  !*** ./src/images/submarine.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "958bd5db5b954d29d021.svg";

/***/ }),

/***/ "./src/images/vertical-battleship.svg":
/*!********************************************!*\
  !*** ./src/images/vertical-battleship.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f53c6b1934a65a3914e.svg";

/***/ }),

/***/ "./src/images/vertical-carrier.svg":
/*!*****************************************!*\
  !*** ./src/images/vertical-carrier.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40ebd0f214cd5eee3560.svg";

/***/ }),

/***/ "./src/images/vertical-destroyer.svg":
/*!*******************************************!*\
  !*** ./src/images/vertical-destroyer.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "301c73b52ddc347630ad.svg";

/***/ }),

/***/ "./src/images/vertical-submarine.svg":
/*!*******************************************!*\
  !*** ./src/images/vertical-submarine.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e69af75094be34d11843.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _driver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver */ "./src/driver.js");


(0,_driver__WEBPACK_IMPORTED_MODULE_1__.createStartingPage)();
(0,_driver__WEBPACK_IMPORTED_MODULE_1__.loadEventListeners)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0ZBQWtGLE1BQU0scUZBQXFGLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxnQkFBZ0IsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLFFBQVEsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sT0FBTyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFFBQVEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzZDO0FBRWxFZCwyREFBa0IsQ0FBQyxDQUFDO0FBQ3BCYSwyREFBa0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NDNhNyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2Rpc3BsYXkvYm9hcmQtZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kaXNwbGF5L2RyYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZGlzcGxheS9kcm9wLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2Rpc3BsYXkvb3ZlcmxhcC1zaGlwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kaXNwbGF5L3NoaXAtZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kaXNwbGF5L3N0YXJ0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kaXNwbGF5L3N0YXJ0LWdhbWUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZGlzcGxheS9zdGFydGluZy1zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZGlzcGxheS90b2dnbGUtYXhpcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kcml2ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2xvZ2ljL2NvbnZlcnNpb25zLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gICAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi5uYXYge1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5wbGFjZS1zaGlwcy1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICdoZWFkZXIgLidcbiAgICAgICAgJ2dhbWVib2FyZCBzaGlwLWFyc2VuYWwnXG4gICAgICAgICdzdGFydC1idXR0b24gLic7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MDBweCA0MDBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDgwMHB4IDEwMHB4O1xuICAgIGNvbHVtbi1nYXA6IDMwcHg7XG59XG5cbi5wbGFjZS1zaGlwcy1jb250YWluZXIgaDEge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiByZ2IoMTQ5LCAxNDksIDUwKTtcbn1cblxuLnBsYWNlLXNoaXBzLWNvbnRhaW5lciAuZ2FtZWJvYXJkIHtcbiAgICBncmlkLWFyZWE6IGdhbWVib2FyZDtcbn1cblxuLmdhbWVib2FyZCB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBub3JtYWw7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJy4geC1heGlzJ1xuICAgICAgICAneS1heGlzIGdyaWQnO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xufVxuLmdhbWVib2FyZCAuc2hpcC1ncmlkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG59XG4uZ2FtZWJvYXJkIC54LWF4aXMge1xuICAgIGdyaWQtYXJlYTogeC1heGlzO1xufVxuXG4ueC1heGlzLFxuLnktYXhpcyB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5nYW1lYm9hcmQgLnktYXhpcyB7XG4gICAgZ3JpZC1hcmVhOiB5LWF4aXM7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ncmlkIHtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xuICAgIGJhY2tncm91bmQ6IHJnYig3LCAwLCA3OCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLWFyZWE6IGdyaWQ7XG59XG4uZ3JpZCBkaXYge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTcsIDE2NiwgMTgxKTtcbn1cbi5zaGlwLWFyc2VuYWwge1xuICAgIGdyaWQtYXJlYTogc2hpcC1hcnNlbmFsO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uc2hpcC1hcnNlbmFsIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2hpcC1ncmlkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwaW5rO1xufVxuLnNoaXAtZ3JpZCBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zdGFydC1idXR0b24ge1xuICAgIGdyaWQtYXJlYTogc3RhcnQtYnV0dG9uO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTY4LCAxNjgsIDE2OCk7XG4gICAgY29sb3I6IHJnYig3LCAwLCA3OCk7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAwO1xufVxuLmdhbWUtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUZJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCO0FBQ0EsZ0RBQWdEO0FBQ2hEOzs7Ozs7Ozs7OztJQVdJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0E7Ozs7SUFJSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYjs7O3dCQUdvQjtJQUNwQixrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQjs7cUJBRWlCOztJQUVqQiwrQkFBK0I7SUFDL0IsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi5uYXYge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnBsYWNlLXNoaXBzLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnaGVhZGVyIC4nXFxuICAgICAgICAnZ2FtZWJvYXJkIHNoaXAtYXJzZW5hbCdcXG4gICAgICAgICdzdGFydC1idXR0b24gLic7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAwcHggNDAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggODAwcHggMTAwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XFxufVxcblxcbi5wbGFjZS1zaGlwcy1jb250YWluZXIgaDEge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogcmdiKDE0OSwgMTQ5LCA1MCk7XFxufVxcblxcbi5wbGFjZS1zaGlwcy1jb250YWluZXIgLmdhbWVib2FyZCB7XFxuICAgIGdyaWQtYXJlYTogZ2FtZWJvYXJkO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBub3JtYWw7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnLiB4LWF4aXMnXFxuICAgICAgICAneS1heGlzIGdyaWQnO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbn1cXG4uZ2FtZWJvYXJkIC5zaGlwLWdyaWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuLmdhbWVib2FyZCAueC1heGlzIHtcXG4gICAgZ3JpZC1hcmVhOiB4LWF4aXM7XFxufVxcblxcbi54LWF4aXMsXFxuLnktYXhpcyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5nYW1lYm9hcmQgLnktYXhpcyB7XFxuICAgIGdyaWQtYXJlYTogeS1heGlzO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZ3JpZCB7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3LCAwLCA3OCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC1hcmVhOiBncmlkO1xcbn1cXG4uZ3JpZCBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTU3LCAxNjYsIDE4MSk7XFxufVxcbi5zaGlwLWFyc2VuYWwge1xcbiAgICBncmlkLWFyZWE6IHNoaXAtYXJzZW5hbDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLnNoaXAtYXJzZW5hbCBpbWcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaGlwLWdyaWQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwaW5rO1xcbn1cXG4uc2hpcC1ncmlkIGltZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnN0YXJ0LWJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogc3RhcnQtYnV0dG9uO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxuICAgIGNvbG9yOiByZ2IoNywgMCwgNzgpO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG4uZ2FtZS1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGVBeGlzKCdBQkNERUZHSElKJywgJ3gtYXhpcycpKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGVBeGlzKCcwMTIzNDU2Nzg5JywgJ3ktYXhpcycpKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGVHcmlkKCkpO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKGNyZWF0ZVNoaXBHcmlkKCkpO1xuICAgIHJldHVybiBib2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hpcEdyaWQoKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnc2hpcC1ncmlkJyk7XG4gICAgcmV0dXJuIGdyaWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUF4aXMoY29udGVudCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBjb250ZW50LnNwbGl0KCcnKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGVsZTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZUNvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGdyaWQ7XG59XG4iLCIvL2NoYW5nZSB0byBlbmFibGUgZHJhZ1xuXG5pbXBvcnQgZHJvcCBmcm9tICcuL2Ryb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmFibGVEcmFnQW5kRHJvcCh0YXJnZXQsIHBsYXllcikge1xuICAgIGxldCBzdGFydGluZ1g7XG4gICAgbGV0IHN0YXJ0aW5nWTtcbiAgICBsZXQgc3RhcnRpbmdMZWZ0O1xuICAgIGxldCBzdGFydGluZ1RvcDtcblxuICAgIGZ1bmN0aW9uIGRyYWcoZSkge1xuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChnYW1lQ29udGFpbmVyKSByZXR1cm47XG4gICAgICAgIHRhcmdldC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gdGFyZ2V0LnN0eWxlLmxlZnQgfHwgMDtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBgY2FsYygke3N0YXJ0aW5nTGVmdH0gKyAke2UuY2xpZW50WCAtIHN0YXJ0aW5nWH1weClgO1xuICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gYGNhbGMoJHtzdGFydGluZ1RvcH0gKyAke2UuY2xpZW50WSAtIHN0YXJ0aW5nWX1weClgO1xuICAgIH1cblxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgc3RhcnRpbmdYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgc3RhcnRpbmdZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgc3RhcnRpbmdMZWZ0ID0gdGFyZ2V0LnN0eWxlLmxlZnQgfHwgYDBweGA7XG4gICAgICAgIHN0YXJ0aW5nVG9wID0gdGFyZ2V0LnN0eWxlLnRvcCB8fCBgMHB4YDtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZE1vdmUpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZW5kTW92ZSgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkcm9wKHN0YXJ0aW5nTGVmdCwgc3RhcnRpbmdUb3AsIHRhcmdldCwgcGxheWVyKTtcbiAgICAgICAgfSwgMSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmRNb3ZlKTtcbiAgICB9XG59XG4iLCJsZXQgZXJyb3JNYXJnaW47XG5pbXBvcnQgZGlzcGxheVN0YXJ0QnV0dG9uIGZyb20gJy4vc3RhcnQtYnV0dG9uJztcbmltcG9ydCBlbmFibGVEcmFnQW5kRHJvcCBmcm9tICcuL2RyYWcnO1xuaW1wb3J0IHRvZ2dsZUF4aXMgZnJvbSAnLi90b2dnbGUtYXhpcyc7XG4vL2NvbW1pdCBwbGVhc2VcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJvcChzdGFydGluZ0xlZnQsIHN0YXJ0aW5nVG9wLCB0YXJnZXQsIHBsYXllcikge1xuICAgIGNvbnN0IHNoaXBBcnNlbmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtYXJzZW5hbCcpO1xuICAgIGNvbnN0IHNoaXBHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZ3JpZCcpO1xuXG4gICAgZXJyb3JNYXJnaW4gPSBnZXRTcXVhcmVzKClbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLyAyO1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2dnbGVkJykpIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygxKTtcblxuICAgIGlmIChcbiAgICAgICAgIWdldEZpcnN0U3F1YXJlKGZpbmRMZWZ0KHRhcmdldCksIGZpbmRUb3AodGFyZ2V0KSkgfHxcbiAgICAgICAgcGxheWVyLmdldEJvYXJkKCkuY29vcmRpbmF0ZVRha2VuKGdldFN0YXJ0aW5nQ29vcmRpbmF0ZSh0YXJnZXQpKVxuICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZygneW8nKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBzdGFydGluZ0xlZnQ7XG4gICAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBzdGFydGluZ1RvcDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gZ2V0U3RhcnRpbmdDb29yZGluYXRlKGZpbmRMZWZ0KHRhcmdldCksIGZpbmRUb3AodGFyZ2V0KSk7XG4gICAgY29uc29sZS5sb2coJ2Fsb2hhJyk7XG4gICAgcGxheWVyLmdldEJvYXJkKCkucGxhY2VTaGlwKFswLCAwXSwgMywgJ2hvcml6b250YWwnKTtcbiAgICBjb25zb2xlLmxvZyhzdGFydCk7XG4gICAgY29uc29sZS5sb2coZ2V0TGVuZ3RoKHRhcmdldCkpO1xuICAgIGNvbnNvbGUubG9nKGdldERpcmVjdGlvbih0YXJnZXQpKTtcbiAgICAvLyBwbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoc3RhcnQsIGdldExlbmd0aCh0YXJnZXQpLCBnZXREaXJlY3Rpb24odGFyZ2V0KSk7XG4gICAgY29uc29sZS5sb2cocGxheWVyLmdldEJvYXJkKCkuaXNQbGFjZWRDb3JyZWN0bHlBdChzdGFydCkpO1xuICAgIGlmIChwbGF5ZXIuZ2V0Qm9hcmQoKS5pc1BsYWNlZENvcnJlY3RseUF0KHN0YXJ0KSkge1xuICAgICAgICBjb25zb2xlLmxvZygyKTtcbiAgICAgICAgY29uc3QgbmV3VGFyZ2V0ID0gdGFyZ2V0LmNsb25lTm9kZSgpO1xuICAgICAgICBpZiAodGFyZ2V0LnBhcmVudE5vZGUgPT09IHNoaXBBcnNlbmFsKSB7XG4gICAgICAgICAgICBzaGlwQXJzZW5hbC5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcEdyaWQucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICAgICAgICAgIHBsYXllci5nZXRCb2FyZCgpLnJlbW92ZVNoaXAoZ2V0U3RhcnRpbmdDb29yZGluYXRlKHRhcmdldCkpO1xuICAgICAgICB9XG4gICAgICAgIG5ld1RhcmdldC5zdHlsZVsnZ3JpZC1hcmVhJ10gPSBnZXRHcmlkQXJlYShcbiAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgZ2V0TGVuZ3RoKG5ld1RhcmdldCksXG4gICAgICAgICAgICBnZXREaXJlY3Rpb24obmV3VGFyZ2V0KVxuICAgICAgICApO1xuICAgICAgICBuZXdUYXJnZXQuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIG5ld1RhcmdldC5zdHlsZS50b3AgPSAwO1xuICAgICAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChuZXdUYXJnZXQpO1xuICAgICAgICBlbmFibGVEcmFnQW5kRHJvcChuZXdUYXJnZXQpO1xuICAgICAgICB0b2dnbGVBeGlzKG5ld1RhcmdldCk7XG4gICAgICAgIGlmICghc2hpcEFyc2VuYWwuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZGlzcGxheVN0YXJ0QnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnYm9vaG9vJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREaXJlY3Rpb24oc2hpcCkge1xuICAgIHJldHVybiBzaGlwLmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG59XG5cbmZ1bmN0aW9uIGdldExlbmd0aCh0YXJnZXQpIHtcbiAgICBjb25zdCBtZWFzdXJlID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndmVydGljYWwnKSA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICBjb25zdCBncmlkU2xvdFdpZHRoID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZ3JpZCcpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpWyd3aWR0aCddIC9cbiAgICAgICAgMTA7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW21lYXN1cmVdIC8gZ3JpZFNsb3RXaWR0aCk7XG59XG5cbmZ1bmN0aW9uIGdldEZpcnN0U3F1YXJlKGxlZnQsIHRvcCkge1xuICAgIHJldHVybiBnZXRTcXVhcmVzKCkuZmlsdGVyKChzcXVhcmUpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHNxdWFyZS5vZmZzZXRMZWZ0ID4gbGVmdCAtIGVycm9yTWFyZ2luICYmXG4gICAgICAgICAgICBzcXVhcmUub2Zmc2V0VG9wID4gdG9wIC0gZXJyb3JNYXJnaW4gJiZcbiAgICAgICAgICAgIHNxdWFyZS5vZmZzZXRMZWZ0IDw9IGxlZnQgKyBlcnJvck1hcmdpbiAmJlxuICAgICAgICAgICAgc3F1YXJlLm9mZnNldFRvcCA8PSB0b3AgKyBlcnJvck1hcmdpblxuICAgICAgICApO1xuICAgIH0pWzBdO1xufVxuXG5mdW5jdGlvbiBnZXRTcXVhcmVzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkIGRpdicpKTtcbn1cblxuZnVuY3Rpb24gZ2V0R3JpZEFyZWEoY29vcmRpbmF0ZSwgbGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIG5ld1RhcmdldC5zdHlsZVsnZ3JpZC1yb3cnXSA9XG4gICAgICAgICAgICBgJHtjb29yZGluYXRlWzFdICsgMX0gLyAke2Nvb3JkaW5hdGVbMV0gKyAxICsgbGVuZ3RofWA7XG4gICAgICAgIG5ld1RhcmdldC5zdHlsZVsnZ3JpZC1jb2x1bW4nXSA9IGAke2ZpcnN0U3F1YXJlQ29sdW1uICsgMX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1RhcmdldC5zdHlsZVsnZ3JpZC1jb2x1bW4nXSA9XG4gICAgICAgICAgICBgJHtmaXJzdFNxdWFyZUNvbHVtbiArIDF9IC8gJHtmaXJzdFNxdWFyZUNvbHVtbiArIDEgKyBsZW5ndGh9YDtcbiAgICAgICAgbmV3VGFyZ2V0LnN0eWxlWydncmlkLXJvdyddID0gYCR7Zmlyc3RTcXVhcmVSb3cgKyAxfWA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdGFydGluZ0Nvb3JkaW5hdGUodGFyZ2V0KSB7XG4gICAgY29uc3QgZmlyc3RTcXVhcmVSb3cgPSBNYXRoLmZsb29yKFxuICAgICAgICBnZXRTcXVhcmVzKCkuaW5kZXhPZihnZXRGaXJzdFNxdWFyZSh0YXJnZXQpKSAvIDEwXG4gICAgKTtcbiAgICBjb25zdCBmaXJzdFNxdWFyZUNvbHVtbiA9IGdldFNxdWFyZXMoKS5pbmRleE9mKGdldEZpcnN0U3F1YXJlKHRhcmdldCkpICUgMTA7XG4gICAgcmV0dXJuIFtmaXJzdFNxdWFyZUNvbHVtbiwgZmlyc3RTcXVhcmVSb3ddO1xufVxuXG5mdW5jdGlvbiBmaW5kTGVmdChzaGlwKSB7XG4gICAgaWYgKHNoaXAub2Zmc2V0UGFyZW50ICE9IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHNoaXAub2Zmc2V0UGFyZW50Lm9mZnNldExlZnQgKyBzaGlwLm9mZnNldExlZnQ7XG4gICAgfVxuICAgIHJldHVybiBzaGlwLm9mZnNldExlZnQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRUb3Aoc2hpcCkge1xuICAgIGlmIChzaGlwLm9mZnNldFBhcmVudCAhPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIHJldHVybiBzaGlwLm9mZnNldFBhcmVudC5vZmZzZXRUb3AgKyBzaGlwLm9mZnNldFRvcDtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXAub2Zmc2V0VG9wO1xufVxuIiwiaW1wb3J0IGZpbmRDb29yZGluYXRlcyBmcm9tICcuLi9sb2dpYy9jb252ZXJzaW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXBzT3ZlcmxhcCh0YXJnZXQpIHtcbiAgICBjb25zdCBzaGlwcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtZ3JpZCBpbWcnKSk7XG4gICAgcmV0dXJuIGZpbmRDb29yZGluYXRlcyh0YXJnZXQpLnNvbWUoKHRhcmdldENvb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzLnNvbWUoKHNoaXApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmaW5kQ29vcmRpbmF0ZXMoc2hpcCkuc29tZSgoY29vcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIGNvb3JbMF0gPT09IHRhcmdldENvb3JbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgY29vclsxXSA9PT0gdGFyZ2V0Q29vclsxXSAmJlxuICAgICAgICAgICAgICAgICAgICBzaGlwICE9PSB0YXJnZXRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGJhdHRsZXNoaXBIIGZyb20gJy4uL2ltYWdlcy9iYXR0bGVzaGlwLnN2Zyc7XG5pbXBvcnQgY2FycmllckggZnJvbSAnLi4vaW1hZ2VzL2NhcnJpZXIuc3ZnJztcbmltcG9ydCBkZXN0cm95ZXJIIGZyb20gJy4uL2ltYWdlcy9kZXN0cm95ZXIuc3ZnJztcbmltcG9ydCBzdWJtYXJpbmVIIGZyb20gJy4uL2ltYWdlcy9zdWJtYXJpbmUuc3ZnJztcblxuaW1wb3J0IGJhdHRsZXNoaXBWIGZyb20gJy4uL2ltYWdlcy92ZXJ0aWNhbC1iYXR0bGVzaGlwLnN2Zyc7XG5pbXBvcnQgY2FycmllclYgZnJvbSAnLi4vaW1hZ2VzL3ZlcnRpY2FsLWNhcnJpZXIuc3ZnJztcbmltcG9ydCBkZXN0cm95ZXJWIGZyb20gJy4uL2ltYWdlcy92ZXJ0aWNhbC1kZXN0cm95ZXIuc3ZnJztcbmltcG9ydCBzdWJtYXJpbmVWIGZyb20gJy4uL2ltYWdlcy92ZXJ0aWNhbC1zdWJtYXJpbmUuc3ZnJztcblxuY29uc3QgaG9yaXpvbnRhbFNoaXBzID0gW2Rlc3Ryb3llckgsIHN1Ym1hcmluZUgsIGJhdHRsZXNoaXBILCBjYXJyaWVySF07XG5jb25zdCB2ZXJ0aWNhbFNoaXBzID0gW2Rlc3Ryb3llclYsIHN1Ym1hcmluZVYsIGJhdHRsZXNoaXBWLCBjYXJyaWVyVl07XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlGcm9tQ29vcmRpbmF0ZXMoY29vciwgbGVuZ3RoKSB7fVxuXG5mdW5jdGlvbiBjcmVhdGVTaGlwSW1nKGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBzaGlwQXJyYXkgPVxuICAgICAgICBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/IGhvcml6b250YWxTaGlwcyA6IHZlcnRpY2FsU2hpcHM7XG4gICAgaW1hZ2Uuc3JjID0gc2hpcEFycmF5W2xlbmd0aCAtIDJdO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICByZXR1cm4gaW1hZ2U7XG59XG5leHBvcnQgeyBjcmVhdGVTaGlwSW1nIH07XG4iLCJpbXBvcnQgc3RhcnRHYW1lIGZyb20gJy4vc3RhcnQtZ2FtZSc7XG5cbmZ1bmN0aW9uIGRpc3BsYXlTdGFydEJ1dHRvbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2Utc2hpcHMtY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdGFydCc7XG4gICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3RhcnQtYnV0dG9uJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlTdGFydEJ1dHRvbjtcbiIsImltcG9ydCBjcmVhdGVCb2FyZCBmcm9tICcuL2JvYXJkLWRpc3BsYXknO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgY29uc3QgaHVtYW5Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQnKTtcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoJ2h1bWFuJywgMSk7XG4gICAgY29uc3QgcGxheWVyMiA9IFBsYXllcignY29tcHV0ZXInLCAyKTtcbiAgICBhZGRTaGlwc1RvQm9hcmQocGxheWVyMSk7XG4gICAgYWRkU2hpcHNUb0JvYXJkKHBsYXllcjIpO1xuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyQm9hcmQocGxheWVyMSkpO1xuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyQm9hcmQocGxheWVyMikpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZS1zaGlwcy1jb250YWluZXInKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFNoaXBzVG9Cb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2V0VHlwZSgpKTtcbiAgICBpZiAocGxheWVyLmdldFR5cGUoKSA9PT0gJ2h1bWFuJykge1xuICAgICAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWdyaWQgaW1nJyk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHBsYWNlU2hpcEZyb21Cb2FyZChzaGlwLCBwbGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJvYXJkKHBsYXllcikge1xuICAgIGxldCBib2FyZDtcbiAgICBpZiAocGxheWVyLmdldFR5cGUoKSA9PT0gJ2h1bWFuJykge1xuICAgICAgICBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQnKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICAgIH1cbiAgICAvL2RvZXNuJ3Qgd29ya1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lciAuZ2FtZWJvYXJkJylcbiAgICAgICAgICAgID8gJ3BsYXllci0yJ1xuICAgICAgICAgICAgOiAncGxheWVyLTEnXG4gICAgKTtcbiAgICByZXR1cm4gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcEZyb21Cb2FyZCh0YXJnZXQsIHBsYXllcikge1xuICAgIGNvbnN0IFtyb3dTdGFydCwgcm93RW5kXSA9IHRhcmdldC5zdHlsZVsnZ3JpZC1yb3cnXS5zcGxpdCgnLycpO1xuICAgIGNvbnN0IFtjb2x1bW5TdGFydCwgY29sdW1uRW5kXSA9IHRhcmdldC5zdHlsZVsnZ3JpZC1jb2x1bW4nXS5zcGxpdCgnLycpO1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHJvd0VuZCAtIHJvd1N0YXJ0O1xuICAgICAgICAvL21ldGhvZCB0byByZW1vdmUgc2hpcCBhdCBhIHN0YXJ0aW5nIHBvc2l0aW9uXG4gICAgICAgIC8vbWV0aG9kIHRvIGdldCBhbGwgY29vcmRpbmF0ZXMvc2VlIGlmIGlzIGluIGNvbGxpc2lvbiB3aXRoIGFub3RoZXIgc2hpcFxuICAgICAgICBwbGF5ZXJcbiAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAucGxhY2VTaGlwKFtjb2x1bW5TdGFydCAtIDEsIHJvd1N0YXJ0IC0gMV0sIGxlbmd0aCwgJ3ZlcnRpY2FsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gY29sdW1uRW5kIC0gY29sdW1uU3RhcnQ7XG4gICAgICAgIHBsYXllclxuICAgICAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgICAgIC5wbGFjZVNoaXAoW2NvbHVtblN0YXJ0IC0gMSwgcm93U3RhcnQgLSAxXSwgbGVuZ3RoLCAnaG9yaXpvbnRhbCcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBjcmVhdGVCb2FyZCBmcm9tICcuL2JvYXJkLWRpc3BsYXknO1xuaW1wb3J0IHsgY3JlYXRlU2hpcEltZyB9IGZyb20gJy4vc2hpcC1kaXNwbGF5JztcblxuZnVuY3Rpb24gY3JlYXRlU3RhcnRpbmdQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwbGFjZS1zaGlwcy1jb250YWluZXInKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIHNoaXBzISc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJvYXJkKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTaGlwQXJzZW5hbChbMiwgMywgMywgNCwgNV0pKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY3JlYXRlU2hpcEFyc2VuYWwoWzIsIDMsIDMsIDQsIDVdKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hpcEFyc2VuYWwoYXJyKSB7XG4gICAgY29uc3Qgc2hpcEFyc2VuYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwQXJzZW5hbC5jbGFzc0xpc3QuYWRkKCdzaGlwLWFyc2VuYWwnKTtcblxuICAgIGFyci5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgICAgc2hpcEFyc2VuYWwuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcEltZyhudW0sICdob3Jpem9udGFsJykpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBBcnNlbmFsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdGFydGluZ1BhZ2U7XG4iLCJpbXBvcnQgYmF0dGxlc2hpcEggZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXAuc3ZnJztcbmltcG9ydCBjYXJyaWVySCBmcm9tICcuLi9pbWFnZXMvY2Fycmllci5zdmcnO1xuaW1wb3J0IGRlc3Ryb3llckggZnJvbSAnLi4vaW1hZ2VzL2Rlc3Ryb3llci5zdmcnO1xuaW1wb3J0IHN1Ym1hcmluZUggZnJvbSAnLi4vaW1hZ2VzL3N1Ym1hcmluZS5zdmcnO1xuXG5pbXBvcnQgYmF0dGxlc2hpcFYgZnJvbSAnLi4vaW1hZ2VzL3ZlcnRpY2FsLWJhdHRsZXNoaXAuc3ZnJztcbmltcG9ydCBjYXJyaWVyViBmcm9tICcuLi9pbWFnZXMvdmVydGljYWwtY2Fycmllci5zdmcnO1xuaW1wb3J0IGRlc3Ryb3llclYgZnJvbSAnLi4vaW1hZ2VzL3ZlcnRpY2FsLWRlc3Ryb3llci5zdmcnO1xuaW1wb3J0IHN1Ym1hcmluZVYgZnJvbSAnLi4vaW1hZ2VzL3ZlcnRpY2FsLXN1Ym1hcmluZS5zdmcnO1xuXG5pbXBvcnQgc2hpcHNPdmVybGFwIGZyb20gJy4vb3ZlcmxhcC1zaGlwcyc7XG5pbXBvcnQgZW5hYmxlRHJhZ0FuZERyb3AgZnJvbSAnLi9kcmFnJztcblxuY29uc3QgaG9yaXpvbnRhbFNoaXBzID0gW2JhdHRsZXNoaXBILCBjYXJyaWVySCwgZGVzdHJveWVySCwgc3VibWFyaW5lSF07XG5jb25zdCB2ZXJ0aWNhbFNoaXBzID0gW2JhdHRsZXNoaXBWLCBjYXJyaWVyViwgZGVzdHJveWVyViwgc3VibWFyaW5lVl07XG5cbmZ1bmN0aW9uIHRvZ2dsZUF4aXModGFyZ2V0KSB7XG4gICAgbGV0IHRvZ2dsZSA9IHRydWU7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUYXJnZXQgPSB0YXJnZXQuY2xvbmVOb2RlKCk7XG4gICAgICAgIHRvZ2dsZVRhcmdldChuZXdUYXJnZXQpO1xuICAgICAgICBpZiAodG9nZ2xlICYmICFpc0lsbGVnYWxUb2dnbGUodGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5wYXJlbnROb2RlID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1ncmlkJykpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVJbkdyaWQobmV3VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGlmICghc2hpcHNPdmVybGFwKG5ld1RhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZ3JpZCcpLmFwcGVuZENoaWxkKG5ld1RhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZURyYWdBbmREcm9wKG5ld1RhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUF4aXMobmV3VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1ncmlkJykuYXBwZW5kQ2hpbGQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtYXJzZW5hbCcpLmFwcGVuZENoaWxkKG5ld1RhcmdldCk7XG4gICAgICAgICAgICAgICAgZW5hYmxlRHJhZ0FuZERyb3AobmV3VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0b2dnbGVBeGlzKG5ld1RhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgndG9nZ2xlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZSA9IHRydWU7XG4gICAgfSk7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlID0gdHJ1ZTtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRvZ2dsZU9mZik7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gdG9nZ2xlT2ZmKCkge1xuICAgICAgICB0b2dnbGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0b2dnbGVPZmYpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXJnZXQodGFyZ2V0KSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgY29uc3QgbmV3VGFyZ2V0ID0gdGFyZ2V0LmNsb25lTm9kZSgpO1xuICAgIGlmIChob3Jpem9udGFsU2hpcHMuaW5jbHVkZXModGFyZ2V0LnNyYykpIHtcbiAgICAgICAgdGFyZ2V0LnNyYyA9IHZlcnRpY2FsU2hpcHNbaG9yaXpvbnRhbFNoaXBzLmluZGV4T2YodGFyZ2V0LnNyYyldO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQuc3JjID0gaG9yaXpvbnRhbFNoaXBzW3ZlcnRpY2FsU2hpcHMuaW5kZXhPZih0YXJnZXQuc3JjKV07XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlSW5HcmlkKHRhcmdldCkge1xuICAgIGNvbnN0IFtjb2x1bW5TdGFydCwgY29sdW1uRW5kXSA9IHRhcmdldC5zdHlsZVsnZ3JpZC1jb2x1bW4nXS5zcGxpdCgnLycpO1xuICAgIGNvbnN0IFtyb3dTdGFydCwgcm93RW5kXSA9IHRhcmdldC5zdHlsZVsnZ3JpZC1yb3cnXS5zcGxpdCgnLycpO1xuICAgIHRhcmdldC5zdHlsZVsnZ3JpZC1jb2x1bW4nXSA9XG4gICAgICAgIGAke2NvbHVtblN0YXJ0fSAvICR7TnVtYmVyKGNvbHVtblN0YXJ0KSArICgocm93RW5kIHx8IHJvd1N0YXJ0KSAtIHJvd1N0YXJ0KX1gO1xuICAgIHRhcmdldC5zdHlsZVsnZ3JpZC1yb3cnXSA9XG4gICAgICAgIGAke3Jvd1N0YXJ0fSAvICR7TnVtYmVyKHJvd1N0YXJ0KSArICgoY29sdW1uRW5kIHx8IGNvbHVtblN0YXJ0KSAtIGNvbHVtblN0YXJ0KX1gO1xufVxuXG5mdW5jdGlvbiBpc0lsbGVnYWxUb2dnbGUodGFyZ2V0KSB7XG4gICAgY29uc3QgW2NvbHVtblN0YXJ0LCBjb2x1bW5FbmRdID0gdGFyZ2V0LnN0eWxlWydncmlkLWNvbHVtbiddLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgW3Jvd1N0YXJ0LCByb3dFbmRdID0gdGFyZ2V0LnN0eWxlWydncmlkLXJvdyddLnNwbGl0KCcvJyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgTnVtYmVyKGNvbHVtblN0YXJ0KSArICgocm93RW5kIHx8IHJvd1N0YXJ0KSAtIHJvd1N0YXJ0KSA+IDExIHx8XG4gICAgICAgIE51bWJlcihyb3dTdGFydCkgKyAoKGNvbHVtbkVuZCB8fCBjb2x1bW5TdGFydCkgLSBjb2x1bW5TdGFydCkgPiAxMVxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZUF4aXM7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBjcmVhdGVTdGFydGluZ1BhZ2UgZnJvbSAnLi9kaXNwbGF5L3N0YXJ0aW5nLXNjcmVlbic7XG5pbXBvcnQgZW5hYmxlRHJhZ0FuZERyb3AgZnJvbSAnLi9kaXNwbGF5L2RyYWcnO1xuaW1wb3J0IHRvZ2dsZUF4aXMgZnJvbSAnLi9kaXNwbGF5L3RvZ2dsZS1heGlzJztcbmZ1bmN0aW9uIGxvYWRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBzaGlwQXJzZW5hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWFyc2VuYWwnKTtcbiAgICBjb25zdCBzaGlwcyA9IEFycmF5LmZyb20oc2hpcEFyc2VuYWwucXVlcnlTZWxlY3RvckFsbCgnaW1nJykpO1xuICAgIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoJ2h1bWFuJyk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBlbmFibGVEcmFnQW5kRHJvcChzaGlwLCBwbGF5ZXIxKTtcbiAgICAgICAgdG9nZ2xlQXhpcyhzaGlwKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU3RhcnRpbmdQYWdlLCBsb2FkRXZlbnRMaXN0ZW5lcnMgfTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBzaGlwQm9hcmQgPSBbXTtcbiAgICBjb25zdCBoaXRCb2FyZCA9IFtdO1xuICAgIGNvbnN0IGdldEhpdEJvYXJkID0gKCkgPT4gaGl0Qm9hcmQ7XG4gICAgY29uc3QgZ2V0U2hpcEJvYXJkID0gKCkgPT4gc2hpcEJvYXJkO1xuICAgIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzSW5kZXgoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcihgJHtjb29yZGluYXRlc1sxXX0ke2Nvb3JkaW5hdGVzWzBdfWApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNoaXBBdChzdGFydGluZykge1xuICAgICAgICByZXR1cm4gc2hpcEJvYXJkLmZpbmQoXG4gICAgICAgICAgICAoc2hpcCkgPT5cbiAgICAgICAgICAgICAgICBnZXRDb29yZGluYXRlUGFpcihnZXRTaGlwQm9hcmQoKS5pbmRleE9mKHNoaXApKSA9PT0gc3RhcnRpbmdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kQXR0YWNrZWRTaGlwKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIHJldHVybiBzaGlwQm9hcmQuZmluZCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0Q29vcmRpbmF0ZUFycihcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q29vcmRpbmF0ZVBhaXIoZ2V0U2hpcEJvYXJkKCkuaW5kZXhPZihzaGlwKSksXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuZ2V0TGVuZ3RoKClcbiAgICAgICAgICAgICAgICApLnNvbWUoKGNvb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JbMF0gPT0gY29vcmRpbmF0ZXNbMF0gJiYgY29vclsxXSA9PSBjb29yZGluYXRlc1sxXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgICBpZiAoZmluZEF0dGFja2VkU2hpcChjb29yZGluYXRlcykpIHtcbiAgICAgICAgICAgIGZpbmRBdHRhY2tlZFNoaXAoY29vcmRpbmF0ZXMpLmhpdCgpO1xuICAgICAgICAgICAgYWRkQXR0YWNrKGdldENvb3JkaW5hdGVzSW5kZXgoY29vcmRpbmF0ZXMpLCAnSCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkQXR0YWNrKGdldENvb3JkaW5hdGVzSW5kZXgoY29vcmRpbmF0ZXMpLCAnTScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQXR0YWNrKGluZGV4LCBzdGF0dXMpIHtcbiAgICAgICAgaGl0Qm9hcmRbaW5kZXhdID0gc3RhdHVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIGdldFNoaXBCb2FyZCgpLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKGNvb3JkaW5hdGVzLCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZygneW8nKTtcbiAgICAgICAgc2hpcEJvYXJkW2dldENvb3JkaW5hdGVzSW5kZXgoY29vcmRpbmF0ZXMpXSA9IFNoaXAobGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVNoaXAoY29vcikge1xuICAgICAgICBnZXRTaGlwQm9hcmQoKVtnZXRDb29yZGluYXRlc0luZGV4KGNvb3IpXSA9ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvb3JkaW5hdGVUYWtlbihjb29yKSB7XG4gICAgICAgIHJldHVybiAhIWdldFNoaXBCb2FyZCgpW2dldENvb3JkaW5hdGVzSW5kZXgoY29vcildO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzUGxhY2VkQ29ycmVjdGx5QXQoY29vcikge1xuICAgICAgICBjb25zdCBzaGlwID0gZ2V0U2hpcEJvYXJkKClbZ2V0Q29vcmRpbmF0ZXNJbmRleChjb29yKV07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBzaGlwSW5HcmlkKGNvb3IsIHNoaXAuZ2V0RGlyZWN0aW9uKCksIHNoaXAuZ2V0TGVuZ3RoKCkpICYmXG4gICAgICAgICAgICAhc2hpcE92ZXJsYXBwaW5nKGNvb3IsIHNoaXAuZ2V0RGlyZWN0aW9uKCksIHNoaXAuZ2V0TGVuZ3RoKCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZVBhaXIoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgLm1hcCgobnVtKSA9PiBOdW1iZXIobnVtKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZUFycihjb29yLCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JbMV07IGkgPCBjb29yWzFdICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChbY29vclswXSwgaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JbMF07IGkgPCBjb29yWzBdICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChbaSwgY29vclsxXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hpcE92ZXJsYXBwaW5nKHRhcmdldENvb3IsIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZ2V0U2hpcEJvYXJkKCkuZmlsdGVyKChzaGlwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIHNoaXAgJiZcbiAgICAgICAgICAgICAgICBnZXRTaGlwQm9hcmQoKS5pbmRleE9mKHNoaXApICE9PSBnZXRDb29yZGluYXRlc0luZGV4KHRhcmdldENvb3IpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZ2V0Q29vcmRpbmF0ZUFycih0YXJnZXRDb29yLCBkaXJlY3Rpb24sIGxlbmd0aCkuc29tZSgocGFpcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBzLnNvbWUoKHNoaXApID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0Q29vcmRpbmF0ZUFycihcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q29vcmRpbmF0ZVBhaXIoZ2V0U2hpcEJvYXJkKCkuaW5kZXhPZihzaGlwKSksXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuZ2V0TGVuZ3RoKClcbiAgICAgICAgICAgICAgICApLnNvbWUoKGNvb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvb3JbMV0gPT09IHBhaXJbMV0gJiYgY29vclswXSA9PT0gcGFpclswXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaGlwSW5HcmlkKGNvb3IsIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBjb29yWzFdICsgbGVuZ3RoIC0gMSA8IDEwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yWzBdICsgbGVuZ3RoIC0gMSA8IDEwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RocyA9IFsyLCAzLCAzLCA0LCA1XTtcbiAgICAgICAgbGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgpID0+IHtcbiAgICAgICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5KGxlbmd0aCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qZnVuY3Rpb24gcGxhY2VTaGlwUmFuZG9tbHkobGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPVxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyID49IDEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgaXNJbGxlZ2FsUGxhY2VtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2ZXJ0aWNhbCdcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBSYW5kb21seShsZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcChjb29yZGluYXRlcywgbGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBpc0lsbGVnYWxQbGFjZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hvcml6b250YWwnXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwUmFuZG9tbHkobGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXAoY29vcmRpbmF0ZXMsIGxlbmd0aCwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9Ki9cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBhbGxTaGlwc1N1bmssXG4gICAgICAgIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgICAgICAgY29vcmRpbmF0ZVRha2VuLFxuICAgICAgICByZW1vdmVTaGlwLFxuICAgICAgICBpc1BsYWNlZENvcnJlY3RseUF0LFxuICAgICAgICBnZXRTaGlwQm9hcmQsXG4gICAgICAgIGdldEhpdEJvYXJkLFxuICAgICAgICBnZXRTaGlwQXQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiZnVuY3Rpb24gZmluZENvb3JkaW5hdGVBcnIoY29sdW1uU3RhcnQsIGNvbHVtbkVuZCwgcm93U3RhcnQsIHJvd0VuZCkge1xuICAgIC8vbGV0IFtjb2x1bW5TdGFydCwgY29sdW1uRW5kXSA9IGdyaWRDb2x1bW4uc3BsaXQoJy8nKTtcbiAgICAvL2NvbHVtbkVuZCA9IE51bWJlcihjb2x1bW5FbmQpIHx8IE51bWJlcihjb2x1bW5TdGFydCkgKyAxO1xuXG4gICAgLy9sZXQgW3Jvd1N0YXJ0LCByb3dFbmRdID0gZ3JpZFJvdy5zcGxpdCgnLycpO1xuICAgIC8vIHJvd0VuZCA9IE51bWJlcihyb3dFbmQpIHx8IE51bWJlcihyb3dTdGFydCkgKyAxO1xuXG4gICAgY29uc3QgY29vckFyciA9IFtdO1xuXG4gICAgaWYgKGNvbHVtbkVuZCAtIGNvbHVtblN0YXJ0IDw9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvd1N0YXJ0OyBpIDwgcm93RW5kOyBpKyspIHtcbiAgICAgICAgICAgIGNvb3JBcnIucHVzaChbY29sdW1uU3RhcnQgLSAxLCBpIC0gMV0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGNvbHVtblN0YXJ0OyBpIDwgY29sdW1uRW5kOyBpKyspIHtcbiAgICAgICAgICAgIGNvb3JBcnIucHVzaChbaSAtIDEsIHJvd1N0YXJ0IC0gMV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb29yQXJyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kQ29vcmRpbmF0ZXMoc2hpcCkge1xuICAgIHJldHVybiBmaW5kQ29vcmRpbmF0ZUFycihcbiAgICAgICAgc2hpcC5zdHlsZVsnZ3JpZC1jb2x1bW4tc3RhcnQnXSxcbiAgICAgICAgc2hpcC5zdHlsZVsnZ3JpZC1jb2x1bW4tZW5kJ10sXG4gICAgICAgIHNoaXAuc3R5bGVbJ2dyaWQtcm93LXN0YXJ0J10sXG4gICAgICAgIHNoaXAuc3R5bGVbJ2dyaWQtcm93LWVuZCddXG4gICAgKTtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5mdW5jdGlvbiBQbGF5ZXIodHlwZSwgbnVtKSB7XG4gICAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHR5cGU7XG4gICAgY29uc3QgZ2V0TnVtID0gKCkgPT4gbnVtO1xuICAgIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICAgIHJldHVybiB7IGdldFR5cGUsIGdldEJvYXJkLCBnZXROdW0gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiZnVuY3Rpb24gU2hpcChsZW5ndGgsIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJykge1xuICAgIGxldCBoaXRDb3VudCA9IDA7XG5cbiAgICBjb25zdCBnZXREaXJlY3Rpb24gPSAoKSA9PiBkaXJlY3Rpb247XG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICAgICAgaGl0Q291bnQgKz0gMTtcbiAgICB9XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0Q291bnQgPT09IGxlbmd0aDtcbiAgICBjb25zdCBnZXRIaXRDb3VudCA9ICgpID0+IGhpdENvdW50O1xuICAgIHJldHVybiB7IGdldExlbmd0aCwgZ2V0SGl0Q291bnQsIGhpdCwgaXNTdW5rLCBnZXREaXJlY3Rpb24gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVN0YXJ0aW5nUGFnZSwgbG9hZEV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi9kcml2ZXInO1xuXG5jcmVhdGVTdGFydGluZ1BhZ2UoKTtcbmxvYWRFdmVudExpc3RlbmVycygpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUJvYXJkIiwiYm9hcmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUF4aXMiLCJjcmVhdGVHcmlkIiwiY3JlYXRlU2hpcEdyaWQiLCJncmlkIiwiY29udGVudCIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInNwbGl0IiwiZm9yRWFjaCIsImVsZSIsImVsZUNvbnRhaW5lciIsInRleHRDb250ZW50IiwiaSIsImRyb3AiLCJlbmFibGVEcmFnQW5kRHJvcCIsInRhcmdldCIsInBsYXllciIsInN0YXJ0aW5nWCIsInN0YXJ0aW5nWSIsInN0YXJ0aW5nTGVmdCIsInN0YXJ0aW5nVG9wIiwiZHJhZyIsImUiLCJnYW1lQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsImVuZE1vdmUiLCJzZXRUaW1lb3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVycm9yTWFyZ2luIiwiZGlzcGxheVN0YXJ0QnV0dG9uIiwidG9nZ2xlQXhpcyIsInNoaXBBcnNlbmFsIiwic2hpcEdyaWQiLCJnZXRTcXVhcmVzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJjb250YWlucyIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRGaXJzdFNxdWFyZSIsImZpbmRMZWZ0IiwiZmluZFRvcCIsImdldEJvYXJkIiwiY29vcmRpbmF0ZVRha2VuIiwiZ2V0U3RhcnRpbmdDb29yZGluYXRlIiwic3RhcnQiLCJwbGFjZVNoaXAiLCJnZXRMZW5ndGgiLCJnZXREaXJlY3Rpb24iLCJpc1BsYWNlZENvcnJlY3RseUF0IiwibmV3VGFyZ2V0IiwiY2xvbmVOb2RlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlU2hpcCIsImdldEdyaWRBcmVhIiwiZmlyc3RDaGlsZCIsInNoaXAiLCJtZWFzdXJlIiwiZ3JpZFNsb3RXaWR0aCIsIk1hdGgiLCJyb3VuZCIsImZpbHRlciIsInNxdWFyZSIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29vcmRpbmF0ZSIsImxlbmd0aCIsImRpcmVjdGlvbiIsImZpcnN0U3F1YXJlQ29sdW1uIiwiZmlyc3RTcXVhcmVSb3ciLCJmbG9vciIsImluZGV4T2YiLCJvZmZzZXRQYXJlbnQiLCJib2R5IiwiZmluZENvb3JkaW5hdGVzIiwic2hpcHNPdmVybGFwIiwic2hpcHMiLCJzb21lIiwidGFyZ2V0Q29vciIsImNvb3IiLCJiYXR0bGVzaGlwSCIsImNhcnJpZXJIIiwiZGVzdHJveWVySCIsInN1Ym1hcmluZUgiLCJiYXR0bGVzaGlwViIsImNhcnJpZXJWIiwiZGVzdHJveWVyViIsInN1Ym1hcmluZVYiLCJob3Jpem9udGFsU2hpcHMiLCJ2ZXJ0aWNhbFNoaXBzIiwiZ2V0RGlzcGxheUZyb21Db29yZGluYXRlcyIsImNyZWF0ZVNoaXBJbWciLCJpbWFnZSIsInNoaXBBcnJheSIsInNyYyIsInNldEF0dHJpYnV0ZSIsInN0YXJ0R2FtZSIsInN0YXJ0QnV0dG9uIiwiUGxheWVyIiwiaHVtYW5Cb2FyZCIsInBsYXllcjEiLCJwbGF5ZXIyIiwiYWRkU2hpcHNUb0JvYXJkIiwicmVuZGVyQm9hcmQiLCJnZXRUeXBlIiwicGxhY2VTaGlwRnJvbUJvYXJkIiwicGxhY2VTaGlwc1JhbmRvbWx5Iiwicm93U3RhcnQiLCJyb3dFbmQiLCJjb2x1bW5TdGFydCIsImNvbHVtbkVuZCIsImNyZWF0ZVN0YXJ0aW5nUGFnZSIsImhlYWRlciIsImNyZWF0ZVNoaXBBcnNlbmFsIiwiYXJyIiwibnVtIiwidG9nZ2xlIiwidG9nZ2xlVGFyZ2V0IiwiaXNJbGxlZ2FsVG9nZ2xlIiwidG9nZ2xlSW5HcmlkIiwidG9nZ2xlT2ZmIiwicGFyZW50IiwiaW5jbHVkZXMiLCJOdW1iZXIiLCJsb2FkRXZlbnRMaXN0ZW5lcnMiLCJTaGlwIiwiR2FtZWJvYXJkIiwic2hpcEJvYXJkIiwiaGl0Qm9hcmQiLCJnZXRIaXRCb2FyZCIsImdldFNoaXBCb2FyZCIsImdldENvb3JkaW5hdGVzSW5kZXgiLCJjb29yZGluYXRlcyIsImdldFNoaXBBdCIsInN0YXJ0aW5nIiwiZmluZCIsImdldENvb3JkaW5hdGVQYWlyIiwiZmluZEF0dGFja2VkU2hpcCIsImdldENvb3JkaW5hdGVBcnIiLCJyZWNlaXZlQXR0YWNrIiwiaGl0IiwiYWRkQXR0YWNrIiwiaW5kZXgiLCJzdGF0dXMiLCJhbGxTaGlwc1N1bmsiLCJldmVyeSIsImlzU3VuayIsInNoaXBJbkdyaWQiLCJzaGlwT3ZlcmxhcHBpbmciLCJ0b1N0cmluZyIsInJldmVyc2UiLCJtYXAiLCJwdXNoIiwicGFpciIsImxlbmd0aHMiLCJwbGFjZVNoaXBSYW5kb21seSIsImZpbmRDb29yZGluYXRlQXJyIiwiY29vckFyciIsInR5cGUiLCJnZXROdW0iLCJoaXRDb3VudCIsImdldEhpdENvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==