//Ip address that the program connects to
const ip = "http://10.0.10.10:5000"

let prog = React.createClass(
  //Commands and the numbers they're represented as
  const forwardCmd = 0;
  const leftCmd = 2;
  const rightCmd = 3;
  const stopCmd = 4;
  const getPixyInfoCmd = 5;
  const getLidarInfoCmd = 6;

  //TO DO: Implement these on raspberry Pi
  const startAutoCmd    = 7;
  const stopAutoCmd     = 8;



  //Standard power assigned to each motor
  const buttonPower = -10;


  //This sends the json to the raspberry pi and gets a response
  async function sendJson(json){
    console.log("Sent:\t"+json);
    const response = fetch(json, {mode: 'cors'});
    console.log("Got:\t"+response);
    return response;
  }

  //This sends a json string with just a cmd specified to the robot
  function sendCmd(cmd) {
    return sendJson(ip+"/cmd/{'c':"+cmd+"}");
  }

  //This sets up the pixy view
  setInterval( loadPixy = async () => {

      const response = await sendCmd(getPixyInfoCmd);

      const myJson = response.json(); //extract JSON from the http response

      console.log("Got:"+myJson);
      const count = myJson["C"];

      const pixyView = document.getElementById('pixyViewBox');

      pixyView.innerHTML = '';

      for(i = 0; i < count; i++) {
          const width  = myJson["W"+i]/320;
          const height = myJson["H"+i]/200;

          const x = myJson["X"+i]/320 - width/2;
          const y = myJson["Y"+i]/200 - height/2;

          const box = document.createElement("DIV");
          box.setAttribute("class","pixyImg");

          // <div id = "sig 1" class="pixyImg" style="width: 50px; height: 50px;"></div>
          box.setAttribute("style",
              "width: "+width*100+"%;" +
              " height: "+height*100+"%;" +
              " left:"+x*100+"%;" +
              " top:"+y*100+"%;");

          box.innerHTML = myJson["S"+i];

          pixyView.appendChild(box);
      }

  },5000);

  //This gets the lidar distance from the robot
  const loadLidar = async () => {
      const response = await sendCmd(getLidarInfoCmd);
      const myJson = await response.json(); //extract JSON from the http response

      const dist = myJson["L"];

      document.getElementById("lidarDistance").setAttribute("value",dist);

  }



);

var Lidars = React.createClass({
  //This sends the json to the raspberry pi and gets a response
  async function sendJson(json){
    console.log("Sent:\t"+json);
    const response = fetch(json, {mode: 'cors'});
    console.log("Got:\t"+response);
    return response;
  }

  //This sends a json string with just a cmd specified to the robot
  function sendCmd(cmd) {
    return sendJson(ip+"/cmd/{'c':"+cmd+"}");
  }
  //This gets the lidar distance from the robot
  const loadLidar = async () => {
      const response = await sendCmd(getLidarInfoCmd);
      const myJson = await response.json(); //extract JSON from the http response

      const dist = myJson["L"];

      document.getElementById("lidarDistance").setAttribute("value",dist);
})

var LunaWebPage = React.createClass({
  displayName: 'LunaWebPage',

  render: function() {
    return React.DOM.div({className:'lunaWeb'},
      JQueryMobilePage({id:'main'}, MainPage(null)), //ADJUST, make main
      JQueryMobilePage({id:'popup', headerTheme:'b'}, Popup(null))
    );
  }
})
LunaWebPage = React.createFactory(LunaWebPage);

var MainPage = React.createClass({
  displayName: 'MainPage',

  render: function() {
    return React.DOM.div({'prog'})
  }
})

MainPage = React.createFactory(MainPage);

/** jQuery Mobile button component. */
var JQueryButton = React.createClass({
  displayName: 'JQueryButton',

  getDefaultProps: function() {
    return {className:'ui-btn ui-shadow ui-corner-all'}; //ENTRANCE EFFECT?
  },

  render: function() {
    return React.DOM.p(null,
      React.DOM.a(this.props, this.props.children)
    );
  }
});
JQueryButton = React.createFactory(JQueryButton);

//Start of popup code.
var Popup = React.createClass({
  displayName: 'Popup',
  render: function() {
    return React.DOM.div(null,
      React.DOM.hs(null, 'Unable To Connect to Raspberry Pi!'),
      React.DOM.p(null, 'Something went wrong when trying to connect to Raspberry Pi.'),
      JQueryButton({href:'#main'}, 'Try again.')
    );
  }
});
Popup = React.createFactory(Popup);

//end of popup code.
