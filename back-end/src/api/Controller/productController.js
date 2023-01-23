const productService = require('../Service/productService');

const getProducts = async (request, response) =>  {
    const products = await productService.getProducts();
    response.status(200).json(products)
}

module.exports = {
    getProducts
}