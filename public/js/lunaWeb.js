/**
 * jQuery Mobile React Example
/* global document, React */

'use strict';

var Lidar = React.createClass({
  //This sends the json to the raspberry pi and gets a response
  sendJson: async function (json) {
    console.log("Sent:\t" + json);
    try {
      const response = fetch(json, {
        mode: 'cors'
      });
      console.log("Got:\t" + response);
      return response;
    } catch {
      window.location.replace.href = 'popup';
    }
  },

  //This sends a json string with just a cmd specified to the robot
  sendCmd: function (cmd) {
    const ip = "http://localhost:3000";
    return this.sendJson(ip + "/cmd/{'c':" + cmd + "}");
  },

  //This gets the lidar distance from the robot
  loadLidar: async function () {
    // const getLidarInfoCmd = 6;
    // const response = await this.sendCmd(getLidarInfoCmd);
    // const myJson = await response.json(); //extract JSON from the http response

    // const dist = myJson["L"];

    // document.getElementById("lidarDistance").setAttribute("value", dist);
  },

  render: function () {
    this.loadLidar();
    return React.createElement("div", {
      id: "map"
    },
      React.createElement("header", {
        id: "lunaHeader"
      }, "•~•~•~•~•~•~•~•~•~ Lidars ~•~•~•~•~•~•~•~•~•"),
      React.createElement("p", {
        id: "lidarHeader"
      }, "•~•~ Front Left ~•~•"),
      React.createElement("progress", {
        value: "0",
        max: "45",
        id: "lidarDistance"
      }, " "),
      React.createElement("p", {
        id: "lidarHeader"
      }, "•~•~ Front Right ~•~•"),
      React.createElement("progress", {
        value: "0",
        max: "45",
        id: "lidarDistance"
      }, " "),
      React.createElement("p", {
        id: "lidarHeader"
      }, "•~•~ Back Left ~•~•"),
      React.createElement("progress", {
        value: "0",
        max: "45",
        id: "lidarDistance"
      }, " "),
      React.createElement("p", {
        id: "lidarHeader"
      }, "•~•~ Back Right ~•~•"),
      React.createElement("progress", {
        value: "0",
        max: "45",
        id: "lidarDistance"
      }, " "));
  }


})
setInterval(Lidar.loadLidar, 500);
Lidar = React.createFactory(Lidar);


class PixyImgBox extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.state = {
      checked: false
    };
    this.count = 0;
    this.data = [];
    this.boxes = [];
    this.width = 0;
    this.height = 0;
    this.left = 0;
    this.top = 0;
    this.seq = -4;
    this.whiteBox = [];
  }

  

  //This sends a json string with just a cmd specified to the robot
  sendCmd() {
    const ip = "http://localhost:3000/getPixyData";
    return  fetch(ip).then((resp) => resp.json()).then(function(data) {
      return data;
    })

  }

  async pixyBoxInfo() {
    const getPixyInfoCmd = 5;
    let myJson = await this.sendCmd(); //extract JSON from the http response
    console.log(JSON.stringify(myJson))
    // let myJson = JSON.parse('{"C": 3, "H1": 6, "H2": 4, "S2": 1, "H0": 39, "S0": 1, "X2": 291, "W2": 14, "W1": 14, "W0": 62, "Y1": 56, "Y0": 139, "X0": 283, "X1": 135, "S1": 1, "Y2": 112}');
    //let myJson = JSON.parse('{"C": 1, "H0": 39, "S0": 1, "W0": 62, "Y0": 139, "X0": 283}');

    this.count = myJson["C"];
    console.log(this.count);
    for (let i = 0; i < this.count; i++) {
      this.width = myJson["W" + i] / 320;
      this.height = myJson["H" + i] / 200;
      this.left = myJson["X" + i] / 320 - this.width / 2;
      this.top = myJson["Y" + i] / 200 - this.height / 2;
      this.data = [this.width, this.height, this.left, this.top];
      this.boxes[i] = this.data;
    }
  }

  boxArray() {
    this.pixyBoxInfo()
    for (var i = 0; i < this.boxes.length; i++) {
      this.whiteBox[i] = React.createElement('div', {
        id: 'pixyImg',
        style: {
          width: this.boxes[i][0] * 100 + '%',
          height: this.boxes[i][1] * 100 + '%',
          left: this.boxes[i][2] * 100 + '%',
          top: this.boxes[i][3] * 100 + '%',
        }
      })
    }
    console.log("WWW" + this.whiteBox.length);
  }

  render() {
    this.pixyBoxInfo();
    return React.createElement("div", {
      id: "pixyViewBox"
    }, this.boxes.map((box, i) => {return React.createElement('div', { id: 'pixyImg', style: {
      id: i,
      key: i,
      width: box[0] * 100 + '%',
      height: box[1] * 100 + '%',
      left: box[2] * 100 + '%',
      top: box[3] * 100 + '%',
    }})}))


    // return "<h1>Hello, {this.props.name}</h1>";
  }

}
//PixyImgBox = React.createElement(PixyImgBox);

