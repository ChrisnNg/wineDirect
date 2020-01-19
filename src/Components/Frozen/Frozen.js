import React from "react";

import { CardGroup, Button, Carousel } from "react-bootstrap";

import corn from "./corn.jpg";
import nuggets from "./nuggets.jpg";
import tv_dinner from "./tv_dinner.jpg";

import CardBuilder from "../../Helpers/BuildCard.js";

export default function(props) {
  const addToCart = props.addToCart;
  const itemCart = props.itemCart;

  const itemList = [
    {
      item: "corn",
      image: corn,
      pricePerUnit: 5.0,
      sale: {
        code: 1,
        validTill: new Date(Date.UTC(2019, 11, 20, 3, 0, 0)),
        desc: "Buy one Get one 33% off!"
      }
    },
    {
      item: "nuggets",
      image: nuggets,
      pricePerUnit: 4.5,
      calByWeight: true,
      sale: {
        code: 1,
        validTill: new Date(Date.UTC(2019, 11, 20, 3, 0, 0)),
        desc: "Buy one Get one 33% off!"
      }
    },
    {
      item: "tv dinner",
      image: tv_dinner,
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
          <img className="banner" src={nuggets} alt="nuggets" />
          <Carousel.Caption>
            <h3>Frozen</h3>
            <p>Finger licking good.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={corn} alt="corn" />
          <Carousel.Caption>
            <h3>Frozen</h3>
            <p>Eat Healthy. Eat Corn.</p>
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
