import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AdminDashboard.css'

const AdminDashboard = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    size: '',
    color: '',
    fabric: '',
    description: ''
  })

  const [image, setImage] = useState(null)

  const [loading, setLoading] = useState(false)

  const [products, setProducts] = useState([])


  // FETCH PRODUCTS
  const fetchProducts = async () => {

    try {

      const token = localStorage.getItem(
        'adminToken'
      )

      const response = await axios.get(
        'https://atl-fits-website-backend.onrender.com/api/products/admin/all',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setProducts(response.data)

    } catch (error) {

      console.log(error)

    }

  }


  // PUBLISH PRODUCT
  const publishProduct = async (id) => {

    try {

      const token = localStorage.getItem(
        'adminToken'
      )

      await axios.patch(
      `https://atl-fits-website-backend.onrender.com/api/products/availability/${id}`,
      {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      fetchProducts()

    } catch (error) {

      alert('Failed to publish')

    }

  }


  // TOGGLE AVAILABILITY
  const toggleAvailability = async (id) => {

    try {

      const token = localStorage.getItem(
        'adminToken'
      )

      await axios.patch(
        `https://atl-fits-website-backend.onrender.com/api/products/availability/${id}`
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      fetchProducts()

    } catch (error) {

      alert('Failed to update')

    }

  }


  // DELETE PRODUCT
  const deleteProduct = async (id) => {

    const confirmDelete = window.confirm(
      'Delete this product?'
    )

    if (!confirmDelete) return

    try {

      const token = localStorage.getItem(
        'adminToken'
      )

      await axios.delete(
        `https://atl-fits-website-backend.onrender.com/api/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      fetchProducts()

    } catch (error) {

      alert('Delete failed')

    }

  }


  // LOGOUT
  const logout = () => {

    localStorage.removeItem(
      'adminToken'
    )

    navigate('/admin-login')

  }


  // AUTH CHECK
  useEffect(() => {

    const token = localStorage.getItem(
      'adminToken'
    )

    if (!token) {

      navigate('/admin-login')

    } else {

      fetchProducts()

    }

  }, [])


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }


  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const token = localStorage.getItem(
        'adminToken'
      )

      const data = new FormData()

      data.append('name', formData.name)
      data.append('price', formData.price)
      data.append('size', formData.size)
      data.append('color', formData.color)
      data.append('fabric', formData.fabric)
      data.append('description', formData.description)
      data.append('image', image)

      await axios.post(
      'https://atl-fits-website-backend.onrender.com/api/products',
      data,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      alert('Product Uploaded Successfully')

      setFormData({
        name: '',
        price: '',
        size: '',
        color: '',
        fabric: '',
        description: ''
      })

      setImage(null)

      fetchProducts()

    } catch (error) {

      alert(
        error.response?.data?.message ||
        'Upload failed'
      )

    } finally {

      setLoading(false)

    }

  }


  return (

    <div className="admin-dashboard">

      {/* LEFT SIDE */}
      <div className="dashboard-left">

        <div className="dashboard-brand">

          <h1>ATL FITS</h1>

          <p>
            Luxury Ready-to-Wear Management
          </p>

        </div>


        <div className="dashboard-card">

          <div className="card-header">

            <h2>Upload Product</h2>

            <span>
              Fashion Inventory
            </span>

          </div>


          <form
            className="upload-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              required
            />


            <div className="form-row">

              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="size"
                placeholder="Size"
                value={formData.size}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-row">

              <input
                type="text"
                name="color"
                placeholder="Color"
                value={formData.color}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="fabric"
                placeholder="Fabric"
                value={formData.fabric}
                onChange={handleChange}
                required
              />

            </div>


            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />


            <div className="file-upload">

              <label>
                Upload Product Image
              </label>

              <input
                type="file"
                onChange={(e) =>
                  setImage(e.target.files[0])
                }
                required
              />

            </div>


            <button type="submit">

              {
                loading
                  ? 'Uploading...'
                  : 'Upload Product'
              }

            </button>

          </form>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="dashboard-right">

        <div className="products-header">

          <h2>Uploaded Products</h2>

          <p>
            Manage your boutique collection
          </p>

        </div>


        <div className="products-grid">

          {
            products.map((product) => (

              <div
                className="product-card"
                key={product._id}
              >

                <div className="image-wrapper">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <div className="product-overlay">

                    <span>

                      {
                        product.status === 'published'
                          ? 'LIVE'
                          : 'DRAFT'
                      }

                    </span>

                  </div>

                </div>


                <div className="product-info">

                  <h3>{product.name}</h3>

                  <p className="price">
                    ₦{product.price}
                  </p>

                  <div className="tags">

                    <span>{product.size}</span>

                    <span>{product.color}</span>

                  </div>


                  <div className="product-actions">

                    <button
                      className="publish-btn"
                      onClick={() =>
                        publishProduct(product._id)
                      }
                    >

                      {
                        product.status === 'published'
                          ? 'Published'
                          : 'Publish'
                      }

                    </button>


                    <button
                      className={
                        product.available
                          ? 'sold-btn'
                          : 'available-btn'
                      }
                      onClick={() =>
                        toggleAvailability(product._id)
                      }
                    >

                      {
                        product.available
                          ? 'Mark Sold Out'
                          : 'Make Available'
                      }

                    </button>


                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteProduct(product._id)
                      }
                    >

                      Delete

                    </button>

                  </div>

                </div>

              </div>

            ))
          }

        </div>


        {/* LOGOUT */}
        <div className="bottom-logout">

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard