const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const mongoose = require("mongoose");
const userRouter = require("./route/user");
mongoose.set("strictQuery", true);
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);


app.get("/", (req, res) => {
  res.send("Welcome to adobe");
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on port ${PORT}`);
});
