import React, { Component } from 'react';
import './App.css';
import { mockTimeline, Timeline } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timeline {...mockTimeline}/>
      </div>
    );
  }
}

export default App;
