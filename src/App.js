import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav, {
  Toggle,
  Nav as RNav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import Nav from "./Components/Nav.js";
import Home from "./Components/Home.js";
import Vegies from "./Components/Vegies/Vegies.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.intialState();
  }

  intialState() {
    return {
      sidenavToggled: false,
      isEmptyState: true,
      "Fruits and Vegetables": false
    };
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

  goHome = () => {
    this.setState(this.intialState(), () => {
      console.log("state", this.state);
    });
  };

  render() {
    return (
      <div className="App">
        <SideNav
          onSelect={selected => {
            // Add your code here
          }}
          onToggle={toggle => {
            this.setState({ sidenavToggled: !this.state.sidenavToggled });
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Charts</NavText>
              <NavItem eventKey="charts/linechart">
                <NavText>Line Chart</NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                <NavText>Bar Chart</NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <section
          className={this.state.sidenavToggled ? "body-toggled" : "body"}
        >
          <Nav />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          {this.state.isEmptyState && <Home trigger={this.changeState} />}
          {this.state["Fruits and Vegetables"] && (
            <Vegies goHome={this.goHome} />
          )}
        </section>
      </div>
    );
  }
}

export default App;
