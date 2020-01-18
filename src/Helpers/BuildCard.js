import React from "react";

import { Card } from "react-bootstrap";

function BuildCard(props) {
  function firstToUpper(string) {
    return string.charAt(0).toUpperCase() + string.substr(1);
  }

  return (
    <Card
      body={false}
      onClick={() => {
        props.clickEvent(
          firstToUpper(props.item),
          1,
          props.calByWeight,
          props.pricePerUnit
        );
      }}
    >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{firstToUpper(props.item)}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default function CardBuilder(itemList, clickEvent) {
  const html = [];
  let count = 0;
  for (const item of itemList) {
    html.push(
      <BuildCard
        key={count}
        item={item.item}
        image={item.image}
        clickEvent={clickEvent}
        pricePerUnit={item.pricePerUnit}
        calByWeight={item.calByWeight}
      />
    );
    count++;
  }
  return html;
}
