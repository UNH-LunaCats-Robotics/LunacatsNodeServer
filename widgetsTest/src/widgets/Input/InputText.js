import React from 'react'
import {TransparentCard} from '../Card/Card'

import '../generic.scss'
import './input.scss'

export class InputText extends React.Component {

    render () {
        return (
            <TransparentCard style={this.props.style}>
                <input onChange={this.props.onChange} type="text" className="InputText" placeholder={this.props.placeholder}/>
            </TransparentCard>
            
        )
    }
}