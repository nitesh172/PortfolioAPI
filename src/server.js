const app = require("./index")
const db = require("./Configs/db")
const port = process.env.PORT || 2001

app.listen(port, () => {
    try {
        console.log(`Running on Port ${port}`)
        db()
    } catch (error) {
        console.log(error.message)
    }
})