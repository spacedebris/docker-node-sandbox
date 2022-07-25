const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config");

const app = express();
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
    mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useFindAndModify: false
    })
    .then(() => console.log('connected 2 mongo'))
    .catch((e) => {
        console.log(e);
        setTimeout(connectWithRetry, 5000);
    });
}

connectWithRetry();


app.get("/", (req, res) => {
    res.send("<h3>Do it good ?!</h3><h4> listening on port " +port);
});

const port = process.env.PORT || 3000; // if not set default 3000

app.listen(port, () => console.log('listening on port: ', port));