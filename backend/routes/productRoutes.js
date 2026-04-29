const express = require('express')

const router = express.Router()

const upload = require('../config/multer')

const protect = require('../middleware/authMiddleware')

const {
  createProduct,
  getProducts,
  getAllProductsAdmin,
  publishProduct,
  toggleAvailability,
  deleteProduct
} = require('../controllers/productController')


// PUBLIC PRODUCTS
router.get(
  '/',
  getProducts
)


// ADMIN PRODUCTS
router.get(
  '/admin/all',
  protect,
  getAllProductsAdmin
)


// CREATE PRODUCT
router.post(
  '/',
  protect,
  upload.single('image'),
  createProduct
)


// PUBLISH PRODUCT
router.patch(
  '/publish/:id',
  protect,
  publishProduct
)


// TOGGLE AVAILABILITY
router.patch(
  '/availability/:id',
  protect,
  toggleAvailability
)


// DELETE PRODUCT
router.delete(
  '/:id',
  protect,
  deleteProduct
)

module.exports = router