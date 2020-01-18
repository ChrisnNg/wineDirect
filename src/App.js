import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./Components/Nav.js";
import Home from "./Components/Home.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isEmptyState: true, vegies: false };
  }

  changeState = component => {
    this.setState(
      {
        ...this.state,
        isEmptyState: false,
        [component]: true
      },
      () => {
        console.log("state", this.state, component);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        {this.state.isEmptyState && <Home trigger={this.changeState} />}
      </div>
    );
  }
}

export default App;
