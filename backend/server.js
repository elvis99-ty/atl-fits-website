const express = require('express')
const cors = require('cors')
require('dotenv').config()

const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const adminRoutes = require('./routes/adminRoutes')

const app = express()

// CONNECT DATABASE
connectDB()

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// ROUTES
app.use('/api/products', productRoutes)
app.use('/api/admin', adminRoutes)

// TEST ROUTE
app.get('/', (req, res) => {
  res.send('ATL FITS API running...')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})