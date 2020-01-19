import React from "react";
import "./Home.css";

import { CardGroup, Card, Carousel, Button } from "react-bootstrap";
import veggie from "../Assets/pile-of-veggies.png";
import dairy from "../Assets/Eggs-milk-and-cheese.jpg";
import meat from "../Assets/meat-seafood.jpg";
import pantry from "../Assets/pantry-food.png";
import frozen from "../Assets/frozen-food.jpg";
import bread from "../Assets/bread.jpg";

export default function(props) {
  function handleClick(item) {
    console.log("click handled", item, props);
    props.trigger(item);
  }

  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img className="banner" src={veggie} alt="veggie" />
          <Carousel.Caption>
            <h3>Vegetables</h3>
            <p>Healthy. Organic. Fresh.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={dairy} alt="dairy" />
          <Carousel.Caption>
            <h3>Dairy</h3>
            <p>Calcium.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={meat} alt="meat" />
          <Carousel.Caption>
            <h3>Meat</h3>
            <p>Taste Protein.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={pantry} alt="pantry" />
          <Carousel.Caption>
            <h3>Snacks</h3>
            <p>Have a break, have a kitkat</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={frozen} alt="frozen" />
          <Carousel.Caption>
            <h3>Frozen</h3>
            <p>Ready to eat when you are</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner" src={bread} alt="bread" />
          <Carousel.Caption>
            <h3>Bread</h3>
            <p>Simple. Delicious</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <CardGroup className="align-center narrow">
        <Card body={false} onClick={() => handleClick("Fruits and Vegetables")}>
          <Card.Img variant="top" src={veggie} />
          <Card.Body>
            <Card.Title>Fruits and Vegetables</Card.Title>
          </Card.Body>
        </Card>
        <Card body={false}>
          <Card.Img variant="top" src={dairy} />
          <Card.Body>
            <Card.Title>Dairy and Eggs</Card.Title>
          </Card.Body>
        </Card>
        <Card body={false}>
          <Card.Img variant="top" src={meat} />
          <Card.Body>
            <Card.Title>Meat and Seafood</Card.Title>
          </Card.Body>
        </Card>
        <Card body={false}>
          <Card.Img variant="top" src={pantry} />
          <Card.Body>
            <Card.Title>Pantry Food</Card.Title>
          </Card.Body>
        </Card>
        <Card body={false}>
          <Card.Img variant="top" src={frozen} />
          <Card.Body>
            <Card.Title>Frozen Food</Card.Title>
          </Card.Body>
        </Card>
        <Card body={false}>
          <Card.Img variant="top" src={bread} />
          <Card.Body>
            <Card.Title>Bread</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </section>
  );
}
