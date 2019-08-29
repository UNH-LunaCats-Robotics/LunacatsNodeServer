import './progressBar.scss'
import React from 'react'

export class ProgressBar extends React.Component {
    render() {
        return(
            <div className="ProgressBarOuter" style = {this.props.style}>
                <div className="ProgressBarInner" style={{width:this.props.percent+"%"}}>

                </div>
            </div>
        )
    }
}