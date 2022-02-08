const express = require("express")

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const projectController = require("./Controllers/project.controller")

app.use("/projects", projectController)

module.exports = app