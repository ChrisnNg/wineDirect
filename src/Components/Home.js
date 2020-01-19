import React from "react";
import "./Home.css";

import { CardGroup, Card, Carousel } from "react-bootstrap";
import veggie from "../Assets/pile-of-veggies.png";
import dairy from "../Assets/Eggs-milk-and-cheese.jpg";
import meat from "../Assets/meat-seafood.jpg";
import pantry from "../Assets/pantry-food.png";
import frozen from "../Assets/frozen-food.jpg";
import bread from "../Assets/bread.jpg";

export default function(props) {
  function handleClick(item) {
    props.trigger(item);
  }

  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img
            className="banner"
            src={veggie}
            alt="veggie"
            onClick={() => handleClick("Fruits and Vegetables")}
          />
          <Carousel.Caption>
            <h3>Vegetables</h3>
            <p>Healthy. Organic. Fresh.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner"
            src={dairy}
            alt="dairy"
            onClick={() => handleClick("Dairy and Eggs")}
          />
          <Carousel.Caption>
            <h3>Dairy</h3>
            <p>Calcium.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner"
            src={meat}
            alt="meat"
            onClick={() => handleClick("Meat and Seafood")}
          />
          <Carousel.Caption>
            <h3>Meat</h3>
            <p>Taste Protein.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner"
            src={pantry}
            alt="pantry"
            onClick={() => handleClick("Pantry Food")}
          />
          <Carousel.Caption>
            <h3>Snacks</h3>
            <p>Have a break, have a kitkat</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner"
            src={frozen}
            alt="frozen"
            onClick={() => handleClick("Frozen Food")}
          />
          <Carousel.Caption>
            <h3>Frozen</h3>
            <p>Ready to eat when you are</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner"
            src={bread}
            alt="bread"
            onClick={() => handleClick("Bread")}
          />
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
        <Card body={false} onClick={() => handleClick("Dairy and Eggs")}>
          <Card.Img variant="top" src={dairy} />
          <Card.Body>
            <Card.Title>Dairy and Eggs</Card.Title>
          </Card.Body>
        </Card>
        <Card body={false} onClick={() => handleClick("Meat and Seafood")}>
          <Card.Img variant="top" src={meat} />
          <Card.Body>
            <Card.Title>Meat and Seafood</Card.Title>
          </Card.Body>
        </Card>
        <Card body={false} onClick={() => handleClick("Pantry Food")}>
          <Card.Img variant="top" src={pantry} />
          <Card.Body>
            <Card.Title>Pantry Food</Card.Title>
          </Card.Body>
        </Card>
        <Card body={false} onClick={() => handleClick("Frozen Food")}>
          <Card.Img variant="top" src={frozen} />
          <Card.Body>
            <Card.Title>Frozen Food</Card.Title>
          </Card.Body>
        </Card>
        <Card body={false} onClick={() => handleClick("Bread")}>
          <Card.Img variant="top" src={bread} />
          <Card.Body>
            <Card.Title>Bread</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </section>
  );
}
