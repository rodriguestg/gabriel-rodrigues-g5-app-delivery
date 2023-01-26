const express = require('express');
const path = require('path');
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const route = require('./routes/index');
const productRouter = require('./routes/productRouter');

const app = express();

app.use(cors());

app.use('/images', express.static(path.resolve(__dirname, 'images')));

app.use(productRouter);

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(userRouter);

app.use('/login', route.loginRouter);

app.use('/register', route.registerRouter);

module.exports = app;
