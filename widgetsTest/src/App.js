import React from 'react';
import './App.scss';

import CircleBackground from './widgets/CircleBackground/CircleBackground'
import {TransparentCard} from './widgets/Card/Card'

import Compass from './widgets/Compass/Compass'
import Sidebar from './widgets/Sidebar/Sidebar'
// eslint-disable-next-line 
import { ColumnContainer, ColumnContainerExtended, RowContainer, RowContainerExtended } from './widgets/FlexShorthand/FlexShorthand'

import {Button} from './widgets/Input/Button'

class App extends React.Component {


  render() {
    return (
      <div className="App App-header" >
        <CircleBackground />
        <RowContainerExtended>
          <Sidebar/>

          <ColumnContainerExtended >
            <TransparentCard>
              <Compass angle={45}/>
            </TransparentCard>
            <Button text="Test Button"/>

          </ColumnContainerExtended>
        </RowContainerExtended>

      </div>
    )
  }

}

export default App;
