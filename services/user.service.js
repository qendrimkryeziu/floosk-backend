const userModel = require('../models/userModel')


module.exports = {
    insert: async (values) => {
        const result = await userModel.create(values)
        return result
    },
    findByEmail: async (email) => {
        const result = await userModel.findOne({ email })
        return result
    },
    findUser: async (id) => {
        const result = await userModel.findById(id).select("name email")
        return result
    },
}