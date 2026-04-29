import './Founder.css'
import founderImg from '../assets/Her004.jpeg'

function Founder() {
  return (
    <section className="founder" id='ceo'>

      <div className="founder-container">

        {/* IMAGE */}
        <div className="founder-image">
          <img src={founderImg} alt="Founder" />
        </div>

        {/* CONTENT */}
        <div className="founder-content">
          <p className="small-title">THE FACE BEHIND THE BRAND</p>

          <h2>
            Passion. Vision. <span>Elegance.</span>
          </h2>

          <p className="founder-text">
            Meet the creative force behind ATL FITS. With a deep passion for fashion 
            and an eye for detail, she transforms ideas into timeless pieces that reflect 
            elegance, confidence, and individuality.
          </p>

          <p className="founder-text">
            Her vision is rooted in excellence — creating designs that not only fit perfectly, 
            but leave a lasting impression.
          </p>

          <h4 className="signature">— OLUWATOYIN EMMANUEL</h4>
        </div>

      </div>

    </section>
  )
}

export default Founder