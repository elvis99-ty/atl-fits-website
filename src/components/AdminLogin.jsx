import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './AdminLogin.css'

const AdminLogin = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

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

      const response = await axios.post(
        'http://localhost:5000/api/admin/login',
        formData
      )

      localStorage.setItem(
        'adminToken',
        response.data.token
      )

      navigate('/admin-dashboard')

    } catch (error) {

      alert(
        error.response?.data?.message ||
        'Login failed'
      )

    } finally {

      setLoading(false)

    }
  }

  return (

    <div className="admin-login">

      <div className="admin-login-card">

        <h1>Admin Login</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">

            {loading ? 'Logging in...' : 'Login'}

          </button>

        </form>

      </div>

    </div>
  )
}

export default AdminLogin