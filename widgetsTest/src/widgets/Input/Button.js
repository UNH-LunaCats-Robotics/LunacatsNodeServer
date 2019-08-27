import React from 'react'
import '../generic.scss'
import './input.scss'

class Button extends React.Component {


    state = {
        clickedCircle: { x: 0, y: 0, time: 0, div: null },
    }

    constructor(props) {
        super(props)
        this.createExpandingCircle = this.createExpandingCircle.bind(this)
        this.expandCircle = this.expandCircle.bind(this)
    }


    createExpandingCircle(event) {

        // console.log(event.pageX)
        // console.log(event.pageX - $("#1")[0].offsetWidth)

        this.setState({
            clickedCircle:
            {
                x: event.pageX,
                y: event.pageY,
                time:0,
                div: <div className="ExpandingCircle"
                    style={{

                        width: "0px",
                        height: "0px",
                        left: event.pageX,
                        top: event.pageY
                    }}
                />
            }
        })
        this.interval = setInterval(this.expandCircle, 1);

        if(this.props.onClick != null) { 
            this.props.onClick()
        }

    }

    async expandCircle() {
        const newTime = this.state.clickedCircle.time + 1;
        if(this.state.clickedCircle.time > 100) {
            clearInterval(this.interval)
            this.setState({
                clickedCircle:
                {
                    x: this.state.clickedCircle.x,
                    y: this.state.clickedCircle.y,
                    time:newTime,
                    div: null
                }
            })
        }
        else {
            this.setState({
                clickedCircle:
                {
                    x: this.state.clickedCircle.x,
                    y: this.state.clickedCircle.y,
                    time:newTime,
                    div: <div className="ExpandingCircle"
                        style={{
    
                            width: newTime + "px",
                            height: newTime + "px",
                            left: this.state.clickedCircle.x - newTime/2,
                            top: this.state.clickedCircle.y - newTime/2,
                            opacity: (100-newTime)/100
                        }}
                    />
                }
            })
        }
        

        
    }

    render() {
        return (
            <div id={1} className="Button Container" style={this.props.style} onClick={this.createExpandingCircle}>
                {this.state.clickedCircle.div}
                {this.props.children}
            </div>
        )
    }

}


export { Button }