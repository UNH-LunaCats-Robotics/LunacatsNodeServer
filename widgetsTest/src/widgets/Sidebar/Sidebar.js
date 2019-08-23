
import '../generic.scss'
import './sidebar.scss'


import React from 'react'

import {Card} from '../Card/Card'
// eslint-disable-next-line 
import { ColumnContainer, ColumnContainerExtended, RowContainer, RowContainerExtended } from '../FlexShorthand/FlexShorthand'


class Sidebar extends React.Component {
    render() {
        return (
            <ColumnContainerExtended style={{width:"max-content-size"}}>
            <Card style={{flexGrow:1}}>
                <ColumnContainerExtended style= {{width:"220px"}}>
                    <h4 style={{margin:"15px"}}>Lunacats App</h4>
                    <div style= {{flexGrow:1}}>
                        
                    </div>
                </ColumnContainerExtended>
            </Card>
          </ColumnContainerExtended>
        )
    }
}

export default Sidebar;