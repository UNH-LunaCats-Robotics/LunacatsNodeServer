import React from 'react';
import Gamepad from 'react-gamepad'

class Controller extends React.Component {
    state = {
        leftX: 20,
        leftY: 20,
        rightX: 20,
        rightY: 20,
        y: "lightgray",
        x: "lightgray",
        a: "lightgray",
        b: "lightgray"
    }

    setButtonColor(buttonName, color) {
        if(buttonName === 'A') this.setState({ y: color});
        if(buttonName === 'Y') this.setState({x: color});
        if(buttonName === 'X') this.setState({a: color});
        if(buttonName === 'B') this.setState({b: color});
        
    }

    //LeftStickX, LeftStickY, RightStickX, RightStickY
    axisChangeHandler(axisName, value, previousValue) {
        if(axisName === 'LeftStickX') {
            this.setState({ leftX: (value*15) + 20})
        }
        if(axisName === 'LeftStickY') {
            this.setState({ leftY: -(value*15)+20})
        }
        if(axisName === 'RightStickX') {
            this.setState({ rightX: (value*15) + 20})
        }
        if(axisName === 'RightStickY') {
            this.setState({ rightY: -(value*15)+20})
        }
    }

    //NOTE: Default Button Names do not match buttons on controller
    buttonDownHandler(buttonName) {
        console.log(buttonName, "down");
        this.setButtonColor(buttonName, "gray");
    }

    buttonUpHandler(buttonName) {
        console.log(buttonName, "up");
        this.setButtonColor(buttonName, "lightgray");
    }

    connectHandler(gamepadIndex) {
        console.log(`Gamepad ${gamepadIndex} connected !`)
    }

    disconnectHandler(gamepadIndex) {
        console.log(`Gamepad ${gamepadIndex} disconnected !`)
    }

    render() {
        return (
            <div className="d-inline-flex flex-row p-2" style={{backgroundColor: "yellow"}}>
                <Gamepad
                    onConnect={this.connectHandler}
                    onDisconnect={this.disconnectHandler}

                    onAxisChange={(axisName, value, previousValue) => {
                        this.axisChangeHandler(axisName, value, previousValue)
                    }}

                    onButtonDown={(buttonName) => {
                        this.buttonDownHandler(buttonName)
                    }}

                    onButtonUp={(buttonName) => {
                        this.buttonUpHandler(buttonName)
                    }}
                ><p></p></Gamepad>
                <div className = "JoystickRim m-2">
                    <div className="JoystickCircle" style={{ top: this.state.leftY + "px", left: this.state.leftX + "px" }}/>
                </div>
                
                <div className = "JoystickButton align-self-center p-0 ml-2" style={{backgroundColor: this.state.y}}>
                    <p className = "pt-1">Y</p>
                </div>
                <div className = "col my-2">
                    <div className = "JoystickButton p-0 row" style={{backgroundColor: this.state.x}}> 
                        <p className = "pt-1 ml-2 pl-1">X</p>
                    </div>
                    <div className = "JoystickButton p-0 row mt-4" style={{backgroundColor: this.state.b}}>
                        <p className = "pt-1 ml-2 pl-1">B</p>
                    </div>
                </div>
                <div className = "JoystickButton align-self-center mr-2" style={{backgroundColor: this.state.a}}> 
                    <p className = "pt-1">A</p>
                </div>

                <div className = "JoystickRim m-2">
                    <div className="JoystickCircle" style={{ top: this.state.rightY + "px", left: this.state.rightX + "px" }}/>
                </div>
                
            </div>
        )
    }
}

export default Controller;