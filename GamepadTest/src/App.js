import React from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.example()
  }

  state = {
    y: 50,
    x: 50
  }

  example() {
    this.setState({y: 1})
    this.setState({x: 1})
  }

  render() {
    return (
      <div className="App">
        <div className="Circle" style={{top: this.state.y+"px",left:this.state.x+"px"}} />
      </div>
    );
  }
  
}

export default App;
