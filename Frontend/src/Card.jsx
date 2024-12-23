import React from "react";

function Card({ amount, checkoutHandler }) {
  return (
    <div className="card">
      <div>{amount}</div>
      <button onClick={() => checkoutHandler(amount)}>Buy Now</button>
    </div>
  );
}

export default Card;
