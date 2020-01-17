import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function(props) {
  return (
    <Navbar bg="dark">
      <Navbar.Brand href="#home">
        <img
          src={require("../logo.svg")}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Navbar>
  );
}
