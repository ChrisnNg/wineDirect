import React from "react";

export default function(props) {
  console.log(props);

  function generateHTML() {
    const html = [];
    let key = 0;
    for (const item in props.itemList) {
      if (item !== "total") {
        html.push(
          <article key={key}>
            {item} x {props.itemList[item].quantity} at $
            {props.itemList[item].pricePerUnit}ea = $
            {props.itemList[item].quantity * props.itemList[item].pricePerUnit}
            {props.itemList[item].discount
              ? "Discount offered " + props.itemList[item].discount
              : null}
          </article>
        );
        key += 1;
      }
    }

    return <div>{html}</div>;
  }

  return (
    <div>
      {generateHTML()}
      <br />
      Total # Items:{props.itemList.total.quantity}
      <br />
      Subtotal: {props.itemList.total.price}
      Total: {props.itemList.total.price - props.itemList.total.discount}
    </div>
  );
}
