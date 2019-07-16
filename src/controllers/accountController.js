const { response } = require("../generic")

const login = (req, res) => {
    const loginAccount = {
        username: req.body.username,
        password: req.body.password
    }
    const userAccount = {
        username: "nayhtet",
        name: "Nay Htet Zaw",
        phone: "09421747994",
    }
    res.json(response({  
        payload: { userAccount }
    }))
}

const register = (req, res) => {
    const newAccount = {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        phone: req.body.phone,
    }
    res.json(response({ 
        message: "Your user account is created.", 
        payload: { next: "/accouts/login" }
    }))
}

module.exports = { 
    login, 
    register 
}