var express = require('express');
const UserController = require('../controllers/UserController');
var router = express.Router();
const {jsonResponse} = require('../lib/helper');
const authMiddleware = require('../middlewares/authMiddleware');
const { name, version} = require('../package.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = {
    name,
    version,
  }
  res.json(jsonResponse(data))
});

router.post('/register', async (req, res) => {
  try {
    const result = await UserController.add(req.body)
    res.json(jsonResponse(result))
  } catch (err) {
    res.status(400).json(jsonResponse(err.message, false))
  }
})

router.post('/login', async (req, res) => {
  try {
    const result = await UserController.login(req.body)
    res.json(jsonResponse(result))
  } catch (err) {
    res.status(400).json(jsonResponse(err.message, false))
  }
})

router.get('/:userId', authMiddleware, async (req, res) => {
  try {
    const {userId} = req.params
    const result = await UserController.getOneUser(userId)
    res.json(jsonResponse(result))
  } catch (err) {
    res.status(400).json(jsonResponse(err.message, false))
  } 
})

module.exports = router;
