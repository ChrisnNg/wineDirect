import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import Cart from "./Cart.js";

export default function(props) {
  const [value, setValue] = useState("");
  const [moneyRecieved, setmoneyRecieved] = useState("");

  console.log("cart-props=", props);

  function handleSubmit(event) {
    event.preventDefault();
    props.applyCoupon(value);
    setValue("");
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleMoneyRecieved(event) {
    setmoneyRecieved(event.target.value);
  }

  function handleCheckout(event) {
    event.preventDefault();

    toast(
      "Return to Customer $" +
        -1 *
          (
            props.cart.total.price -
            props.cart.total.discount -
            moneyRecieved
          ).toFixed(2)
    );
  }
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Cart itemList={props.cart} coupons={props.appliedCoupons} />
        <Form onSubmit={handleSubmit} className="form-coupon">
          <Form.Control
            type="number"
            value={value}
            onChange={handleChange}
            step={"any"}
            placeholder="Coupon Code"
          />
          <Button variant="primary" type="submit" className="button-coupon">
            <i className="fas fa-plus" />
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

        <Form onSubmit={handleCheckout} className="form-coupon">
          <Form.Control
            type="number"
            value={moneyRecieved}
            onChange={handleMoneyRecieved}
            step={2}
            placeholder="Money Recieved"
          />
          <Button variant="primary" type="submit">
            Checkout
          </Button>
        </Form>
      </Modal.Footer>
    </Modal>
  );
}
