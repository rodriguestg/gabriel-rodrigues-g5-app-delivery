const { getUserId } = require('./userModel');
const { Sale } = require('../../database/models');

const getCustomerSales = async (email) => {
    const id = await getUserId(email);
    const sales = await Sale.findAll({
        where: {
            userId: id,
        },
    });
    return sales;
};

module.exports = {
    getCustomerSales,
};