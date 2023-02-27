const express = require("express");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require('./routes/UserRoutes.js');
mongoose.set("strictQuery",true);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/user",userRouter);

const port = process.env.PORT || 5000

const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("MongoDB Connected");
    server.listen(port,()=>{
        console.log(`server is listening on the ${port}`);
    });
}).catch((err)=>{
    console.log({err});
})