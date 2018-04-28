//apiKey:AIzaSyCfJveGFmhltKLT8tLRZlq5k5rInbuzSnk
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 55.69,
      lng: 12.57
    },
    zoom: 10
  };

  render() {
    return (
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:  'AIzaSyCfJveGFmhltKLT8tLRZlq5k5rInbuzSnk'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {console.log(this.props)}
        </GoogleMapReact>
      </div>
    );
  }
}
