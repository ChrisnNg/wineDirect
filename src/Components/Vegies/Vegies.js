import React from "react";
import { CardGroup, Button } from "react-bootstrap";

import CardBuilder from "../../Helpers/BuildCard.js";

import spinach from "./spinach.jpg";
import avocado from "./avocado.jpg";
import carrot from "./carrot.jpg";
import lettuce from "./lettuce.jpg";
import eggplant from "./eggplant.jpg";
import broccoli from "./broccoli.jpg";

export default function(props) {
  const addToCart = props.addToCart;
  const itemCart = props.itemCart;

  const itemList = [
    {
      item: "spinach",
      image: spinach,
      pricePerUnit: 5.0
    },
    {
      item: "avocado",
      image: avocado,
      pricePerUnit: 4.5,
      calByWeight: true
    },
    {
      item: "carrot",
      image: carrot,
      pricePerUnit: 2.15
    },
    {
      item: "lettuce",
      image: lettuce,
      pricePerUnit: 2.0
    },
    {
      item: "eggplant",
      image: eggplant,
      pricePerUnit: 4.0
    },
    {
      item: "broccoli",
      image: broccoli,
      pricePerUnit: 3.0
    }
  ];

  return (
    <section>
      <div>Vegie section</div>
      <Button onClick={() => props.goHome()}>Return</Button>

      <CardGroup>{CardBuilder(itemList, addToCart, itemCart)}</CardGroup>
    </section>
  );
}
