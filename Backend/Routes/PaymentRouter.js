import express from "express";
import {
  checkout,
  paymentVerification,
} from "../Controller/PaymentController.js";

const Router = express.Router();

Router.post("/checkout", checkout);
Router.post("/paymentVerification", paymentVerification);

export default Router;
