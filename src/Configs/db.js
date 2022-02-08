
const mongoose = require("mongoose")

const connection = () => {
  return mongoose
    .connect(
      "mongodb+srv://nitesh2:swuEcPtlt5yueTbg@cluster0.ysl3a.mongodb.net/Portfolio"
    )
    .then(() => {
      console.log("Connected")
    })
}

module.exports = connection