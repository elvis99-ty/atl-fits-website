import './Gallery.css'
import img1 from '../assets/img27.jpeg'
import img2 from '../assets/img29.jpeg'
import img3 from '../assets/img19.jpeg'
import img4 from '../assets/img2.jpeg'
import img5 from '../assets/img6.jpeg'

function Gallery() {
  return (
    <section className="gallery" id='gallery'>

      <p className="small-title">OUR GALLERY</p>
      <h2>Crafted with Style & Precision</h2>

      <div className="gallery-grid">

        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />

      </div>

    </section>
  )
}

export default Gallery