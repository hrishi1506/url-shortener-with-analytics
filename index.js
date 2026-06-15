const express = require('express')

const {connectMongoDb} = require("./connection")

const urlRoute = require("./routes/url")

const URL = require("./models/url")

const app = express();
const PORT = 4001;

connectMongoDb('mongodb://127.0.0.1:27017/shot-url').then(() => console.log('Mongo Db connected'));

app.use(express.json());

app.use("/url" ,urlRoute);

app.listen(PORT , ()=> console.log(`Server started at port ${PORT}`));