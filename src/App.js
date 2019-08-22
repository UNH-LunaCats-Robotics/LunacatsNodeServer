import React from 'react';
import './App.scss';

import DirectionAimer from './widgets/Compass/Compass'
import CircleBackground from './widgets/CircleBackground/CircleBackground'
import Card from './widgets/Card/Card'

class App extends React.Component {

  constructor(props) { 
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    
  }

  state = {
    angle: 0
  }

  handleMouseMove(evt) {
    const { screenX, screenY } = evt;
    var x =  (screenX  + (window.innerWidth)/2  );
    var y =  (screenY  - ( window.innerHeight)/2) * -1;

    var angle = Math.atan(x/y) * (180/Math.PI) ;
    if(y < 0) {
      angle = angle + 180;
    }

    console.log(x + "," + y + "," + angle)

    this.setState({angle: angle})
  }

  render() {
    return (
      <div className="App" >
      <CircleBackground/>
        <header className="App-header" onMouseMove= {evt =>{this.handleMouseMove(evt)}}>

          <Card>
            Robot Control Panel
          </Card>
          <DirectionAimer angle = {this.state.angle}/>

          
        </header>
      </div>
    )
  }
  
}

export default App;
