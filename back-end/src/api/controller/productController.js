const productService = require('../service/productService');

const getProducts = async (_request, response) =>  {
    const products = await productService.getProducts();
    response.status(200).json(products)
}

module.exports = {
    getProducts
}