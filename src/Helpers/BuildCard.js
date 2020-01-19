import React, { useState } from "react";

import { Card, Form, Button, Badge } from "react-bootstrap";

function firstToUpper(string) {
  return string.charAt(0).toUpperCase() + string.substr(1);
}

function BuildCard(props) {
  const [value, setValue] = useState(props.currentQuantity);

  function handleSubmit(event) {
    event.preventDefault();

    props.addItem(
      firstToUpper(props.item),
      parseFloat(value),
      props.calByWeight,
      props.pricePerUnit,
      props.sale
    );
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  const options = {
    month: "short",
    day: "numeric"
  };

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
            props.pricePerUnit,
            props.sale
          );
        }}
      />
      <Card.Body>
        <Card.Title>
          {firstToUpper(props.item)}
          {props.sale && props.sale.validTill - Date.now() >= 0 && (
            <React.Fragment>
              <Badge className="badge-sale-tag" variant="secondary">
                Sale!
              </Badge>
              <Badge className="badge-sale-expiration" variant="primary">
                Until{" "}
                {props.sale.validTill.toLocaleDateString(undefined, options)}
              </Badge>
              <br />
              <span className="card-shift-up">{props.sale.desc}</span>

              <br />
            </React.Fragment>
          )}
        </Card.Title>
      </Card.Body>
      <Card.Footer className="text-muted card-shift-up">
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
