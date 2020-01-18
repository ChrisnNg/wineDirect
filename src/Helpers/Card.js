import React from "react";
import { CardDeck, Card } from "react-bootstrap";

export default function(props) {
  return (
    <Card body={false} onClick={() => props.onClick}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
