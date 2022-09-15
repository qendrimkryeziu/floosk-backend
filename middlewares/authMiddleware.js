const jwt = require("jsonwebtoken");
const { jsonResponse } = require('../lib/helper')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json(jsonResponse("Auth Failed", false))
  }
};