const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')
const cartController = require('../controllers/cartController')

// module.exports = app => {
router.get('/', (req, res) => {
  return res.redirect('/products')
})
router.get('/products', productController.getProducts)
router.get('/cart', cartController.getCart)
router.post('/cart', cartController.postCart)
// }

module.exports = router
