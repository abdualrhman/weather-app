import React, { Component } from 'react';
import WeatherManeger from './weather/WeatherManeger.js'
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
    
      <WeatherManeger/>
      </div>
    );
  }
}

export default App;
