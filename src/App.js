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
      cart: { total: { quantity: 0, price: 0, discount: 0 } },
      showCart: false,
      couponsUsed: null
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

  addToCart = (item, quantity, calByWeight, pricePerUnit, sale) => {
    let discount = 0;
    if (sale.validTill - Date.now() >= 0) {
      console.log("added item to cart that is discountable code= ", sale.code);
    }

    if (this.state.cart[item]) {
      if (quantity > 0) {
        switch (sale.code) {
          case 1:
            if (this.state.cart[item].quantity % 2) {
              discount = pricePerUnit * 0.33 * quantity;
            }
            break;
          case 2:
            if (this.state.cart[item].quantity % 2) {
              discount = pricePerUnit * quantity;
            }
            break;
          case 3:
            if (this.state.cart[item].quantity % 2) {
              discount = pricePerUnit * 0.5 * quantity;
            }
            break;
          case 4:
            discount = (quantity / 2) * pricePerUnit;
            break;
          default:
        }
      } else {
        switch (sale.code) {
          case 1:
            if (this.state.cart[item].quantity % 2 !== 1) {
              discount = pricePerUnit * 0.33 * quantity;
            }
            break;
          case 2:
            if (this.state.cart[item].quantity % 2 !== 1) {
              discount = pricePerUnit * quantity;
            }
            break;
          case 3:
            if (this.state.cart[item].quantity % 2 !== 1) {
              discount = pricePerUnit * 0.5 * quantity;
            }
            break;
          case 4:
            discount = (quantity / 2) * pricePerUnit;
            break;
          default:
        }
      }

      this.setState(
        prevState => ({
          ...prevState,
          cart: {
            ...prevState.cart,
            [item]: {
              ...prevState.cart[item],
              name: item,
              quantity: (prevState.cart[item].quantity += quantity),
              totalPrice:
                prevState.cart[item].quantity *
                prevState.cart[item].pricePerUnit,
              discount: (prevState.cart[item].discount += discount)
            },
            total: {
              ...prevState.cart.total,
              quantity: (prevState.cart.total.quantity += quantity),
              price: (prevState.cart.total.price += quantity * pricePerUnit),
              discount: (prevState.cart.total.discount += discount)
            }
          }
        }),
        () => {
          console.log("current cart updated to=", this.state.cart);
        }
      );
    } else {
      console.log("new item added to cart");

      switch (sale.code) {
        case 1:
          if (quantity % 2 === 0) {
            discount = (pricePerUnit * 0.33 * quantity) / 2;
          }
          break;
        case 2:
          if (quantity % 2 === 0) {
            discount = (pricePerUnit * quantity) / 2;
          }
          break;
        case 3:
          if (quantity % 2 === 0) {
            discount = (pricePerUnit * 0.5 * quantity) / 2;
          }
          break;
        case 4:
          discount = (quantity / 2) * pricePerUnit;
          break;
        default:
      }

      this.setState(
        prevState => ({
          ...prevState,
          cart: {
            ...prevState.cart,
            [item]: {
              ...prevState.cart[item],
              name: item,
              quantity: quantity,
              calByWeight,
              pricePerUnit,
              totalPrice: quantity * pricePerUnit,
              sale,
              discount
            },
            total: {
              ...prevState.cart.total,
              quantity: (prevState.cart.total.quantity += quantity),
              price: (prevState.cart.total.price += quantity * pricePerUnit),
              discount: (prevState.cart.total.discount += discount)
            }
          }
        }),
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

  applyCoupon = () => {
    let final_amount = 0;
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
