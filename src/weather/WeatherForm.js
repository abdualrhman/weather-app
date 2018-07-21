import React from 'react'
import '../index.css'

export default class WeatherForm extends React.Component {
  render() {
    return (
          <div className='form'>
            <input type='text'
            placeholder='Enter city name'
            onChange={this.props.changeHandler}
            />
              <button className='btn btn-sm btn-success' onClick={this.props.showHandler}>Go</button>
          </div>
    );
  }
}
