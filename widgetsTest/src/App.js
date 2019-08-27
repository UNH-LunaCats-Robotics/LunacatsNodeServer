import React from 'react';

import CircleBackground from './widgets/CircleBackground/CircleBackground'
import {TransparentCard} from './widgets/Card/Card'

import Compass from './widgets/Compass/Compass'

// eslint-disable-next-line 
import { ColumnContainer, ColumnContainerExtended, RowContainer, RowContainerExtended } from './widgets/FlexShorthand/FlexShorthand'

import {Button} from './widgets/Input/Button'
import {Dropdown} from './widgets/Input/Dropdown'
import {IoIosSettings} from 'react-icons/io'

import {InputText} from './widgets/Input/InputText'

class App extends React.Component {


  render() {
    return (
      <div className="App App-header" >
        <CircleBackground />

        <link rel="stylesheet" type="text/css" href={'./App.scss'} />
        <RowContainerExtended>
          
          <ColumnContainerExtended style={{flexGrow:100,  paddingLeft: "50px", paddingRight:"50px"}} >
            
          <RowContainer style ={{width: "100%"}}>
          <Dropdown options={["Get","Post","Update","Delete"]}/>
          <InputText placeholder="Url..."/>
          <InputText placeholder="Message Body" style={{flexGrow:1}}/>
          <Button>Send</Button>
          </RowContainer>
          
          <TransparentCard style={{width:"100%",height:"100%"}}> No Response</TransparentCard>
          </ColumnContainerExtended>

          <ColumnContainerExtended style={{justifyContent: 'start'}}>
            <div style={{height:"3px"}}/>
            <TransparentCard>
              <Compass angle={45}/>
            </TransparentCard>

            <Button><IoIosSettings/></Button>

          </ColumnContainerExtended>
        </RowContainerExtended>

      </div>
    )
  }

}

export default App;
