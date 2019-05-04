import React from 'react'
export default class Lidar extends React.Component{
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
        window.location.replace.href = 'popup';
      }
    };
  
    //This sends a json string with just a cmd specified to the robot
    async sendCmd(cmd) {
      const ip = "http://localhost:3000/getLidarData";
      return this.sendJson(ip + "/cmd/{'c':" + cmd + "}");
    };
  
    //This gets the lidar distance from the robot
    async loadLidar() {
      // const getLidarInfoCmd = 6;
      // const response = await this.sendCmd(getLidarInfoCmd);
      // const myJson = await response.json(); //extract JSON from the http response
  
      // const dist = myJson["L"];
  
      // document.getElementById("lidarDistance").setAttribute("value", dist);
    };
  
    render() {
      this.loadLidar();
      return (
        <div>
          <div id="map">
            <header id="lunaHeader">•~•~•~•~•~•~•~•~•~ Lidars ~•~•~•~•~•~•~•~•~•</header>
            <p id="lidarHeader">•~•~ Front Left ~•~•</p>
            <progress value="0" max="45" id="lidarDistance"></progress>
            <p id="lidarHeader">•~•~ Front Right ~•~•</p>
            <progress value="0" max="45" id="lidarDistance"></progress>
            <p id="lidarHeader">•~•~ Back Left ~•~•</p>
            <progress value="0" max="45" id="lidarDistance"></progress>
            <p id="lidarHeader">•~•~ Back Right ~•~•</p>
            <progress value="0" max="45" id="lidarDistance"></progress>
          </div>
          <style jsx>{`
            html, body {
              margin: 0;
              width: 100%;
              height: 100%;
              overflow-y: hidden;
            }
            #map {
              width: 100%;
              height: 50%;
            }
            #lunaHeader{
              color: rgb(206, 206, 206);
              width: 100%;
              height: 35px;
              background-color: #333333;
              font-size: 25px;
              text-align: center;
              border-bottom: solid black 1px;
              box-shadow: 0px 0px 5px #888888;
            }
            #lidarHeader{
              color: rgb(245, 241, 241);
              width: 85%;
              height:20px;
              background-color: #696969;
              font-size: 15px;
              text-align: left;
              border-bottom: solid black 1px;
              box-shadow: 0px 0px 5px #888888;
              padding-left: 1%;
            }
            #lidarDistance {
              width: 85%;
              height: 10%;
            }
          `}</style>
        </div>
      )
    }
  
  
  }