import React from 'react';
import './App.scss';
import Gamepad from 'react-gamepad'
import { subscribeToTimer } from './api';

class App extends React.Component {
  state = {
    top: 0,
    left: 0,
    timestamp: 'no timestamp yet'
  }

  moveBox(event) {
    const increment = 25;

    console.log(event.keyCode);
    if (event.keyCode === 87) { //w
      this.setState({ top: this.state.top - increment })
    }
    if (event.keyCode === 65) { //a
      this.setState({ left: this.state.left - increment })
    }
    if (event.keyCode === 83) { //s
      this.setState({ top: this.state.top + increment })
    }
    if (event.keyCode === 68) { //d
      this.setState({ left: this.state.left + increment })
    }

  }

  connectHandler(gamepadIndex) {
    console.log(`Gamepad ${gamepadIndex} connected !`)
  }

  disconnectHandler(gamepadIndex) {
    console.log(`Gamepad ${gamepadIndex} disconnected !`)
  }

  buttonChangeHandler(buttonName, down) {
    console.log(buttonName, down)
  }

  //LeftStickX, LeftStickY, RightStickX, RightStickY
  axisChangeHandler(axisName, value, previousValue, env) {
    if(axisName === 'LeftStickX') {
      env.setState({ left: this.state.left + (value * 10)})
    }
    if(axisName === 'LeftStickY') {
      env.setState({ top: this.state.top - (value * 10)})
    }
  }

  buttonDownHandler(buttonName) {
    console.log(buttonName, 'down')
  }

  buttonUpHandler(buttonName) {
    console.log(buttonName, 'up')
  }

  constructor(props) {
    super(props);
    this.moveBox = this.moveBox.bind(this);

    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }

  render() {
    return (
      <div className="App App-header" tabIndex={0} onKeyDown={this.moveBox}>
        <div className="Bubble" style={{ top: this.state.top + "px", left: this.state.left + "px" }} />
        <Gamepad
          onConnect={this.connectHandler}
          onDisconnect={this.disconnectHandler}

          onButtonChange={this.buttonChangeHandler}
          onAxisChange={(axisName, value, previousValue) => {
            this.axisChangeHandler(axisName, value, previousValue, this)
          }}

        >
          <p></p>
        </Gamepad>
        <p>This is the timer value: {this.state.timestamp}</p>
      </div>
    );
  }

}

export default App;
