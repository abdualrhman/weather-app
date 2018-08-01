import React from 'react'
import SimpleMap from '../maps/index.js'
import '../index.css'
export default class WeatherList extends React.Component {
  render() {
    const {list, loading, main, center, error} =this.props
    return (
      <div>
      <div className='handler'>
        <div>{
          loading &&
          <div className='laoder-cont'><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
        }
        {error && !loading && <h4 className="error">Please enter a valid city name</h4>}</div>
      </div>


      { list &&
        <div className="weather-container">
        		<div className="currentTemp">
              <div className='temp-header'>
        			 <span className="temp">{Math.trunc(main.temp)}&deg;</span>
        			  <span className="location">{list.name}</span>
                </div>
                <div className="info">
                  <div className="description">{list.weather[0].description}</div>
        				  <div className="wind"><span className='wind-speed'>{list.wind.speed}</span> <span className='wind-unit'>M/S</span></div>
        			   </div>
        		</div>
            <div className='map'>
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
