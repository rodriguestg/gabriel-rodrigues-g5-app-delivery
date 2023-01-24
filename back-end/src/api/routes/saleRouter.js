const express = require('express');
const SaleController = require('../controller/saleController');

const router = express.Router();

router.get('/:sellerId', SaleController.getSellerOrders);
router.get('/details/:saleId', SaleController.getSaleProducts);

module.exports = router;