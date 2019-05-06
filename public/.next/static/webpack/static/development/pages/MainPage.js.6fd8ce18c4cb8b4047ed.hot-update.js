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
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.render();
      }, 750);
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
                //const getPixyInfoCmd = 5;
                // let myJsons = await this.sendCmd(); //extract JSON from the http response
                myJson = JSON.parse('{"C": 3, "H1": 6, "H2": 4, "S2": 1, "H0": 39, "S0": 1, "X2": 291, "W2": 14, "W1": 14, "W0": 62, "Y1": 56, "Y0": 139, "X0": 283, "X1": 135, "S1": 1, "Y2": 112}'); //let myJso/n = JSON.parse('{"C": 1, "H0": 39, "S0": 1, "W0": 62, "Y0": 139, "X0": 283}');

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

                console.log(this.boxes);

              case 6:
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
        console.log(box[0]);
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
      }, "html.jsx-1319842157,body.jsx-1319842157{margin:0;width:100%;height:100%;overflow-y:hidden;}#pixyView.jsx-1319842157{width:100%;float:center;height:25px;margin:0px;position:relative;}#lunaHeader.jsx-1319842157{color:rgb(206,206,206);width:100%;height:35px;background-color:#333333;font-size:25px;text-align:center;border-bottom:solid black 1px;box-shadow:0px 0px 5px #888888;}#pixyViewBox.jsx-1319842157{width:100%;height:315px;background:rgb(71,68,68);margin:0px;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3J5c3RcXERlc2t0b3BcXEx1bmNhdHNOb2RlXFxMdW5hY2F0c05vZGVTZXJ2ZXJcXHB1YmxpY1xcY29tcG9uZW50c1xcUGl4eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRnNCLEFBRzRCLEFBTUMsQUFPZSxBQVVmLFNBdEJDLEVBTUMsQUFpQkMsU0F0QkQsR0FZRCxDQU5DLEFBaUJlLFFBdEJULEVBWU4sRUFORCxVQU9jLENBTlAsRUFnQlAsQ0F0QmIsVUF1Qm9CLEtBaEJwQixNQU1pQixPQVdqQixRQVZvQixrQkFDWSw4QkFDQywrQkFDakMiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcnlzdFxcRGVza3RvcFxcTHVuY2F0c05vZGVcXEx1bmFjYXRzTm9kZVNlcnZlclxccHVibGljXFxjb21wb25lbnRzXFxQaXh5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGl4eSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xyXG4gICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XHJcbiAgXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgY2hlY2tlZDogZmFsc2VcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgICB0aGlzLmJveGVzID0gW107XHJcbiAgICAgIHRoaXMud2lkdGggPSAwO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IDA7XHJcbiAgICAgIHRoaXMubGVmdCA9IDA7XHJcbiAgICAgIHRoaXMudG9wID0gMDtcclxuICAgICAgdGhpcy5zZXEgPSAtNDtcclxuICAgICAgdGhpcy53aGl0ZUJveCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5yZW5kZXIoKSwgNzUwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vVGhpcyBzZW5kcyBhIGpzb24gc3RyaW5nIHdpdGgganVzdCBhIGNtZCBzcGVjaWZpZWQgdG8gdGhlIHJvYm90XHJcbiAgICBzZW5kQ21kKCkge1xyXG4gICAgICBjb25zdCBpcCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2dldFBpeHlEYXRhXCI7XHJcbiAgICAgIHJldHVybiAgZmV0Y2goaXApLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSlcclxuICBcclxuICAgIH1cclxuICBcclxuICAgIGFzeW5jIHBpeHlCb3hJbmZvKCkge1xyXG4gICAgICAvL2NvbnN0IGdldFBpeHlJbmZvQ21kID0gNTtcclxuICAgICAgLy8gbGV0IG15SnNvbnMgPSBhd2FpdCB0aGlzLnNlbmRDbWQoKTsgLy9leHRyYWN0IEpTT04gZnJvbSB0aGUgaHR0cCByZXNwb25zZVxyXG4gICAgICBsZXQgbXlKc29uID0gSlNPTi5wYXJzZSgne1wiQ1wiOiAzLCBcIkgxXCI6IDYsIFwiSDJcIjogNCwgXCJTMlwiOiAxLCBcIkgwXCI6IDM5LCBcIlMwXCI6IDEsIFwiWDJcIjogMjkxLCBcIlcyXCI6IDE0LCBcIlcxXCI6IDE0LCBcIlcwXCI6IDYyLCBcIlkxXCI6IDU2LCBcIlkwXCI6IDEzOSwgXCJYMFwiOiAyODMsIFwiWDFcIjogMTM1LCBcIlMxXCI6IDEsIFwiWTJcIjogMTEyfScpO1xyXG4gICAgICAvL2xldCBteUpzby9uID0gSlNPTi5wYXJzZSgne1wiQ1wiOiAxLCBcIkgwXCI6IDM5LCBcIlMwXCI6IDEsIFwiVzBcIjogNjIsIFwiWTBcIjogMTM5LCBcIlgwXCI6IDI4M30nKTtcclxuICAgICAgbXlKc29uID0gSlNPTi5zdHJpbmdpZnkobXlKc29uKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhteUpzb24pO1xyXG4gICAgICB0aGlzLmNvdW50ID0gbXlKc29uW1wiQ1wiXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gbXlKc29uW1wiV1wiICsgaV0gLyAzMjA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBteUpzb25bXCJIXCIgKyBpXSAvIDIwMDtcclxuICAgICAgICB0aGlzLmxlZnQgPSBteUpzb25bXCJYXCIgKyBpXSAvIDMyMCAtIHRoaXMud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMudG9wID0gbXlKc29uW1wiWVwiICsgaV0gLyAyMDAgLSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gW3RoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmxlZnQsIHRoaXMudG9wXTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJveGVzW2ldID0gdGhpcy5kYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYm94ZXMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBcclxuICAgICAgdGhpcy5waXh5Qm94SW5mbygpO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coXCJyZW5kZXJpbmdcIik7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpeHlWaWV3XCI+XHJcbiAgICAgICAgICA8aGVhZGVyIGlkPVwibHVuYUhlYWRlclwiPuKAon7igKJ+4oCifuKAon7igKJ+4oCifuKAon7igKJ+4oCifiBQaXh5IFZpZXcgfuKAon7igKJ+4oCifuKAon7igKJ+4oCifuKAon7igKJ+4oCiPC9oZWFkZXI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicGl4eVZpZXdCb3hcIj57dGhpcy5ib3hlcy5tYXAoKGJveCwgaSkgPT4ge2NvbnNvbGUubG9nKGJveFswXSk7cmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y0ZjRmNCcsXHJcbiAgICAgICAgICAgICAgekluZGV4OiA5OTk5OTk5OTk5OTk5OSxcclxuICAgICAgICAgICAgICB3aWR0aDogYm94WzBdICogMTAwICsgJyUnLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogYm94WzFdICogMTAwICsgJyUnLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IGJveFsyXSAqIDEwMCArICclJyxcclxuICAgICAgICAgICAgICB0b3A6IGJveFszXSAqIDEwMCArICclJyx9fT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNwaXh5VmlldyB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7IFxyXG4gICAgICAgICAgICAgICAgICBmbG9hdDpjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbHVuYUhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyMDYsIDIwNiwgMjA2KTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIDFweDtcclxuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzg4ODg4ODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNwaXh5Vmlld0JveCB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig3MSwgNjgsIDY4KTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIClcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfSJdfQ== */\n/*@ sourceURL=C:\\Users\\cryst\\Desktop\\LuncatsNode\\LunacatsNodeServer\\public\\components\\Pixy.js */"));
    }
  }]);

  return Pixy;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=MainPage.js.6fd8ce18c4cb8b4047ed.hot-update.js.map