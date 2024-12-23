import { instance } from "../Razorpay.js";
export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };

  const order = await instance.orders.create(options);

  res.json({ order });
  console.log(order);
};
