const express = require('express');
const rescue = require('express-rescue');
const Controller = require('../controllers/User.controller');
const Middleware = require('../middleware');
const Schemas = require('../schemas');

const router = express.Router();

router.get('/', rescue(Controller.findAll));
router.post('/', Schemas.joiCreate, Middleware.validateEmail, Controller.createUser);

module.exports = router;
