const express = require('express')
const { getProducts } = require('../Controller/productController')

const router  = express.Router()

router.get('/products', getProducts)

module.exports = router;