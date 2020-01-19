import React from "react";

import { CardGroup, Button, Carousel } from "react-bootstrap";

import chicken from "./chicken.jpg";
import ribeye from "./Ribeye.jpeg";
import steak from "./steak.jpg";

import CardBuilder from "../../Helpers/BuildCard.js";

export default function(props) {
  const addToCart = props.addToCart;
  const itemCart = props.itemCart;

  const itemList = [
    {
      item: "chicken",
      image: chicken,
      pricePerUnit: 5.0,
      sale: {
        code: 1,
        validTill: new Date(Date.UTC(2019, 11, 20, 3, 0, 0)),
        desc: "Buy one Get one 33% off!"
      }
    },
    {
      item: "ribeye",
      image: ribeye,
      pricePerUnit: 4.5,
      calByWeight: true,
      sale: {
        code: 1,
        validTill: new Date(Date.UTC(2019, 11, 20, 3, 0, 0)),
        desc: "Buy one Get one 33% off!"
      }
    },
    {
      item: "steak",
      image: steak,
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
          <img className="banner" src={chicken} alt="chicken" />
          <Carousel.Caption>
            <h3>Meat</h3>
            <p>Chicken (nuggets?).</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={steak} alt="steak" />
          <Carousel.Caption>
            <h3>Meat</h3>
            <p>Eat Tasty. Eat rare.</p>
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
