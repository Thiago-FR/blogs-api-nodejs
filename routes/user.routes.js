const express = require('express');
const rescue = require('express-rescue');
const Controller = require('../controllers/User.controller');
const Middleware = require('../middleware');
const Schemas = require('../schemas');

const router = express.Router();

router.post('/', Schemas.joiCreate, Middleware.validateEmail, rescue(Controller.createUser));

router.use(Middleware.auth);

router.get('/:id', rescue(Controller.findByPk));
router.get('/', rescue(Controller.findAll));

module.exports = router;
