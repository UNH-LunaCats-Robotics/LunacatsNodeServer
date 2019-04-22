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
      }, "•~•~ Front ~•~•"),
      React.createElement("progress", {
        value: "0",
        max: "45",
        id: "lidarDistance"
      }, " "),
      React.createElement("p", {
        id: "lidarHeader"
      }, "•~•~ Back ~•~•"),
      React.createElement("progress", {
        value: "0",
        max: "45",
        id: "lidarDistance"
      }, " "), );
  }


})
setInterval(Lidar.loadLidar, 500);
Lidar = React.createFactory(Lidar);


var PixyImgBox = React.createClass({
  render: function() {
    return React.createElement("div",{
      className: "pixyImg",
      width: "100px",
      height: "100px",
    })
    // return React.createElement("header", {
    //   id: "lunaHeader"
    // })
  }

})

var Pixy = React.createClass({

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
      window.location.href = '#popup';
    }
  },

  //This sends a json string with just a cmd specified to the robot
  sendCmd: function (cmd) {
    const ip = "http://localhost:3000/getPixyData";
    return this.sendJson(ip);
  },

  
  //This sets up the pixy view
  loadPixy: async function () {

    const getPixyInfoCmd = 5;
    const response = await this.sendCmd(getPixyInfoCmd);
    // let myJson = response.json(); //extract JSON from the http response
    let myJson = JSON.parse('{"C": 3, "H1": 6, "H2": 4, "S2": 1, "H0": 39, "S0": 1, "X2": 291, "W2": 14, "W1": 14, "W0": 62, "Y1": 56, "Y0": 139, "X0": 283, "X1": 135, "S1": 1, "Y2": 112}');
    console.log("Got Json:" + myJson);
    const count = myJson["C"];
    console.log(myJson);

    const pixyView = React.createElement("div", {
      id: "pixyViewBox"
    });


    for (let i = 0; i < count; i++) {
      const width = myJson["W" + i] / 320;
      const height = myJson["H" + i] / 200;

      const x = myJson["X" + i] / 320 - width / 2;
      const y = myJson["Y" + i] / 200 - height / 2;
      console.log(x);


      const box = React.createElement("div", {
        id: "box"
      });

      // box.setAttribute("class", "pixyImg");

      // box.setAttribute("style",
      //   "width: " + width * 100 + "%;" +
      //   " height: " + height * 100 + "%;" +
      //   " left:" + x * 100 + "%;" +
      //   " top:" + y * 100 + "%;");

      // box.innerHTML = myJson["S" + i];


      // React.createElement(box);
    }
  },

  render: function () {
    this.loadPixy();
    return React.createElement("div", {
      id: "pixyView"
    }, React.createElement("header", {
      id: "lunaHeader"
    }, "•~•~•~•~•~•~•~•~•~ Pixy View ~•~•~•~•~•~•~•~•~•"), React.createElement("div", {
      id: "pixyViewBox"
    }, React.createElement(PixyImgBox)));

    // return "<h1>Hello, {this.props.name}</h1>";
  }
})



Pixy = React.createElement(Pixy);
setInterval(Pixy.loadPixy, 500);

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
      }, MainPage(null)),
      JQueryMobilePage({
        id: 'popup',
        headerTheme: 'b'
      }, PopUp(null))
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
      Pixy,
      Lidar()

    );

  }
});
MainPage = React.createFactory(MainPage);


/** Application popup page component. */
var PopUp = React.createClass({
  displayName: 'PopUp',

  render: function () {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Problem Connecting!'),
      React.DOM.p(null, 'Unable to connect to ',
        React.DOM.code(null, 'Raspberry Pi')),
      JQueryMobileButton({
        href: '#one',
        'data-rel': 'back',
        className: 'ui-btn ui-shadow ui-corner-all ui-btn-inline ui-icon-back ui-btn-icon-left'
      }, 'Try again.')

    );
  }
});
PopUp = React.createFactory(PopUp);


// Render application.
ReactDOM.render(LunaWeb(null), document.getElementById('content'));