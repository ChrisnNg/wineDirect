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
  const addToCart = props.addToCart;

  const itemList = [
    {
      item: "spinach",
      image: spinach,
      clickEvent: addToCart,
      pricePerUnit: 5.0
    },
    {
      item: "avocado",
      image: avocado,
      clickEvent: addToCart,
      pricePerUnit: 4.5
    },
    {
      item: "carrot",
      image: carrot,
      clickEvent: addToCart,
      pricePerUnit: 2.15
    },
    {
      item: "lettuce",
      image: lettuce,
      clickEvent: addToCart,
      pricePerUnit: 2.0
    },
    {
      item: "eggplant",
      image: eggplant,
      clickEvent: addToCart,
      pricePerUnit: 4.0
    },
    {
      item: "broccoli",
      image: broccoli,
      clickEvent: addToCart,
      pricePerUnit: 3.0
    }
  ];

  function CardBuilder(itemList) {
    const html = [];
    let count = 0;
    for (const item of itemList) {
      html.push(
        <BuildCard
          key={count}
          item={item.item}
          image={item.image}
          clickEvent={addToCart}
          pricePerUnit={[item].pricePerUnit}
        />
      );
      count++;
    }
    return html;
  }

  return (
    <section>
      <div>Vegie section</div>
      <Button onClick={() => props.goHome()}>Return</Button>

      <CardDeck>{CardBuilder(itemList)}</CardDeck>
    </section>
  );
}
