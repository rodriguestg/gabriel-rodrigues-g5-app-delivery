const express = require('express');

const router = express.Router();
const registerController = require('../controller/registerAdm.controller');

router.post('/', registerController.newRegister);

module.exports = router;
