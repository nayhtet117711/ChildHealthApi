const express = require('express')
const routeLoginRegister = require("./routeLoginRegister")
const routeApp = require("./routeApp")
const router = express.Router()

router.use("/accounts", routeLoginRegister)
router.use("/", routeApp)

module.exports = router