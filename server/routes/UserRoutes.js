const express = require("express");
const userRouter = express.Router();
const { signup } = require("../controllers/authController.js")

userRouter
    .route("/signup")
    .post(signup)

module.exports = userRouter;