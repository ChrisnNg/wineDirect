import React from "react";
import "./Cart.css";

export default function(props) {
  function returnCoupons(couponArray) {
    let html = [];

    couponArray.forEach((coupon, index) => {
      if (coupon) {
        html.push(<span key={index}>#{coupon} </span>);
      }
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
            {item} x {props.itemList[item].quantity}{" "}
            {props.itemList[item].calByWeight ? "lb" : null} at $
            {props.itemList[item].pricePerUnit.toFixed(2)} ea = $
            {(
              props.itemList[item].quantity * props.itemList[item].pricePerUnit
            ).toFixed(2)}
            {props.itemList[item].discount ? (
              <React.Fragment>
                <br />
                {"    "}
                <span className="text-muted indent">
                  {"Saved $" + props.itemList[item].discount.toFixed(2)}
                </span>
              </React.Fragment>
            ) : null}
          </article>
        );
        key += 1;
      }
    }

    return <div>{html}</div>;
  }

  return (
    <div>
      <section className="cart">{generateHTML()}</section>

      <p>
        Total # Items: {props.itemList.total.quantity} <br />
        Subtotal: ${props.itemList.total.price.toFixed(2)}
        <br />
        Coupons Applied: {returnCoupons(props.coupons)}
        <br />
        Grand Total: $
        {(props.itemList.total.price - props.itemList.total.discount).toFixed(
          2
        )}
      </p>
    </div>
  );
}
