import express from "express"
import bodyParser from "body-parser";

import { router } from "./router/router.js"

const PORT = 3201;

let app = express()

// using middlewares

// for reading json in routes
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)

// app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`Server is successfully Running on port : ${PORT}`)
})

// http:localhost:3201?name="amey"