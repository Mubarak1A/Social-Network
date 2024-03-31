const { generateToken } = require('../helpers/tokens')
const { validateEmail, validateLength, validateUsername } = require('../helpers/validation')
const User = require('../models/user')
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            username,
            email,
            password,
            gender,
            byear,
            bmonth,
            bday
        } = req.body

        if (!validateEmail(email)) {
            return res.status(400).json({message : "Invalid email address!"})
        }
        
        const check_email = await User.findOne({email})
        if (check_email) {
            return res.status(400).json({message : "Email already used by another user!"})
        }

        if (!validateLength(first_name, 3, 20)) {
            return res.status(400).json({message : "First name length must be between 3 to 20"})
        }

        if (!validateLength(last_name, 3, 20)) {
            return res.status(400).json({message : "Last name length must be between 3 to 20"})
        }

        if (!validateLength(password, 6, 20)) {
            return res.status(400).json({message : "Password length must be between 6 to 20"})
        }

        const crypt_password = await bcrypt.hash(password, 12)

        let tempUsername = first_name + last_name
        let newUsername = await validateUsername(tempUsername)
    
        const user = await new User({
            first_name,
            last_name,
            username : newUsername,
            email,
            password : crypt_password,
            gender,
            byear,
            bmonth,
            bday
        }).save()

        const emailVerificationToken = generateToken({id:user._id.toString()}, '30m');

        console.log(emailVerificationToken)
    
        res.json(user)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}