const express = require('express');

const LoginController = require('./controller/login.controller');

const app = express();
app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', (req, res) => LoginController.postLogin(req, res));

module.exports = app;
