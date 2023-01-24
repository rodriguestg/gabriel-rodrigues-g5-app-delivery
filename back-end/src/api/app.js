const express = require('express');
const productRouter = require('./routes/productRouter')
const cors = require('cors');

const LoginController = require('./controller/login.controller');


const app = express();

app.use(cors());

app.use(productRouter)

app.use(express.json());


app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', (req, res) => LoginController.postLogin(req, res));


module.exports = app;
