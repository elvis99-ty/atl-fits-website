import './Navbar.css'
import { FaCalendarAlt } from "react-icons/fa"
import logo from '../assets/Face.png'
import { useState } from 'react'
import BookingModal from './BookingModal' // 🔥 import modal

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        
        {/* LEFT */}
        <div className="nav-left">
          <img src={logo} alt="ATL Fits Logo" className="logo" />
        </div>

        {/* LINKS */}
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#collections">COLLECTIONS</a>
          <a href="#gallery">GALLERY</a>
          <a href="#contact">CONTACT</a>
        </div>

        {/* BUTTON */}
        <div className="nav-right">
          <button className="book-btn" onClick={() => setOpen(true)}>
            <FaCalendarAlt className="icon" />
            Book Appointment
          </button>
        </div>

      </nav>

      {/* 🔥 THIS IS WHAT YOU WERE MISSING */}
      <BookingModal 
        isOpen={open} 
        onClose={() => setOpen(false)} 
      />
    </>
  )
}

export default Navbar