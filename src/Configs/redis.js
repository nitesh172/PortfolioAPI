const redis = require("redis")

const client = redis.createClient({
  url: "redis://:p25acb2c6d74fa002a6b0e5a9903d594dce6aaac451d8e3b22d2ee0a4fa26a8ef@ec2-3-92-109-15.compute-1.amazonaws.com:23739",
})

client.on("connect", (err) => {
  if (err) console.log(err.message)
  console.log("Connected!")
})

module.exports = client
