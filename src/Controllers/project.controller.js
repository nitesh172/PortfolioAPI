const express = require("express")

const router = express.Router()

const Project = require("../Models/project.model")

router.get("", async (req, res) => {
  try {
      redis.get("Project", async (err, value) => {
        if (err) console.log(err.message)

        if (value) {
          value = JSON.parse(value)
          res.status(201).send(value)
        } else {
          try {
            const projects = await Project.find().lean().exec()
            redis.set("Project", JSON.stringify(projects))
            return res.status(200).send(projects)
          } catch (err) {
            res.status(500).send(err.message)
          }
        }
      })
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
})

router.post("", async (req, res) => {
  try {
    const project = await Project.create(req.body)
    redis.get("Project", async (err, value) => {
      if (err) console.log(err)

      if (value) {
        value = JSON.parse(value)
        redis.set("Project", JSON.stringify([...value, project]))
      } else {
        value = await Project.find().lean().exec()
        redis.set("Project", JSON.stringify(value))
      }
    })

    return res.status(201).send(project)
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
})

module.exports = router
