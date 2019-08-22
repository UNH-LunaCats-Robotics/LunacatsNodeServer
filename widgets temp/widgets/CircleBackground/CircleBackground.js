import React from 'react'

import './circlebackground.scss'


class Circle  extends React.Component {


    render() {
        return (
            <div className="Circle" style= {{
                bottom:this.props.y+"px",
                left:this.props.x+"px",
                opacity: this.props.opacity
            }}/>
        )
    }
}
class CircleBackground extends React.Component {

    randomPairs = [];
    state = {
        inc: 0
    }
    key = 0
    randCircleData() {
        this.key ++;
        return {
            i: this.key,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,

            xAcc: (Math.random() - 0.5)* 0.5,
            yAcc: (Math.random() -0.5)* 0.5, 
            life: Math.random(),
            lifeDecay: (Math.random() * 0.002) + 0.0005
        }
    }

    constructor(props) {
        super(props)


        this.randCircleData = this.randCircleData.bind(this)
        this.update = this.update.bind(this)
    }

    update() {
        

        for(var i = 0; i < this.randomPairs.length; i++) {
            this.randomPairs[i].x    += this.randomPairs[i].xAcc;
            this.randomPairs[i].y    += this.randomPairs[i].yAcc;
            this.randomPairs[i].life -= this.randomPairs[i].lifeDecay;
            if(this.randomPairs[i].life < 0) {
                this.randomPairs.splice(i,1)
            }
        }


        if(this.state.inc > 200000/window.innerWidth) {
            
            this.randomPairs.push(this.randCircleData())
            this.setState({inc: 0})
        }
        else {
            this.setState({inc: this.state.inc + 1})
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.update, 7);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className="CircleBackground">
                {this.randomPairs.map( (inc) => 
                    {
                        return <Circle key={inc.i} x= {inc.x} y = {inc.y} opacity={inc.life}/>
                    }
                    
                )}
            </div>
        )
    }
}

export default CircleBackground;