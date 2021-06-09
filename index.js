const express = require('express')
const app = express()

app.get("/", (req, res) => {
    console.log("Success");
    res.send("Hello World! This is Adhim whose learning about Docker!")
});

app.listen(3000);