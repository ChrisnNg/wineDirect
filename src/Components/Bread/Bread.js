import React from "react";
import { CardGroup, Button, Carousel } from "react-bootstrap";

import white_rye from "./white_rye.png";
import wheat from "./wheat.jpg";
import sesame_buns from "./sesame_buns.jpg";

import CardBuilder from "../../Helpers/BuildCard.js";

export default function(props) {
  const addToCart = props.addToCart;
  const itemCart = props.itemCart;

  const itemList = [
    {
      item: "white rye",
      image: white_rye,
      pricePerUnit: 5.0,
      sale: {
        code: 1,
        validTill: new Date(Date.UTC(2019, 11, 20, 3, 0, 0)),
        desc: "Buy one Get one 33% off!"
      }
    },
    {
      item: "wheat",
      image: wheat,
      pricePerUnit: 4.5,
      calByWeight: true,
      sale: {
        code: 1,
        validTill: new Date(Date.UTC(2019, 11, 20, 3, 0, 0)),
        desc: "Buy one Get one 33% off!"
      }
    },
    {
      item: "sesame",
      image: sesame_buns,
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
          <img className="banner" src={white_rye} alt="white_rye" />
          <Carousel.Caption>
            <h3>Bread</h3>
            <p>Clean and Rye.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={wheat} alt="wheat" />
          <Carousel.Caption>
            <h3>Bread</h3>
            <p>Eat Healthy. Eat WholeGrain.</p>
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
