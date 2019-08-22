import React from 'react'
import './card.scss'


class Card extends React.Component {

    render() {
        return (
            <div className="Card">
                <div className="CardInner">
                    {this.props.children}
                </div>
            </div>
        )
        
    }
}

export default Card