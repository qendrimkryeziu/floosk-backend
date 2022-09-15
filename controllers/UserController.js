const userService = require('../services/user.service')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const emailService = require('../services/email.service')


module.exports = {
    add: async (params) => {
        const {password, name, email} = params;

        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT))

        const result = await userService.insert({
            password: hashedPassword,
            name,
            email,
        })
        const token = jwt.sign({ _id: result._id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12 }, process.env.TOKEN_SECRET )
        emailService.sendRegistrationEmail(email, token)
        return result._id
    },
    login: async (params) => {
        const {email, password } = params

        const user = await userService.findByEmail(email)
        if (!user) {
            throw Error('User does not exist')
        }


        if (!(await bcrypt.compare(password, user.password))) {
            throw Error('Password is incorrect')
        }
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET )

        return {
            message: "Auth successful",
            token: token
        }
    },
    getOneUser: async (params) => {
        const id = params
        
        const user = await userService.findUser(params)
        return user
    }
}