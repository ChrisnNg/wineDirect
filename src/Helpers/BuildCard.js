import React, { useState } from "react";

import { Card, Form, Button, Badge } from "react-bootstrap";

function firstToUpper(string) {
  return string.charAt(0).toUpperCase() + string.substr(1);
}

function BuildCard(props) {
  console.log("build card props=", props);
  const [value, setValue] = useState(props.currentQuantity);

  function handleSubmit(event) {
    event.preventDefault();

    props.addItem(
      firstToUpper(props.item),
      parseFloat(value),
      props.calByWeight,
      props.pricePerUnit
    );
  }

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <Card body={false}>
      <Card.Img
        variant="top"
        src={props.image}
        onClick={() => {
          props.addItem(
            firstToUpper(props.item),
            1,
            props.calByWeight,
            props.pricePerUnit
          );
        }}
      />
      <Card.Body>
        <Card.Title>
          {firstToUpper(props.item)}
          {props.sale && (
            <Badge className="badge-sale" variant="secondary">
              Sale!
            </Badge>
          )}
        </Card.Title>
      </Card.Body>
      <Card.Footer className="text-muted">
        {props.currentQuantity.toFixed(2)} <br />
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="number"
            value={value}
            onChange={handleChange}
            step={"any"}
          />
          <Button variant="primary" type="submit" className="form-add">
            <i className="fas fa-plus" />
          </Button>
        </Form>
      </Card.Footer>
    </Card>
  );
}

export default function CardBuilder(itemList, addItem, itemCart) {
  const html = [];
  let count = 0;

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
        currentQuantity={
          itemCart[firstToUpper(item.item)]
            ? itemCart[firstToUpper(item.item)].quantity
            : 0
        }
        sale={item.sale}
      />
    );
    count++;
  }
  return html;
}
