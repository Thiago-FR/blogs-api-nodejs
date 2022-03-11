const express = require('express');
const Controller = require('../controllers/User.controller');

const router = express.Router();

router.get('/', Controller.findAll);

module.exports = router;
