const educationService = require('../services/education.service');

module.exports = {
    getOneEducation: async (id) => {
        const result = await educationService.getOne(id)
        return result
    },
    getAllEducation: async () => {
        const result = await educationService.getAll()
        return result
    },
    addEducation: async (values) => {
        const result = await educationService.insert(values)
        return result
    },
    deleteEducation: async (id) => {
        const result = await educationService.delete(id)
        return result
    },
    updateEducation: async (id, data) => {
        const result = await educationService.update(id, data)
        return result
    },
}