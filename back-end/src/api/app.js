const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const LoginController = require('./controller/login.controller');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(userRouter);

app.use('/login', (req, res) => LoginController.postLogin(req, res));

module.exports = app;
