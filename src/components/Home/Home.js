import React, { Component } from "react";
import "./style.css";

class Home extends Component {
  state = {
    name: "Honey-badger"
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2 className="heading">Welcome</h2>
        <h2 className="name-tag">{this.state.name}</h2>
        <p>This is your homepage served by Service A</p>
        <div className="input-section">
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Home;
