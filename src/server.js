require("./db/connection");
const express = require("express");
const userRouter = require ("./user/userRouters")
const dataRouter = require("./data/dataRouters");

const app = express()
const port = process.env.PORT || 5001

app.use(express.json());

app.use(userRouter, dataRouter)

app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})