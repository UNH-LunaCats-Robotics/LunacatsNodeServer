import React from 'react'
import '../generic.scss'
import './input.scss'

import { IoIosArrowDown } from 'react-icons/io'

const arrowIcon = <IoIosArrowDown style={{ position: "relative", top: "5px" }} />

export class Dropdown extends React.Component {

    state = {
        selectedOption: "",
        showList: false
    }

    constructor(props) {
        super(props)
        this.state.selectedOption = this.props.options[0];
        this.setOption = this.setOption.bind(this)
        this.makeOptionItem = this.makeOptionItem.bind(this);
    }

    makeOptionItem(option) {
        return <div className="ListItem" onClick={e => { this.setOption(option) }}>{option}</div>
    }
    setOption(option) {
        this.setState({showList:false,selectedOption:option});
    }

    render() {
        if (this.state.showList) {
            return (
                <div className="DropdownHolder">
                    <div className="Dropdown" onClick={e => { this.setState({ showList: false }) }} > {this.state.selectedOption} {arrowIcon} </div>
                        <div className="List">
                            {this.props.options.map(this.makeOptionItem)}
                        </div>

                </div>

            )
        }
        else {
            return (
                <div className="DropdownHolder">
                    <div className="Dropdown" onClick={e => { this.setState({ showList: true }) }}> {this.state.selectedOption} {arrowIcon} </div>
                </div>
            )
        }

    }
}
