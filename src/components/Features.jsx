import './Features.css'
import { FaTshirt, FaCut, FaRulerCombined, FaCrown } from "react-icons/fa";

function Features() {
  return (
    <section className="features">

      <div className="feature">
        <FaTshirt className="icon" />
        <h4>Bespoke Designs</h4>
        <p>Custom outfits tailored exclusively for you.</p>
      </div>

      <div className="feature">
        <FaCut className="icon" />
        <h4>Expert Tailoring</h4>
        <p>Precision stitching with finest attention to detail.</p>
      </div>

      <div className="feature">
        <FaRulerCombined className="icon" />
        <h4>Quality Fabrics</h4>
        <p>We use premium fabrics for luxury and comfort.</p>
      </div>

      <div className="feature">
        <FaCrown className="icon" />
        <h4>Perfect Fit</h4>
        <p>Designed to fit you perfectly, always.</p>
      </div>

    </section>
  )
}

export default Features