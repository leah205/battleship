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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto/Roboto-Light.ttf */ "./src/Roboto/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
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

@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
:root {
    font-family: 'Roboto', sans-serif;
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
        'subheader .'
        'gameboard ship-arsenal'
        'start-button .';
    grid-template-columns: 800px 400px;
    grid-template-rows: 100px 100px 800px 100px;
    column-gap: 30px;
}

.place-ships-container h1 {
    margin-top: 30px;
    grid-area: header;
    font-size: 3rem;
    color: rgb(113, 113, 7);
}

.place-ships-container h2 {
    margin-top: 30px;
    grid-area: subheader;
    font-size: 2rem;
    color: rgb(113, 113, 7);
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
.gameboard .ship-grid,
.hit-grid {
    position: relative;
    grid-row: 2;
    grid-column: 2;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
}

.gameboard .x-axis {
    grid-area: x-axis;
}

.gameboard .grid div {
    display: flex;
    align-items: center;
    justify-content: center;
}
.gameboard .hit-grid img {
    width: 35px;
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
    width: 300px;
    align-self: center;
    border-radius: 20px;
}
.ship-arsenal img {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
}

.ship-grid,
.hit-grid {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    border: 1px solid pink;
}

.hit-grid {
    justify-items: stretch;
    align-items: stretch;
}

.hit-grid div {
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin-top: 50px;
    justify-content: space-around;
    display: flex;
}
.game-container .grid div {
    color: red;
    font-size: 2.5rem;
}

.new-game-button {
    height: 80px;
    color: white;
    border-radius: 8px;
    display: block;

    width: 200px;
    font-size: 2rem;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    background: rgb(0, 0, 56);
}
.dialogue {
    display: block;
    margin: auto;
    margin-top: 30px;
    font-size: 2rem;
    width: 500px;
    text-align: center;
    height: 100px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;AACA,gDAAgD;AAChD;;;;;;;;;;;IAWI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;;IAEI,gBAAgB;AACpB;AACA;;IAEI,YAAY;AAChB;AACA;;;;IAII,WAAW;IACX,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,4CAAqC;AACzC;AACA;IACI,iCAAiC;AACrC;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb;;;;wBAIoB;IACpB,kCAAkC;IAClC,2CAA2C;IAC3C,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,qBAAqB;IACrB;;qBAEiB;;IAEjB,+BAA+B;IAC/B,4BAA4B;AAChC;AACA;;IAEI,kBAAkB;IAClB,WAAW;IACX,cAAc;IACd,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,WAAW;AACf;;AAEA;;IAEI,eAAe;IACf,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;AACA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,eAAe;AACnB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,sCAAsC;IACtC,mCAAmC;IACnC,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,oBAAoB;IACpB,kBAAkB;IAClB,8BAA8B;IAC9B,oBAAoB;IACpB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,6BAA6B;IAC7B,aAAa;AACjB;AACA;IACI,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,cAAc;;IAEd,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n.nav {\n    height: 100px;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./Roboto/Roboto-Light.ttf');\n}\n:root {\n    font-family: 'Roboto', sans-serif;\n}\n\n.place-ships-container {\n    justify-content: center;\n    justify-items: center;\n    width: 800px;\n    margin: auto;\n    text-align: center;\n    display: grid;\n    grid-template-areas:\n        'header .'\n        'subheader .'\n        'gameboard ship-arsenal'\n        'start-button .';\n    grid-template-columns: 800px 400px;\n    grid-template-rows: 100px 100px 800px 100px;\n    column-gap: 30px;\n}\n\n.place-ships-container h1 {\n    margin-top: 30px;\n    grid-area: header;\n    font-size: 3rem;\n    color: rgb(113, 113, 7);\n}\n\n.place-ships-container h2 {\n    margin-top: 30px;\n    grid-area: subheader;\n    font-size: 2rem;\n    color: rgb(113, 113, 7);\n}\n\n.place-ships-container .gameboard {\n    grid-area: gameboard;\n}\n\n.gameboard {\n    width: 800px;\n    height: 800px;\n    display: grid;\n    justify-items: normal;\n    grid-template-areas:\n        '. x-axis'\n        'y-axis grid';\n\n    grid-template-columns: 1fr 10fr;\n    grid-template-rows: 1fr 10fr;\n}\n.gameboard .ship-grid,\n.hit-grid {\n    position: relative;\n    grid-row: 2;\n    grid-column: 2;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.gameboard .x-axis {\n    grid-area: x-axis;\n}\n\n.gameboard .grid div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.gameboard .hit-grid img {\n    width: 35px;\n}\n\n.x-axis,\n.y-axis {\n    font-size: 2rem;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.gameboard .y-axis {\n    grid-area: y-axis;\n    flex-direction: column;\n}\n.grid {\n    justify-items: stretch;\n    background: rgb(7, 0, 78);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    grid-area: grid;\n}\n.grid div {\n    border: 1px solid rgb(157, 166, 181);\n}\n.ship-arsenal {\n    grid-area: ship-arsenal;\n    background: white;\n    height: 500px;\n    width: 300px;\n    align-self: center;\n    border-radius: 20px;\n}\n.ship-arsenal img {\n    margin-bottom: 10px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n.ship-grid,\n.hit-grid {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: 1px solid pink;\n}\n\n.hit-grid {\n    justify-items: stretch;\n    align-items: stretch;\n}\n\n.hit-grid div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.ship-grid img {\n    position: relative;\n}\n.start-button {\n    grid-area: start-button;\n    justify-self: center;\n    align-self: center;\n    background: rgb(168, 168, 168);\n    color: rgb(7, 0, 78);\n    height: 70px;\n    width: 100px;\n    font-size: 1.5rem;\n    border-radius: 5px;\n    border: 0;\n}\n.game-container {\n    margin-top: 50px;\n    justify-content: space-around;\n    display: flex;\n}\n.game-container .grid div {\n    color: red;\n    font-size: 2.5rem;\n}\n\n.new-game-button {\n    height: 80px;\n    color: white;\n    border-radius: 8px;\n    display: block;\n\n    width: 200px;\n    font-size: 2rem;\n    margin: auto;\n    margin-top: 20px;\n    text-align: center;\n    background: rgb(0, 0, 56);\n}\n.dialogue {\n    display: block;\n    margin: auto;\n    margin-top: 30px;\n    font-size: 2rem;\n    width: 500px;\n    text-align: center;\n    height: 100px;\n}\n"],"sourceRoot":""}]);
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

/***/ "../../node_modules/css-loader/dist/runtime/getUrl.js":
/*!************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/display/create_functions.js":
/*!*****************************************!*\
  !*** ./src/display/create_functions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAttack: () => (/* binding */ createAttack),
/* harmony export */   createBoard: () => (/* binding */ createBoard),
/* harmony export */   createDialogue: () => (/* binding */ createDialogue),
/* harmony export */   createHitGrid: () => (/* binding */ createHitGrid),
/* harmony export */   createNewGameBtn: () => (/* binding */ createNewGameBtn),
/* harmony export */   createPlayerShips: () => (/* binding */ createPlayerShips),
/* harmony export */   createStartButton: () => (/* binding */ createStartButton),
/* harmony export */   createStartingPage: () => (/* binding */ createStartingPage),
/* harmony export */   createSunk: () => (/* binding */ createSunk)
/* harmony export */ });
/* harmony import */ var _images_fish_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/fish.svg */ "./src/images/fish.svg");
/* harmony import */ var _images_skull_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/skull.svg */ "./src/images/skull.svg");
/* harmony import */ var _images_red_skull_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/red-skull.svg */ "./src/images/red-skull.svg");
/* harmony import */ var _ship_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship-display */ "./src/display/ship-display.js");




function createStartingPage() {
  const container = document.createElement('div');
  container.classList.add('place-ships-container');
  const header = document.createElement('h1');
  header.textContent = 'Place your ships!';
  const subHeader = document.createElement('h2');
  subHeader.textContent = 'Drag ships onto the board to place them. Click on a ship to change its axis';
  container.appendChild(header);
  container.appendChild(subHeader);
  container.appendChild(createBoard());
  container.appendChild(createShipArsenal([2, 3, 3, 4, 5]));
  return container;
}
function createShipArsenal(arr) {
  const shipArsenal = document.createElement('div');
  shipArsenal.classList.add('ship-arsenal');
  console.log(shipArsenal.classList);
  arr.forEach(num => {
    shipArsenal.appendChild((0,_ship_display__WEBPACK_IMPORTED_MODULE_3__.createShipImg)(num, 'horizontal'));
  });
  return shipArsenal;
}
function createStartButton() {
  const startButton = document.createElement('button');
  startButton.textContent = 'Start';
  startButton.classList.add('start-button');
  return startButton;
}
function createBoard() {
  const board = document.createElement('div');
  board.classList.add('gameboard');
  board.appendChild(createAxis('ABCDEFGHIJ', 'x-axis'));
  board.appendChild(createAxis('0123456789', 'y-axis'));
  board.appendChild(createShipGrid());
  board.appendChild(createGrid());
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
function createHitGrid() {
  const grid = document.createElement('div');
  grid.classList.add('hit-grid');
  for (let i = 0; i < 100; i++) {
    grid.appendChild(document.createElement('div'));
  }
  return grid;
}
function createGrid() {
  const grid = document.createElement('div');
  grid.classList.add('grid');
  for (let i = 0; i < 100; i++) {
    grid.appendChild(document.createElement('div'));
  }
  return grid;
}
function createAttack(outcome) {
  const image = document.createElement('img');
  image.src = outcome === 'H' ? _images_skull_svg__WEBPACK_IMPORTED_MODULE_1__ : _images_fish_svg__WEBPACK_IMPORTED_MODULE_0__;
  //image.style['grid-columns'] = coor[0] + 1;
  //image.style['grid-rows'] = coor[1] + 1;
  return image;
}
function createSunk() {
  const image = document.createElement('img');
  image.src = _images_red_skull_svg__WEBPACK_IMPORTED_MODULE_2__;
  return image;
}
function createNewGameBtn() {
  const newGameBtn = document.createElement('button');
  newGameBtn.textContent = 'New Game';
  newGameBtn.classList.add('new-game-button');
  return newGameBtn;
}
function createPlayerShips(player, grid) {
  player.getBoard().getShipBoard().forEach(ship => {
    if (ship) {
      const index = player.getBoard().getShipBoard().indexOf(ship);
      const image = (0,_ship_display__WEBPACK_IMPORTED_MODULE_3__.createShipImg)(ship.getLength(), ship.getDirection());
      image.style['grid-area'] = (0,_ship_display__WEBPACK_IMPORTED_MODULE_3__.getGridArea)((0,_ship_display__WEBPACK_IMPORTED_MODULE_3__.getCoordinates)(index), ship.getLength(), ship.getDirection());
      image.style.display = 'none';
      grid.appendChild(image);
    }
  });
}
function createDialogue() {
  const container = document.createElement('p');
  container.classList.add('dialogue');
  return container;
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
    //starting row/column instead
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
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag */ "./src/display/drag.js");
/* harmony import */ var _toggle_axis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-axis */ "./src/display/toggle-axis.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _ship_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship-display.js */ "./src/display/ship-display.js");




function drop(startingLeft, startingTop, target, player) {
  const shipArsenal = document.querySelector('.ship-arsenal');
  const shipGrid = document.querySelector('.ship-grid');
  if (target.classList.contains('toggled')) {
    target.classList.remove('toggled');
    return;
  }
  const startCoor = (0,_ship_display_js__WEBPACK_IMPORTED_MODULE_3__.getCoordinates)((0,_ship_display_js__WEBPACK_IMPORTED_MODULE_3__.getSquares)().indexOf((0,_ship_display_js__WEBPACK_IMPORTED_MODULE_3__.getFirstSquare)((0,_ship_display_js__WEBPACK_IMPORTED_MODULE_3__.findLeft)(target), (0,_ship_display_js__WEBPACK_IMPORTED_MODULE_3__.findTop)(target))));
  if (!(0,_ship_display_js__WEBPACK_IMPORTED_MODULE_3__.getFirstSquare)((0,_ship_display_js__WEBPACK_IMPORTED_MODULE_3__.findLeft)(target), (0,_ship_display_js__WEBPACK_IMPORTED_MODULE_3__.findTop)(target)) || player.getBoard().coordinateTaken(startCoor)) {
    target.style.left = startingLeft;
    target.style.top = startingTop;
    return;
  }
  const length = (0,_ship_display_js__WEBPACK_IMPORTED_MODULE_3__.getLength)(target);
  const direction = (0,_ship_display_js__WEBPACK_IMPORTED_MODULE_3__.getDirection)(target);
  player.getBoard().placeShip(startCoor, length, direction);
  console.log(player.getBoard().getShipBoard());
  //console.log(player.getBoard().isPlacedCorrectlyAt(startCoor));
  if (player.getBoard().isPlacedCorrectlyAt(startCoor)) {
    const newTarget = target.cloneNode();
    if (target.parentNode === shipArsenal) {
      shipArsenal.removeChild(target);
    } else {
      const oldCoor = [target.style['grid-column-start'] - 1, target.style['grid-row-start'] - 1];
      /*getCoordinates(
         // getSquares().indexOf(getFirstSquare(startingLeft, startingTop))
      );*/
      //console.log(target.style['grid-row-start']);
      player.getBoard().removeShip(oldCoor);
      shipGrid.removeChild(target);
    }
    newTarget.style['grid-area'] = (0,_ship_display_js__WEBPACK_IMPORTED_MODULE_3__.getGridArea)(startCoor, length, direction);
    newTarget.style.left = 0;
    newTarget.style.top = 0;
    shipGrid.appendChild(newTarget);
    (0,_drag__WEBPACK_IMPORTED_MODULE_0__["default"])(newTarget, player);
    (0,_toggle_axis__WEBPACK_IMPORTED_MODULE_1__["default"])(newTarget, player);
    if (!shipArsenal.firstChild) {
      (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.loadStartButton)(player);
    }
  } else {
    target.style.left = startingLeft;
    target.style.top = startingTop;
    player.getBoard().removeShip(startCoor);
  }
}

/***/ }),

