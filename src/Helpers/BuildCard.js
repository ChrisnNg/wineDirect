import React from "react";

import { Card } from "react-bootstrap";

export default function BuildCard(props) {
  function firstToUpper(string) {
    return string.charAt(0).toUpperCase() + string.substr(1);
  }

  return (
    <Card
      body={false}
      onClick={() => {
        props.clickEvent(firstToUpper(props.item), 1);
      }}
    >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{firstToUpper(props.item)}</Card.Title>
      </Card.Body>
    </Card>
  );
}
