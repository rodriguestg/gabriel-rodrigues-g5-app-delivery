const { getSellers, getAll } = require('../Model/userModel');

const getAllSellers = async () => {
  const sellers = await getSellers();
  return sellers;
};

const getAllUsers = async () => {
  const users = await getAll();
  return users;
};

module.exports = {
  getAllSellers,
  getAllUsers,
};
