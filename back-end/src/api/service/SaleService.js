const { Sale, Product } = require('../../database/models');

const findSellerSales = async (sellerId) => {
  const sales = await Sale.findAll({ where: { sellerId } });

  return sales;
};

const findSaleProducts = async (saleId) => {
  const sales = await Sale.findOne({
     where: { id: saleId },
    include: [{
      model: Product,
      as: 'products',
    }] });

    return sales;
};

module.exports = { findSellerSales, findSaleProducts };