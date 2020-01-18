import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";

export default function(props) {
  console.log("veggie props=", props);

  return (
    <section>
      <div>vegie section</div>
      <Button onClick={() => props.goHome()}>Return</Button>
    </section>
  );
}
