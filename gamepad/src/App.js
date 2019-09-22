import React from 'react';
import './App.scss';
import Gamepad from 'react-gamepad'

class App extends React.Component {

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

  axisChangeHandler(axisName, value, previousValue) {
    console.log(axisName, value)
  }

  buttonDownHandler(buttonName) {
    console.log(buttonName, 'down')
  }

  buttonUpHandler(buttonName) {
    console.log(buttonName, 'up')
  }


  state = {
    top: 0,
    left: 0
  }

  constructor(props) {
    super(props);
    this.moveBox = this.moveBox.bind(this);
  }

  render() {
    return (
      <div className="App App-header" tabIndex={0} onKeyDown={this.moveBox}>
        <div className="Bubble" style={{ top: this.state.top + "px", left: this.state.left + "px" }} />
        <Gamepad
          onConnect={this.connectHandler}
          onDisconnect={this.disconnectHandler}

          onButtonChange={this.buttonChangeHandler}
          onAxisChange={this.axisChangeHandler}
        >
          <p></p>
        </Gamepad>

      </div>
    );
  }

}

export default App;
