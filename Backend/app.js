import express from "express";
import cors from "cors";
export const app = express();

import PaymentRouter from "./Routes/PaymentRouter.js";

app.use(cors());
app.use(express.json());

app.use("/api", PaymentRouter);

app.get("/api/getKey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_KEY });
});
