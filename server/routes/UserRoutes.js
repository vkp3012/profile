const express = require("express");
const userRouter = express.Router();
const { signup, login, logout } = require("../controllers/authController.js")
const { getUser,allUser } = require("../controllers/UserController")

userRouter
    .route("/signup")
    .post(signup)

userRouter
    .route("/login")
    .post(login)

userRouter
    .route("/logout")
    .get(logout)

userRouter
    .route('/profile')
    .get(getUser)

userRouter
    .route('/')
    .get(allUser)

module.exports = userRouter;