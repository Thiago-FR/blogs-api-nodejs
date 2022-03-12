const express = require('express');
const Controller = require('../controllers/User.controller');
const Middleware = require('../middleware');
const Schemas = require('../schemas');

const router = express.Router();

router.get('/', Controller.findAll);
router.post('/', Schemas.joiCreate, Middleware.validateEmail, Controller.createUser);

module.exports = router;
