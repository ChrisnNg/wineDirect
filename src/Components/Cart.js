import React from "react";

export default function(props) {
  console.log("props from cart", props);

  function returnCoupons(couponArray) {
    let html = [];

    couponArray.map((coupon, index) => {
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
            {item} x {props.itemList[item].quantity} at $
            {props.itemList[item].pricePerUnit}ea = $
            {props.itemList[item].quantity * props.itemList[item].pricePerUnit}
            {props.itemList[item].discount ? (
              <React.Fragment>
                <br />{" "}
                <span className="text-muted">
                  {"Saved $" + props.itemList[item].discount}
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
      {generateHTML()}
      <br />
      Total # Items:{props.itemList.total.quantity}
      <br />
      Subtotal: {props.itemList.total.price}
      <br />
      Coupons Applied: {returnCoupons(props.coupons)}
      <br />
      Grand Total: {props.itemList.total.price - props.itemList.total.discount}
    </div>
  );
}
