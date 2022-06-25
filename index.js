const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
dotenv.config();
var cors = require('cors')
mongoose.connect(process.env.MONGO_URL).
    then(() => { console.log("db connection success") })
    .catch((err) => { console.log(err); });


//route s
app.use(express.json());
app.use(cors());
app.use("/api/products", productRoute);
app.use("/api/oders", orderRoute);

//route e

app.listen(process.env.PORT||5000, () => {
    console.log("Backend server from 5000");
})