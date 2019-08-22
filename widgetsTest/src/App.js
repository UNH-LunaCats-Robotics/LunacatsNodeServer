import React from 'react';
import './App.scss';

import CircleBackground from './widgets/CircleBackground/CircleBackground'
import Card from './widgets/Card/Card'

import Compass from './widgets/Compass/Compass'
import Sidebar from './widgets/Sidebar/Sidebar'
// eslint-disable-next-line 
import { ColumnContainer, ColumnContainerExtended, RowContainer, RowContainerExtended } from './widgets/FlexShorthand/FlexShorthand'


class App extends React.Component {


  render() {
    return (
      <div className="App App-header" >
        <CircleBackground />
        <RowContainerExtended>
          <Sidebar/>

          <ColumnContainerExtended >
            <Card>
              <Compass angle={45}/>
            </Card>
          </ColumnContainerExtended>
        </RowContainerExtended>

      </div>
    )
  }

}

export default App;
