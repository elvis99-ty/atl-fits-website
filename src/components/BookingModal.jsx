import './BookingModal.css'
import { useState } from 'react'

function BookingModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    date: '',
    reason: ''
  })

  if (!isOpen) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Appointment booked successfully!")
    onClose()
  }

  return (
    <div className="modal-overlay">

      <div className="modal">

        {/* CLOSE */}
        <button className="close-btn" onClick={onClose}>×</button>

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

          <select name="reason" onChange={handleChange} required>
            <option value="">Select Reason</option>
            <option>Fitting</option>
            <option>Measurement</option>
            <option>Consultation</option>
          </select>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

      </div>

    </div>
  )
}

export default BookingModal