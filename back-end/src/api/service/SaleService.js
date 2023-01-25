const { Sale } = require('../../database/models');

const findSellerSales = async (sellerId) => {
  console.log(sellerId);

  const sales = await Sale.findAll({ where: { sellerId } });

  return sales;
};

module.exports = { findSellerSales };