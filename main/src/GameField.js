import React from 'react';
import { startup } from './api';

class GridPoint extends React.Component {

    render() {
        return (
            <div className="GridPoint" style={{ 
                top: this.props.y + "px", 
                left: this.props.x + "px",
                backgroundColor: this.props.color
             }}/>
        )
    }
}

class RobotPoint extends React.Component {
    render() {
        return (
            <div className="RobotPoint" style={{ 
                top: this.props.y + "px", 
                left: this.props.x + "px"
             }}/>
        )
    }
}

class GameField extends React.Component {

    points = [];
    robotLoc = [0, 0, 0, 0];

    state = {
        
    }

    addPoint(p) {
        console.log(`Lidar Point: (${p[0]}, ${p[1]}, ${p[2]})`);
        this.points.push({
            x: p[0],
            y: p[1],
            z: p[2]
        });
        this.render();
    }

    updatePosition(l) {
        console.log(`Lidar Point: (${l[0]}, ${l[1]}, ${l[2]}) at ${l[3]}`);
        this.robotLoc = [l[0], l[1], l[2], l[3]];
        this.render();
    }

    constructor() {
        super();
        startup(this);
    }

    getColor(z) {
        if(z >= 10)
            return "red";
        else if(z <= -10)
            return "blue";
        else
            return "lightgreen";
    }

    render() {
        return (
            <div className="GridBackground" style={{backgroundColor: "white"}}>
                {this.points.map( (inc) => 
                    {
                        return <GridPoint key = {inc.i} x = {inc.x} y = {inc.y} color = {this.getColor(inc.z)}/>
                    }
                )}
                <RobotPoint x= {this.robotLoc[0]} y = {this.robotLoc[1]}/>
            </div>
        )
    }
}

export default GameField;