const express = require('express');
const EducationController = require('../controllers/EducationController');
const authMiddleware = require('../middlewares/authMiddleware');
const { jsonResponse } = require('../lib/helper');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
    try {
        const result = await EducationController.addEducation(req.body);
        res.json(jsonResponse(result));
    } catch (err) {
        res.status(404).json(jsonResponse(err.message, false));
    }
});

router.get('/:educationId', async (req, res) => {
    try {
        const {educationId} = req.params;
        const result = await EducationController.getOneEducation(educationId);
        res.json(jsonResponse(result));
    } catch (err) {
        res.status(404).json(jsonResponse(err.message, false));
    }
});

router.get('/', async (req, res) => {
    try {
        const result = await EducationController.getAllEducation();
        res.json(jsonResponse(result));
    } catch (err) {
        res.status(404).json(jsonResponse(err.message, false));
    }
});

router.delete('/:educationId', authMiddleware, async (req, res) => {
    try {
        const {educationId} = req.params;
        const result = await EducationController.deleteEducation(educationId)
        res.json(jsonResponse(result))
    } catch (err) {
        res.status(404).json(jsonResponse(err.message, false));
    }
});

router.put('/:educationId', async (req, res) => {
    try {
        const {educationId} = req.params
        const result = await EducationController.updateEducation(educationId, req.body)
        res.json(jsonResponse(result))
    } catch (err) {
        res.status(404).json(jsonResponse(result))
    }
});

module.exports = router