import React, { Component } from "react";
import "./App.css";

const API_KEY = "48b0c5fe39d7f2112578c50444316b97";


class App extends Component {
  state = {
    city: "dhaka",
    temp: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  handleChange = event => {
    this.setState({ city: event.target.value });
  };

  getWeather = async e => {
    try {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          this.state.city
        },Bangladesh&appid=${API_KEY}&units=metric`
      );
      const data = await api_call.json();
      this.setState({
        temp: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } catch (err) {
      this.setState({
        error: err
      });
    }

    // console.log(data);
  };


  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.city);
    this.getWeather();
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="sylhet">Sylhet</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
