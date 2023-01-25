const express = require('express');

const router = express.Router();
const LoginController = require('../controller/loginController');

router.post('/', LoginController.postLogin);

module.exports = router;