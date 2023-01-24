const express = require('express');
const cors = require('cors');
const route = require('../api/routes/index');

const app = express();
app.use(express.json());
app.use(cors());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', route.loginRouter);

module.exports = app;
