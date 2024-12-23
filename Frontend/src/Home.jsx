import React from "react";
import axios from "axios";
import Card from "./Card.jsx";
function Home() {
  const checkoutHandler = async (amount) => {
    try {
      const response = await axios.post("http://localhost:8080/api/checkout", {
        amount,
      });

      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Card amount={2000} checkoutHandler={checkoutHandler} />
    </div>
  );
}

export default Home;
