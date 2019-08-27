import React from 'react';

import CircleBackground from './widgets/CircleBackground/CircleBackground'
import {TransparentCard} from './widgets/Card/Card'


// eslint-disable-next-line 
import { ColumnContainer, ColumnContainerExtended, RowContainer, RowContainerExtended } from './widgets/FlexShorthand/FlexShorthand'

import {Button} from './widgets/Input/Button'
import {Dropdown} from './widgets/Input/Dropdown'

import {InputText} from './widgets/Input/InputText'

export class SendRequest extends React.Component {

  requestType = "Get"
  url = ""
  body = ""

  state = {
    response: ""
  }
  
  constructor(props) {
    super(props)
    this.setRequestType = this.setRequestType.bind(this)
    this.SendRequest = this.SendRequest.bind(this)
    this.setUrl = this.setUrl.bind(this)
    this.setMessageBody = this.setMessageBody.bind(this)
  }

  setRequestType(newType) {
    this.requestType = newType;
  }

  async SendRequest() {
    var response = ""

    if(this.requestType === "Get") {
      response = await fetch(this.url, {
        method: this.requestType,
      })
    }
    else {
      response = await fetch(this.url, {
        method: this.requestType,
        body: this.body
      })
    }
    

    this.setState({ response: JSON.stringify(await response.json()) })

  }

  setUrl(event) {
    this.url = event.target.value
  }
  setMessageBody(event) {
    this.body = event.target.value
  }


  render() {
    return (
      <div className="App App-header" >
        <CircleBackground />

        <link rel="stylesheet" type="text/css" href={'./App.scss'} />
        <RowContainerExtended>
          
          <ColumnContainerExtended style={{flexGrow:100,  paddingLeft: "50px", paddingRight:"50px"}} >
            
          <RowContainer style ={{width: "100%"}}>
          <Dropdown options={["Get","Post","Update","Delete"]} onChange={this.setRequestType} style={{height: "55px"}}/>

          <InputText onChange = {this.setUrl} placeholder="Url..." style={{flexGrow:1, height: "45px"}} />

          <InputText onChange = {this.setMessageBody} placeholder="Message Body/Params..." style={{flexGrow:1, height: "45px"}}/>
          <Button onClick={this.SendRequest} style={{height: "45px"}}>Send</Button>
          </RowContainer>
          
          <TransparentCard style={{width:"100%",height:"80%"}}>{this.state.response}</TransparentCard>
          </ColumnContainerExtended>

          
        </RowContainerExtended>

      </div>
    )
  }

}