import React from "react";
import { CardDeck, Button } from "react-bootstrap";

import spinach from "./spinach.jpg";
import avocado from "./avocado.jpg";
import carrot from "./carrot.jpg";
import lettuce from "./lettuce.jpg";
import eggplant from "./eggplant.jpg";
import broccoli from "./broccoli.jpg";

import Card from "../../Helpers/Card.js";

export default function(props) {
  console.log("veggie props=", props);

  function handleClick() {
    console.log("clicked");
  }

  return (
    <section>
      <div>vegie section</div>
      <Button onClick={() => props.goHome()}>Return</Button>

      <CardDeck>
        <Card
          title="Spinach"
          img={spinach}
          onClick={() => handleClick("Fruits and Vegetables")}
        />

        <Card
          title="Avocado"
          img={avocado}
          onClick={() => handleClick("Fruits and Vegetables")}
        />

        <Card
          title="Carrot"
          img={carrot}
          onClick={() => handleClick("Fruits and Vegetables")}
        />
        <Card
          title="Lettuce"
          img={lettuce}
          onClick={() => handleClick("Fruits and Vegetables")}
        />
        <Card
          title="Eggplant"
          img={eggplant}
          onClick={() => handleClick("Fruits and Vegetables")}
        />
        <Card
          title="Broccoli"
          img={broccoli}
          onClick={() => handleClick("Fruits and Vegetables")}
        />
      </CardDeck>
    </section>
  );
}
