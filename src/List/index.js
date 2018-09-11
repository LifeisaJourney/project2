import React, { Component } from "react";
import { MAPBOX_TOKEN, BETTERDOCTOR_TOKEN } from '../.env.js'
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export default class Geotrack extends Component {

geotracker(){
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
      },
    trackUserLocation: true
    }));
  }
geotracker();
}