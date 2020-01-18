import React from "react";
import { Modal, Button } from "react-bootstrap";

import Cart from "./Cart.js";

export default function(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Cart itemList={props.cart} />
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
        <Button variant="secondary" onClick={props.applyCoupon}>
          Apply Coupons
        </Button>
        <Button variant="primary" onClick={props.closeCart}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
