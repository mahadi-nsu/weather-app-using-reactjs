import React, { Component } from 'react'
import "./stylesheets/weather.css"

export default class Weather extends Component {
    render() {
        console.log(this.props);
        const {temp,humidity,description,error} = this.props;
        return (
          <div className = "weather-data">
            <h5>Weather data :</h5>
            {error && (
              <p>
                {" "}
                Error :<span> {error} </span>
              </p>
            )}

            {temp && (
              <p>
                {" "}
                Temperature :<span> {temp} degree celcius </span>
              </p>
            )}
            {humidity && (
              <p>
                {" "}
                Humidity :<span> {humidity} g/m3 </span>
              </p>
            )}
            {description && (
              <p>
                {" "}
                Description:
                <span> {description} </span>
              </p>
            )}
          </div>
        );
    }
}
