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

  return (
    <section>
      <div>Vegie section</div>
      <Button onClick={() => props.goHome()}>Return</Button>

      <CardDeck>
        <BuildCard
          item="spinach"
          image={spinach}
          clickEvent={props.addToCart}
        />

        <BuildCard
          item="avocado"
          image={avocado}
          clickEvent={props.addToCart}
        />

        <BuildCard item="carrot" image={carrot} clickEvent={props.addToCart} />

        <BuildCard
          item="lettuce"
          image={lettuce}
          clickEvent={props.addToCart}
        />

        <BuildCard
          item="eggplant"
          image={eggplant}
          clickEvent={props.addToCart}
        />

        <BuildCard
          item="broccoli"
          image={broccoli}
          clickEvent={props.addToCart}
        />
      </CardDeck>
    </section>
  );
}
