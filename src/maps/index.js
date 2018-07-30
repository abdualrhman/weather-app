//apiKey:AIzaSyCfJveGFmhltKLT8tLRZlq5k5rInbuzSnk
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// the google maps copmonent 
export default class SimpleMap extends Component {
  render() {
    return (
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:  'AIzaSyCfJveGFmhltKLT8tLRZlq5k5rInbuzSnk'}}
          center={this.props.center}
          zoom={10}
          />
      </div>
    );
  }
}