/***/ "./src/display/ship-display.js":
/*!*************************************!*\
  !*** ./src/display/ship-display.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShipImg: () => (/* binding */ createShipImg),
/* harmony export */   findLeft: () => (/* binding */ findLeft),
/* harmony export */   findTop: () => (/* binding */ findTop),
/* harmony export */   getCoordinates: () => (/* binding */ getCoordinates),
/* harmony export */   getDirection: () => (/* binding */ getDirection),
/* harmony export */   getFirstSquare: () => (/* binding */ getFirstSquare),
/* harmony export */   getGridArea: () => (/* binding */ getGridArea),
/* harmony export */   getLength: () => (/* binding */ getLength),
/* harmony export */   getSquares: () => (/* binding */ getSquares)
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
function getDirection(ship) {
  return ship.classList.contains('vertical') ? 'vertical' : 'horizontal';
}
function getLength(target) {
  const measure = target.classList.contains('vertical') ? 'height' : 'width';
  const gridSlotWidth = document.querySelector('.ship-grid').getBoundingClientRect()['width'] / 10;
  return Math.round(target.getBoundingClientRect()[measure] / gridSlotWidth);
}
function getFirstSquare(left, top) {
  const errorMargin = getSquares()[0].getBoundingClientRect().width / 2;
  return getSquares().filter(square => {
    return square.offsetLeft > left - errorMargin && square.offsetTop > top - errorMargin && square.offsetLeft <= left + errorMargin && square.offsetTop <= top + errorMargin;
  })[0];
}
function getSquares() {
  return Array.from(document.querySelectorAll('.grid div'));
}
function getGridArea(coordinate, length, direction) {
  if (direction === 'vertical') {
    return `${coordinate[1] + 1} / ${coordinate[0] + 1} / ${coordinate[1] + 1 + length} / span 1`;
  } else {
    return `${coordinate[1] + 1} /${coordinate[0] + 1} / span 1 / ${coordinate[0] + 1 + length}`;
  }
}
function getCoordinates(index) {
  return [index % 10, Math.floor(index / 10)];
}
function findLeft(ship) {
  console.log(ship.offsetParent);
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
function createShipImg(length, direction) {
  const image = document.createElement('img');
  const shipArray = direction === 'horizontal' ? horizontalShips : verticalShips;
  image.src = shipArray[length - 2];
  image.setAttribute('draggable', 'true');
  return image;
}


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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player */ "./src/player.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _create_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_functions */ "./src/display/create_functions.js");



function startGame(player1) {
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game-container');
  document.body.appendChild((0,_create_functions__WEBPACK_IMPORTED_MODULE_2__.createDialogue)());
  document.body.appendChild(gameContainer);
  const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('computer', 2);
  gameContainer.appendChild(renderBoard(player1));
  gameContainer.appendChild(renderBoard(player2));
  (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.loadBoardEventListeners)(player1, player2);
  document.body.appendChild(gameContainer);
  document.body.removeChild(document.querySelector('.place-ships-container'));
}
function renderBoard(player) {
  let board;
  if (player.getType() === 'human') {
    board = document.querySelector('.gameboard').cloneNode(true);
  } else {
    board = (0,_create_functions__WEBPACK_IMPORTED_MODULE_2__.createBoard)('enemy');
    const shipGrid = board.querySelector('.ship-grid');
    player.getBoard().placeShipsRandomly();
    (0,_create_functions__WEBPACK_IMPORTED_MODULE_2__.createPlayerShips)(player, shipGrid);
  }
  board.classList.add(document.querySelector('.game-container .gameboard') ? 'player-2' : 'player-1');
  board.appendChild((0,_create_functions__WEBPACK_IMPORTED_MODULE_2__.createHitGrid)());
  return board;
}

/***/ }),

/***/ "./src/display/take_turn.js":
/*!**********************************!*\
  !*** ./src/display/take_turn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ takeTurn)
/* harmony export */ });
/* harmony import */ var _logic_conversions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/conversions */ "./src/logic/conversions.js");
/* harmony import */ var _create_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_functions */ "./src/display/create_functions.js");


function takeTurn(player, opposing, squares, square) {
  let attackedSquare;
  if (player.getType() === 'human') {
    attackedSquare = square;
  } else {
    const attackArr = opposing.getBoard().getSmartAttack();
    if (attackArr && attackArr[0]) {
      attackedSquare = squares[attackArr[Math.floor(Math.random() * attackArr.length)]];
    } else {
      const length = getAvailable(squares).length;
      attackedSquare = getAvailable(squares)[Math.floor(Math.random() * length)];
    }
  }
  let index = squares.indexOf(attackedSquare);
  const coor = [index % 10, Math.floor(index / 10)];
  opposing.getBoard().receiveAttack(coor);
  attackedSquare.appendChild((0,_create_functions__WEBPACK_IMPORTED_MODULE_1__.createAttack)(opposing.getBoard().getHitBoard()[index]));
  const ship = opposing.getBoard().findAttackedShip(coor);
  if (ship && ship.isSunk()) {
    const start = (0,_logic_conversions__WEBPACK_IMPORTED_MODULE_0__.getCoordinatePair)(opposing.getBoard().getShipBoard().indexOf(ship));
    showSunk(opposing.getBoard().getCoordinateArr(start, ship.getDirection(), ship.getLength()), squares);
  }
  updateDialogue(player, opposing.getBoard().getHitBoard()[index], (0,_logic_conversions__WEBPACK_IMPORTED_MODULE_0__.getCoordinatePair)(index), ship && ship.isSunk(), ship);
}
function updateDialogue(player, outcome, coor, isSunk, ship) {
  const shipArr = ['destroyer', 'submarine', 'battleship', 'carrier'];
  let shipName;
  if (isSunk) shipName = shipArr[ship.getLength() - 2];
  const letter = 'ABCDEFGHIJ'.split('')[coor[0]];
  const spot = `${letter}${coor[1]}`;
  const dialogue = document.querySelector('.dialogue');
  const subject = player.getType() === 'human' ? 'Our' : 'Enemy';
  const object = player.getType() === 'human' ? 'Enemy' : 'Our';
  if (isSunk) {
    dialogue.textContent = `${subject} attack at ${spot} was successful. ${object} ${shipName} is sunk`;
  } else if (outcome === 'H') {
    dialogue.textContent = ` ${subject} attack at ${spot} was successful. ${object} ship is hit`;
  } else {
    dialogue.textContent = `${subject} attack at ${spot} missed. The poor fish`;
  }
}
//this should be in logic modules and integrated with smart attack
function getAvailable(arr) {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].firstChild) {
      indices.push(arr[i]);
    }
  }
  return indices;
}
function showSunk(coorArr, squares) {
  const first = squares[1];
  const ships = Array.from(first.parentNode.parentNode.querySelectorAll('.ship-grid img'));
  const attacked = ships.find(ship => {
    return Number(ship.style['grid-column-start']) === coorArr[0][0] + 1 && Number(ship.style['grid-row-start']) === coorArr[0][1] + 1;
  });
  attacked.style.display = 'block';
  coorArr.forEach(coor => {
    const square = squares[(0,_logic_conversions__WEBPACK_IMPORTED_MODULE_0__.getCoordinatesIndex)(coor)];
    square.removeChild(square.firstElementChild);
    square.appendChild((0,_create_functions__WEBPACK_IMPORTED_MODULE_1__.createSunk)());
  });
}

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
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drag */ "./src/display/drag.js");
/* harmony import */ var _ship_display_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ship-display.js */ "./src/display/ship-display.js");










const horizontalShips = [_images_battleship_svg__WEBPACK_IMPORTED_MODULE_0__, _images_carrier_svg__WEBPACK_IMPORTED_MODULE_1__, _images_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__, _images_submarine_svg__WEBPACK_IMPORTED_MODULE_3__];
const verticalShips = [_images_vertical_battleship_svg__WEBPACK_IMPORTED_MODULE_4__, _images_vertical_carrier_svg__WEBPACK_IMPORTED_MODULE_5__, _images_vertical_destroyer_svg__WEBPACK_IMPORTED_MODULE_6__, _images_vertical_submarine_svg__WEBPACK_IMPORTED_MODULE_7__];
function toggleAxis(target, player) {
  let toggle = true;
  target.addEventListener('click', () => {
    const newTarget = target.cloneNode();
    toggleTarget(newTarget);
    if (toggle) {
      if (target.parentNode === document.querySelector('.ship-grid')) {
        const start = (0,_ship_display_js__WEBPACK_IMPORTED_MODULE_9__.getCoordinates)((0,_ship_display_js__WEBPACK_IMPORTED_MODULE_9__.getSquares)().indexOf((0,_ship_display_js__WEBPACK_IMPORTED_MODULE_9__.getFirstSquare)((0,_ship_display_js__WEBPACK_IMPORTED_MODULE_9__.findLeft)(target), (0,_ship_display_js__WEBPACK_IMPORTED_MODULE_9__.findTop)(target))));
        const length = (0,_ship_display_js__WEBPACK_IMPORTED_MODULE_9__.getLength)(target);
        const direction = (0,_ship_display_js__WEBPACK_IMPORTED_MODULE_9__.getDirection)(newTarget);
        player.getBoard().removeShip(start);
        player.getBoard().placeShip(start, length, direction);
        if (!player.getBoard().isPlacedCorrectlyAt(start)) {
          player.getBoard().removeShip(start);
          player.getBoard().placeShip(start, length, (0,_ship_display_js__WEBPACK_IMPORTED_MODULE_9__.getDirection)(target));
        } else {
          newTarget.style['grid-area'] = (0,_ship_display_js__WEBPACK_IMPORTED_MODULE_9__.getGridArea)(start, length, direction);
          target.parentNode.removeChild(target);
          document.querySelector('.ship-grid').appendChild(newTarget);
          (0,_drag__WEBPACK_IMPORTED_MODULE_8__["default"])(newTarget, player);
          toggleAxis(newTarget, player);
        }
      } else {
        target.parentNode.removeChild(target);
        document.querySelector('.ship-arsenal').appendChild(newTarget);
        (0,_drag__WEBPACK_IMPORTED_MODULE_8__["default"])(newTarget, player);
        toggleAxis(newTarget, player);
      }
      target.classList.add('toggled');
    } else if (toggle) {
      console.log('yo');
      //player.getBoard().removeShip(start);
    }
  });
  target.addEventListener('mousedown', () => {
    toggle = true;
    target.addEventListener('mousemove', () => {
      toggleOff();
    });
  });
  function toggleOff() {
    console.log('eaiwgslub');
    toggle = false;
  }
  target.addEventListener('mouseup', () => {
    console.log(toggle);
    target.removeEventListener('mousemove', toggleOff);
  });
}
function toggleTarget(target) {
  if (horizontalShips.includes(target.src)) {
    target.src = verticalShips[horizontalShips.indexOf(target.src)];
    target.classList.add('vertical');
  } else {
    target.src = horizontalShips[verticalShips.indexOf(target.src)];
    target.classList.remove('vertical');
  }
}

/*function toggleInGrid(target) {
    const [columnStart, columnEnd] = target.style['grid-column'].split('/');
    const [rowStart, rowEnd] = target.style['grid-row'].split('/');
    target.style['grid-column'] =
        `${columnStart} / ${Number(columnStart) + ((rowEnd || rowStart) - rowStart)}`;
    target.style['grid-row'] =
        `${rowStart} / ${Number(rowStart) + ((columnEnd || columnStart) - columnStart)}`;
}*/

function isIllegalToggle(target) {
  const [columnStart, columnEnd] = target.style['grid-column'].split('/');
  const [rowStart, rowEnd] = target.style['grid-row'].split('/');
  return Number(columnStart) + ((rowEnd || rowStart) - rowStart) > 11 || Number(rowStart) + ((columnEnd || columnStart) - columnStart) > 11;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleAxis);

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _smart_attack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart_attack */ "./src/smart_attack.js");
/* harmony import */ var _logic_conversions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/conversions */ "./src/logic/conversions.js");



