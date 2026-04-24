import './Contact.css'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Contact() {

  const whatsappNumber = "2348134263249"

  const message = "Hello ATL FITS, I would like to make an enquiry about your designs."

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h2 className="logo">ATL FITS</h2>

          <p className="footer-text">
            Elegance is not about being noticed,  
            it’s about being remembered.
          </p>

          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>Home</li>
            <li onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About Us</li>
            <li onClick={() => document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" })}>Collections</li>
            <li onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>Gallery</li>
            <li onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>📞 +234 813 426 3249</p>
          <p>✉️ info@atlfits.com</p>
          <p>📍 Lagos, Nigeria</p>

          <a href={whatsappLink} target="_blank" rel="noreferrer" className="whatsapp-btn">
            Chat on WhatsApp →
          </a>
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

      <div className="footer-bottom">
        © 2026 ATL FITS. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Contact