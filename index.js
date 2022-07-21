const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://spacedebris:spacedebris@172.22.0.2:27017/?authSource=admin"
).then(() => console.log('connected 2 mongo'))
.catch((e) => console.log(e));

app.get("/", (req, res) => {
    res.send("<h3>Do it good ?!</h3><h4> listening on port " +port);
});

const port = process.env.PORT || 3000; // if not set default 3000

app.listen(port, () => console.log('listening on port: ', port));