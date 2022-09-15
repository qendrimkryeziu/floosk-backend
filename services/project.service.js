const projectModel = require('../models/projectModel')

module.exports = {
    findOne: async (id) => {
        const result = await projectModel.findById(id)
        return result
    },
    all: async () => {
        const result = await projectModel.find({})
        return result
    },
    insert: async (values) => {
        const result = await projectModel.create(values)
        return result
    },
    delete: async (id) => {
        const result = await projectModel.deleteOne({ _id: id })
        return result
    },
    update: async (id, data) => {
        const result = await projectModel.findByIdAndUpdate(id, data)
        return result
    }
}