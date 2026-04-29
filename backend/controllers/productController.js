const Product = require('../models/Product')


// CREATE PRODUCT
const createProduct = async (req, res) => {

  try {

    const {
      name,
      price,
      size,
      color,
      fabric,
      description
    } = req.body

    const product = await Product.create({

      name,
      price,
      size,
      color,
      fabric,
      description,

      image: req.file.path,

      status: 'draft'

    })

    res.status(201).json(product)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}


// GET PUBLIC PRODUCTS
const getProducts = async (req, res) => {

  try {

    const products = await Product.find({
      status: 'published'
    })

    res.status(200).json(products)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}


// GET ALL PRODUCTS FOR ADMIN
const getAllProductsAdmin = async (req, res) => {

  try {

    const products = await Product.find()

    res.status(200).json(products)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}


// PUBLISH PRODUCT
const publishProduct = async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    )

    if (!product) {

      return res.status(404).json({
        message: 'Product not found'
      })

    }

    product.status = 'published'

    await product.save()

    res.status(200).json({
      message: 'Product published successfully'
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}


// TOGGLE AVAILABILITY
const toggleAvailability = async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    )

    if (!product) {

      return res.status(404).json({
        message: 'Product not found'
      })

    }

    product.available = !product.available

    await product.save()

    res.status(200).json({
      message: 'Availability updated',
      product
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}


// DELETE PRODUCT
const deleteProduct = async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    )

    if (!product) {

      return res.status(404).json({
        message: 'Product not found'
      })

    }

    await product.deleteOne()

    res.status(200).json({
      message: 'Product deleted successfully'
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}

module.exports = {
  createProduct,
  getProducts,
  getAllProductsAdmin,
  publishProduct,
  toggleAvailability,
  deleteProduct
}