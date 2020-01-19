import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import Cart from "./Cart.js";

export default function(props) {
  const [value, setValue] = useState("");
  const [moneyRecieved, setmoneyRecieved] = useState("");

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

    //some other function here that collects the data for the reciept and handles it

    toast(
      "Transaction Completed! Return to Customer $" +
        -1 *
          (
            props.cart.total.price -
            props.cart.total.discount -
            moneyRecieved
          ).toFixed(2),
      { autoClose: 15000 }
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
        <Button
          className="unnecessary"
          variant="secondary"
          onClick={props.closeCart}
        >
          Close
        </Button>
        <Form onSubmit={handleCheckout} className="form-checkout">
          <Form.Control
            type="number"
            value={moneyRecieved}
            onChange={handleMoneyRecieved}
            step={2}
            placeholder="Money Recieved"
          />
          <Button className="button-checkout" variant="primary" type="submit">
            Checkout
          </Button>
        </Form>
      </Modal.Footer>
    </Modal>
  );
}
