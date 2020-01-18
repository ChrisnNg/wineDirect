import React from "react";

import { Card } from "react-bootstrap";

function firstToUpper(string) {
  return string.charAt(0).toUpperCase() + string.substr(1);
}

function BuildCard(props) {
  return (
    <Card
      body={false}
      onClick={() => {
        props.calByWeight
          ? props.setWeight(
              firstToUpper(props.item),
              5,
              props.calByWeight,
              props.pricePerUnit
            )
          : props.addItem(
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
      <Card.Footer className="text-muted">{props.currentQuantity}</Card.Footer>
    </Card>
  );
}

export default function CardBuilder(itemList, addItem, itemCart) {
  const html = [];
  let count = 0;

  function setWeight(item, weight, calByWeight, pricePerUnit) {
    console.log("add weight function called for ", item, "at weight=", weight);

    addItem(item, weight, calByWeight, pricePerUnit);
  }

  for (const item of itemList) {
    if (itemCart[item]) {
      console.log(itemCart[item]);
    }

    console.log(firstToUpper(item.item));

    html.push(
      <BuildCard
        key={count}
        item={item.item}
        image={item.image}
        addItem={addItem}
        pricePerUnit={item.pricePerUnit}
        calByWeight={item.calByWeight}
        setWeight={setWeight}
        currentQuantity={
          itemCart[firstToUpper(item.item)]
            ? itemCart[firstToUpper(item.item)].quantity
            : 0
        }
      />
    );
    count++;
  }
  return html;
}
