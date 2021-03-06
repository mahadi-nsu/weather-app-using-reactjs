import React, { Component } from "react";

//Component import
import Weather from "./components/Weather";
import Heading from "./components/Heading";

//css file import
import "./components/stylesheets/app.css";

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
      });
    } catch (err) {
      console.log(err)
      this.setState({
        error : " " + err
      })
    }

    // alert(this.state.error)
  };

  handleSubmit = event => {
    event.preventDefault();
    // alert(this.state.city);
    this.getWeather();
  };

  componentDidMount() {
    this.timer = setInterval(() => this.getWeather(), 5 * 60 * 1000);
  }

  componentWillUnmount() {
    this.timer = null; 
  }

  render() {
    const { temp, humidity, description, error } = this.state;
    return (
      <div className="container">
        <Heading />
        <form onSubmit={this.handleSubmit}>
          <select
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control"
          >
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="sylhet">Sylhet</option>
          </select>
          <input type="submit" value="Submit" className="btn btn-default" />
        </form>

        <Weather
          temp={temp}
          humidity={humidity}
          description={description}
          error={error}
        />
        <marquee behavior="scroll" direction="left">Data Will be refreshed after every 5 minutes interval</marquee>
      </div>
    );
  }
}

export default App;
