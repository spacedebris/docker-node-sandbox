const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h3>Do it good ?!</h3><h4> listening on port " +port);
});

const port = process.env.PORT || 3000; // if not set default 3000

app.listen(port, () => console.log('listening on port: ', port));