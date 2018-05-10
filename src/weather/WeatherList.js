import React from 'react'
import SimpleMap from '../maps/index.js'
import '../index.css'
export default class WeatherList extends React.Component {
  render() {
    const {list, loading, main, center} =this.props
    return (
      <div>
      {
        loading &&
        <div>
        <p>loading...</p>
        <div className="loader"></div>
        </div>
      }
      { list &&
        <div className="weather-container">

        		<div className="currentTemp">
              <div className='foo'>
        			 <span className="temp">{Math.trunc(main.temp)}&deg;</span>
        			  <span className="location">{list.name}</span>
                </div>
                <div className="info">
                  <span className="rain">{list.weather[0].description}</span>
        				  <span className="wind">10 MPH</span>
        			   </div>
        		</div>
            <div className='bla'>
            <SimpleMap className="map" center={center}/>
              </div>
          {console.log(center.lat)}
          <div>

          </div>
        </div>

     }
     </div>
    );
  }
}
