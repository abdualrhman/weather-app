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
//{list && <p>{list.main.pressure}</p>}
//Object.keys(list) > 0
// <div class="widget" style="margin: 10px; width: 300px;">
//    <div class="panel panel-info">
//      <div class="panel-heading">Weather in <b>Copenhagen</b></div>
//      <ul class="list-group">
//        <li class="list-group-item">Temperature: <b>5°C</b></li>
//        <li class="list-group-item">Humidity: <b>65</b></li>
//        <li class="list-group-item">Wind: <b>11 m/s Øst</b></li>
//        <li class="list-group-item">
//            <form class="form-inline">
//              <div class="form-group">
//                <input type="text" class="form-control" id="city" placeholder="City">
//              </div>
//              <button type="submit" class="btn btn-default">Search</button>
//            </form>
//        </li>
//      </ul>
//    </div>
//  </div>
///////////////////////////////////////////////////////////////
// <div>
//   {loading && <p>loading...</p>}
//   {error && !loading && <p>no data</p>}
//   {list &&
//     <div>
//     <p>{list.name}</p>
//     <p>{main.temp}</p>
//     </div>
//   }
// </div>


//style="margin: 10px; width: 300px;"
