import { instance } from "../Razorpay.js";
import crypto from "crypto";
export const checkout = async (req, res) => {
  try {
    // Validate request body
    if (!req.body.amount || isNaN(req.body.amount)) {
      return res.status(400).json({ error: "Invalid amount provided" });
    }

    const options = {
      amount: Number(req.body.amount * 100), // Convert amount to smallest unit
      currency: "INR",
    };

    // Create Razorpay order
    const order = await instance.orders.create(options);

    // Respond with the created order
    res.status(200).json({ order });
    console.log("Order created:", order);
  } catch (error) {
    console.error("Error creating order:", error);
    res
      .status(500)
      .json({ error: "Failed to create order. Please try again." });
  }
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
