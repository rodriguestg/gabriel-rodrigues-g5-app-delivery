const express = require('express');
const { getSellers, getAll } = require('../Controller/userController');

const router = express.Router();

router.get('/users/sellers', getSellers);

router.get('/users', getAll);

module.exports = router;