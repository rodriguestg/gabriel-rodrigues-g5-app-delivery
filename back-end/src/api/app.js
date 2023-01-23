const express = require('express');
const productRouter = require('./routes/productRouter')

const app = express();

app.use(productRouter)

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
