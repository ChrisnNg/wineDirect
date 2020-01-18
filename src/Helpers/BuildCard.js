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

export default function CardBuilder(itemList, addItem) {
  const html = [];
  let count = 0;

  function setWeight(item) {
    console.log("add weight function called for ", item);
  }

  for (const item of itemList) {
    if (item.calByWeight) {
      console.log("cal by weight for ", item);
    }

    html.push(
      <BuildCard
        key={count}
        item={item.item}
        image={item.image}
        clickEvent={item.calByWeight ? setWeight : addItem}
        pricePerUnit={item.pricePerUnit}
        calByWeight={item.calByWeight}
      />
    );
    count++;
  }
  return html;
}
