const express = require("express")

const app = express()

const cors = require("cors")

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const projectController = require("./Controllers/project.controller")

app.use("/projects", projectController)

module.exports = app