const express = require('express');
const SaleController = require('../controller/saleController');

const router = express.Router();

router.get('/:sellerId', SaleController.getSellerOrders);

module.exports = router;