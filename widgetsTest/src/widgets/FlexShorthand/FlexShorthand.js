
import React from 'react'

import '../generic.scss'
import './flexShorthand.scss'
import {jsonConcat} from '../Utilities'

const ColumnContainerStyle = { flexDirection:"column"}
const ColumnContainerExtendedStyle = { margin:0, padding:0, flexDirection:"column", height:"100%", flexGrow:1}
const RowContainerExtendedStyle = { margin:0, padding:0, height:"100%", width:"100%"}



class ColumnContainer extends React.Component {
    render() {
        return ( 
            <div className = "Container"  style = {jsonConcat(ColumnContainerStyle,this.props.style)}>
                {this.props.children}
            </div>
        )
    }
}
class ColumnContainerExtended extends React.Component {
    render() {
        return ( 
            <div className = "Container" style = {jsonConcat(ColumnContainerExtendedStyle,this.props.style)}>
                {this.props.children}
            </div>
        )
    }
}


class RowContainer extends React.Component {
    render() {
        return (
            <div style={this.props.style} className="Container">
                {this.props.children}
            </div>
        )
    }
}

class RowContainerExtended extends React.Component {
    render() {
        return (
            <div className="Container" style = {jsonConcat(RowContainerExtendedStyle,this.props.style)}>
                {this.props.children}
            </div>
        )
    }
}

export {ColumnContainer, ColumnContainerExtended, RowContainer, RowContainerExtended};