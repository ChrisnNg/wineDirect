import React from "react";

import { CardGroup, Button, Carousel } from "react-bootstrap";

import cheese from "./cheese.jpg";
import milk from "./milk.jpg";
import eggs from "./eggs.jpg";

import CardBuilder from "../../Helpers/BuildCard.js";

export default function(props) {
  const addToCart = props.addToCart;
  const itemCart = props.itemCart;

  const itemList = [
    {
      item: "cheese",
      image: cheese,
      pricePerUnit: 5.0,
      sale: {
        code: 1,
        validTill: new Date(Date.UTC(2019, 11, 20, 3, 0, 0)),
        desc: "Buy one Get one 33% off!"
      }
    },
    {
      item: "milk",
      image: milk,
      pricePerUnit: 4.5,
      calByWeight: true,
      sale: {
        code: 1,
        validTill: new Date(Date.UTC(2019, 11, 20, 3, 0, 0)),
        desc: "Buy one Get one 33% off!"
      }
    },
    {
      item: "eggs",
      image: eggs,
      pricePerUnit: 2.15,
      calByWeight: true,
      sale: {
        code: 2,
        validTill: new Date(Date.UTC(2019, 12, 20, 3, 0, 0)),
        desc: "Buy one Get one Free!"
      }
    }
  ];

  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img className="banner" src={cheese} alt="cheese" />
          <Carousel.Caption>
            <h3>Dairy</h3>
            <p>Cheesey and Holey.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={milk} alt="milk" />
          <Carousel.Caption>
            <h3>Dairy</h3>
            <p>Milky.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Button className="back-btn" onClick={() => props.goHome()}>
        <i className="fas fa-chevron-left" />
      </Button>

      <CardGroup className="align-center narrow">
        {CardBuilder(itemList, addToCart, itemCart)}
      </CardGroup>
    </section>
  );
}
