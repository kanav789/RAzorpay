import express from "express";
import { checkout } from "../Controller/PaymentController.js";

const Router = express.Router();

Router.post("/checkout", checkout);

export default Router;
