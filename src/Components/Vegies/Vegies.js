import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";

import BuildCard from "../../Helpers/BuildCard.js";

import spinach from "./spinach.jpg";
import avocado from "./avocado.jpg";
import carrot from "./carrot.jpg";
import lettuce from "./lettuce.jpg";
import eggplant from "./eggplant.jpg";
import broccoli from "./broccoli.jpg";

export default function(props) {
  console.log("veggie props=", props);

  function handleClick(item) {
    console.log("click handled", item, props);
    props.addToCart(item, 1);
  }

  return (
    <section>
      <div>Vegie section</div>
      <Button onClick={() => props.goHome()}>Return</Button>

      <CardDeck>
        <Card
          body={false}
          onClick={() => {
            handleClick("Spinach");
          }}
        >
          <Card.Img variant="top" src={spinach} />
          <Card.Body>
            <Card.Title>Spinach</Card.Title>
          </Card.Body>
        </Card>

        <Card
          body={false}
          onClick={() => {
            handleClick("Avocado");
          }}
        >
          <Card.Img variant="top" src={avocado} />
          <Card.Body>
            <Card.Title>Avocado</Card.Title>
          </Card.Body>
        </Card>

        <Card body={false}>
          <Card.Img variant="top" src={carrot} />
          <Card.Body>
            <Card.Title>Carrot</Card.Title>
          </Card.Body>
        </Card>

        <Card body={false}>
          <Card.Img variant="top" src={lettuce} />
          <Card.Body>
            <Card.Title>Carrot</Card.Title>
          </Card.Body>
        </Card>

        <Card body={false}>
          <Card.Img variant="top" src={eggplant} />
          <Card.Body>
            <Card.Title>Eggplant</Card.Title>
          </Card.Body>
        </Card>

        <Card body={false}>
          <Card.Img variant="top" src={broccoli} />
          <Card.Body>
            <Card.Title>Broccoli</Card.Title>
          </Card.Body>
        </Card>

        <BuildCard
          item="eggplant"
          image={eggplant}
          clickEvent={props.addToCart}
        />
      </CardDeck>
    </section>
  );
}
