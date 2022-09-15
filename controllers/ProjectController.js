const projectService = require('../services/project.service');

module.exports = {
    getOneProject: async (params) => {
        const id = params
        
        const project = await projectService.findOne(params)
        return project
    },
    getAllProject: async () => {
        const result = await projectService.all()
        return result
    },
    addProject: async (values) => {
        const result = await projectService.insert(values)
        return result
    },
    deleteProject: async (id) => {
        const result = await projectService.delete(id)
        return result
    },
    updateProject: async (id, data) => {
        const result = await projectService.update(id, data)
        return result
    }
}