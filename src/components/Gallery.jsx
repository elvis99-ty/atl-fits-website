import './Gallery.css'
import { useState } from 'react'

import img1 from '../assets/img27.jpeg'
import img2 from '../assets/img29.jpeg'
import img3 from '../assets/img19.jpeg'
import img4 from '../assets/img2.jpeg'
import img5 from '../assets/img6.jpeg'
import img7 from '../assets/img7.jpeg'
import img8 from '../assets/img8.jpeg'
import img20 from '../assets/img20.jpeg'
import img22 from '../assets/img22.jpeg'
import img24 from '../assets/img24.jpeg'
import img28 from '../assets/img28.jpeg'
import img34 from '../assets/img34.jpeg'
import img35 from '../assets/img35.jpeg'
import img9 from '../assets/img9.jpeg'
import img10 from '../assets/img10.jpeg'
import img37 from '../assets/img37.jpeg'
import img38 from '../assets/img38.jpeg'
import img39 from '../assets/img39.jpeg'
import img40 from '../assets/img40.jpeg'
import img41 from '../assets/img41.jpeg'

const allImages = [
  img1, img2, img3, img4, img37,
  img20, img8, img38, img22, img24,
  img28, img34, img35, img9, img10,
  img5, img39, img7, img40, img41,
]

function Gallery() {

  const [visibleCount, setVisibleCount] = useState(5)

  const [selectedImage, setSelectedImage] = useState(null)

  const loadMore = () => {
    setVisibleCount(prev => prev + 5)
  }

  return (
    <section className="gallery" id="gallery">

      <p className="small-title">OUR GALLERY</p>
      <h2>Crafted with Style & Precision</h2>

      <div className="gallery-grid">

        {allImages.slice(0, visibleCount).map((img, index) => {

          const isNew = index >= visibleCount - 5

          return (
            <div
              className={`gallery-item ${isNew ? 'flip-in' : ''}`}
              key={index}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt="Gallery" />
            </div>
          )
        })}

      </div>

      {visibleCount < allImages.length && (
        <button className="view-btn" onClick={loadMore}>
          View More →
        </button>
      )}

      {/* LIGHTBOX */}
      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <span className="close-lightbox">×</span>

          <img
            src={selectedImage}
            alt="Expanded"
            className="lightbox-img"
          />

        </div>

      )}

    </section>
  )
}

export default Gallery