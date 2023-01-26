const express = require('express');
const SaleController = require('../controller/saleController');

const router = express.Router();

router.get('/details/:saleId', SaleController.getSaleProducts);
router.get('/', SaleController.getSellerOrders);
router.post('/', SaleController.postSale);

module.exports = router;