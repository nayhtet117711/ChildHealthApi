const express = require("express")
const { expertSystem } = require("../controllers/expertController")

const router = express.Router()

router.use((req, res, next) => {
    // authentication process here
    // if success
    next()
    // if fail res.json(response({ success: false, message: "Username or password does not match!" }))
})

router.get("/", (req, res) => res.send("Welcome to the API."))

router.post("/experts", expertSystem)

module.exports = router