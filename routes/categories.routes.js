const express = require('express');
const rescue = require('express-rescue');
const Controller = require('../controllers/Categorie.controller');
const Schemas = require('../schemas');

const router = express.Router();

router.get('/', rescue(Controller.findAll));
router.post('/', Schemas.joiCreateCategories, rescue(Controller.createCategorie));

module.exports = router;