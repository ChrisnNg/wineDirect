import React from "react";
import "./Home.css";

import { CardDeck, Card } from "react-bootstrap";
import veggie from "../Assets/pile-of-veggies.png";
import dairy from "../Assets/Eggs-milk-and-cheese.jpg";
import meat from "../Assets/meat-seafood.jpg";
import pantry from "../Assets/pantry-food.png";
import frozen from "../Assets/frozen-food.jpg";
import bread from "../Assets/bread.jpg";

export default function(props) {
  function handleClick(item) {
    console.log("click handled", item, props);
    props.trigger("veggie");
  }

  return (
    <CardDeck>
      <Card body={false} onClick={() => handleClick("Veggies")}>
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
    </CardDeck>
  );
}
