const { getAllSellers, getAllUsers } = require('../Service/userService');

const getSellers = async (request, response) => {
  const sellers = await getAllSellers();
  response.status(200).json(sellers);
};

const getAll = async (_request, response) => {
  const users = await getAllUsers();
  response.status(200).json(users);
};

module.exports = {
  getSellers,
  getAll,
};