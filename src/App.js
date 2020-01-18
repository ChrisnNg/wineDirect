import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardDeck, Card } from "react-bootstrap";
import Nav from "./Components/Nav.js";

import veggie from "./Assets/pile-of-veggies.png";
import dairy from "./Assets/Eggs-milk-and-cheese.jpg";
import meat from "./Assets/meat-seafood.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <CardDeck>
          <Card body={false}>
            <Card.Img variant="top" src={veggie} />
            <Card.Body>
              <Card.Title>Fruits and Vegetables</Card.Title>
            </Card.Body>
          </Card>
          <Card body={false}>
            <Card.Img variant="top" src={dairy} />
            <Card.Body>
              <Card.Title>Dairy and Eggs</Card.Title>
            </Card.Body>
          </Card>
          <Card body={false}>
            <Card.Img variant="top" src={meat} />
            <Card.Body>
              <Card.Title>Meat and Seafood</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default App;
