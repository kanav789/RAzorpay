import React from "react";
import axios from "axios";
import Card from "./Card.jsx";
function Home() {
  const checkoutHandler = async (amount) => {
    try {
      const {
        data: { key },
      } = await axios.get("http://localhost:8080/api/getkey");

      const {
        data: { order },
      } = await axios.post("http://localhost:8080/api/checkout", {
        amount,
      });

      const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "kanav Kumar Rana",
        description: "Test Transaction",
        image:
          "https://avatars.githubusercontent.com/u/106293653?s=400&u=303436d211b34380b07e9be3e3175e8b604cc0b4&v=4o",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "https://localhost:8080/api/paymentVerification",
        prefill: {
          name: "kanav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();


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
