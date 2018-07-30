import React from 'react'
import SimpleMap from '../maps/index.js'
import '../index.css'
export default class WeatherList extends React.Component {
  render() {
    const {list, loading, main, center, error} =this.props
    return (
      <div>
      {
        loading &&
        <div className='laoder-cont'><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
      }
        {error && !loading && <h4 className="error">Please enter a valid city name</h4>}

      { list &&
        <div className="weather-container">

        		<div className="currentTemp">
              <div className='foo'>
        			 <span className="temp">{Math.trunc(main.temp)}&deg;</span>
        			  <span className="location">{list.name}</span>
                </div>
                <div className="info">
                  <span className="rain">{list.weather[0].description}</span>
        				  <span className="wind">{list.wind.speed} M/S</span>
        			   </div>
        		</div>
            <div className='bla'>
            <SimpleMap className="map" center={center}/>
              </div>

          <div>

          </div>
        </div>

     }
     </div>
    );
  }
}
