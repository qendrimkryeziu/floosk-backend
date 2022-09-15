const educationModel = require('../models/educationModel');

module.exports = {
    getOne: async (id) => {
        const result = await educationModel.findById(id)
        return result
    },
    getAll: async () => {
        const result = await educationModel.find({})
        return result
    },
    insert: async (values) => {
        const result = await educationModel.create(values)
        return result
    },
    delete: async (id) => {
        const result = await educationModel.deleteOne({_id: id})
        return result
    },
    update: async (id, data) => {
        const result = await educationModel.findByIdAndUpdate(id, data)
        return result
    }
}