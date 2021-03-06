import React from "react";
import "./Nav.css";
import { Nav, Navbar, Badge } from "react-bootstrap";

export default function(props) {
  return (
    <Navbar bg="dark">
      <Navbar.Brand
        onClick={() => {
          props.handleClick();
        }}
      >
        <img
          src={require("./Walmart_logo.svg")}
          width="90"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <i className="fas fa-shopping-cart" onClick={props.openCart}>
          <Badge className="cart-count" variant="primary">
            {props.count.toFixed(0)}
          </Badge>
        </i>
      </Nav>
    </Navbar>
  );
}