function Gameboard() {
  const shipBoard = [];
  shipBoard[99] = undefined;
  const hitBoard = [];
  const getHitBoard = () => hitBoard;
  const getShipBoard = () => shipBoard;
  function getShipAt(starting) {
    return shipBoard.find(ship => (0,_logic_conversions__WEBPACK_IMPORTED_MODULE_2__.getCoordinatePair)(getShipBoard().indexOf(ship)) === starting);
  }
  function findAttackedShip(coordinates) {
    return shipBoard.find(ship => {
      if (ship) {
        return getCoordinateArr((0,_logic_conversions__WEBPACK_IMPORTED_MODULE_2__.getCoordinatePair)(getShipBoard().indexOf(ship)), ship.getDirection(), ship.getLength()).some(coor => {
          return coor[0] == coordinates[0] && coor[1] == coordinates[1];
        });
      }
    });
  }
  function receiveAttack(coordinates) {
    if (findAttackedShip(coordinates)) {
      findAttackedShip(coordinates).hit();
      addAttack((0,_logic_conversions__WEBPACK_IMPORTED_MODULE_2__.getCoordinatesIndex)(coordinates), 'H');
    } else {
      addAttack((0,_logic_conversions__WEBPACK_IMPORTED_MODULE_2__.getCoordinatesIndex)(coordinates), 'M');
    }
  }
  function addAttack(index, status) {
    hitBoard[index] = status;
  }
  function allShipsSunk() {
    return getShipBoard().filter(ship => ship).every(ship => ship.isSunk());
  }
  function placeShip(coordinates, length, direction) {
    shipBoard[(0,_logic_conversions__WEBPACK_IMPORTED_MODULE_2__.getCoordinatesIndex)(coordinates)] = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length, direction);
  }
  function removeShip(coor) {
    getShipBoard()[(0,_logic_conversions__WEBPACK_IMPORTED_MODULE_2__.getCoordinatesIndex)(coor)] = '';
  }
  function coordinateTaken(coor) {
    return !!getShipBoard()[(0,_logic_conversions__WEBPACK_IMPORTED_MODULE_2__.getCoordinatesIndex)(coor)];
  }
  function isPlacedCorrectlyAt(coor) {
    const ship = getShipBoard()[(0,_logic_conversions__WEBPACK_IMPORTED_MODULE_2__.getCoordinatesIndex)(coor)];
    return shipInGrid(coor, ship.getDirection(), ship.getLength()) && !shipOverlapping(coor, ship.getDirection(), ship.getLength());
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
      return ship && getShipBoard().indexOf(ship) !== (0,_logic_conversions__WEBPACK_IMPORTED_MODULE_2__.getCoordinatesIndex)(targetCoor);
    });
    return getCoordinateArr(targetCoor, direction, length).some(pair => {
      return ships.some(ship => {
        return getCoordinateArr((0,_logic_conversions__WEBPACK_IMPORTED_MODULE_2__.getCoordinatePair)(getShipBoard().indexOf(ship)), ship.getDirection(), ship.getLength()).some(coor => {
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
    function getAvailableIndices(arr) {
      const indices = [];
      for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
          indices.push(i);
        }
      }
      return indices;
    }
    function placeShipRandomly(length) {
      const direction = Math.random() * 2 >= 1 ? 'vertical' : 'horizontal';
      const arr = getAvailableIndices(getShipBoard());
      const coorLen = arr.length;
      const coor = (0,_logic_conversions__WEBPACK_IMPORTED_MODULE_2__.getCoordinatePair)(arr[Math.floor(Math.random() * coorLen)]);
      placeShip(coor, length, direction);
      if (!isPlacedCorrectlyAt(coor)) {
        removeShip(coor);
        placeShipRandomly(length);
      }
    }
  }
  function getSmartAttack() {
    return (0,_smart_attack__WEBPACK_IMPORTED_MODULE_1__["default"])(getHitBoard(), getShipBoard(), findAttackedShip);
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
    getShipAt,
    getSmartAttack,
    findAttackedShip,
    getCoordinateArr
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadBoardEventListeners: () => (/* binding */ loadBoardEventListeners),
/* harmony export */   loadStartButton: () => (/* binding */ loadStartButton)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _display_drag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/drag */ "./src/display/drag.js");
/* harmony import */ var _display_toggle_axis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/toggle-axis */ "./src/display/toggle-axis.js");
/* harmony import */ var _display_create_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display/create_functions */ "./src/display/create_functions.js");
/* harmony import */ var _display_start_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display/start-game */ "./src/display/start-game.js");
/* harmony import */ var _display_take_turn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display/take_turn */ "./src/display/take_turn.js");








//look into photo of smart attack error
//eslint not working'
//move get coordinate array out of smart attack
//program computer to not attack slots that will not fit remaining ships
//move getAvailable to logic and integrate it as getPossible with smartAttack

document.body.appendChild((0,_display_create_functions__WEBPACK_IMPORTED_MODULE_4__.createStartingPage)());
loadShipListeners();
function loadShipListeners() {
  const shipArsenal = document.querySelector('.ship-arsenal');
  const ships = Array.from(shipArsenal.querySelectorAll('img'));
  const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('human');
  ships.forEach(ship => {
    (0,_display_drag__WEBPACK_IMPORTED_MODULE_2__["default"])(ship, player1);
    (0,_display_toggle_axis__WEBPACK_IMPORTED_MODULE_3__["default"])(ship, player1);
  });
}
function loadStartButton(player) {
  const startBtn = (0,_display_create_functions__WEBPACK_IMPORTED_MODULE_4__.createStartButton)();
  startBtn.addEventListener('click', () => {
    (0,_display_start_game__WEBPACK_IMPORTED_MODULE_5__["default"])(player);
  });
  document.querySelector('.place-ships-container').appendChild(startBtn);
}
function loadBoardEventListeners(player1, player2) {
  const board2 = document.querySelector(`.gameboard.player-2`);
  const grid2 = board2.querySelector('.hit-grid');
  const squares2 = Array.from(grid2.querySelectorAll('div'));
  const board1 = document.querySelector(`.gameboard.player-1`);
  const grid1 = board1.querySelector('.hit-grid');
  const squares1 = Array.from(grid1.querySelectorAll('div'));
  squares2.forEach(square => {
    square.addEventListener('click', () => {
      if (player1.getBoard().allShipsSunk() || player2.getBoard().allShipsSunk()) {
        return;
      } else if (player2.getBoard().getHitBoard().filter(ship => ship).length > player1.getBoard().getHitBoard().filter(ship => ship).length) {
        return;
      } else if (!square.firstChild) {
        (0,_display_take_turn__WEBPACK_IMPORTED_MODULE_6__["default"])(player1, player2, squares2, square);
        if (player2.getBoard().allShipsSunk()) endGame(player1, player2);else {
          setTimeout(() => {
            (0,_display_take_turn__WEBPACK_IMPORTED_MODULE_6__["default"])(player2, player1, squares1);
            if (player1.getBoard().allShipsSunk()) endGame(player2, player1);
          }, 2000);
        }
      }
    });
  });
}
function endGame(winner, loser) {
  console.log(`${winner.getType()} sunk all the ${loser.getType()}'s ships`);
  const dialogue = document.querySelector('.dialogue');
  if (winner.getType() === 'human') {
    dialogue.textContent = `The battle is won. All the enemy ships are sunk`;
  } else {
    dialogue.textContent = 'The battle is lost. All our ships have been sunk';
  }
  const newGameBtn = (0,_display_create_functions__WEBPACK_IMPORTED_MODULE_4__.createNewGameBtn)();
  document.body.appendChild(newGameBtn);
  newGameBtn.addEventListener('click', () => {
    document.body.removeChild(document.querySelector('.game-container'));
    document.body.removeChild(newGameBtn);
    document.body.removeChild(dialogue);
    document.body.appendChild((0,_display_create_functions__WEBPACK_IMPORTED_MODULE_4__.createStartingPage)());
    loadShipListeners();
  });
}


/***/ }),

/***/ "./src/logic/conversions.js":
/*!**********************************!*\
  !*** ./src/logic/conversions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCoordinatePair: () => (/* binding */ getCoordinatePair),
/* harmony export */   getCoordinatesIndex: () => (/* binding */ getCoordinatesIndex)
/* harmony export */ });
//gameboard

function getCoordinatesIndex(coordinates) {
  return Number(`${coordinates[1]}${coordinates[0]}`);
}
function getCoordinatePair(index) {
  if (index < 10) {
    return [index, 0];
  }
  return index.toString().split('').reverse().map(num => Number(num));
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

/***/ "./src/smart_attack.js":
/*!*****************************!*\
  !*** ./src/smart_attack.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ findSmartAttack)
/* harmony export */ });
/* harmony import */ var _logic_conversions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/conversions */ "./src/logic/conversions.js");

function findSmartAttack(hitBoard, shipBoard, findShip) {
  let index = undefined;
  for (let i = 0; i < 100; i++) {
    if (hitBoard[i] === 'H') {
      const target = shipBoard.some(ship => {
        return ship && !ship.isSunk() && getCoordinateArr((0,_logic_conversions__WEBPACK_IMPORTED_MODULE_0__.getCoordinatePair)(shipBoard.indexOf(ship)), ship.getDirection(), ship.getLength()).map(coor => {
          return (0,_logic_conversions__WEBPACK_IMPORTED_MODULE_0__.getCoordinatesIndex)(coor);
        }).includes(i);
      });
      if (target) {
        index = i;
        break;
      }
    }
  }
  if (index === undefined) {
    return;
  }
  if (hitBoard[index + 1] === 'H' && !findShip((0,_logic_conversions__WEBPACK_IMPORTED_MODULE_0__.getCoordinatePair)(index + 1)).isSunk()) {
    let i = 1;
    let empty;
    while (hitBoard[index + i] === 'H') {
      console.log(index);
      if (findShip((0,_logic_conversions__WEBPACK_IMPORTED_MODULE_0__.getCoordinatePair)(index + i)).isSunk()) {
        if (!filter(index, [index - 1], hitBoard)[0]) empty = true;else return filter(index, [index - 1], hitBoard);
      }
      i += 1;
    }
    if (filter(index, [index - 1, index + i], hitBoard)[0] && !empty) {
      return filter(index, [index - 1, index + i], hitBoard);
    }
  }
  if (hitBoard[index + 10] === 'H' && !findShip((0,_logic_conversions__WEBPACK_IMPORTED_MODULE_0__.getCoordinatePair)(index + 10)).isSunk()) {
    let empty;
    let i = 1;
    while (hitBoard[index + i * 10] === 'H') {
      if (findShip((0,_logic_conversions__WEBPACK_IMPORTED_MODULE_0__.getCoordinatePair)(index + i * 10)).isSunk()) {
        if (!filter(index, [index - 10], hitBoard)) empty = true;else return filter(index, [index - 10], hitBoard);
      }
      i += 1;
    }
    if (filter(index, [index - 10, index + i * 10], hitBoard)[0] && !empty) {
      return filter(index, [index - 10, index + i * 10], hitBoard);
    }
  }
  return filter(index, [index + 1, index - 1, index + 10, index - 10], hitBoard);
}

//move out of here
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
function filter(index, arr, hitBoard) {
  return arr.filter(i => {
    return i >= 0 && i < 100 && (i % 10 > index % 10 && Math.floor(i / 10) === Math.floor(index / 10) || i % 10 < index % 10 && Math.floor(i / 10) === Math.floor(index / 10) || i % 10 === index % 10) && !hitBoard[i];
  });
}

/***/ }),

/***/ "./src/Roboto/Roboto-Light.ttf":
/*!*************************************!*\
  !*** ./src/Roboto/Roboto-Light.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "333da16a3f3cc391d087.ttf";

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

/***/ "./src/images/fish.svg":
/*!*****************************!*\
  !*** ./src/images/fish.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86d3bf03531c2317323f.svg";

/***/ }),

/***/ "./src/images/red-skull.svg":
/*!**********************************!*\
  !*** ./src/images/red-skull.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d7d21c20a6eaa4acd86.svg";

/***/ }),

