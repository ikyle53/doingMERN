"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: ".env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// get driver connection
const dbo = request("./db/conn");

app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log('Server is running on port:${port}');
});