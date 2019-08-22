
import React from 'react'

import '../generic.scss'
import './flexShorthand.scss'


const ColumnContainerStyle = { flexDirection:"column"}
const ColumnContainerExtendedStyle = { margin:0, padding:0, flexDirection:"column", width:"100%", height:"100%"}
const RowContainerExtendedStyle = { margin:0, padding:0, width:"100%", height:"100%"}

function jsonConcat(jsonA, jsonB) {
    if(jsonB == null)
        return jsonA;
    if(jsonA == null)
        return jsonB;
    
    var retVal = {}
    
    for(var key in jsonA) {
        retVal[key] = jsonA[key]
    }
    for(var key2 in jsonB) {
        retVal[key2] = jsonB[key2]
    }

    return retVal;
}

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