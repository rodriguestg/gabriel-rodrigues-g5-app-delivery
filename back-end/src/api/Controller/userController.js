const { getAllSellers } = require('../Service/userService');

const getSellers = async (request, response) => {
  const sellers = await getAllSellers();
  response.status(200).json(sellers);
};

module.exports = {
  getSellers,
};