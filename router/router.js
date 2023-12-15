import express from "express"

import { GetHome, PostHome, GetServices, PostServices } from "../controllers/controller.js"

let router = express()

router.get("/:name", GetHome).post("/", PostHome)

router.get("/services", GetServices).post("/services", PostServices)

export { router }