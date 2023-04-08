const express = require("express");
const { addUser } = require("../controller/user");

const userRouter = express.Router();

userRouter.post("/", addUser);

module.exports = userRouter;
