const SaleService = require('../service/SaleService');

const getSellerOrders = async (req, res) => {
  const sales = await SaleService.findSellerSales(req.headers.authorization);

  res.status(200).json(sales);
};

const getCustomerOrders = async (req, res) => {
  const { email } = req.params;
  if (!email || email === 'undefined') {
    return res.status(400).json({ message: 'Email not sent' });
  }
  
  const response = await SaleService.getCustomerSales(email);
  res.status(200).json(response);
}; 

const getSaleProducts = async (req, res) => {
  const sale = await SaleService.findSaleProducts(req.params.saleId);

  res.status(200).json(sale);
};

const postSale = async (req, res) => {
  const id = await SaleService.createSale(req.body);

  res.status(201).json({ id });
};

module.exports = { getSellerOrders, getSaleProducts, postSale, getCustomerOrders };
