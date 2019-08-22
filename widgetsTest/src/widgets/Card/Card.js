import React from 'react'


import '../generic.scss'
import './card.scss'


class Card extends React.Component {

    render() {
        return (
            <div className="Card Container" style={this.props.style}>
                {this.props.children}
            </div>
        )
        
    }
}

export default Card