import React from 'react'
import {Link} from 'react-router-dom'

export default class WeatherForm extends React.Component {
  render() {
    return (
          <div>
            <input type='text'
            onChange={this.props.changeHandler}
            />

              <Link to={this.props.city}>
              <button onClick={this.props.showHandler}>show</button>
              </Link>
          </div>
    );
  }
}
