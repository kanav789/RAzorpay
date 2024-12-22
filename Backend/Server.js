import { app } from "./app.js";

import dotenv from "dotenv";
dotenv.config();
const Port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("helllo");
});
app.listen(Port, () => {
  console.log(`Server is Running on port no. ${Port}`);
});
