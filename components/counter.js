import React, { Component } from 'react';

//This sends the json to the raspberry pi and gets a response
async function sendJson(json){
  console.log("Sent:\t"+json);
  const response = fetch(json, {mode: 'cors'}); //TRYBLOCK
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


export default class pixyView extends Component {
  //state is a react property that includes any data that this component needs (NEED FOR LIDARS???)
//min 37 on tutorial
//{} to render components dinamically
  state = {
    pixy: loadPixy()
  }
  render() {
    return React.createElement("span", {
      id: "pixyView"
    }, React.createElement("header", null, " Pixy View "), React.createElement("div", {
      width: "100%",
      height: "90%",
      id: "pixyViewBox"
    }));
  }
}



const loadLidar = async () => {
  const response = await sendCmd(getLidarInfoCmd);
  const myJson = await response.json(); //extract JSON from the http response
  const dist = myJson["L"];
  document.getElementById("lidarDistance").setAttribute("value",dist);
}


export default class FrontLeftLidar extends Component {
  state = {
    lidarInfo: loadLidar()
  }
  render() {
    return React.createElement("div", {
      id: "map"
    }, React.createElement("header", null, " Lidar "), React.createElement("p", {
      style: "margin: 0; color: black;"
    }, " Front Left Wheel "), React.createElement("progress", {
      value: "0",
      max: "7",
      id: "lidarDistance",
      style: "width: 100%;"
    }, " "), React.createElement("p", {
      style: "margin: 0; color: black;"
    }, " Front Right Wheel "), React.createElement("progress", {
      value: "0",
      max: "7",
      id: "lidarDistance",
      style: "width: 100%;"
    }, " "), React.createElement("p", {
      style: "margin: 0; color: black;"
    }, " Back Left Wheel "), React.createElement("progress", {
      value: "0",
      max: "7",
      id: "lidarDistance",
      style: "width: 100%;"
    }, " "), React.createElement("p", {
      style: "margin: 0; color: black;"
    }, " Back Right Wheel "), React.createElement("progress", {
      value: "0",
      max: "7",
      id: "lidarDistance",
      style: "width: 100%;"
    }, " "));
  }
}
//export default PixyBox;