/***/ "./src/images/skull.svg":
/*!******************************!*\
  !*** ./src/images/skull.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ed08ff94b5c7cb573f5.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrRkFBa0YsTUFBTSxxRkFBcUYsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLGdCQUFnQixVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sUUFBUSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxRQUFRLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxRQUFRLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFX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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0dBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz80M2E3Iiwid2VicGFjazovL3RlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZGlzcGxheS9jcmVhdGVfZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2Rpc3BsYXkvZHJhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9kaXNwbGF5L2Ryb3AuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZGlzcGxheS9zaGlwLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZGlzcGxheS9zdGFydC1nYW1lLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2Rpc3BsYXkvdGFrZV90dXJuLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2Rpc3BsYXkvdG9nZ2xlLWF4aXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2xvZ2ljL2NvbnZlcnNpb25zLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NtYXJ0X2F0dGFjay5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8vUm9ib3RvLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm5hdiB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuOnJvb3Qge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuLnBsYWNlLXNoaXBzLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2hlYWRlciAuJ1xuICAgICAgICAnc3ViaGVhZGVyIC4nXG4gICAgICAgICdnYW1lYm9hcmQgc2hpcC1hcnNlbmFsJ1xuICAgICAgICAnc3RhcnQtYnV0dG9uIC4nO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAwcHggNDAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxMDBweCA4MDBweCAxMDBweDtcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xufVxuXG4ucGxhY2Utc2hpcHMtY29udGFpbmVyIGgxIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBjb2xvcjogcmdiKDExMywgMTEzLCA3KTtcbn1cblxuLnBsYWNlLXNoaXBzLWNvbnRhaW5lciBoMiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBncmlkLWFyZWE6IHN1YmhlYWRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IHJnYigxMTMsIDExMywgNyk7XG59XG5cbi5wbGFjZS1zaGlwcy1jb250YWluZXIgLmdhbWVib2FyZCB7XG4gICAgZ3JpZC1hcmVhOiBnYW1lYm9hcmQ7XG59XG5cbi5nYW1lYm9hcmQge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogbm9ybWFsO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICcuIHgtYXhpcydcbiAgICAgICAgJ3ktYXhpcyBncmlkJztcblxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcbn1cbi5nYW1lYm9hcmQgLnNoaXAtZ3JpZCxcbi5oaXQtZ3JpZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uZ2FtZWJvYXJkIC54LWF4aXMge1xuICAgIGdyaWQtYXJlYTogeC1heGlzO1xufVxuXG4uZ2FtZWJvYXJkIC5ncmlkIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdhbWVib2FyZCAuaGl0LWdyaWQgaW1nIHtcbiAgICB3aWR0aDogMzVweDtcbn1cblxuLngtYXhpcyxcbi55LWF4aXMge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZ2FtZWJvYXJkIC55LWF4aXMge1xuICAgIGdyaWQtYXJlYTogeS1heGlzO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZ3JpZCB7XG4gICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNywgMCwgNzgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC1hcmVhOiBncmlkO1xufVxuLmdyaWQgZGl2IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTU3LCAxNjYsIDE4MSk7XG59XG4uc2hpcC1hcnNlbmFsIHtcbiAgICBncmlkLWFyZWE6IHNoaXAtYXJzZW5hbDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5zaGlwLWFyc2VuYWwgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaGlwLWdyaWQsXG4uaGl0LWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcGluaztcbn1cblxuLmhpdC1ncmlkIHtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4uaGl0LWdyaWQgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2hpcC1ncmlkIGltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN0YXJ0LWJ1dHRvbiB7XG4gICAgZ3JpZC1hcmVhOiBzdGFydC1idXR0b247XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYigxNjgsIDE2OCwgMTY4KTtcbiAgICBjb2xvcjogcmdiKDcsIDAsIDc4KTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDA7XG59XG4uZ2FtZS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5nYW1lLWNvbnRhaW5lciAuZ3JpZCBkaXYge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5uZXctZ2FtZS1idXR0b24ge1xuICAgIGhlaWdodDogODBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDU2KTtcbn1cbi5kaWFsb2d1ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlGSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHdCQUF3QjtBQUM1QjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7SUFXSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjtBQUNBOzs7O0lBSUksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUFxQztBQUN6QztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2I7Ozs7d0JBSW9CO0lBQ3BCLGtDQUFrQztJQUNsQywyQ0FBMkM7SUFDM0MsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCOztxQkFFaUI7O0lBRWpCLCtCQUErQjtJQUMvQiw0QkFBNEI7QUFDaEM7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYzs7SUFFZCxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCgnLi9Sb2JvdG8vUm9ib3RvLUxpZ2h0LnR0ZicpO1xcbn1cXG46cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnBsYWNlLXNoaXBzLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnaGVhZGVyIC4nXFxuICAgICAgICAnc3ViaGVhZGVyIC4nXFxuICAgICAgICAnZ2FtZWJvYXJkIHNoaXAtYXJzZW5hbCdcXG4gICAgICAgICdzdGFydC1idXR0b24gLic7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAwcHggNDAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMTAwcHggODAwcHggMTAwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XFxufVxcblxcbi5wbGFjZS1zaGlwcy1jb250YWluZXIgaDEge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogcmdiKDExMywgMTEzLCA3KTtcXG59XFxuXFxuLnBsYWNlLXNoaXBzLWNvbnRhaW5lciBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGdyaWQtYXJlYTogc3ViaGVhZGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiByZ2IoMTEzLCAxMTMsIDcpO1xcbn1cXG5cXG4ucGxhY2Utc2hpcHMtY29udGFpbmVyIC5nYW1lYm9hcmQge1xcbiAgICBncmlkLWFyZWE6IGdhbWVib2FyZDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogbm9ybWFsO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgJy4geC1heGlzJ1xcbiAgICAgICAgJ3ktYXhpcyBncmlkJztcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG59XFxuLmdhbWVib2FyZCAuc2hpcC1ncmlkLFxcbi5oaXQtZ3JpZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5nYW1lYm9hcmQgLngtYXhpcyB7XFxuICAgIGdyaWQtYXJlYTogeC1heGlzO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5ncmlkIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZ2FtZWJvYXJkIC5oaXQtZ3JpZCBpbWcge1xcbiAgICB3aWR0aDogMzVweDtcXG59XFxuXFxuLngtYXhpcyxcXG4ueS1heGlzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmdhbWVib2FyZCAueS1heGlzIHtcXG4gICAgZ3JpZC1hcmVhOiB5LWF4aXM7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5ncmlkIHtcXG4gICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDcsIDAsIDc4KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLWFyZWE6IGdyaWQ7XFxufVxcbi5ncmlkIGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTcsIDE2NiwgMTgxKTtcXG59XFxuLnNoaXAtYXJzZW5hbCB7XFxuICAgIGdyaWQtYXJlYTogc2hpcC1hcnNlbmFsO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5zaGlwLWFyc2VuYWwgaW1nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2hpcC1ncmlkLFxcbi5oaXQtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwaW5rO1xcbn1cXG5cXG4uaGl0LWdyaWQge1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLmhpdC1ncmlkIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2hpcC1ncmlkIGltZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnN0YXJ0LWJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogc3RhcnQtYnV0dG9uO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxuICAgIGNvbG9yOiByZ2IoNywgMCwgNzgpO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG4uZ2FtZS1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmdhbWUtY29udGFpbmVyIC5ncmlkIGRpdiB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4ubmV3LWdhbWUtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDU2KTtcXG59XFxuLmRpYWxvZ3VlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGZpc2ggZnJvbSAnLi4vaW1hZ2VzL2Zpc2guc3ZnJztcbmltcG9ydCBza3VsbCBmcm9tICcuLi9pbWFnZXMvc2t1bGwuc3ZnJztcbmltcG9ydCByZWRfc2t1bGwgZnJvbSAnLi4vaW1hZ2VzL3JlZC1za3VsbC5zdmcnO1xuaW1wb3J0IHsgY3JlYXRlU2hpcEltZywgZ2V0R3JpZEFyZWEsIGdldENvb3JkaW5hdGVzIH0gZnJvbSAnLi9zaGlwLWRpc3BsYXknO1xuXG5mdW5jdGlvbiBjcmVhdGVTdGFydGluZ1BhZ2UoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXBzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgc2hpcHMhJztcbiAgICBjb25zdCBzdWJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHN1YkhlYWRlci50ZXh0Q29udGVudCA9XG4gICAgICAgICdEcmFnIHNoaXBzIG9udG8gdGhlIGJvYXJkIHRvIHBsYWNlIHRoZW0uIENsaWNrIG9uIGEgc2hpcCB0byBjaGFuZ2UgaXRzIGF4aXMnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJIZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCb2FyZCgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcEFyc2VuYWwoWzIsIDMsIDMsIDQsIDVdKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hpcEFyc2VuYWwoYXJyKSB7XG4gICAgY29uc3Qgc2hpcEFyc2VuYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHNoaXBBcnNlbmFsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtYXJzZW5hbCcpO1xuICAgIGNvbnNvbGUubG9nKHNoaXBBcnNlbmFsLmNsYXNzTGlzdCk7XG5cbiAgICBhcnIuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICAgIHNoaXBBcnNlbmFsLmFwcGVuZENoaWxkKGNyZWF0ZVNoaXBJbWcobnVtLCAnaG9yaXpvbnRhbCcpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwQXJzZW5hbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RhcnRCdXR0b24oKSB7XG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdGFydCc7XG4gICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3RhcnQtYnV0dG9uJyk7XG4gICAgcmV0dXJuIHN0YXJ0QnV0dG9uO1xufVxuZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGVBeGlzKCdBQkNERUZHSElKJywgJ3gtYXhpcycpKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGVBeGlzKCcwMTIzNDU2Nzg5JywgJ3ktYXhpcycpKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGVTaGlwR3JpZCgpKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGVHcmlkKCkpO1xuXG4gICAgcmV0dXJuIGJvYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGlwR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdzaGlwLWdyaWQnKTtcbiAgICByZXR1cm4gZ3JpZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXhpcyhjb250ZW50LCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGNvbnRlbnQuc3BsaXQoJycpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlQ29udGFpbmVyLnRleHRDb250ZW50ID0gZWxlO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIaXRHcmlkKCkge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2hpdC1ncmlkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGdyaWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgfVxuICAgIHJldHVybiBncmlkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBdHRhY2sob3V0Y29tZSkge1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gb3V0Y29tZSA9PT0gJ0gnID8gc2t1bGwgOiBmaXNoO1xuICAgIC8vaW1hZ2Uuc3R5bGVbJ2dyaWQtY29sdW1ucyddID0gY29vclswXSArIDE7XG4gICAgLy9pbWFnZS5zdHlsZVsnZ3JpZC1yb3dzJ10gPSBjb29yWzFdICsgMTtcbiAgICByZXR1cm4gaW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1bmsoKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSByZWRfc2t1bGw7XG4gICAgcmV0dXJuIGltYWdlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdHYW1lQnRuKCkge1xuICAgIGNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdHYW1lQnRuLnRleHRDb250ZW50ID0gJ05ldyBHYW1lJztcbiAgICBuZXdHYW1lQnRuLmNsYXNzTGlzdC5hZGQoJ25ldy1nYW1lLWJ1dHRvbicpO1xuICAgIHJldHVybiBuZXdHYW1lQnRuO1xufVxuZnVuY3Rpb24gY3JlYXRlUGxheWVyU2hpcHMocGxheWVyLCBncmlkKSB7XG4gICAgcGxheWVyXG4gICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgIC5nZXRTaGlwQm9hcmQoKVxuICAgICAgICAuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBCb2FyZCgpLmluZGV4T2Yoc2hpcCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVTaGlwSW1nKFxuICAgICAgICAgICAgICAgICAgICBzaGlwLmdldExlbmd0aCgpLFxuICAgICAgICAgICAgICAgICAgICBzaGlwLmdldERpcmVjdGlvbigpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZVsnZ3JpZC1hcmVhJ10gPSBnZXRHcmlkQXJlYShcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q29vcmRpbmF0ZXMoaW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICBzaGlwLmdldExlbmd0aCgpLFxuICAgICAgICAgICAgICAgICAgICBzaGlwLmdldERpcmVjdGlvbigpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlhbG9ndWUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaWFsb2d1ZScpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlU3RhcnRCdXR0b24sXG4gICAgY3JlYXRlQm9hcmQsXG4gICAgY3JlYXRlQXR0YWNrLFxuICAgIGNyZWF0ZUhpdEdyaWQsXG4gICAgY3JlYXRlU3VuayxcbiAgICBjcmVhdGVOZXdHYW1lQnRuLFxuICAgIGNyZWF0ZVBsYXllclNoaXBzLFxuICAgIGNyZWF0ZURpYWxvZ3VlLFxuICAgIGNyZWF0ZVN0YXJ0aW5nUGFnZSxcbn07XG4iLCIvL2NoYW5nZSB0byBlbmFibGUgZHJhZ1xuXG5pbXBvcnQgZHJvcCBmcm9tICcuL2Ryb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmFibGVEcmFnQW5kRHJvcCh0YXJnZXQsIHBsYXllcikge1xuICAgIGxldCBzdGFydGluZ1g7XG4gICAgbGV0IHN0YXJ0aW5nWTtcbiAgICBsZXQgc3RhcnRpbmdMZWZ0O1xuICAgIGxldCBzdGFydGluZ1RvcDtcblxuICAgIGZ1bmN0aW9uIGRyYWcoZSkge1xuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChnYW1lQ29udGFpbmVyKSByZXR1cm47XG4gICAgICAgIHRhcmdldC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gdGFyZ2V0LnN0eWxlLmxlZnQgfHwgMDtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBgY2FsYygke3N0YXJ0aW5nTGVmdH0gKyAke2UuY2xpZW50WCAtIHN0YXJ0aW5nWH1weClgO1xuICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gYGNhbGMoJHtzdGFydGluZ1RvcH0gKyAke2UuY2xpZW50WSAtIHN0YXJ0aW5nWX1weClgO1xuICAgIH1cblxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgc3RhcnRpbmdYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgc3RhcnRpbmdZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgc3RhcnRpbmdMZWZ0ID0gdGFyZ2V0LnN0eWxlLmxlZnQgfHwgYDBweGA7XG4gICAgICAgIHN0YXJ0aW5nVG9wID0gdGFyZ2V0LnN0eWxlLnRvcCB8fCBgMHB4YDtcbiAgICAgICAgLy9zdGFydGluZyByb3cvY29sdW1uIGluc3RlYWRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZE1vdmUpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZW5kTW92ZSgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkcm9wKHN0YXJ0aW5nTGVmdCwgc3RhcnRpbmdUb3AsIHRhcmdldCwgcGxheWVyKTtcbiAgICAgICAgfSwgMSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmRNb3ZlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZW5hYmxlRHJhZ0FuZERyb3AgZnJvbSAnLi9kcmFnJztcbmltcG9ydCB0b2dnbGVBeGlzIGZyb20gJy4vdG9nZ2xlLWF4aXMnO1xuaW1wb3J0IHsgbG9hZFN0YXJ0QnV0dG9uIH0gZnJvbSAnLi4vaW5kZXguanMnO1xuaW1wb3J0IHtcbiAgICBnZXRGaXJzdFNxdWFyZSxcbiAgICBnZXRMZW5ndGgsXG4gICAgZ2V0RGlyZWN0aW9uLFxuICAgIGdldENvb3JkaW5hdGVzLFxuICAgIGdldEdyaWRBcmVhLFxuICAgIGdldFNxdWFyZXMsXG4gICAgZmluZExlZnQsXG4gICAgZmluZFRvcCxcbn0gZnJvbSAnLi9zaGlwLWRpc3BsYXkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcm9wKHN0YXJ0aW5nTGVmdCwgc3RhcnRpbmdUb3AsIHRhcmdldCwgcGxheWVyKSB7XG4gICAgY29uc3Qgc2hpcEFyc2VuYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1hcnNlbmFsJyk7XG4gICAgY29uc3Qgc2hpcEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1ncmlkJyk7XG5cbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlZCcpKSB7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnRDb29yID0gZ2V0Q29vcmRpbmF0ZXMoXG4gICAgICAgIGdldFNxdWFyZXMoKS5pbmRleE9mKGdldEZpcnN0U3F1YXJlKGZpbmRMZWZ0KHRhcmdldCksIGZpbmRUb3AodGFyZ2V0KSkpXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgICAgIWdldEZpcnN0U3F1YXJlKGZpbmRMZWZ0KHRhcmdldCksIGZpbmRUb3AodGFyZ2V0KSkgfHxcbiAgICAgICAgcGxheWVyLmdldEJvYXJkKCkuY29vcmRpbmF0ZVRha2VuKHN0YXJ0Q29vcilcbiAgICApIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBzdGFydGluZ0xlZnQ7XG4gICAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBzdGFydGluZ1RvcDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aCA9IGdldExlbmd0aCh0YXJnZXQpO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGdldERpcmVjdGlvbih0YXJnZXQpO1xuXG4gICAgcGxheWVyLmdldEJvYXJkKCkucGxhY2VTaGlwKHN0YXJ0Q29vciwgbGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgIGNvbnNvbGUubG9nKHBsYXllci5nZXRCb2FyZCgpLmdldFNoaXBCb2FyZCgpKTtcbiAgICAvL2NvbnNvbGUubG9nKHBsYXllci5nZXRCb2FyZCgpLmlzUGxhY2VkQ29ycmVjdGx5QXQoc3RhcnRDb29yKSk7XG4gICAgaWYgKHBsYXllci5nZXRCb2FyZCgpLmlzUGxhY2VkQ29ycmVjdGx5QXQoc3RhcnRDb29yKSkge1xuICAgICAgICBjb25zdCBuZXdUYXJnZXQgPSB0YXJnZXQuY2xvbmVOb2RlKCk7XG4gICAgICAgIGlmICh0YXJnZXQucGFyZW50Tm9kZSA9PT0gc2hpcEFyc2VuYWwpIHtcbiAgICAgICAgICAgIHNoaXBBcnNlbmFsLnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBvbGRDb29yID0gW1xuICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZVsnZ3JpZC1jb2x1bW4tc3RhcnQnXSAtIDEsXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlWydncmlkLXJvdy1zdGFydCddIC0gMSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvKmdldENvb3JkaW5hdGVzKFxuICAgICAgICAgICAgICAgLy8gZ2V0U3F1YXJlcygpLmluZGV4T2YoZ2V0Rmlyc3RTcXVhcmUoc3RhcnRpbmdMZWZ0LCBzdGFydGluZ1RvcCkpXG4gICAgICAgICAgICApOyovXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRhcmdldC5zdHlsZVsnZ3JpZC1yb3ctc3RhcnQnXSk7XG4gICAgICAgICAgICBwbGF5ZXIuZ2V0Qm9hcmQoKS5yZW1vdmVTaGlwKG9sZENvb3IpO1xuICAgICAgICAgICAgc2hpcEdyaWQucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBuZXdUYXJnZXQuc3R5bGVbJ2dyaWQtYXJlYSddID0gZ2V0R3JpZEFyZWEoXG4gICAgICAgICAgICBzdGFydENvb3IsXG4gICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICBkaXJlY3Rpb25cbiAgICAgICAgKTtcbiAgICAgICAgbmV3VGFyZ2V0LnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICBuZXdUYXJnZXQuc3R5bGUudG9wID0gMDtcbiAgICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQobmV3VGFyZ2V0KTtcbiAgICAgICAgZW5hYmxlRHJhZ0FuZERyb3AobmV3VGFyZ2V0LCBwbGF5ZXIpO1xuICAgICAgICB0b2dnbGVBeGlzKG5ld1RhcmdldCwgcGxheWVyKTtcbiAgICAgICAgaWYgKCFzaGlwQXJzZW5hbC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBsb2FkU3RhcnRCdXR0b24ocGxheWVyKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gc3RhcnRpbmdMZWZ0O1xuICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gc3RhcnRpbmdUb3A7XG4gICAgICAgIHBsYXllci5nZXRCb2FyZCgpLnJlbW92ZVNoaXAoc3RhcnRDb29yKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgYmF0dGxlc2hpcEggZnJvbSAnLi4vaW1hZ2VzL2JhdHRsZXNoaXAuc3ZnJztcbmltcG9ydCBjYXJyaWVySCBmcm9tICcuLi9pbWFnZXMvY2Fycmllci5zdmcnO1xuaW1wb3J0IGRlc3Ryb3llckggZnJvbSAnLi4vaW1hZ2VzL2Rlc3Ryb3llci5zdmcnO1xuaW1wb3J0IHN1Ym1hcmluZUggZnJvbSAnLi4vaW1hZ2VzL3N1Ym1hcmluZS5zdmcnO1xuXG5pbXBvcnQgYmF0dGxlc2hpcFYgZnJvbSAnLi4vaW1hZ2VzL3ZlcnRpY2FsLWJhdHRsZXNoaXAuc3ZnJztcbmltcG9ydCBjYXJyaWVyViBmcm9tICcuLi9pbWFnZXMvdmVydGljYWwtY2Fycmllci5zdmcnO1xuaW1wb3J0IGRlc3Ryb3llclYgZnJvbSAnLi4vaW1hZ2VzL3ZlcnRpY2FsLWRlc3Ryb3llci5zdmcnO1xuaW1wb3J0IHN1Ym1hcmluZVYgZnJvbSAnLi4vaW1hZ2VzL3ZlcnRpY2FsLXN1Ym1hcmluZS5zdmcnO1xuXG5jb25zdCBob3Jpem9udGFsU2hpcHMgPSBbZGVzdHJveWVySCwgc3VibWFyaW5lSCwgYmF0dGxlc2hpcEgsIGNhcnJpZXJIXTtcbmNvbnN0IHZlcnRpY2FsU2hpcHMgPSBbZGVzdHJveWVyViwgc3VibWFyaW5lViwgYmF0dGxlc2hpcFYsIGNhcnJpZXJWXTtcblxuZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKHNoaXApIHtcbiAgICByZXR1cm4gc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xufVxuXG5mdW5jdGlvbiBnZXRMZW5ndGgodGFyZ2V0KSB7XG4gICAgY29uc3QgbWVhc3VyZSA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgY29uc3QgZ3JpZFNsb3RXaWR0aCA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWdyaWQnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVsnd2lkdGgnXSAvXG4gICAgICAgIDEwO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW21lYXN1cmVdIC8gZ3JpZFNsb3RXaWR0aCk7XG59XG5cbmZ1bmN0aW9uIGdldEZpcnN0U3F1YXJlKGxlZnQsIHRvcCkge1xuICAgIGNvbnN0IGVycm9yTWFyZ2luID0gZ2V0U3F1YXJlcygpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC8gMjtcbiAgICByZXR1cm4gZ2V0U3F1YXJlcygpLmZpbHRlcigoc3F1YXJlKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBzcXVhcmUub2Zmc2V0TGVmdCA+IGxlZnQgLSBlcnJvck1hcmdpbiAmJlxuICAgICAgICAgICAgc3F1YXJlLm9mZnNldFRvcCA+IHRvcCAtIGVycm9yTWFyZ2luICYmXG4gICAgICAgICAgICBzcXVhcmUub2Zmc2V0TGVmdCA8PSBsZWZ0ICsgZXJyb3JNYXJnaW4gJiZcbiAgICAgICAgICAgIHNxdWFyZS5vZmZzZXRUb3AgPD0gdG9wICsgZXJyb3JNYXJnaW5cbiAgICAgICAgKTtcbiAgICB9KVswXTtcbn1cblxuZnVuY3Rpb24gZ2V0U3F1YXJlcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCBkaXYnKSk7XG59XG5cbmZ1bmN0aW9uIGdldEdyaWRBcmVhKGNvb3JkaW5hdGUsIGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICByZXR1cm4gYCR7Y29vcmRpbmF0ZVsxXSArIDF9IC8gJHtjb29yZGluYXRlWzBdICsgMX0gLyAke2Nvb3JkaW5hdGVbMV0gKyAxICsgbGVuZ3RofSAvIHNwYW4gMWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke2Nvb3JkaW5hdGVbMV0gKyAxfSAvJHtjb29yZGluYXRlWzBdICsgMX0gLyBzcGFuIDEgLyAke2Nvb3JkaW5hdGVbMF0gKyAxICsgbGVuZ3RofWA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlcyhpbmRleCkge1xuICAgIHJldHVybiBbaW5kZXggJSAxMCwgTWF0aC5mbG9vcihpbmRleCAvIDEwKV07XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0KHNoaXApIHtcbiAgICBjb25zb2xlLmxvZyhzaGlwLm9mZnNldFBhcmVudCk7XG4gICAgaWYgKHNoaXAub2Zmc2V0UGFyZW50ICE9IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHNoaXAub2Zmc2V0UGFyZW50Lm9mZnNldExlZnQgKyBzaGlwLm9mZnNldExlZnQ7XG4gICAgfVxuICAgIHJldHVybiBzaGlwLm9mZnNldExlZnQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRUb3Aoc2hpcCkge1xuICAgIGlmIChzaGlwLm9mZnNldFBhcmVudCAhPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIHJldHVybiBzaGlwLm9mZnNldFBhcmVudC5vZmZzZXRUb3AgKyBzaGlwLm9mZnNldFRvcDtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXAub2Zmc2V0VG9wO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGlwSW1nKGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBzaGlwQXJyYXkgPVxuICAgICAgICBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/IGhvcml6b250YWxTaGlwcyA6IHZlcnRpY2FsU2hpcHM7XG4gICAgaW1hZ2Uuc3JjID0gc2hpcEFycmF5W2xlbmd0aCAtIDJdO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICByZXR1cm4gaW1hZ2U7XG59XG5leHBvcnQge1xuICAgIGNyZWF0ZVNoaXBJbWcsXG4gICAgZ2V0Rmlyc3RTcXVhcmUsXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGdldERpcmVjdGlvbixcbiAgICBnZXRDb29yZGluYXRlcyxcbiAgICBnZXRHcmlkQXJlYSxcbiAgICBnZXRTcXVhcmVzLFxuICAgIGZpbmRMZWZ0LFxuICAgIGZpbmRUb3AsXG59O1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wbGF5ZXInO1xuaW1wb3J0IHsgbG9hZEJvYXJkRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQge1xuICAgIGNyZWF0ZUJvYXJkLFxuICAgIGNyZWF0ZUhpdEdyaWQsXG4gICAgY3JlYXRlUGxheWVyU2hpcHMsXG4gICAgY3JlYXRlRGlhbG9ndWUsXG59IGZyb20gJy4vY3JlYXRlX2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0R2FtZShwbGF5ZXIxKSB7XG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250YWluZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZURpYWxvZ3VlKCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG4gICAgY29uc3QgcGxheWVyMiA9IFBsYXllcignY29tcHV0ZXInLCAyKTtcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckJvYXJkKHBsYXllcjEpKTtcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckJvYXJkKHBsYXllcjIpKTtcbiAgICBsb2FkQm9hcmRFdmVudExpc3RlbmVycyhwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVDb250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlLXNoaXBzLWNvbnRhaW5lcicpKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQm9hcmQocGxheWVyKSB7XG4gICAgbGV0IGJvYXJkO1xuICAgIGlmIChwbGF5ZXIuZ2V0VHlwZSgpID09PSAnaHVtYW4nKSB7XG4gICAgICAgIGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZCcpLmNsb25lTm9kZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBib2FyZCA9IGNyZWF0ZUJvYXJkKCdlbmVteScpO1xuICAgICAgICBjb25zdCBzaGlwR3JpZCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWdyaWQnKTtcbiAgICAgICAgcGxheWVyLmdldEJvYXJkKCkucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgICAgIGNyZWF0ZVBsYXllclNoaXBzKHBsYXllciwgc2hpcEdyaWQpO1xuICAgIH1cbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jb250YWluZXIgLmdhbWVib2FyZCcpXG4gICAgICAgICAgICA/ICdwbGF5ZXItMidcbiAgICAgICAgICAgIDogJ3BsYXllci0xJ1xuICAgICk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoY3JlYXRlSGl0R3JpZCgpKTtcblxuICAgIHJldHVybiBib2FyZDtcbn1cbiIsImltcG9ydCB7IGdldENvb3JkaW5hdGVzSW5kZXgsIGdldENvb3JkaW5hdGVQYWlyIH0gZnJvbSAnLi4vbG9naWMvY29udmVyc2lvbnMnO1xuaW1wb3J0IHsgY3JlYXRlQXR0YWNrLCBjcmVhdGVTdW5rIH0gZnJvbSAnLi9jcmVhdGVfZnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFrZVR1cm4ocGxheWVyLCBvcHBvc2luZywgc3F1YXJlcywgc3F1YXJlKSB7XG4gICAgbGV0IGF0dGFja2VkU3F1YXJlO1xuICAgIGlmIChwbGF5ZXIuZ2V0VHlwZSgpID09PSAnaHVtYW4nKSB7XG4gICAgICAgIGF0dGFja2VkU3F1YXJlID0gc3F1YXJlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGF0dGFja0FyciA9IG9wcG9zaW5nLmdldEJvYXJkKCkuZ2V0U21hcnRBdHRhY2soKTtcbiAgICAgICAgaWYgKGF0dGFja0FyciAmJiBhdHRhY2tBcnJbMF0pIHtcbiAgICAgICAgICAgIGF0dGFja2VkU3F1YXJlID1cbiAgICAgICAgICAgICAgICBzcXVhcmVzW1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tBcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXR0YWNrQXJyLmxlbmd0aCldXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGdldEF2YWlsYWJsZShzcXVhcmVzKS5sZW5ndGg7XG4gICAgICAgICAgICBhdHRhY2tlZFNxdWFyZSA9XG4gICAgICAgICAgICAgICAgZ2V0QXZhaWxhYmxlKHNxdWFyZXMpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gc3F1YXJlcy5pbmRleE9mKGF0dGFja2VkU3F1YXJlKTtcbiAgICBjb25zdCBjb29yID0gW2luZGV4ICUgMTAsIE1hdGguZmxvb3IoaW5kZXggLyAxMCldO1xuICAgIG9wcG9zaW5nLmdldEJvYXJkKCkucmVjZWl2ZUF0dGFjayhjb29yKTtcbiAgICBhdHRhY2tlZFNxdWFyZS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlQXR0YWNrKG9wcG9zaW5nLmdldEJvYXJkKCkuZ2V0SGl0Qm9hcmQoKVtpbmRleF0pXG4gICAgKTtcblxuICAgIGNvbnN0IHNoaXAgPSBvcHBvc2luZy5nZXRCb2FyZCgpLmZpbmRBdHRhY2tlZFNoaXAoY29vcik7XG4gICAgaWYgKHNoaXAgJiYgc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGdldENvb3JkaW5hdGVQYWlyKFxuICAgICAgICAgICAgb3Bwb3NpbmcuZ2V0Qm9hcmQoKS5nZXRTaGlwQm9hcmQoKS5pbmRleE9mKHNoaXApXG4gICAgICAgICk7XG4gICAgICAgIHNob3dTdW5rKFxuICAgICAgICAgICAgb3Bwb3NpbmdcbiAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgIC5nZXRDb29yZGluYXRlQXJyKHN0YXJ0LCBzaGlwLmdldERpcmVjdGlvbigpLCBzaGlwLmdldExlbmd0aCgpKSxcbiAgICAgICAgICAgIHNxdWFyZXNcbiAgICAgICAgKTtcbiAgICB9XG4gICAgdXBkYXRlRGlhbG9ndWUoXG4gICAgICAgIHBsYXllcixcbiAgICAgICAgb3Bwb3NpbmcuZ2V0Qm9hcmQoKS5nZXRIaXRCb2FyZCgpW2luZGV4XSxcbiAgICAgICAgZ2V0Q29vcmRpbmF0ZVBhaXIoaW5kZXgpLFxuICAgICAgICBzaGlwICYmIHNoaXAuaXNTdW5rKCksXG4gICAgICAgIHNoaXBcbiAgICApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEaWFsb2d1ZShwbGF5ZXIsIG91dGNvbWUsIGNvb3IsIGlzU3Vuaywgc2hpcCkge1xuICAgIGNvbnN0IHNoaXBBcnIgPSBbJ2Rlc3Ryb3llcicsICdzdWJtYXJpbmUnLCAnYmF0dGxlc2hpcCcsICdjYXJyaWVyJ107XG4gICAgbGV0IHNoaXBOYW1lO1xuICAgIGlmIChpc1N1bmspIHNoaXBOYW1lID0gc2hpcEFycltzaGlwLmdldExlbmd0aCgpIC0gMl07XG4gICAgY29uc3QgbGV0dGVyID0gJ0FCQ0RFRkdISUonLnNwbGl0KCcnKVtjb29yWzBdXTtcbiAgICBjb25zdCBzcG90ID0gYCR7bGV0dGVyfSR7Y29vclsxXX1gO1xuXG4gICAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUnKTtcbiAgICBjb25zdCBzdWJqZWN0ID0gcGxheWVyLmdldFR5cGUoKSA9PT0gJ2h1bWFuJyA/ICdPdXInIDogJ0VuZW15JztcbiAgICBjb25zdCBvYmplY3QgPSBwbGF5ZXIuZ2V0VHlwZSgpID09PSAnaHVtYW4nID8gJ0VuZW15JyA6ICdPdXInO1xuICAgIGlmIChpc1N1bmspIHtcbiAgICAgICAgZGlhbG9ndWUudGV4dENvbnRlbnQgPSBgJHtzdWJqZWN0fSBhdHRhY2sgYXQgJHtzcG90fSB3YXMgc3VjY2Vzc2Z1bC4gJHtvYmplY3R9ICR7c2hpcE5hbWV9IGlzIHN1bmtgO1xuICAgIH0gZWxzZSBpZiAob3V0Y29tZSA9PT0gJ0gnKSB7XG4gICAgICAgIGRpYWxvZ3VlLnRleHRDb250ZW50ID0gYCAke3N1YmplY3R9IGF0dGFjayBhdCAke3Nwb3R9IHdhcyBzdWNjZXNzZnVsLiAke29iamVjdH0gc2hpcCBpcyBoaXRgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpYWxvZ3VlLnRleHRDb250ZW50ID0gYCR7c3ViamVjdH0gYXR0YWNrIGF0ICR7c3BvdH0gbWlzc2VkLiBUaGUgcG9vciBmaXNoYDtcbiAgICB9XG59XG4vL3RoaXMgc2hvdWxkIGJlIGluIGxvZ2ljIG1vZHVsZXMgYW5kIGludGVncmF0ZWQgd2l0aCBzbWFydCBhdHRhY2tcbmZ1bmN0aW9uIGdldEF2YWlsYWJsZShhcnIpIHtcbiAgICBjb25zdCBpbmRpY2VzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFhcnJbaV0uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKGFycltpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGljZXM7XG59XG5cbmZ1bmN0aW9uIHNob3dTdW5rKGNvb3JBcnIsIHNxdWFyZXMpIHtcbiAgICBjb25zdCBmaXJzdCA9IHNxdWFyZXNbMV07XG4gICAgY29uc3Qgc2hpcHMgPSBBcnJheS5mcm9tKFxuICAgICAgICBmaXJzdC5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtZ3JpZCBpbWcnKVxuICAgICk7XG4gICAgY29uc3QgYXR0YWNrZWQgPSBzaGlwcy5maW5kKChzaGlwKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBOdW1iZXIoc2hpcC5zdHlsZVsnZ3JpZC1jb2x1bW4tc3RhcnQnXSkgPT09IGNvb3JBcnJbMF1bMF0gKyAxICYmXG4gICAgICAgICAgICBOdW1iZXIoc2hpcC5zdHlsZVsnZ3JpZC1yb3ctc3RhcnQnXSkgPT09IGNvb3JBcnJbMF1bMV0gKyAxXG4gICAgICAgICk7XG4gICAgfSk7XG4gICAgYXR0YWNrZWQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY29vckFyci5mb3JFYWNoKChjb29yKSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IHNxdWFyZXNbZ2V0Q29vcmRpbmF0ZXNJbmRleChjb29yKV07XG4gICAgICAgIHNxdWFyZS5yZW1vdmVDaGlsZChzcXVhcmUuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoY3JlYXRlU3VuaygpKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBiYXR0bGVzaGlwSCBmcm9tICcuLi9pbWFnZXMvYmF0dGxlc2hpcC5zdmcnO1xuaW1wb3J0IGNhcnJpZXJIIGZyb20gJy4uL2ltYWdlcy9jYXJyaWVyLnN2Zyc7XG5pbXBvcnQgZGVzdHJveWVySCBmcm9tICcuLi9pbWFnZXMvZGVzdHJveWVyLnN2Zyc7XG5pbXBvcnQgc3VibWFyaW5lSCBmcm9tICcuLi9pbWFnZXMvc3VibWFyaW5lLnN2Zyc7XG5cbmltcG9ydCBiYXR0bGVzaGlwViBmcm9tICcuLi9pbWFnZXMvdmVydGljYWwtYmF0dGxlc2hpcC5zdmcnO1xuaW1wb3J0IGNhcnJpZXJWIGZyb20gJy4uL2ltYWdlcy92ZXJ0aWNhbC1jYXJyaWVyLnN2Zyc7XG5pbXBvcnQgZGVzdHJveWVyViBmcm9tICcuLi9pbWFnZXMvdmVydGljYWwtZGVzdHJveWVyLnN2Zyc7XG5pbXBvcnQgc3VibWFyaW5lViBmcm9tICcuLi9pbWFnZXMvdmVydGljYWwtc3VibWFyaW5lLnN2Zyc7XG5cbmltcG9ydCBlbmFibGVEcmFnQW5kRHJvcCBmcm9tICcuL2RyYWcnO1xuXG5pbXBvcnQge1xuICAgIGdldExlbmd0aCxcbiAgICBnZXREaXJlY3Rpb24sXG4gICAgZ2V0Q29vcmRpbmF0ZXMsXG4gICAgZ2V0R3JpZEFyZWEsXG4gICAgZ2V0Rmlyc3RTcXVhcmUsXG4gICAgZ2V0U3F1YXJlcyxcbiAgICBmaW5kTGVmdCxcbiAgICBmaW5kVG9wLFxufSBmcm9tICcuL3NoaXAtZGlzcGxheS5qcyc7XG5cbmNvbnN0IGhvcml6b250YWxTaGlwcyA9IFtiYXR0bGVzaGlwSCwgY2FycmllckgsIGRlc3Ryb3llckgsIHN1Ym1hcmluZUhdO1xuY29uc3QgdmVydGljYWxTaGlwcyA9IFtiYXR0bGVzaGlwViwgY2FycmllclYsIGRlc3Ryb3llclYsIHN1Ym1hcmluZVZdO1xuXG5mdW5jdGlvbiB0b2dnbGVBeGlzKHRhcmdldCwgcGxheWVyKSB7XG4gICAgbGV0IHRvZ2dsZSA9IHRydWU7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUYXJnZXQgPSB0YXJnZXQuY2xvbmVOb2RlKCk7XG4gICAgICAgIHRvZ2dsZVRhcmdldChuZXdUYXJnZXQpO1xuXG4gICAgICAgIGlmICh0b2dnbGUpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQucGFyZW50Tm9kZSA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZ3JpZCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBnZXRDb29yZGluYXRlcyhcbiAgICAgICAgICAgICAgICAgICAgZ2V0U3F1YXJlcygpLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRGaXJzdFNxdWFyZShmaW5kTGVmdCh0YXJnZXQpLCBmaW5kVG9wKHRhcmdldCkpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGdldExlbmd0aCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGdldERpcmVjdGlvbihuZXdUYXJnZXQpO1xuICAgICAgICAgICAgICAgIHBsYXllci5nZXRCb2FyZCgpLnJlbW92ZVNoaXAoc3RhcnQpO1xuICAgICAgICAgICAgICAgIHBsYXllci5nZXRCb2FyZCgpLnBsYWNlU2hpcChzdGFydCwgbGVuZ3RoLCBkaXJlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwbGF5ZXIuZ2V0Qm9hcmQoKS5pc1BsYWNlZENvcnJlY3RseUF0KHN0YXJ0KSkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2V0Qm9hcmQoKS5yZW1vdmVTaGlwKHN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsYWNlU2hpcChzdGFydCwgbGVuZ3RoLCBnZXREaXJlY3Rpb24odGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFyZ2V0LnN0eWxlWydncmlkLWFyZWEnXSA9IGdldEdyaWRBcmVhKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZ3JpZCcpLmFwcGVuZENoaWxkKG5ld1RhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZURyYWdBbmREcm9wKG5ld1RhcmdldCwgcGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQXhpcyhuZXdUYXJnZXQsIHBsYXllcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWFyc2VuYWwnKS5hcHBlbmRDaGlsZChuZXdUYXJnZXQpO1xuICAgICAgICAgICAgICAgIGVuYWJsZURyYWdBbmREcm9wKG5ld1RhcmdldCwgcGxheWVyKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVBeGlzKG5ld1RhcmdldCwgcGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCd0b2dnbGVkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodG9nZ2xlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygneW8nKTtcbiAgICAgICAgICAgIC8vcGxheWVyLmdldEJvYXJkKCkucmVtb3ZlU2hpcChzdGFydCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGUgPSB0cnVlO1xuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlT2ZmKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHRvZ2dsZU9mZigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VhaXdnc2x1YicpO1xuICAgICAgICB0b2dnbGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZ2dsZSk7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0b2dnbGVPZmYpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXJnZXQodGFyZ2V0KSB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwcy5pbmNsdWRlcyh0YXJnZXQuc3JjKSkge1xuICAgICAgICB0YXJnZXQuc3JjID0gdmVydGljYWxTaGlwc1tob3Jpem9udGFsU2hpcHMuaW5kZXhPZih0YXJnZXQuc3JjKV07XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldC5zcmMgPSBob3Jpem9udGFsU2hpcHNbdmVydGljYWxTaGlwcy5pbmRleE9mKHRhcmdldC5zcmMpXTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJyk7XG4gICAgfVxufVxuXG4vKmZ1bmN0aW9uIHRvZ2dsZUluR3JpZCh0YXJnZXQpIHtcbiAgICBjb25zdCBbY29sdW1uU3RhcnQsIGNvbHVtbkVuZF0gPSB0YXJnZXQuc3R5bGVbJ2dyaWQtY29sdW1uJ10uc3BsaXQoJy8nKTtcbiAgICBjb25zdCBbcm93U3RhcnQsIHJvd0VuZF0gPSB0YXJnZXQuc3R5bGVbJ2dyaWQtcm93J10uc3BsaXQoJy8nKTtcbiAgICB0YXJnZXQuc3R5bGVbJ2dyaWQtY29sdW1uJ10gPVxuICAgICAgICBgJHtjb2x1bW5TdGFydH0gLyAke051bWJlcihjb2x1bW5TdGFydCkgKyAoKHJvd0VuZCB8fCByb3dTdGFydCkgLSByb3dTdGFydCl9YDtcbiAgICB0YXJnZXQuc3R5bGVbJ2dyaWQtcm93J10gPVxuICAgICAgICBgJHtyb3dTdGFydH0gLyAke051bWJlcihyb3dTdGFydCkgKyAoKGNvbHVtbkVuZCB8fCBjb2x1bW5TdGFydCkgLSBjb2x1bW5TdGFydCl9YDtcbn0qL1xuXG5mdW5jdGlvbiBpc0lsbGVnYWxUb2dnbGUodGFyZ2V0KSB7XG4gICAgY29uc3QgW2NvbHVtblN0YXJ0LCBjb2x1bW5FbmRdID0gdGFyZ2V0LnN0eWxlWydncmlkLWNvbHVtbiddLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgW3Jvd1N0YXJ0LCByb3dFbmRdID0gdGFyZ2V0LnN0eWxlWydncmlkLXJvdyddLnNwbGl0KCcvJyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgTnVtYmVyKGNvbHVtblN0YXJ0KSArICgocm93RW5kIHx8IHJvd1N0YXJ0KSAtIHJvd1N0YXJ0KSA+IDExIHx8XG4gICAgICAgIE51bWJlcihyb3dTdGFydCkgKyAoKGNvbHVtbkVuZCB8fCBjb2x1bW5TdGFydCkgLSBjb2x1bW5TdGFydCkgPiAxMVxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZUF4aXM7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IGZpbmRTbWFydEF0dGFjayBmcm9tICcuL3NtYXJ0X2F0dGFjayc7XG5pbXBvcnQgeyBnZXRDb29yZGluYXRlc0luZGV4LCBnZXRDb29yZGluYXRlUGFpciB9IGZyb20gJy4vbG9naWMvY29udmVyc2lvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gICAgY29uc3Qgc2hpcEJvYXJkID0gW107XG4gICAgc2hpcEJvYXJkWzk5XSA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBoaXRCb2FyZCA9IFtdO1xuICAgIGNvbnN0IGdldEhpdEJvYXJkID0gKCkgPT4gaGl0Qm9hcmQ7XG4gICAgY29uc3QgZ2V0U2hpcEJvYXJkID0gKCkgPT4gc2hpcEJvYXJkO1xuXG4gICAgZnVuY3Rpb24gZ2V0U2hpcEF0KHN0YXJ0aW5nKSB7XG4gICAgICAgIHJldHVybiBzaGlwQm9hcmQuZmluZChcbiAgICAgICAgICAgIChzaGlwKSA9PlxuICAgICAgICAgICAgICAgIGdldENvb3JkaW5hdGVQYWlyKGdldFNoaXBCb2FyZCgpLmluZGV4T2Yoc2hpcCkpID09PSBzdGFydGluZ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRBdHRhY2tlZFNoaXAoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHNoaXBCb2FyZC5maW5kKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRDb29yZGluYXRlQXJyKFxuICAgICAgICAgICAgICAgICAgICBnZXRDb29yZGluYXRlUGFpcihnZXRTaGlwQm9hcmQoKS5pbmRleE9mKHNoaXApKSxcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5nZXRMZW5ndGgoKVxuICAgICAgICAgICAgICAgICkuc29tZSgoY29vcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vclswXSA9PSBjb29yZGluYXRlc1swXSAmJiBjb29yWzFdID09IGNvb3JkaW5hdGVzWzFdXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGlmIChmaW5kQXR0YWNrZWRTaGlwKGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAgICAgZmluZEF0dGFja2VkU2hpcChjb29yZGluYXRlcykuaGl0KCk7XG4gICAgICAgICAgICBhZGRBdHRhY2soZ2V0Q29vcmRpbmF0ZXNJbmRleChjb29yZGluYXRlcyksICdIJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRBdHRhY2soZ2V0Q29vcmRpbmF0ZXNJbmRleChjb29yZGluYXRlcyksICdNJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRBdHRhY2soaW5kZXgsIHN0YXR1cykge1xuICAgICAgICBoaXRCb2FyZFtpbmRleF0gPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gZ2V0U2hpcEJvYXJkKClcbiAgICAgICAgICAgIC5maWx0ZXIoKHNoaXApID0+IHNoaXApXG4gICAgICAgICAgICAuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoY29vcmRpbmF0ZXMsIGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHNoaXBCb2FyZFtnZXRDb29yZGluYXRlc0luZGV4KGNvb3JkaW5hdGVzKV0gPSBTaGlwKGxlbmd0aCwgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVTaGlwKGNvb3IpIHtcbiAgICAgICAgZ2V0U2hpcEJvYXJkKClbZ2V0Q29vcmRpbmF0ZXNJbmRleChjb29yKV0gPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb29yZGluYXRlVGFrZW4oY29vcikge1xuICAgICAgICByZXR1cm4gISFnZXRTaGlwQm9hcmQoKVtnZXRDb29yZGluYXRlc0luZGV4KGNvb3IpXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1BsYWNlZENvcnJlY3RseUF0KGNvb3IpIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGdldFNoaXBCb2FyZCgpW2dldENvb3JkaW5hdGVzSW5kZXgoY29vcildO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgc2hpcEluR3JpZChjb29yLCBzaGlwLmdldERpcmVjdGlvbigpLCBzaGlwLmdldExlbmd0aCgpKSAmJlxuICAgICAgICAgICAgIXNoaXBPdmVybGFwcGluZyhjb29yLCBzaGlwLmdldERpcmVjdGlvbigpLCBzaGlwLmdldExlbmd0aCgpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVBcnIoY29vciwgZGlyZWN0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yWzFdOyBpIDwgY29vclsxXSArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goW2Nvb3JbMF0sIGldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yWzBdOyBpIDwgY29vclswXSArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goW2ksIGNvb3JbMV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoaXBPdmVybGFwcGluZyh0YXJnZXRDb29yLCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgICAgICBjb25zdCBzaGlwcyA9IGdldFNoaXBCb2FyZCgpLmZpbHRlcigoc2hpcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBzaGlwICYmXG4gICAgICAgICAgICAgICAgZ2V0U2hpcEJvYXJkKCkuaW5kZXhPZihzaGlwKSAhPT0gZ2V0Q29vcmRpbmF0ZXNJbmRleCh0YXJnZXRDb29yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGdldENvb3JkaW5hdGVBcnIodGFyZ2V0Q29vciwgZGlyZWN0aW9uLCBsZW5ndGgpLnNvbWUoKHBhaXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwcy5zb21lKChzaGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldENvb3JkaW5hdGVBcnIoXG4gICAgICAgICAgICAgICAgICAgIGdldENvb3JkaW5hdGVQYWlyKGdldFNoaXBCb2FyZCgpLmluZGV4T2Yoc2hpcCkpLFxuICAgICAgICAgICAgICAgICAgICBzaGlwLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICAgICAgICBzaGlwLmdldExlbmd0aCgpXG4gICAgICAgICAgICAgICAgKS5zb21lKChjb29yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb29yWzFdID09PSBwYWlyWzFdICYmIGNvb3JbMF0gPT09IHBhaXJbMF07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hpcEluR3JpZChjb29yLCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vclsxXSArIGxlbmd0aCAtIDEgPCAxMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vclswXSArIGxlbmd0aCAtIDEgPCAxMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXBzUmFuZG9tbHkoKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aHMgPSBbMiwgMywgMywgNCwgNV07XG4gICAgICAgIGxlbmd0aHMuZm9yRWFjaCgobGVuZ3RoKSA9PiB7XG4gICAgICAgICAgICBwbGFjZVNoaXBSYW5kb21seShsZW5ndGgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRBdmFpbGFibGVJbmRpY2VzKGFycikge1xuICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFycltpXSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGljZXM7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwbGFjZVNoaXBSYW5kb21seShsZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9XG4gICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIgPj0gMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBnZXRBdmFpbGFibGVJbmRpY2VzKGdldFNoaXBCb2FyZCgpKTtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JMZW4gPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgY29vciA9IGdldENvb3JkaW5hdGVQYWlyKFxuICAgICAgICAgICAgICAgIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb29yTGVuKV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwbGFjZVNoaXAoY29vciwgbGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgaWYgKCFpc1BsYWNlZENvcnJlY3RseUF0KGNvb3IpKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlU2hpcChjb29yKTtcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXBSYW5kb21seShsZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U21hcnRBdHRhY2soKSB7XG4gICAgICAgIHJldHVybiBmaW5kU21hcnRBdHRhY2soZ2V0SGl0Qm9hcmQoKSwgZ2V0U2hpcEJvYXJkKCksIGZpbmRBdHRhY2tlZFNoaXApO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFNoaXBzU3VuayxcbiAgICAgICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgICAgICBjb29yZGluYXRlVGFrZW4sXG4gICAgICAgIHJlbW92ZVNoaXAsXG4gICAgICAgIGlzUGxhY2VkQ29ycmVjdGx5QXQsXG4gICAgICAgIGdldFNoaXBCb2FyZCxcbiAgICAgICAgZ2V0SGl0Qm9hcmQsXG4gICAgICAgIGdldFNoaXBBdCxcbiAgICAgICAgZ2V0U21hcnRBdHRhY2ssXG4gICAgICAgIGZpbmRBdHRhY2tlZFNoaXAsXG4gICAgICAgIGdldENvb3JkaW5hdGVBcnIsXG4gICAgfTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgZW5hYmxlRHJhZ0FuZERyb3AgZnJvbSAnLi9kaXNwbGF5L2RyYWcnO1xuaW1wb3J0IHRvZ2dsZUF4aXMgZnJvbSAnLi9kaXNwbGF5L3RvZ2dsZS1heGlzJztcbmltcG9ydCB7XG4gICAgY3JlYXRlU3RhcnRCdXR0b24sXG4gICAgY3JlYXRlTmV3R2FtZUJ0bixcbiAgICBjcmVhdGVTdGFydGluZ1BhZ2UsXG59IGZyb20gJy4vZGlzcGxheS9jcmVhdGVfZnVuY3Rpb25zJztcbmltcG9ydCBzdGFydEdhbWUgZnJvbSAnLi9kaXNwbGF5L3N0YXJ0LWdhbWUnO1xuaW1wb3J0IHRha2VUdXJuIGZyb20gJy4vZGlzcGxheS90YWtlX3R1cm4nO1xuXG4vL2xvb2sgaW50byBwaG90byBvZiBzbWFydCBhdHRhY2sgZXJyb3Jcbi8vZXNsaW50IG5vdCB3b3JraW5nJ1xuLy9tb3ZlIGdldCBjb29yZGluYXRlIGFycmF5IG91dCBvZiBzbWFydCBhdHRhY2tcbi8vcHJvZ3JhbSBjb21wdXRlciB0byBub3QgYXR0YWNrIHNsb3RzIHRoYXQgd2lsbCBub3QgZml0IHJlbWFpbmluZyBzaGlwc1xuLy9tb3ZlIGdldEF2YWlsYWJsZSB0byBsb2dpYyBhbmQgaW50ZWdyYXRlIGl0IGFzIGdldFBvc3NpYmxlIHdpdGggc21hcnRBdHRhY2tcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVTdGFydGluZ1BhZ2UoKSk7XG5sb2FkU2hpcExpc3RlbmVycygpO1xuXG5mdW5jdGlvbiBsb2FkU2hpcExpc3RlbmVycygpIHtcbiAgICBjb25zdCBzaGlwQXJzZW5hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWFyc2VuYWwnKTtcbiAgICBjb25zdCBzaGlwcyA9IEFycmF5LmZyb20oc2hpcEFyc2VuYWwucXVlcnlTZWxlY3RvckFsbCgnaW1nJykpO1xuICAgIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoJ2h1bWFuJyk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBlbmFibGVEcmFnQW5kRHJvcChzaGlwLCBwbGF5ZXIxKTtcbiAgICAgICAgdG9nZ2xlQXhpcyhzaGlwLCBwbGF5ZXIxKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZFN0YXJ0QnV0dG9uKHBsYXllcikge1xuICAgIGNvbnN0IHN0YXJ0QnRuID0gY3JlYXRlU3RhcnRCdXR0b24oKTtcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3RhcnRHYW1lKHBsYXllcik7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlLXNoaXBzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcbn1cblxuZnVuY3Rpb24gbG9hZEJvYXJkRXZlbnRMaXN0ZW5lcnMocGxheWVyMSwgcGxheWVyMikge1xuICAgIGNvbnN0IGJvYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lYm9hcmQucGxheWVyLTJgKTtcbiAgICBjb25zdCBncmlkMiA9IGJvYXJkMi5xdWVyeVNlbGVjdG9yKCcuaGl0LWdyaWQnKTtcbiAgICBjb25zdCBzcXVhcmVzMiA9IEFycmF5LmZyb20oZ3JpZDIucXVlcnlTZWxlY3RvckFsbCgnZGl2JykpO1xuXG4gICAgY29uc3QgYm9hcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVib2FyZC5wbGF5ZXItMWApO1xuICAgIGNvbnN0IGdyaWQxID0gYm9hcmQxLnF1ZXJ5U2VsZWN0b3IoJy5oaXQtZ3JpZCcpO1xuICAgIGNvbnN0IHNxdWFyZXMxID0gQXJyYXkuZnJvbShncmlkMS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKSk7XG4gICAgc3F1YXJlczIuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKCkgfHxcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgcGxheWVyMlxuICAgICAgICAgICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAuZ2V0SGl0Qm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChzaGlwKSA9PiBzaGlwKS5sZW5ndGggPlxuICAgICAgICAgICAgICAgIHBsYXllcjFcbiAgICAgICAgICAgICAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgLmdldEhpdEJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoc2hpcCkgPT4gc2hpcCkubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzcXVhcmUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRha2VUdXJuKHBsYXllcjEsIHBsYXllcjIsIHNxdWFyZXMyLCBzcXVhcmUpO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIyLmdldEJvYXJkKCkuYWxsU2hpcHNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgIGVuZEdhbWUocGxheWVyMSwgcGxheWVyMik7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFrZVR1cm4ocGxheWVyMiwgcGxheWVyMSwgc3F1YXJlczEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllcjEuZ2V0Qm9hcmQoKS5hbGxTaGlwc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRHYW1lKHBsYXllcjIsIHBsYXllcjEpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBlbmRHYW1lKHdpbm5lciwgbG9zZXIpIHtcbiAgICBjb25zb2xlLmxvZyhgJHt3aW5uZXIuZ2V0VHlwZSgpfSBzdW5rIGFsbCB0aGUgJHtsb3Nlci5nZXRUeXBlKCl9J3Mgc2hpcHNgKTtcbiAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZScpO1xuICAgIGlmICh3aW5uZXIuZ2V0VHlwZSgpID09PSAnaHVtYW4nKSB7XG4gICAgICAgIGRpYWxvZ3VlLnRleHRDb250ZW50ID0gYFRoZSBiYXR0bGUgaXMgd29uLiBBbGwgdGhlIGVuZW15IHNoaXBzIGFyZSBzdW5rYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaWFsb2d1ZS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAnVGhlIGJhdHRsZSBpcyBsb3N0LiBBbGwgb3VyIHNoaXBzIGhhdmUgYmVlbiBzdW5rJztcbiAgICB9XG5cbiAgICBjb25zdCBuZXdHYW1lQnRuID0gY3JlYXRlTmV3R2FtZUJ0bigpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3R2FtZUJ0bik7XG4gICAgbmV3R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jb250YWluZXInKSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobmV3R2FtZUJ0bik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGlhbG9ndWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVN0YXJ0aW5nUGFnZSgpKTtcbiAgICAgICAgbG9hZFNoaXBMaXN0ZW5lcnMoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgbG9hZEJvYXJkRXZlbnRMaXN0ZW5lcnMsIGxvYWRTdGFydEJ1dHRvbiB9O1xuIiwiLy9nYW1lYm9hcmRcblxuZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXNJbmRleChjb29yZGluYXRlcykge1xuICAgIHJldHVybiBOdW1iZXIoYCR7Y29vcmRpbmF0ZXNbMV19JHtjb29yZGluYXRlc1swXX1gKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZVBhaXIoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPCAxMCkge1xuICAgICAgICByZXR1cm4gW2luZGV4LCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4XG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAubWFwKChudW0pID0+IE51bWJlcihudW0pKTtcbn1cblxuZXhwb3J0IHsgZ2V0Q29vcmRpbmF0ZXNJbmRleCwgZ2V0Q29vcmRpbmF0ZVBhaXIgfTtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5mdW5jdGlvbiBQbGF5ZXIodHlwZSwgbnVtKSB7XG4gICAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHR5cGU7XG4gICAgY29uc3QgZ2V0TnVtID0gKCkgPT4gbnVtO1xuICAgIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcbiAgICByZXR1cm4geyBnZXRUeXBlLCBnZXRCb2FyZCwgZ2V0TnVtIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImZ1bmN0aW9uIFNoaXAobGVuZ3RoLCBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCcpIHtcbiAgICBsZXQgaGl0Q291bnQgPSAwO1xuXG4gICAgY29uc3QgZ2V0RGlyZWN0aW9uID0gKCkgPT4gZGlyZWN0aW9uO1xuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIGhpdENvdW50ICs9IDE7XG4gICAgfVxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdENvdW50ID09PSBsZW5ndGg7XG4gICAgY29uc3QgZ2V0SGl0Q291bnQgPSAoKSA9PiBoaXRDb3VudDtcbiAgICByZXR1cm4geyBnZXRMZW5ndGgsIGdldEhpdENvdW50LCBoaXQsIGlzU3VuaywgZ2V0RGlyZWN0aW9uIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgeyBnZXRDb29yZGluYXRlc0luZGV4LCBnZXRDb29yZGluYXRlUGFpciB9IGZyb20gJy4vbG9naWMvY29udmVyc2lvbnMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZFNtYXJ0QXR0YWNrKGhpdEJvYXJkLCBzaGlwQm9hcmQsIGZpbmRTaGlwKSB7XG4gICAgbGV0IGluZGV4ID0gdW5kZWZpbmVkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgaWYgKGhpdEJvYXJkW2ldID09PSAnSCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHNoaXBCb2FyZC5zb21lKChzaGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgc2hpcCAmJlxuICAgICAgICAgICAgICAgICAgICAhc2hpcC5pc1N1bmsoKSAmJlxuICAgICAgICAgICAgICAgICAgICBnZXRDb29yZGluYXRlQXJyKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q29vcmRpbmF0ZVBhaXIoc2hpcEJvYXJkLmluZGV4T2Yoc2hpcCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuZ2V0TGVuZ3RoKClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY29vcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRDb29yZGluYXRlc0luZGV4KGNvb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIGhpdEJvYXJkW2luZGV4ICsgMV0gPT09ICdIJyAmJlxuICAgICAgICAhZmluZFNoaXAoZ2V0Q29vcmRpbmF0ZVBhaXIoaW5kZXggKyAxKSkuaXNTdW5rKClcbiAgICApIHtcbiAgICAgICAgbGV0IGkgPSAxO1xuICAgICAgICBsZXQgZW1wdHk7XG4gICAgICAgIHdoaWxlIChoaXRCb2FyZFtpbmRleCArIGldID09PSAnSCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgIGlmIChmaW5kU2hpcChnZXRDb29yZGluYXRlUGFpcihpbmRleCArIGkpKS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGlmICghZmlsdGVyKGluZGV4LCBbaW5kZXggLSAxXSwgaGl0Qm9hcmQpWzBdKSBlbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gZmlsdGVyKGluZGV4LCBbaW5kZXggLSAxXSwgaGl0Qm9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbHRlcihpbmRleCwgW2luZGV4IC0gMSwgaW5kZXggKyBpXSwgaGl0Qm9hcmQpWzBdICYmICFlbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihpbmRleCwgW2luZGV4IC0gMSwgaW5kZXggKyBpXSwgaGl0Qm9hcmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgICAgaGl0Qm9hcmRbaW5kZXggKyAxMF0gPT09ICdIJyAmJlxuICAgICAgICAhZmluZFNoaXAoZ2V0Q29vcmRpbmF0ZVBhaXIoaW5kZXggKyAxMCkpLmlzU3VuaygpXG4gICAgKSB7XG4gICAgICAgIGxldCBlbXB0eTtcbiAgICAgICAgbGV0IGkgPSAxO1xuICAgICAgICB3aGlsZSAoaGl0Qm9hcmRbaW5kZXggKyBpICogMTBdID09PSAnSCcpIHtcbiAgICAgICAgICAgIGlmIChmaW5kU2hpcChnZXRDb29yZGluYXRlUGFpcihpbmRleCArIGkgKiAxMCkpLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXIoaW5kZXgsIFtpbmRleCAtIDEwXSwgaGl0Qm9hcmQpKSBlbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gZmlsdGVyKGluZGV4LCBbaW5kZXggLSAxMF0sIGhpdEJvYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGZpbHRlcihpbmRleCwgW2luZGV4IC0gMTAsIGluZGV4ICsgaSAqIDEwXSwgaGl0Qm9hcmQpWzBdICYmXG4gICAgICAgICAgICAhZW1wdHlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKGluZGV4LCBbaW5kZXggLSAxMCwgaW5kZXggKyBpICogMTBdLCBoaXRCb2FyZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcihcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIFtpbmRleCArIDEsIGluZGV4IC0gMSwgaW5kZXggKyAxMCwgaW5kZXggLSAxMF0sXG4gICAgICAgIGhpdEJvYXJkXG4gICAgKTtcbn1cblxuLy9tb3ZlIG91dCBvZiBoZXJlXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlQXJyKGNvb3IsIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gY29vclsxXTsgaSA8IGNvb3JbMV0gKyBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyLnB1c2goW2Nvb3JbMF0sIGldKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBjb29yWzBdOyBpIDwgY29vclswXSArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChbaSwgY29vclsxXV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihpbmRleCwgYXJyLCBoaXRCb2FyZCkge1xuICAgIHJldHVybiBhcnIuZmlsdGVyKChpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpID49IDAgJiZcbiAgICAgICAgICAgIGkgPCAxMDAgJiZcbiAgICAgICAgICAgICgoaSAlIDEwID4gaW5kZXggJSAxMCAmJlxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoaSAvIDEwKSA9PT0gTWF0aC5mbG9vcihpbmRleCAvIDEwKSkgfHxcbiAgICAgICAgICAgICAgICAoaSAlIDEwIDwgaW5kZXggJSAxMCAmJlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGkgLyAxMCkgPT09IE1hdGguZmxvb3IoaW5kZXggLyAxMCkpIHx8XG4gICAgICAgICAgICAgICAgaSAlIDEwID09PSBpbmRleCAlIDEwKSAmJlxuICAgICAgICAgICAgIWhpdEJvYXJkW2ldXG4gICAgICAgICk7XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiZmlzaCIsInNrdWxsIiwicmVkX3NrdWxsIiwiY3JlYXRlU2hpcEltZyIsImdldEdyaWRBcmVhIiwiZ2V0Q29vcmRpbmF0ZXMiLCJjcmVhdGVTdGFydGluZ1BhZ2UiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoZWFkZXIiLCJ0ZXh0Q29udGVudCIsInN1YkhlYWRlciIsImFwcGVuZENoaWxkIiwiY3JlYXRlQm9hcmQiLCJjcmVhdGVTaGlwQXJzZW5hbCIsImFyciIsInNoaXBBcnNlbmFsIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJudW0iLCJjcmVhdGVTdGFydEJ1dHRvbiIsInN0YXJ0QnV0dG9uIiwiYm9hcmQiLCJjcmVhdGVBeGlzIiwiY3JlYXRlU2hpcEdyaWQiLCJjcmVhdGVHcmlkIiwiZ3JpZCIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJzcGxpdCIsImVsZSIsImVsZUNvbnRhaW5lciIsImNyZWF0ZUhpdEdyaWQiLCJpIiwiY3JlYXRlQXR0YWNrIiwib3V0Y29tZSIsImltYWdlIiwic3JjIiwiY3JlYXRlU3VuayIsImNyZWF0ZU5ld0dhbWVCdG4iLCJuZXdHYW1lQnRuIiwiY3JlYXRlUGxheWVyU2hpcHMiLCJwbGF5ZXIiLCJnZXRCb2FyZCIsImdldFNoaXBCb2FyZCIsInNoaXAiLCJpbmRleCIsImluZGV4T2YiLCJnZXRMZW5ndGgiLCJnZXREaXJlY3Rpb24iLCJzdHlsZSIsImRpc3BsYXkiLCJjcmVhdGVEaWFsb2d1ZSIsImRyb3AiLCJlbmFibGVEcmFnQW5kRHJvcCIsInRhcmdldCIsInN0YXJ0aW5nWCIsInN0YXJ0aW5nWSIsInN0YXJ0aW5nTGVmdCIsInN0YXJ0aW5nVG9wIiwiZHJhZyIsImUiLCJnYW1lQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsInBvc2l0aW9uIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJlbmRNb3ZlIiwic2V0VGltZW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVBeGlzIiwibG9hZFN0YXJ0QnV0dG9uIiwiZ2V0Rmlyc3RTcXVhcmUiLCJnZXRTcXVhcmVzIiwiZmluZExlZnQiLCJmaW5kVG9wIiwic2hpcEdyaWQiLCJjb250YWlucyIsInJlbW92ZSIsInN0YXJ0Q29vciIsImNvb3JkaW5hdGVUYWtlbiIsImxlbmd0aCIsImRpcmVjdGlvbiIsInBsYWNlU2hpcCIsImlzUGxhY2VkQ29ycmVjdGx5QXQiLCJuZXdUYXJnZXQiLCJjbG9uZU5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJvbGRDb29yIiwicmVtb3ZlU2hpcCIsImZpcnN0Q2hpbGQiLCJiYXR0bGVzaGlwSCIsImNhcnJpZXJIIiwiZGVzdHJveWVySCIsInN1Ym1hcmluZUgiLCJiYXR0bGVzaGlwViIsImNhcnJpZXJWIiwiZGVzdHJveWVyViIsInN1Ym1hcmluZVYiLCJob3Jpem9udGFsU2hpcHMiLCJ2ZXJ0aWNhbFNoaXBzIiwibWVhc3VyZSIsImdyaWRTbG90V2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJNYXRoIiwicm91bmQiLCJlcnJvck1hcmdpbiIsIndpZHRoIiwiZmlsdGVyIiwic3F1YXJlIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb29yZGluYXRlIiwiZmxvb3IiLCJvZmZzZXRQYXJlbnQiLCJib2R5Iiwic2hpcEFycmF5Iiwic2V0QXR0cmlidXRlIiwiUGxheWVyIiwibG9hZEJvYXJkRXZlbnRMaXN0ZW5lcnMiLCJzdGFydEdhbWUiLCJwbGF5ZXIxIiwicGxheWVyMiIsInJlbmRlckJvYXJkIiwiZ2V0VHlwZSIsInBsYWNlU2hpcHNSYW5kb21seSIsImdldENvb3JkaW5hdGVzSW5kZXgiLCJnZXRDb29yZGluYXRlUGFpciIsInRha2VUdXJuIiwib3Bwb3NpbmciLCJzcXVhcmVzIiwiYXR0YWNrZWRTcXVhcmUiLCJhdHRhY2tBcnIiLCJnZXRTbWFydEF0dGFjayIsInJhbmRvbSIsImdldEF2YWlsYWJsZSIsImNvb3IiLCJyZWNlaXZlQXR0YWNrIiwiZ2V0SGl0Qm9hcmQiLCJmaW5kQXR0YWNrZWRTaGlwIiwiaXNTdW5rIiwic3RhcnQiLCJzaG93U3VuayIsImdldENvb3JkaW5hdGVBcnIiLCJ1cGRhdGVEaWFsb2d1ZSIsInNoaXBBcnIiLCJzaGlwTmFtZSIsImxldHRlciIsInNwb3QiLCJkaWFsb2d1ZSIsInN1YmplY3QiLCJvYmplY3QiLCJpbmRpY2VzIiwicHVzaCIsImNvb3JBcnIiLCJmaXJzdCIsInNoaXBzIiwiYXR0YWNrZWQiLCJmaW5kIiwiTnVtYmVyIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ0b2dnbGUiLCJ0b2dnbGVUYXJnZXQiLCJ0b2dnbGVPZmYiLCJpbmNsdWRlcyIsImlzSWxsZWdhbFRvZ2dsZSIsImNvbHVtblN0YXJ0IiwiY29sdW1uRW5kIiwicm93U3RhcnQiLCJyb3dFbmQiLCJTaGlwIiwiZmluZFNtYXJ0QXR0YWNrIiwiR2FtZWJvYXJkIiwic2hpcEJvYXJkIiwidW5kZWZpbmVkIiwiaGl0Qm9hcmQiLCJnZXRTaGlwQXQiLCJzdGFydGluZyIsImNvb3JkaW5hdGVzIiwic29tZSIsImhpdCIsImFkZEF0dGFjayIsInN0YXR1cyIsImFsbFNoaXBzU3VuayIsImV2ZXJ5Iiwic2hpcEluR3JpZCIsInNoaXBPdmVybGFwcGluZyIsInRhcmdldENvb3IiLCJwYWlyIiwibGVuZ3RocyIsInBsYWNlU2hpcFJhbmRvbWx5IiwiZ2V0QXZhaWxhYmxlSW5kaWNlcyIsImNvb3JMZW4iLCJsb2FkU2hpcExpc3RlbmVycyIsInN0YXJ0QnRuIiwiYm9hcmQyIiwiZ3JpZDIiLCJzcXVhcmVzMiIsImJvYXJkMSIsImdyaWQxIiwic3F1YXJlczEiLCJlbmRHYW1lIiwid2lubmVyIiwibG9zZXIiLCJ0b1N0cmluZyIsInJldmVyc2UiLCJtYXAiLCJ0eXBlIiwiZ2V0TnVtIiwiaGl0Q291bnQiLCJnZXRIaXRDb3VudCIsImZpbmRTaGlwIiwiZW1wdHkiXSwic291cmNlUm9vdCI6IiJ9