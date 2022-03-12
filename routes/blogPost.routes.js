const express = require('express');
const rescue = require('express-rescue');
const Controller = require('../controllers/BlogPost.controller');
const Schemas = require('../schemas');

const router = express.Router();

router.get('/', rescue(Controller.findAll));
router.post('/', Schemas.joiCreatePost, rescue(Controller.createPost));

module.exports = router;