import React from 'react';

import CircleBackground from './widgets/CircleBackground/CircleBackground'
import {TransparentCard} from './widgets/Card/Card'

import Compass from './widgets/Compass/Compass'
import Sidebar from './widgets/Sidebar/Sidebar'
// eslint-disable-next-line 
import { ColumnContainer, ColumnContainerExtended, RowContainer, RowContainerExtended } from './widgets/FlexShorthand/FlexShorthand'

import {Button} from './widgets/Input/Button'
import {IoIosSettings} from 'react-icons/io'

class App extends React.Component {


  render() {
    return (
      <div className="App App-header" >
        <CircleBackground />

        <link rel="stylesheet" type="text/css" href={'./App.scss'} />
        <RowContainerExtended>
          <Sidebar/>
          
          <ColumnContainerExtended style={{flexGrow:100}} >
            <TransparentCard>
              <Compass angle={45}/>
            </TransparentCard>

            <Button>Test Button</Button>

          </ColumnContainerExtended>

          <ColumnContainerExtended style={{justifyContent: 'start'}}>
            <div style={{height:"3px"}}/>
            <Button><IoIosSettings/></Button>

          </ColumnContainerExtended>

        </RowContainerExtended>

      </div>
    )
  }

}

export default App;
