import React from 'react'

export default class WeatherForm extends React.Component {
  render() {
    return (
          <div>
            <input type='text'
            onChange={this.props.changeHandler}
            />

              <button onClick={this.props.showHandler}>show</button>
          </div>
    );
  }
}
