import React from 'react';
import Gamepad from 'react-gamepad'

class Controller extends React.Component {
    state = {
        leftX: 20,
        leftY: 20,
        rightX: 20,
        rightY: 20
    }

    //LeftStickX, LeftStickY, RightStickX, RightStickY
    axisChangeHandler(axisName, value, previousValue, env) {
        if(axisName === 'LeftStickX') {
            env.setState({ leftX: (value*15) + 20})
        }
        if(axisName === 'LeftStickY') {
            env.setState({ leftY: -(value*15)+20})
        }
        if(axisName === 'RightStickX') {
            env.setState({ rightX: (value*15) + 20})
        }
        if(axisName === 'RightStickY') {
            env.setState({ rightY: -(value*15)+20})
        }
    }

    connectHandler(gamepadIndex) {
        console.log(`Gamepad ${gamepadIndex} connected !`)
    }

    disconnectHandler(gamepadIndex) {
        console.log(`Gamepad ${gamepadIndex} disconnected !`)
    }

    render() {
        return (
            <div>
                <Gamepad
                    onConnect={this.connectHandler}
                    onDisconnect={this.disconnectHandler}

                    onAxisChange={(axisName, value, previousValue) => {
                        this.axisChangeHandler(axisName, value, previousValue, this)
                    }}
                ><p></p></Gamepad>
                <div className = "JoystickRim">
                    <div className="JoystickCircle" style={{ top: this.state.leftY + "px", left: this.state.leftX + "px" }}/>
                </div>
                <div className = "JoystickRim">
                    <div className="JoystickCircle" style={{ top: this.state.rightY + "px", left: this.state.rightX + "px" }}/>
                </div>
            </div>
        )
    }
}

export default Controller;