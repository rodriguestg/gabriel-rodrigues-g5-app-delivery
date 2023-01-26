const express = require('express');

const router = express.Router();

const RegisterController = require('../controller/registerController');

router.post('/', RegisterController.registerUserController);

module.exports = router;