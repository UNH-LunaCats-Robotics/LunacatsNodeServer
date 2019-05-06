webpackHotUpdate("static\\development\\pages\\MainPage.js",{

/***/ "./components/Pixy.js":
/*!****************************!*\
  !*** ./components/Pixy.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pixy; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);












var Pixy =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Pixy, _React$Component);

  function Pixy(props, context) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Pixy);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Pixy).call(this, props, context));
    _this.state = {
      checked: false
    };
    _this.count = 0;
    _this.data = [];
    _this.boxes = [];
    _this.width = 0;
    _this.height = 0;
    _this.left = 0;
    _this.top = 0;
    _this.seq = -4;
    _this.whiteBox = [];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Pixy, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.interval = setInterval(() => this.render(), 750);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    } //This sends a json string with just a cmd specified to the robot

  }, {
    key: "sendCmd",
    value: function sendCmd() {
      var ip = "http://localhost:3000/getPixyData";
      return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()(ip).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        return data;
      });
    }
  }, {
    key: "pixyBoxInfo",
    value: function () {
      var _pixyBoxInfo = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var myJson, i;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sendCmd();

              case 2:
                myJson = _context.sent;
                //extract JSON from the http response
                //let myJson = JSON.parse('{"C": 3, "H1": 6, "H2": 4, "S2": 1, "H0": 39, "S0": 1, "X2": 291, "W2": 14, "W1": 14, "W0": 62, "Y1": 56, "Y0": 139, "X0": 283, "X1": 135, "S1": 1, "Y2": 112}');
                //let myJson = JSON.parse('{"C": 1, "H0": 39, "S0": 1, "W0": 62, "Y0": 139, "X0": 283}');
                myJson = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(myJson);
                console.log(myJson);
                this.count = myJson["C"];

                for (i = 0; i < this.count; i++) {
                  this.width = myJson["W" + i] / 320;
                  this.height = myJson["H" + i] / 200;
                  this.left = myJson["X" + i] / 320 - this.width / 2;
                  this.top = myJson["Y" + i] / 200 - this.height / 2;
                  this.data = [this.width, this.height, this.left, this.top];
                  this.boxes[i] = this.data;
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function pixyBoxInfo() {
        return _pixyBoxInfo.apply(this, arguments);
      }

      return pixyBoxInfo;
    }()
  }, {
    key: "render",
    value: function render() {
      this.pixyBoxInfo();
      console.log("rendering");
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1319842157" + " " + "pixyView"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("header", {
        id: "lunaHeader",
        className: "jsx-1319842157"
      }, "\u2022~\u2022~\u2022~\u2022~\u2022~\u2022~\u2022~\u2022~\u2022~ Pixy View ~\u2022~\u2022~\u2022~\u2022~\u2022~\u2022~\u2022~\u2022~\u2022"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "pixyViewBox",
        className: "jsx-1319842157"
      }, this.boxes.map(function (box, i) {
        console.log(box[i][0]);
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          style: {
            color: 'black',
            position: 'absolute',
            border: '1px solid black',
            backgroundColor: '#f4f4f4',
            zIndex: 99999999999999,
            width: box[0] * 100 + '%',
            height: box[1] * 100 + '%',
            left: box[2] * 100 + '%',
            top: box[3] * 100 + '%'
          },
          className: "jsx-1319842157"
        });
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1319842157"
      }, "html.jsx-1319842157,body.jsx-1319842157{margin:0;width:100%;height:100%;overflow-y:hidden;}#pixyView.jsx-1319842157{width:100%;float:center;height:25px;margin:0px;position:relative;}#lunaHeader.jsx-1319842157{color:rgb(206,206,206);width:100%;height:35px;background-color:#333333;font-size:25px;text-align:center;border-bottom:solid black 1px;box-shadow:0px 0px 5px #888888;}#pixyViewBox.jsx-1319842157{width:100%;height:315px;background:rgb(71,68,68);margin:0px;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3J5c3RcXERlc2t0b3BcXEx1bmNhdHNOb2RlXFxMdW5hY2F0c05vZGVTZXJ2ZXJcXHB1YmxpY1xcY29tcG9uZW50c1xcUGl4eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRXNCLEFBRzRCLEFBTUMsQUFPZSxBQVVmLFNBdEJDLEVBTUMsQUFpQkMsU0F0QkQsR0FZRCxDQU5DLEFBaUJlLFFBdEJULEVBWU4sRUFORCxVQU9jLENBTlAsRUFnQlAsQ0F0QmIsVUF1Qm9CLEtBaEJwQixNQU1pQixPQVdqQixRQVZvQixrQkFDWSw4QkFDQywrQkFDakMiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcnlzdFxcRGVza3RvcFxcTHVuY2F0c05vZGVcXEx1bmFjYXRzTm9kZVNlcnZlclxccHVibGljXFxjb21wb25lbnRzXFxQaXh5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGl4eSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xyXG4gICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgY2hlY2tlZDogZmFsc2VcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgICB0aGlzLmJveGVzID0gW107XHJcbiAgICAgIHRoaXMud2lkdGggPSAwO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IDA7XHJcbiAgICAgIHRoaXMubGVmdCA9IDA7XHJcbiAgICAgIHRoaXMudG9wID0gMDtcclxuICAgICAgdGhpcy5zZXEgPSAtNDtcclxuICAgICAgdGhpcy53aGl0ZUJveCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgIC8vIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnJlbmRlcigpLCA3NTApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy9UaGlzIHNlbmRzIGEganNvbiBzdHJpbmcgd2l0aCBqdXN0IGEgY21kIHNwZWNpZmllZCB0byB0aGUgcm9ib3RcclxuICAgIHNlbmRDbWQoKSB7XHJcbiAgICAgIGNvbnN0IGlwID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2V0UGl4eURhdGFcIjtcclxuICAgICAgcmV0dXJuICBmZXRjaChpcCkudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9KVxyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgYXN5bmMgcGl4eUJveEluZm8oKSB7XHJcbiAgICAgIC8vY29uc3QgZ2V0UGl4eUluZm9DbWQgPSA1O1xyXG4gICAgICBsZXQgbXlKc29uID0gYXdhaXQgdGhpcy5zZW5kQ21kKCk7IC8vZXh0cmFjdCBKU09OIGZyb20gdGhlIGh0dHAgcmVzcG9uc2VcclxuICAgICAgLy9sZXQgbXlKc29uID0gSlNPTi5wYXJzZSgne1wiQ1wiOiAzLCBcIkgxXCI6IDYsIFwiSDJcIjogNCwgXCJTMlwiOiAxLCBcIkgwXCI6IDM5LCBcIlMwXCI6IDEsIFwiWDJcIjogMjkxLCBcIlcyXCI6IDE0LCBcIlcxXCI6IDE0LCBcIlcwXCI6IDYyLCBcIlkxXCI6IDU2LCBcIlkwXCI6IDEzOSwgXCJYMFwiOiAyODMsIFwiWDFcIjogMTM1LCBcIlMxXCI6IDEsIFwiWTJcIjogMTEyfScpO1xyXG4gICAgICAvL2xldCBteUpzb24gPSBKU09OLnBhcnNlKCd7XCJDXCI6IDEsIFwiSDBcIjogMzksIFwiUzBcIjogMSwgXCJXMFwiOiA2MiwgXCJZMFwiOiAxMzksIFwiWDBcIjogMjgzfScpO1xyXG4gICAgICBteUpzb24gPSBKU09OLnN0cmluZ2lmeShteUpzb24pO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKG15SnNvbik7XHJcbiAgICAgIHRoaXMuY291bnQgPSBteUpzb25bXCJDXCJdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBteUpzb25bXCJXXCIgKyBpXSAvIDMyMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IG15SnNvbltcIkhcIiArIGldIC8gMjAwO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IG15SnNvbltcIlhcIiArIGldIC8gMzIwIC0gdGhpcy53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy50b3AgPSBteUpzb25bXCJZXCIgKyBpXSAvIDIwMCAtIHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgICAgICB0aGlzLmRhdGEgPSBbdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMubGVmdCwgdGhpcy50b3BdO1xyXG4gICAgICAgIHRoaXMuYm94ZXNbaV0gPSB0aGlzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgXHJcbiAgICAgIHRoaXMucGl4eUJveEluZm8oKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyaW5nXCIpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaXh5Vmlld1wiPlxyXG4gICAgICAgICAgPGhlYWRlciBpZD1cImx1bmFIZWFkZXJcIj7igKJ+4oCifuKAon7igKJ+4oCifuKAon7igKJ+4oCifuKAon4gUGl4eSBWaWV3IH7igKJ+4oCifuKAon7igKJ+4oCifuKAon7igKJ+4oCifuKAojwvaGVhZGVyPlxyXG4gICAgICAgICAgPGRpdiBpZD1cInBpeHlWaWV3Qm94XCI+e3RoaXMuYm94ZXMubWFwKChib3gsIGkpID0+IHtjb25zb2xlLmxvZyhib3hbaV1bMF0pO3JldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNGY0ZjQnLFxyXG4gICAgICAgICAgICAgIHpJbmRleDogOTk5OTk5OTk5OTk5OTksXHJcbiAgICAgICAgICAgICAgd2lkdGg6IGJveFswXSAqIDEwMCArICclJyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGJveFsxXSAqIDEwMCArICclJyxcclxuICAgICAgICAgICAgICBsZWZ0OiBib3hbMl0gKiAxMDAgKyAnJScsXHJcbiAgICAgICAgICAgICAgdG9wOiBib3hbM10gKiAxMDAgKyAnJScsfX0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBodG1sLCBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjcGl4eVZpZXcge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlOyBcclxuICAgICAgICAgICAgICAgICAgZmxvYXQ6Y2VudGVyOyBcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2x1bmFIZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjA2LCAyMDYsIDIwNik7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICM4ODg4ODg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjcGl4eVZpZXdCb3gge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNzEsIDY4LCA2OCk7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICApXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH0iXX0= */\n/*@ sourceURL=C:\\Users\\cryst\\Desktop\\LuncatsNode\\LunacatsNodeServer\\public\\components\\Pixy.js */"));
    }
  }]);

  return Pixy;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=MainPage.js.61baa8e8069a8a2718b0.hot-update.js.map