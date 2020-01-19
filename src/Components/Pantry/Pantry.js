import React from "react";

import { CardGroup, Button, Carousel } from "react-bootstrap";

import lays from "./lays.jpg";
import miracle from "./miracle.jpg";

import CardBuilder from "../../Helpers/BuildCard.js";

export default function(props) {
  const addToCart = props.addToCart;
  const itemCart = props.itemCart;

  const itemList = [
    {
      item: "lays",
      image: lays,
      pricePerUnit: 5.0,
      sale: {
        code: 2,
        validTill: new Date(Date.UTC(2019, 12, 20, 3, 0, 0)),
        desc: "Buy one Get one Free!"
      }
    },
    {
      item: "miracle",
      image: miracle,
      pricePerUnit: 4.5,
      calByWeight: true,
      sale: {
        code: 1,
        validTill: new Date(Date.UTC(2019, 11, 20, 3, 0, 0)),
        desc: "Buy one Get one 33% off!"
      }
    }
  ];

  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img className="banner" src={lays} alt="lays" />
          <Carousel.Caption>
            <h3>Pantry</h3>
            <p>Can't stop at one.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={miracle} alt="miracle" />
          <Carousel.Caption>
            <h3>Pantry</h3>
            <p>Add that extra kick.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Button className="back-btn" onClick={() => props.goHome()}>
        <i className="fas fa-chevron-left" />
      </Button>

      <CardGroup className="align-center">
        {CardBuilder(itemList, addToCart, itemCart)}
      </CardGroup>
    </section>
  );
}
