import './About.css'
import aboutImg from '../assets/about.jpeg'

function About() {
  return (
    <section className="about" id='about'>

      {/* IMAGE */}
      <div className="about-image">
        <img src={aboutImg} alt="ATL Fits Tailoring Studio" />
      </div>

      {/* CONTENT */}
      <div className="about-content">
        <p className="small-title">ABOUT US</p>

        <h2>Passion. Style. Perfection.</h2>

        <p className="about-text">
          At ATL FITS, we believe fashion is more than clothing — it is a statement of who you are. 
          We are passionate about creating timeless pieces that blend creativity, luxury, and craftsmanship.
        </p>

        <p className="about-text">
          Every stitch we make is a step towards perfection, ensuring each design reflects elegance, 
          confidence, and individuality.
        </p>

        {/* STATS */}
        <div className="about-stats">
          <div className="stat">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="stat">
            <h3>100%</h3>
            <p>Quality Assurance</p>
          </div>
        </div>

        <button className="about-btn">Learn More →</button>

        <p className="signature">ATL FITS ✨</p>
      </div>

    </section>
  )
}

export default About