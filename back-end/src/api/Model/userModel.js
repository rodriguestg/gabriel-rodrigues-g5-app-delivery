const { User } = require('../../database/models');

const getSellers = async () => {
  const sellers = await User.findAll({
    where: {
      role: 'seller',
    },
  });

  return sellers;
};

const getUserId = async (email) => {
  const { id } = await User.findOne({
    where: {
      email,
    },
  });

  return id;
};

const getAll = async () => {
  const users = await User.findAll({});
  return users
}

module.exports = {
  getSellers,
  getUserId,
  getAll,
};