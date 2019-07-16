const response = ({ success=true, message="Success", payload=null }) => ({ success, message, payload })

module.exports = { response }