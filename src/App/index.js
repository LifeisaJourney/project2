import React, { Component } from "react";
import "./style.css";
import NewForm from '../NewForm';
import { MAPBOX_TOKEN, BETTERDOCTOR_TOKEN } from '../.env.js';
import queryString from 'query-string';
// import Pop from '../Popup';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      distance: '',
      lat: 40.738,
      lng: -73.992,
      zipcode: "",
    }

    this.handleUpdateInput = this.handleUpdateInput.bind(this)
    this.submitButton = this.submitButton.bind(this)
  }

  handleUpdateInput(event) {
    this.setState({ zipcode: event.target.value })
  }

  submitButton(task) {
    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode(
      {
        address: this.state.zipcode,
      },
      (results, status) => {
        if (status === 'OK') {
          this.setState({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
          this.getDoctors();
        }
      }
    );
  }

  async getDoctors() {
    const query = queryString.stringify({
      location: `${this.state.lat}, ${this.state.lng},10`,
      sort: 'distance-asc',
      skip: 0,
      limit: 10,
      user_key: `${BETTERDOCTOR_TOKEN}`
    })
    const httpResponse = await fetch(`https://api.betterdoctor.com/2016-03-01/practices?${query}`)
    const body = await httpResponse.json();
    console.log(body)
    this.setState({
      data: body.data.filter((practice) => practice.within_search_area),
    });
    console.log(this.state.data.name)

    mapboxgl.accessToken = MAPBOX_TOKEN;
    var map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [this.state.lng, this.state.lat],
      zoom: 14, 
      minZoom: 12,
      maxZoom: 16,
    });

    var popup = new mapboxgl.Popup({ offset: 25 })
    .setText("sds")

    this.state.data.forEach((practice) => {
      new mapboxgl.Marker().setLngLat([practice.lon, practice.lat]).addTo(map).setPopup(popup)
    });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <h1 className="title-heading">Find A Doctor Now!</h1>
          </div>
          <NewForm
            handleUpdateInput={this.handleUpdateInput}
            zipcode={this.state.zipcode}
            submitButton={this.submitButton}
          />
        </div>
        
        {this.state.data.map((eachData) => {
          console.log(eachData)
          return (
            <div>
              <h1>{eachData.name}</h1>
              <h2>Located {eachData.distance.toFixed(2)}  miles away!</h2>
            </div>
          )
        })}
      </div>
    )
  }
}
