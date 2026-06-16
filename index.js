const express = require('express')

const {connectMongoDb} = require("./connection")

const URL = require("./models/url")

const urlRoute = require("./routes/url")
const userRoute = require("./routes/user")

const app = express();
const PORT = 20011;

connectMongoDb('mongodb://127.0.0.1:27017/shot-url').then(() => console.log('Mongo Db connected'));

app.use(express.json());

app.use("/url" ,urlRoute);
app.use("/user" , userRoute);

app.listen(PORT , ()=> console.log(`Server started at port ${PORT}`));