import React from "react";

export default function(props) {
  console.log("props from cart", props);

  function returnCoupons(couponArray) {
    let html = [];

    couponArray.map((coupon, index) => {
      html.push(<span key={index}>{coupon} </span>);
    });
    return html;
  }

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
      <br />
      Total: {props.itemList.total.price - props.itemList.total.discount}
      <br />
      Coupons Applied: {returnCoupons(props.coupons)}
    </div>
  );
}
