import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      clicksA: 0,
      clicksB: 0,
      clicksC: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event, clicks) {
    this.setState((previousState) => {
      const counter = previousState[clicks] + 1;
      if (counter % 2 === 0) event.target.style.backgroundColor = 'green'
      else event.target.style.backgroundColor = 'red'
      return ({
        [clicks]: counter
      })
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleClick(event, 'clicksA')}>{this.state.clicksA}</button>
        <button onClick={(event) => this.handleClick(event, 'clicksB')}>{this.state.clicksB}</button>
        <button onClick={(event) => this.handleClick(event, 'clicksC')}>{this.state.clicksC}</button>
      </div>
    );
  }
}

export default App;
