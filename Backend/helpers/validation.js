const User = require("../models/user")

exports.validateEmail = (email) => {
    return String(email).toLowerCase().match(/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/
    )
}

exports.validateLength = (text, min, max) => {
    if (text.length > max || text.length < min) {
        return false
    }
    return true
}

exports.validateUsername = async (username) => {
    let a = false

    do {
        let check = await User.findOne({username})
        if (check) {
            username += (+new Date() * Math.random()).toString().substring(0,1)
            a = true
        }
        else {
            a = false
        }
    } while (a);
    return username;
}