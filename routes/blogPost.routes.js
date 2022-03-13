const express = require('express');
const rescue = require('express-rescue');
const Controller = require('../controllers/BlogPost.controller');
const Schemas = require('../schemas');
const Middleware = require('../middleware');

const router = express.Router();

router.get('/search', rescue(Controller.getSearch));
router.get('/:id', rescue(Controller.findOne));
router.get('/', rescue(Controller.findAll));
router.post('/', Schemas.joiCreatePost, rescue(Controller.createPost));
router
  .put('/:id', Middleware.validatePostUser, Schemas.joiUpdatePost, rescue(Controller.updatePost));
router.delete('/:id', Middleware.validatePostUser, rescue(Controller.deletePost));

module.exports = router;