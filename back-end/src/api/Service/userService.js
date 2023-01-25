const { getSellers } = require('../Model/userModel');

const getAllSellers = async () => {
  const sellers = await getSellers();
  return sellers;
};

module.exports = {
  getAllSellers,
};