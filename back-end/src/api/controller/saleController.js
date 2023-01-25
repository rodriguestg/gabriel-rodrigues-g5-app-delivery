const SaleService = require('../service/SaleService');

const getSellerOrders = async (req, res) => {
  const sales = await SaleService.findSellerSales(req.params.sellerId);

  res.status(200).json(sales);
};

const getSaleProducts = async (req, res) => {
  const sale = await SaleService.findSaleProducts(req.params.saleId);

  res.status(200).json(sale);
};

module.exports = { getSellerOrders, getSaleProducts };