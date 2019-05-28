import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    city: "dhaka"
  };

  handleChange = event => {
    this.setState({ city: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.city);
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
