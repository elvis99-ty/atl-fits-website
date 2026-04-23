import './Contact.css'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Contact() {
  return (
    <footer className="footer" id='contact'>

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h2 className="logo">ATL FITS</h2>

          <p className="footer-text">
            Elegance is not about being noticed,  
            it’s about being remembered.
          </p>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Collections</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>📞 +234 800 123 4567</p>
          <p>✉️ info@atlfits.com</p>
          <p>📍 Lagos, Nigeria</p>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col">
          <h4>Newsletter</h4>

          <p>Subscribe to get updates on our latest collections.</p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>➤</button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 ATL FITS. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Contact