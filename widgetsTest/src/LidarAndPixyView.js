import React from 'react';

import CircleBackground from './widgets/CircleBackground/CircleBackground'
import {Card,TransparentCard} from './widgets/Card/Card'


// eslint-disable-next-line 
import { ColumnContainer, ColumnContainerExtended, RowContainer, RowContainerExtended } from './widgets/FlexShorthand/FlexShorthand'

import {ProgressBar} from './widgets/ProgressBar/ProgressBar'

export class LidarAndPixyView extends React.Component {

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
          
          <ColumnContainerExtended>
          <TransparentCard style={{width:"95%"}}>
            Left Front Lidar: <ProgressBar style={{width:"100%"}} percent={10}/>
          </TransparentCard>
          <TransparentCard style={{width:"95%"}}>
            Right Front Lidar: <ProgressBar style={{width:"100%"}} percent={90}/>
          </TransparentCard>
          <TransparentCard style={{width:"95%"}}>
            Left Back Lidar: <ProgressBar style={{width:"100%"}} percent={40}/>
          </TransparentCard>
          <TransparentCard style={{width:"95%"}}>
            Right Back Lidar: <ProgressBar style={{width:"100%"}} percent={60}/>
          </TransparentCard>
          </ColumnContainerExtended>
          <ColumnContainerExtended>

            <Card style={{width:"100%", padding:"0px", margin:"0px"}}>Pixy View</Card>
            <RowContainerExtended style={{alignItems: "baseline"}}>
                <TransparentCard style={{width:"100%",height:"80%"}}>{this.state.response}</TransparentCard>
            </RowContainerExtended>
            
          </ColumnContainerExtended>
          

          
        </RowContainerExtended>

      </div>
    )
  }

}