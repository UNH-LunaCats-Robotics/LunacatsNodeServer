import React from 'react'

import '../generic.scss'
import './compass.scss';

import {MdNavigation} from "react-icons/md"

class DirectionAimer extends React.Component {

    render () { 
        return (
        <div className="Compass" style={{ transform: "rotate("+this.props.angle+"deg)"}}>
            <div className="OuterCircle">
                <div className="InnerCircle">
                    <MdNavigation style={{width:"50px", height:"50px"}}/>
                </div>
            </div>
        </div>)
    }
}

export default DirectionAimer