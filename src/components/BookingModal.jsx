import './BookingModal.css'
import { useState } from 'react'

function BookingModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    date: '',
    reason: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  if (!isOpen) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    // simulate request delay
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
        onClose()
      }, 2500)
    }, 1500)
  }

  return (
    <div className="modal-overlay">
      <div className="modal">

        <button className="close-btn" onClick={onClose}>×</button>

        {/* FORM */}
        {!loading && !success && (
          <>
            <h3>Book Appointment</h3>

            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name"
                onChange={handleChange}
                required
              />

              <input 
                type="date" 
                name="date"
                onChange={handleChange}
                required
              />

              <select 
                name="reason" 
                onChange={handleChange} 
                required
              >
                <option value="">Select Reason</option>
                <option>FITTING</option>
                <option>MEASUREMENT</option>
                <option>CONSULTATION</option>
              </select>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </>
        )}

        {/* LOADER */}
        {loading && (
          <div className="loader-box">
            <div className="loader"></div>
            <p>Booking your appointment...</p>
          </div>
        )}

        {/* SUCCESS */}
        {success && (
          <div className="success-message">
            <h3>Booking Confirmed</h3>
            <p>We’ll get in touch with you shortly.</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default BookingModal