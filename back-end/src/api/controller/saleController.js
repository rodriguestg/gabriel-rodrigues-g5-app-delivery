const { getUserId } = require('../Model/userModel');
const SaleService = require('../service/SaleService');

const getSellerOrders = async (req, res) => {
  const sales = await SaleService.findSellerSales(req.params.sellerId);

  res.status(200).json(sales);
};

const getCustomerOrders = async (req, res) => {
  const { email } = req.params
  if (!email || email === 'undefined') {
    return res.status(400).json({ message: 'Email not sent'} )
  }
  
  const response = await SaleService.getCustomerSales(email)
  res.status(200).json(response);
} 

const getSaleProducts = async (req, res) => {
  const sale = await SaleService.findSaleProducts(req.params.saleId);

  res.status(200).json(sale);
};

module.exports = { getSellerOrders, getSaleProducts, getCustomerOrders };