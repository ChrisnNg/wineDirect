import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import Cart from "./Cart.js";

export default function(props) {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.applyCoupon(value);
    setValue("");
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Cart itemList={props.cart} coupons={props.appliedCoupons} />
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="number"
            value={value}
            onChange={handleChange}
            step={"any"}
          />
          <Button variant="secondary" type="submit">
            Apply Coupons
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="align-left"
          variant="danger"
          onClick={props.resetCart}
        >
          Reset Cart
        </Button>
        <Button variant="secondary" onClick={props.closeCart}>
          Close
        </Button>

        <Button variant="primary" onClick={props.closeCart}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
