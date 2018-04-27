import React, { Component } from 'react';
import WeatherManeger from './weather/WeatherManeger.js'


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
