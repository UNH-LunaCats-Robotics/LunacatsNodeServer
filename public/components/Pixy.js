import React from 'react'
export default class Pixy extends React.Component {
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
      //const getPixyInfoCmd = 5;
      //let myJson = await this.sendCmd(); //extract JSON from the http response
      //console.log(JSON.stringify(myJson))
      let myJson = JSON.parse('{"C": 3, "H1": 6, "H2": 4, "S2": 1, "H0": 39, "S0": 1, "X2": 291, "W2": 14, "W1": 14, "W0": 62, "Y1": 56, "Y0": 139, "X0": 283, "X1": 135, "S1": 1, "Y2": 112}');
      //let myJson = JSON.parse('{"C": 1, "H0": 39, "S0": 1, "W0": 62, "Y0": 139, "X0": 283}');
  
      this.count = myJson["C"];
      for (let i = 0; i < this.count; i++) {
        this.width = myJson["W" + i] / 320;
        this.height = myJson["H" + i] / 200;
        this.left = myJson["X" + i] / 320 - this.width / 2;
        this.top = myJson["Y" + i] / 200 - this.height / 2;
        this.data = [this.width, this.height, this.left, this.top];
        this.boxes[i] = this.data;
      }
    }
  
    render() {
      this.pixyBoxInfo();
      return (
        <div className="pixyView">
          <header id="lunaHeader">•~•~•~•~•~•~•~•~•~ Pixy View ~•~•~•~•~•~•~•~•~•</header>
          <div id="pixyViewBox">{this.boxes.map((box, i) => {return (
            <div style={{color: 'black',
              position: 'absolute',
              border: '1px solid black',
              backgroundColor: '#f4f4f4',
              zIndex: 99999999999999,
              width: box[0] * 100 + '%',
              height: box[1] * 100 + '%',
              left: box[2] * 100 + '%',
              top: box[3] * 100 + '%',}}>
            </div>
          )})}
          </div>
          <style jsx>{`
                html, body {
                  margin: 0;
                  width: 100%;
                  height: 100%;
                  overflow-y: hidden;
                }
                #pixyView {
                  width:100%; 
                  float:center; 
                  height: 25px;
                  margin: 0px;
                  position: relative;
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
                #pixyViewBox {
                  width:100%; 
                  height: 315px;
                  background: rgb(71, 68, 68);
                  margin: 0px;
                  position: relative;
                }
              `}</style>
        </div>
        
      )
    }
  }