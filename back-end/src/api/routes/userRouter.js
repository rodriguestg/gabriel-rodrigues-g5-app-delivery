const express = require('express');
const { getSellers } = require('../Controller/userController');

const router = express.Router();

router.get('/users/sellers', getSellers);

module.exports = router;