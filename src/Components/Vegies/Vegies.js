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
      pricePerUnit: 5.0,
      sale: {
        code: 1,
        validTill: new Date(Date.UTC(2019, 11, 20, 3, 0, 0)),
        desc: "Buy one Get one 33% off!"
      }
    },
    {
      item: "avocado",
      image: avocado,
      pricePerUnit: 4.5,
      calByWeight: true,
      sale: {
        code: 1,
        validTill: new Date(Date.UTC(2019, 11, 20, 3, 0, 0)),
        desc: "Buy one Get one 33% off!"
      }
    },
    {
      item: "carrot",
      image: carrot,
      pricePerUnit: 2.15,
      sale: {
        code: 2,
        validTill: new Date(Date.UTC(2019, 12, 20, 3, 0, 0)),
        desc: "Buy one Get one Free!"
      }
    },
    {
      item: "lettuce",
      image: lettuce,
      pricePerUnit: 2.0,
      sale: {
        code: 3,
        validTill: new Date(Date.UTC(2012, 10, 20, 3, 0, 0)),
        desc: "Buy one Get one 50% off!"
      }
    },
    {
      item: "eggplant",
      image: eggplant,
      pricePerUnit: 4.0,
      sale: {
        code: 3,
        validTill: new Date(Date.UTC(2020, 11, 20, 3, 0, 0)),
        desc: "Buy one Get one 50% off!"
      }
    },
    {
      item: "broccoli",
      image: broccoli,
      pricePerUnit: 3.0,
      sale: {
        code: 4,
        validTill: new Date(Date.UTC(2021, 11, 20, 3, 0, 0)),
        desc: "50% off all!"
      }
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
