import React from 'react'
import '../index.css'
export default class WeatherList extends React.Component {
  render() {
    const {list, loading, main} =this.props
    return (
      <div>
      <link rel="stylesheet"href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
      {
        loading &&
        <div>
        <p>loading...</p>
        <div className="loader"></div>
        </div>
      }
      { list &&
        <div className="widget">
         <div className="panel panel-info">
           <div className="panel-heading">Weather in <b>{list.name}</b></div>
           <ul className="list-group">
             <li className="list-group-item">Temperature: <b>{main.temp}°C</b></li>
             <li className="list-group-item">Humidity: <b>{main.humidity}</b></li>
             <li className="list-group-item">Wind: <b>{list.wind.speed} m/s</b></li>

           </ul>
         </div>
       </div>
     }
     </div>
    );
  }
}
