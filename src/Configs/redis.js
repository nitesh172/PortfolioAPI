const redis = require("redis")

const client = redis.createClient({
  url: "redis://:pce3545ef89e27147594d3ad12e7796898c519c982693099f056d5e0c013fb862@ec2-3-86-135-225.compute-1.amazonaws.com:31699",
})

client.on("connect", (err) => {
  if (err) console.log(err.message)
  console.log("Connected!")
})

module.exports = client
