const express = require('express');

const router = express.Router();
const LoginController = require('../controller/login.controller');

router.post('/', LoginController.postLogin);
router.post('/token', LoginController.validateToken);

module.exports = router;