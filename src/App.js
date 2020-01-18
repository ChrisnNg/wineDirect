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

import Checkout from "./Components/Checkout.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.intialState(),
      cart: { total: { quantity: 0, price: 0 } },
      showCart: false
    };
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

  addToCart = (item, quantity, calByWeight, pricePerUnit) => {
    if (this.state.cart[item]) {
      this.setState(
        {
          ...this.state,
          cart: {
            ...this.state.cart,
            [item]: {
              ...this.state.cart[item],
              name: item,
              quantity: (this.state.cart[item].quantity += quantity),
              totalPrice:
                this.state.cart[item].quantity *
                this.state.cart[item].pricePerUnit
            },
            total: {
              ...this.state.cart.total,
              quantity: (this.state.cart.total.quantity += 1),
              price: (this.state.cart.total.price += quantity * pricePerUnit)
            }
          }
        },
        () => {
          console.log("current cart updated to=", this.state.cart);
        }
      );
    } else {
      console.log("new item added to cart");

      this.setState(
        {
          ...this.state,
          cart: {
            ...this.state.cart,
            [item]: {
              ...this.state.cart[item],
              name: item,
              quantity: quantity,
              calByWeight,
              pricePerUnit,
              totalPrice: quantity * pricePerUnit
            },
            total: {
              ...this.state.cart.total,
              quantity: (this.state.cart.total.quantity += 1),
              price: (this.state.cart.total.price += 1 * pricePerUnit)
            }
          }
        },
        () => {
          console.log("current cart updated to=", this.state.cart);
        }
      );
    }
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

  openCart = () => {
    this.setState({ showCart: true });
  };

  closeCart = () => {
    this.setState({ showCart: false });
  };

  resetCart = () => {
    this.setState(
      {
        ...this.state,
        cart: { total: { quantity: 0, price: 0 } }
      },
      () => {
        console.log(this.state);
      }
    );
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
          <Nav
            count={this.state.cart.total.quantity}
            openCart={this.openCart}
          />

          <Checkout
            show={this.state.showCart}
            onHide={this.closeCart}
            cart={this.state.cart}
            resetCart={this.resetCart}
            closeCart={this.closeCart}
          />

          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

          {this.state.isEmptyState && <Home trigger={this.changeState} />}
          {this.state["Fruits and Vegetables"] && (
            <Vegies
              goHome={this.goHome}
              addToCart={this.addToCart}
              itemCart={this.state.cart}
            />
          )}
        </section>
      </div>
    );
  }
}

export default App;
