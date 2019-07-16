const { response } = require("../generic")
const engine = require("../logics/ruleEngine")

const expertSystem = (req, res) => {
    const symptons = req.body.symptions
    
    res.json(response({ 
        payload: engine.run(symptons)
    }))
}

module.exports = { 
    expertSystem 
}