const express = require('express')
const app = express()

let redisHost = process.env.REDIS_HOST
let redisPort = process.env.REDIS_PORT

app.get("/", (req, res) => {
    console.log("Success");
    res.send(`Hello World! This is ${process.env.NAME} whose learning about Docker!`)
});

app.get("/redis", (req, res) => {
    console.log("Redis Success");
    res.send(`Connected to ${redisHost} with port: ${redisPort}`)
})

app.listen(3001);