const express = require('express');
const router = require('../routes/index.routes');
const Middleware = require('../middleware');
const Schemas = require('../schemas');

const app = express();

app.use(express.json());

app.use('/login', Schemas.joiLogin, router.loginRoutes);
app.use('/user', router.userRoutes);
app.use('/categories', router.categoriesRoutes);
app.use('/post', router.blogPostRoutes);

app.use(Middleware.erreMiddleware);

module.exports = app;
