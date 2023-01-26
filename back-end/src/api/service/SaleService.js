const { Sale, Product, User } = require('../../database/models');
const saleModel = require('../Model/saleModel')

const findSellerSales = async (sellerId) => {
  const sales = await Sale.findAll({ where: { sellerId } });

  return sales;
};

const getCustomerSales = async (email) => {
  const sales = await saleModel.getCustomerSales(email);
  return sales;
}

const findSaleProducts = async (saleId) => {
  const sales = await Sale.findOne({
     where: { id: saleId },
    include: [
      {
      model: Product,
      as: 'products',
    }, {
      model: User,
      as: 'users',
    }] });

    return sales;
};

module.exports = { findSellerSales, findSaleProducts, getCustomerSales };
