import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import Nav from "./Components/Nav.js";
import Home from "./Components/Home.js";
import Vegies from "./Components/Vegies/Vegies.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.intialState(), cart: null };
  }

  intialState() {
    return {
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

  addToCart = (item, quantitity) => {
    this.setState(
      {
        ...this.state,
        cart: { item: { name: item, quantitity } }
      },
      () => {
        console.log("current cart updated to=", this.state.cart);
      }
    );
  };

  handleSelection = selected => {
    console.log(selected);

    switch (selected) {
      case "Home":
        this.goHome();
        break;
      case "Reports/Sales":
        toast("Please login as a manager to view");
        break;
      case "Reports/Expenses":
        toast("Please login as a manager to view");
        break;
      default:
    }
  };

  render() {
    return (
      <div className="App">
        <SideNav
          onSelect={selected => {
            // Add your code here
            this.handleSelection(selected);
          }}
          onToggle={toggle => {
            this.setState({ sidenavToggled: !this.state.sidenavToggled });
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="Home">
            <NavItem eventKey="Home">
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

              <NavText>Manager Reports</NavText>
              <NavItem eventKey="Reports/Sales">
                <NavText>Today's Sales</NavText>
              </NavItem>

              <NavItem eventKey="Reports/Expenses">
                <NavText>Today's Expenses</NavText>
              </NavItem>
            </NavItem>

            <NavItem eventKey="Logout">
              <NavIcon>
                <i
                  className="fas fa-sign-out-alt"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Logout</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>

        <ToastContainer />

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
            <Vegies goHome={this.goHome} addToCart={this.addToCart} />
          )}
        </section>
      </div>
    );
  }
}

export default App;
