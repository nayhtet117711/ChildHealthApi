const fs = require("fs")
const path = require("path")

const operators = {
    equal: "=",
    greaterThan: ">",
    greaterThanEqual: ">=",
    lessThan: "<",
    lessThanEqual: "<=",
    between: "><",
    betweenInclusive: ">=<=",
}

const run = (symptons) => {
    const rulesRaw = fs.readFileSync(path.join(__dirname, "dengue_virous_infection.json"))
    const rules = JSON.parse(rulesRaw)

    // const symptons1 = [
    //     {
    //         name: "High fever days",
    //         value: 4
    //     }
    // ]
    // const symptons2 = [
    //     {
    //         "name": "Bleeding from gums and nose"
    //     },
    //     {
    //         "name": "Black , tarry stools"
    //     }
    // ]
    // const symptons3 = [
    //     {
    //         "name": "Cold or clammy skin"
    //     },
    //     {
    //         "name": "Very Weak Blood Pressure"
    //     }
    // ]

    const result = doJob(symptons, rules)

    return ({ result })
}

const doJob = (symptons, rules) => {

    const name = rules.name
    const result = rules.rules.filter(rule=> {
        if(rule.fact.length!==symptons.length) return false
        const stage = rule.stage
        const advice = rule.advice
        const emergency = rule.emergency
        const r = rule.fact.filter(f => {
            const { 
                name, 
                operator=operators.equal,
                value1=true,
                value2=null
            } = f
            const s = symptons.filter(ss => {
                const s = {...ss}
                s.value = s.value===undefined ? true : s.value
                if(s.name!=name) return false
                else if(operator===operators.equal) return s.value === value1
                else if(operator===operators.lessThan) return s.value < value1
                else if(operator===operators.lessThanEqual) return s.value <= value1
                else if(operator===operators.greaterThan) return s.value>value1
                else if(operator===operators.greaterThanEqual) return s.value>=value1
                else if(operator===operators.between) return s.value>value1 && s.value<value2
                else if(operator===operators.betweenInclusive) return s.value>=value1 && s.value<=value2
                else return false
            })
            return s.length>0
        })
        return r.length===rule.fact.length
    })
    if(result.length>0) {
        return ({ name, result })
    } else return null
}

module.exports = { run }