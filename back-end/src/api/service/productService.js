const ProductModel = require('../Model/productModel')

const getProducts = async () => {
    const products = await ProductModel.getProducts();
    return products;
}

module.exports = {
    getProducts
}