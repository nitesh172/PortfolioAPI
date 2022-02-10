const mongoose = require("mongoose")

var Schema = mongoose.Schema

var projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    stack: [
      {
        type: String,
        required: true,
      },
    ],
    features: [
      {
        type: String,
        required: true,
      },
    ],
    responsibility: [
      {
        type: String,
        required: true,
      },
    ],
    gitLink: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

var Project = mongoose.model("project", projectSchema)

module.exports = Project
