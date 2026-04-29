const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(

  {

    name: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    size: {
      type: String,
      required: true
    },

    color: {
      type: String,
      required: true
    },

    fabric: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    },

    available: {
      type: Boolean,
      default: true
    },

    // NEW FIELD
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft'
    }

  },

  {
    timestamps: true
  }

)

module.exports = mongoose.model(
  'Product',
  productSchema
)