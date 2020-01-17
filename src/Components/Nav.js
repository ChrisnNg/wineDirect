import React from "react";
import "./Nav.css";
import { Nav, Navbar } from "react-bootstrap";

export default function(props) {
  return (
    <Navbar bg="dark">
      <Navbar.Brand href="#home">
        <img
          src={require("./wineglass.png")}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <b>
          {" "}
          <i>WineDirect</i>
        </b>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <i
          className="fas fa-shopping-cart"
          onClick={x => console.log("cart clicked")}
        />
      </Nav>
    </Navbar>
  );
}
