const express = require('express');
const rescue = require('express-rescue');
const Controller = require('../controllers/BlogPost.controller');
const Schemas = require('../schemas');
const Middleware = require('../middleware');

const router = express.Router();

router.get('/:id', rescue(Controller.findOne));
router.get('/', rescue(Controller.findAll));
router.put('/:id', Middleware.authUser, Schemas.joiUpdatePost, rescue(Controller.updatePost));
router.post('/', Schemas.joiCreatePost, rescue(Controller.createPost));

module.exports = router;