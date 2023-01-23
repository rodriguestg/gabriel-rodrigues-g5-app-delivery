const { Product, Sale, User, SaleProduct } = require('../../database/models')

const getProducts = async () => {
    const products = await Sale.findAll()
    return products
}

module.exports = {
    getProducts
}
