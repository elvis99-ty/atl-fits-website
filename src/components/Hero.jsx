import './Hero.css'
import heroImg from '../assets/img3.jpeg' 

function Hero() {
  return (
    <section className="hero" id="home">
      
      {/* Background Image */}
      <img src={heroImg} alt="Fashion" className="hero-img" />

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <p className="tag">ELEGANCE. STYLE. YOU.</p>

        <h1>
          Stitched to <br />
          <span>Perfection</span>
        </h1>

        <p className="desc">
          We create custom designs that reflect your unique style and bring out the best in you.
        </p>
      </div>

    </section>
  )
}

export default Hero