var Pixy = React.createClass({

  //This sends the json to the raspberry pi and gets a response
  async sendJson(json) {
    console.log("Sent:\t" + json);
    try {
      const response = fetch(json, {
        mode: 'cors'
      });

      console.log("Got:\t" + response);
      return response;
    } catch {
      window.location.href = '#popup';
    }
  },

  //This sends a json string with just a cmd specified to the robot
  sendCmd(cmd) {
    const ip = "http://localhost:3000/getPixyData";
    return this.sendJson(ip);
  },

  render() {
    return React.createElement("div", {
      id: "pixyView"
    }, React.createElement("header", {
      id: "lunaHeader"
    }, "•~•~•~•~•~•~•~•~•~ Pixy View ~•~•~•~•~•~•~•~•~•"), React.createElement("div", {
      id: "pixyViewBox"
    }, React.createElement(PixyImgBox)));
  }
})
Pixy = React.createFactory(Pixy);


// Pixy = React.createElement(Pixy);
// setInterval(Pixy.loadPixy, 500);

/** Main application component. */
var LunaWeb = React.createClass({
  displayName: 'LunaWeb',

  render: function () {
    return React.DOM.div(null, JQueryMobilePage({
      role: 'main',
      className: 'lunaWeb'
    }, MainImage(null)),
      JQueryMobilePage({
        id: 'one'
      }, MainPage(null))
    )
  },

});

LunaWeb = React.createFactory(LunaWeb);

/** jQuery Mobile button component. */
var JQueryMobileButton = React.createClass({
  displayName: 'JQueryMobileButton',

  getDefaultProps: function () {
    return {
      className: 'ui-btn ui-shadow ui-corner-all'
    };
  },

  render: function () {
    return React.DOM.p(null,
      React.DOM.a(this.props, this.props.children)
    );
  }
});
JQueryMobileButton = React.createFactory(JQueryMobileButton);

/** jQuery Mobile page content component. */
var JQueryMobileContent = React.createClass({
  displayName: 'JQueryMobileContent',

  render: function () {
    return React.DOM.div({
      role: 'main',
      className: 'ui-content'
    },
      this.props.children
    );
  }
});
JQueryMobileContent = React.createFactory(JQueryMobileContent);


var JQueryMobileHeader = React.createClass({
  displayName: 'JQueryMobileHeader',

  render: function () {
    return React.DOM.div({
      'data-role': 'header',
      'data-theme': this.props.headerTheme
    },
      React.DOM.h1(null, this.props.title)
    );
  }
});
JQueryMobileHeader = React.createFactory(JQueryMobileHeader);

/** jQuery Mobile page component. */
var JQueryMobilePage = React.createClass({
  displayName: 'JQueryMobilePage',

  getDefaultProps: function () {
    return {
      'data-role': 'page',
      'data-theme': 'a',
      headerTheme: 'a'
    };
  },

  render: function () {
    var props = {};
    for (var key in this.props) {
      props[key] = this.props[key];
    }
    return React.DOM.div(props,
      JQueryMobileContent(null, this.props.children)
    );
  }
});
JQueryMobilePage = React.createFactory(JQueryMobilePage);

/** Application page one component. */
var MainImage = React.createClass({
  displayName: 'MainImage',

  componentDidMount: function () {
    this.timeoutHandle = setTimeout(() => {
      window.location.href = '#one';
    }, 1500);
  },

  componentWillUnmount: function () {
    clearTimeout(this.timeoutHandle);
  },

  render: function () {
    return React.createElement("lunaWeb", {
      id: "lunaWeb"
    }, "");
  }
});

MainImage = React.createFactory(MainImage);


/** Application page one component. */
var MainPage = React.createClass({
  displayName: 'MainPage',


  render: function () {

    return React.DOM.div(null,
      React.createElement("header", {
        id: "pageHeader"
      }, "•~•~•~•~•~•~•~•~•~ Lunacats ~•~•~•~•~•~•~•~•~•"),
      Pixy(),
      Lidar()

    );

  }
});
MainPage = React.createFactory(MainPage);


// /** Application popup page component. */
// var PopUp = React.createClass({
//   displayName: 'PopUp',

//   render: function () {
//     return React.DOM.div(null,
//       React.createElement("div", { id: 'popup' },
//         React.createElement("div", { id: 'popup_inner' },
//           React.createElement("div", { id: 'popup_Font' }, 'Problem Connecting! \n'),
//           React.createElement("div", { id: 'popup_Inner_Font' }, 'Unable to connect to ',
//             React.DOM.code(null, 'Raspberry Pi')))),
//       JQueryMobileButton({
//         href: '#one',
//         'data-rel': 'back',
//         className: 'ui-btn ui-shadow ui-corner-all ui-icon-back ui-btn-icon-left'
//       }, 'Try again.')

//     );
//   }
// });
// PopUp = React.createFactory(PopUp);

