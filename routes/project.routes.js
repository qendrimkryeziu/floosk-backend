var express = require('express');
const ProjectController = require('../controllers/ProjectController');
const { jsonResponse } = require('../lib/helper');
const authMiddleware = require('../middlewares/authMiddleware');
var router = express.Router();


router.post('/', authMiddleware, async (req, res) => {
  try {
    const result = await ProjectController.addProject(req.body)
    res.json(jsonResponse(result))
  } catch (err) {
    res.status(404).json(jsonResponse(err.message, false))
  }
});

router.get('/:projectId', async (req, res) => {
  try {
    const {projectId} = req.params
    const result = await ProjectController.getOneProject(projectId)
    res.json(jsonResponse(result))
  } catch (err) {
    res.status(404).json(jsonResponse(err.message, false))
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await ProjectController.getAllProject();
    res.json(jsonResponse(result))
  } catch (err) {
    res.status(404).json(jsonResponse(err.message, false))
  }
});

router.delete('/:projectId', authMiddleware, async (req, res) => {
  try {
    const {projectId} = req.params
    const result = await ProjectController.deleteProject(projectId)
    res.json(jsonResponse(result))
  } catch (err) {
    res.status(404).json(jsonResponse(err.message, false))
  }
});

router.put("/:projectId", authMiddleware, async (req, res) => {
  try {
    console.log(req.params.projectId);
    const result = await ProjectController.updateProject(req.params.projectId, req.body)
    res.json(jsonResponse(result))
  } catch(err) {
    res.status(404).json(jsonResponse(err.message, false))
  }
});

module.exports = router;
